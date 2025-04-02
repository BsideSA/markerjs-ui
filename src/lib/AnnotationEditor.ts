export class AnnotationEditor extends HTMLElement {
  private _mainContainer?: HTMLDivElement;

  constructor() {
    super();

    this.createLayout = this.createLayout.bind(this);

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.createLayout();
  }

  disconnectedCallback() {}

  private createLayout() {
    this._mainContainer = document.createElement("div");
    this._mainContainer.id = "mainContainer";
    this._mainContainer.style.width = "100%";
    this._mainContainer.style.height = "100%";
    this._mainContainer.style.display = "flex";

    // tmp
    this._mainContainer.innerHTML = "<p>Hello World!</p>";

    this.shadowRoot?.appendChild(this._mainContainer);
  }
}

if (
  window &&
  window.customElements &&
  window.customElements.get("mjsui-annotation-editor") === undefined
) {
  window.customElements.define("mjsui-annotation-editor", AnnotationEditor);
}
