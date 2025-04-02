import { MarkerArea } from "@markerjs/markerjs3";
import styles from "./lib.css?inline";

export class AnnotationEditor extends HTMLElement {
  private _mainContainer?: HTMLDivElement;
  private _toolbarContainer?: HTMLDivElement;
  private _toolboxContainer?: HTMLDivElement;
  private _markerAreaContainer?: HTMLDivElement;

  private _markerArea?: MarkerArea;
  public get markerArea() {
    return this._markerArea;
  }

  public targetImage?: HTMLImageElement;

  constructor() {
    super();

    this.addStyles = this.addStyles.bind(this);
    this.createLayout = this.createLayout.bind(this);

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.addStyles();
    this.createLayout();
    this.addMarkerArea();
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

    this._toolbarContainer.innerHTML = `<p>toolbar</p>`;

    this._mainContainer.appendChild(this._toolbarContainer);

    this._markerAreaContainer = document.createElement("div");
    this._markerAreaContainer.id = "markerAreaContainer";
    this._markerAreaContainer.className = "flex overflow-hidden bg-slate-50";

    this._mainContainer.appendChild(this._markerAreaContainer);

    this._toolboxContainer = document.createElement("div");
    this._toolboxContainer.id = "toolboxContainer";

    this._toolboxContainer.innerHTML = `<p>toolbox</p>`;

    this._mainContainer.appendChild(this._toolboxContainer);

    // // tmp
    // this._mainContainer.innerHTML = `<p class="text-3xl hover:text-red-400">Hello World!</p>
    // <button class="btn btn-primary">Button</button>`;

    this.shadowRoot?.appendChild(this._mainContainer);
  }

  private addMarkerArea() {
    if (this.targetImage && this._markerArea === undefined) {
      this._markerArea = new MarkerArea();
      this._markerArea.targetImage = this.targetImage;
      this._markerAreaContainer?.appendChild(this._markerArea);
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
