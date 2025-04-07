import { MarkerArea, MarkerBase, MarkerBaseEditor } from "@markerjs/markerjs3";
import { ToolboxPanel } from "./ToolboxPanel";

export class OpacityToolboxPanel extends ToolboxPanel {
  private _range?: HTMLInputElement;
  private _currentEditor?: MarkerBaseEditor<MarkerBase>;

  constructor(markerArea: MarkerArea, title: string, icon: string) {
    super(markerArea, title, icon);
    this.width = "w-48";
  }

  protected override getContentUI() {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset";

    const legend = document.createElement("legend");
    legend.className = "fieldset-legend";
    legend.innerText = "Opacity";
    fieldset.appendChild(legend);

    this._range = document.createElement("input");
    this._range.type = "range";
    this._range.min = "0";
    this._range.max = "100";
    this._range.value = "25";
    this._range.className = "range";
    this._range.step = "10";

    this._range.addEventListener("input", () => {
      this.applyValues();
    });

    fieldset.appendChild(this._range);

    return fieldset;
  }

  public override updateContent(): void {
    if (
      this._markerArea &&
      this._range &&
      this._markerArea.currentMarkerEditor
    ) {
      this._currentEditor = this._markerArea.currentMarkerEditor;
      this._range.value = (
        this._markerArea.currentMarkerEditor.opacity * 100
      ).toString();
    }
  }

  public override applyValues() {
    if (this._markerArea && this._currentEditor) {
      this._currentEditor.opacity = this._range!.valueAsNumber / 100;
    }
  }
}
