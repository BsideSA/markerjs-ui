export class AnnotationEditor extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

if (
  window &&
  window.customElements &&
  window.customElements.get("mjsui-annotation-editor") === undefined
) {
  window.customElements.define("mjsui-annotation-editor", AnnotationEditor);
}
