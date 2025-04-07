import {
  CalloutMarkerEditor,
  CaptionFrameMarkerEditor,
  MarkerArea,
  MarkerBase,
  MarkerBaseEditor,
  PolygonMarkerEditor,
  ShapeMarkerEditor,
} from "@markerjs/markerjs3";
import { ToolboxPanel } from "./ToolboxPanel";
import { defaultColorsWithTransparent } from "./models/colors";

export class FillToolboxPanel extends ToolboxPanel {
  private _currentColor: string = defaultColorsWithTransparent[0];
  private _colorButtons: HTMLButtonElement[] = [];
  private _currentEditor?: MarkerBaseEditor<MarkerBase>;

  constructor(markerArea: MarkerArea, title: string, icon: string) {
    super(markerArea, title, icon);
    this.width = "w-54";

    this.updateButtonStates = this.updateButtonStates.bind(this);
  }

  protected override getContentUI() {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset";

    const legend = document.createElement("legend");
    legend.className = "fieldset-legend";
    legend.innerText = "Fill Color";
    fieldset.appendChild(legend);

    const colorButtonsContainer = document.createElement("div");
    colorButtonsContainer.className = "flex flex-wrap";

    defaultColorsWithTransparent.forEach((color) => {
      const button = document.createElement("button");
      button.className = "btn btn-square btn-sm btn-ghost base-content p-1.5";
      button.setAttribute("aria-label", color);
      button.setAttribute("data-color", color);

      if (color !== "transparent") {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="${color}" stroke-width="2" stroke="currentColor" d="M0,0 H24 V24 H0 Z" /></svg>`;
      } else {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="${color}" stroke-width={2} stroke="currentColor" d="M0,0 H24 V24 H0 Z" /><path fill="currentColor" opacity="0.2" stroke-width="0" d="M0,0 H12 V12 H0 Z" /><path fill="currentColor" opacity="0.2" stroke-width="0" d="M12,12 H24 V24 H12 Z" /></svg>`;
      }

      button.addEventListener("click", (event) => {
        const target = event.currentTarget as HTMLButtonElement;
        this._currentColor =
          target.getAttribute("data-color") || defaultColorsWithTransparent[0];
        this.applyValues();
        this.updateButtonStates();
      });
      this._colorButtons.push(button);
      colorButtonsContainer.appendChild(button);
    });

    fieldset.appendChild(colorButtonsContainer);

    return fieldset;
  }

  public override updateContent(): void {
    if (this._markerArea && this._markerArea.currentMarkerEditor) {
      this._currentEditor = this._markerArea.currentMarkerEditor;
      this._currentColor =
        this._markerArea.currentMarkerEditor.fillColor ||
        defaultColorsWithTransparent[0];
      this.updateButtonStates();
    }
  }

  public override applyValues() {
    if (this._markerArea && this._currentEditor) {
      this._currentEditor.fillColor = this._currentColor;
    }
  }

  private updateButtonStates() {
    this._colorButtons.forEach((button) => {
      const color = button.getAttribute("data-color") || "";
      if (color === this._currentColor) {
        button.classList.add("btn-active");
      } else {
        button.classList.remove("btn-active");
      }
    });
  }

  public override updateVisibility(): void {
    const editor = this._markerArea.currentMarkerEditor;
    if (this._panel) {
      if (
        editor &&
        (editor.is(ShapeMarkerEditor) ||
          editor.is(CaptionFrameMarkerEditor) ||
          editor.is(CalloutMarkerEditor) ||
          editor.is(PolygonMarkerEditor))
      ) {
        this._panel.classList.remove("hidden");
      } else {
        this._panel.classList.add("hidden");
      }
    }
  }
}
