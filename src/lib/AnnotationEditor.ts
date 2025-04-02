import { MarkerArea } from "@markerjs/markerjs3";
import styles from "./lib.css?inline";
import { EditorToolbar } from "./EditorToolbar";

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

  public targetImage?: HTMLImageElement;

  constructor() {
    super();

    this.addStyles = this.addStyles.bind(this);
    this.createLayout = this.createLayout.bind(this);
    this.addMarkerArea = this.addMarkerArea.bind(this);
    this.addToolbar = this.addToolbar.bind(this);

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.addStyles();
    this.createLayout();
    this.addMarkerArea();
    this.addToolbar();
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
    this._mainContainer.className =
      "grid grid-rows-[auto_1fr_auto] w-full h-full";

    this._toolbarContainer = document.createElement("div");
    this._toolbarContainer.id = "toolbarContainer";

    this._mainContainer.appendChild(this._toolbarContainer);

    this._markerAreaContainer = document.createElement("div");
    this._markerAreaContainer.id = "markerAreaContainer";
    this._markerAreaContainer.className = "flex overflow-hidden bg-slate-50";

    this._mainContainer.appendChild(this._markerAreaContainer);

    this._toolboxContainer = document.createElement("div");
    this._toolboxContainer.id = "toolboxContainer";

    this._toolboxContainer.innerHTML = `<p>toolbox</p>`;

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
    if (this._toolbar === undefined && this._toolbarContainer) {
      this._toolbar = new EditorToolbar();
      this._toolbarContainer.appendChild(this._toolbar.getUI());
    }
  }
}

if (
  window &&
  window.customElements &&
  window.customElements.get("mjsui-annotation-editor") === undefined
) {
  window.customElements.define("mjsui-annotation-editor", AnnotationEditor);
}
