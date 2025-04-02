import styles from "./lib.css?inline";

export class AnnotationEditor extends HTMLElement {
  private _mainContainer?: HTMLDivElement;

  constructor() {
    super();

    this.addStyles = this.addStyles.bind(this);
    this.createLayout = this.createLayout.bind(this);

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.addStyles();
    this.createLayout();
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
    this._mainContainer.style.width = "100%";
    this._mainContainer.style.height = "100%";
    this._mainContainer.style.display = "flex";

    // tmp
    this._mainContainer.innerHTML = `<p class="text-3xl hover:text-red-400">Hello World!</p>
    <button class="btn btn-primary">Button</button>`;

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
