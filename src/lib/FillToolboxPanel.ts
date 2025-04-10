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
import { ColorPicker } from "./ColorPicker";

export class FillToolboxPanel extends ToolboxPanel {
  private _currentColor: string = defaultColorsWithTransparent[0];
  private _currentEditor?: MarkerBaseEditor<MarkerBase>;
  private _colorPicker?: ColorPicker;

  constructor(markerArea: MarkerArea, title: string, icon: string) {
    super(markerArea, title, icon);
    this.panelClasses = ["w-54"];
  }

  protected override getContentUI() {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset";

    const legend = document.createElement("legend");
    legend.className = "fieldset-legend";
    legend.innerText = "Fill Color";
    fieldset.appendChild(legend);

    this._colorPicker = new ColorPicker(defaultColorsWithTransparent);
    this._colorPicker.onColorChange = (color: string) => {
      this._currentColor = color;
      this.applyValues();
    };

    fieldset.appendChild(this._colorPicker.getUI());

    return fieldset;
  }

  public override updateContent(): void {
    if (
      this._markerArea &&
      this._markerArea.currentMarkerEditor &&
      this._colorPicker
    ) {
      this._currentEditor = this._markerArea.currentMarkerEditor;
      this._currentColor =
        this._markerArea.currentMarkerEditor.fillColor ||
        defaultColorsWithTransparent[0];
      this._colorPicker.currentColor = this._currentColor;
    }
  }

  public override applyValues() {
    if (this._markerArea && this._currentEditor) {
      this._currentEditor.fillColor = this._currentColor;
    }
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
