import { AnnotationState, MarkerArea, Renderer } from "@markerjs/markerjs3";
import styles from "./lib.css?inline";
import { EditorToolbar } from "./EditorToolbar";
import { EditorToolbox } from "./EditorToolbox";

export interface AnnotationEditorEventMap {
  editorclose: CustomEvent<AnnotationEditorEventData>;
  editorsave: CustomEvent<AnnotationEditorRenderEventData>;
}

export interface AnnotationEditorEventData {
  annotationEditor: AnnotationEditor;
}

export interface AnnotationEditorRenderEventData
  extends AnnotationEditorEventData {
  state: AnnotationState;
  dataUrl?: string;
}

export class AnnotationEditor extends HTMLElement {
  private _mainContainer?: HTMLDivElement;
  private _toolbarContainer?: HTMLDivElement;
  private _toolboxContainer?: HTMLDivElement;
  private _markerAreaContainer?: HTMLDivElement;

  private _markerArea?: MarkerArea;
  public get markerArea() {
    return this._markerArea;
  }

  private _toolbar?: EditorToolbar;
  private _toolbox?: EditorToolbox;

  public targetImage?: HTMLImageElement;

  private _theme: "light" | "dark" = "light";
  public get theme() {
    return this._theme;
  }
  public set theme(value: "light" | "dark") {
    this._theme = value;
    if (this._mainContainer) {
      this._mainContainer.setAttribute("data-theme", value);
    }
  }

  constructor() {
    super();

    this.addStyles = this.addStyles.bind(this);
    this.createLayout = this.createLayout.bind(this);
    this.addMarkerArea = this.addMarkerArea.bind(this);
    this.addToolbar = this.addToolbar.bind(this);
    this.addToolbox = this.addToolbox.bind(this);
    this.attachEvents = this.attachEvents.bind(this);
    this.restoreState = this.restoreState.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);

    this.closeOpenDropdowns = this.closeOpenDropdowns.bind(this);

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.addStyles();
    this.createLayout();
    this.addMarkerArea();
    this.addToolbar();
    this.addToolbox();
    this.attachEvents();
  }

  disconnectedCallback() {}

  private addStyles() {
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadowRoot?.appendChild(style);
  }

  private createLayout() {
    this._mainContainer = document.createElement("div");
    this._mainContainer.id = "mainContainer";
    this._mainContainer.setAttribute("data-theme", this._theme);
    this._mainContainer.className =
      "grid grid-rows-[auto_1fr_auto] w-full h-full bg-base-200 overflow-hidden rounded-md";

    this._toolbarContainer = document.createElement("div");
    this._toolbarContainer.id = "toolbarContainer";
    this._toolbarContainer.className = "bg-base-100";

    this._mainContainer.appendChild(this._toolbarContainer);

    this._markerAreaContainer = document.createElement("div");
    this._markerAreaContainer.id = "markerAreaContainer";
    this._markerAreaContainer.className = "flex overflow-hidden bg-base-200";

    this._mainContainer.appendChild(this._markerAreaContainer);

    this._toolboxContainer = document.createElement("div");
    this._toolboxContainer.id = "toolboxContainer";
    this._toolboxContainer.className = "bg-base-100";

    this._mainContainer.appendChild(this._toolboxContainer);

    this.shadowRoot?.appendChild(this._mainContainer);
  }

  private addMarkerArea() {
    if (
      this.targetImage &&
      this._markerAreaContainer &&
      this._markerArea === undefined
    ) {
      this._markerArea = new MarkerArea();
      this._markerArea.targetImage = this.targetImage;
      this._markerAreaContainer.appendChild(this._markerArea);
    }
  }

  private addToolbar() {
    if (
      this._toolbar === undefined &&
      this._toolbarContainer &&
      this._markerArea
    ) {
      this._toolbar = new EditorToolbar(this._markerArea);
      this._toolbar.onSaveButtonClick = this.handleSaveButtonClick;
      this._toolbar.onCloseButtonClick = this.handleCloseButtonClick;
      this._toolbarContainer.appendChild(this._toolbar.getUI());
    }
  }

  private async handleSaveButtonClick() {
    if (this._markerArea) {
      const state = this._markerArea.getState();

      const renderer = new Renderer();
      renderer.targetImage = this.targetImage;
      renderer.naturalSize = true;
      renderer.imageType = "image/png";
      const renderedImage = await renderer.rasterize(state);

      this.dispatchEvent(
        new CustomEvent<AnnotationEditorRenderEventData>("editorsave", {
          detail: { annotationEditor: this, state, dataUrl: renderedImage },
        })
      );
    }
  }

  private handleCloseButtonClick() {
    this.dispatchEvent(
      new CustomEvent<AnnotationEditorEventData>("editorclose", {
        detail: { annotationEditor: this },
      })
    );
  }

  private addToolbox() {
    if (
      this._toolbox === undefined &&
      this._toolboxContainer &&
      this._markerArea
    ) {
      this._toolbox = new EditorToolbox(this._markerArea);
      this._toolboxContainer.appendChild(this._toolbox.getUI());
    }
  }

  private attachEvents() {
    this._mainContainer?.addEventListener("click", (event) => {
      let dropDownTarget: HTMLDetailsElement | null = null;

      if (event.target instanceof Element) {
        dropDownTarget = event.target?.closest(".dropdown");
      }
      if (dropDownTarget instanceof HTMLDetailsElement) {
        this.closeOpenDropdowns(dropDownTarget);
      } else {
        this.closeOpenDropdowns();
      }
    });
  }

  public restoreState(state: AnnotationState) {
    if (this._markerArea) {
      this._markerArea.restoreState(state);
    }
  }

  private closeOpenDropdowns(exception?: HTMLDetailsElement) {
    const openDropdowns =
      this._mainContainer?.querySelectorAll(".dropdown[open]");
    openDropdowns?.forEach((dropdown) => {
      if (dropdown !== exception) {
        dropdown.removeAttribute("open");
      }
    });
  }

  addEventListener<T extends keyof AnnotationEditorEventMap>(
    // the event name, a key of AnnotationEditorEventMap
    type: T,

    // the listener, using a value of AnnotationEditorEventMap
    listener: (this: AnnotationEditor, ev: AnnotationEditorEventMap[T]) => void,

    // any options
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions | undefined
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions | undefined
  ): void {
    super.addEventListener(type, listener, options);
  }

  removeEventListener<T extends keyof AnnotationEditorEventMap>(
    // the event name, a key of AnnotationEditorEventMap
    type: T,

    // the listener, using a value of AnnotationEditorEventMap
    listener: (this: AnnotationEditor, ev: AnnotationEditorEventMap[T]) => void,

    // any options
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | EventListenerOptions | undefined
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions | undefined
  ): void {
    super.removeEventListener(type, listener, options);
  }
}

if (
  window &&
  window.customElements &&
  window.customElements.get("mjsui-annotation-editor") === undefined
) {
  window.customElements.define("mjsui-annotation-editor", AnnotationEditor);
}
