import { MarkerArea, MarkerBase, MarkerBaseEditor } from "@markerjs/markerjs3";
import { ToolboxPanel } from "./ToolboxPanel";

export class NotesToolboxPanel extends ToolboxPanel {
  private _textarea?: HTMLTextAreaElement;
  private _currentEditor?: MarkerBaseEditor<MarkerBase>;

  constructor(markerArea: MarkerArea, title: string, icon: string) {
    super(markerArea, title, icon);
    this.panelClasses = ["w-64", "mr-8", "sm:mr-0"];
  }

  protected override getContentUI() {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset";

    const legend = document.createElement("legend");
    legend.className = "fieldset-legend";
    legend.innerText = "Notes";
    fieldset.appendChild(legend);

    this._textarea = document.createElement("textarea");
    this._textarea.className = "textarea h-24";
    this._textarea.placeholder = "Notes";
    this._textarea.addEventListener("change", () => {
      this.applyValues();
    });

    fieldset.appendChild(this._textarea);

    return fieldset;
  }

  public override updateContent(): void {
    if (
      this._markerArea &&
      this._textarea &&
      this._markerArea.currentMarkerEditor
    ) {
      this._currentEditor = this._markerArea.currentMarkerEditor;
      this._textarea.value = this._markerArea.currentMarkerEditor.notes || "";
    }
  }

  public override applyValues() {
    if (this._markerArea && this._currentEditor) {
      this._currentEditor.notes = this._textarea!.value;
    }
  }
}
