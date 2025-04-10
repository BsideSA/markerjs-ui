import { MarkerArea, TextMarker, TextMarkerEditor } from "@markerjs/markerjs3";
import { ToolboxPanel } from "./ToolboxPanel";
import { defaultColors } from "./models/colors";
import { ColorPicker } from "./ColorPicker";

export class FontToolboxPanel extends ToolboxPanel {
  private _currentFontFamily: string = "";
  private _currentFontColor: string = defaultColors[0];
  private _currentFontSize: string = "1";
  private _currentEditor?: TextMarkerEditor<TextMarker>;
  private _fontFamilySelect?: HTMLSelectElement;
  private _fontSizePicker?: HTMLDivElement;
  private _colorPicker?: ColorPicker;

  constructor(markerArea: MarkerArea, title: string, icon: string) {
    super(markerArea, title, icon);
    this.panelClasses = ["w-54", "-mr-10", "sm:mr-0"];

    this.updateButtonStates = this.updateButtonStates.bind(this);
  }

  protected override getContentUI() {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset space-y-1";

    const legend = document.createElement("legend");
    legend.className = "fieldset-legend";
    legend.innerText = this._title;
    fieldset.appendChild(legend);

    this._fontFamilySelect = document.createElement("select");
    this._fontFamilySelect.className = "select select-sm";
    fieldset.appendChild(this._fontFamilySelect);
    this._fontFamilySelect.addEventListener("change", () => {
      this._currentFontFamily = this._fontFamilySelect!.value;
      this.applyValues();
    });

    const labelOption = document.createElement("option");
    labelOption.disabled = true;
    labelOption.innerText = "Font Family";
    this._fontFamilySelect.appendChild(labelOption);

    [
      ["Sans-serif", "Helvetica, Arial, sans-serif"],
      ["Serif", "Georgia, 'Times New Roman', Times, serif"],
      ["Monospace", "'Courier New', Courier, monospace"],
    ].forEach(([label, value]) => {
      const option = document.createElement("option");
      option.value = value;
      option.innerText = label;
      this._fontFamilySelect?.appendChild(option);
    });

    // font size picker
    const fontSizeBlock = document.createElement("div");
    fontSizeBlock.className =
      "flex flex-row space-x-2 justify-between items-center";
    fieldset.appendChild(fontSizeBlock);

    const fontSizeLabel = document.createElement("label");
    fontSizeLabel.className = "fieldset-label";
    fontSizeLabel.innerText = "Size";
    fontSizeBlock.appendChild(fontSizeLabel);

    this._fontSizePicker = document.createElement("div");
    this._fontSizePicker.className = "join";
    fontSizeBlock.appendChild(this._fontSizePicker);

    [
      ["XS", "0.5"],
      ["S", "0.8"],
      ["M", "1"],
      ["L", "1.5"],
      ["XL", "3"],
    ].forEach(([label, value]) => {
      const button = document.createElement("button");
      button.className = "join-item btn btn-square btn-sm base-content p-1.5";
      button.setAttribute("data-size", value);
      button.innerText = label;
      button.ariaLabel = label;
      button.addEventListener("click", () => {
        this._currentFontSize = value;
        this.applyValues();
        this.updateButtonStates();
      });
      this._fontSizePicker?.appendChild(button);
    });

    // color picker
    const colorLabel = document.createElement("label");
    colorLabel.className = "fieldset-label";
    colorLabel.innerText = "Color";
    fieldset.appendChild(colorLabel);

    this._colorPicker = new ColorPicker(defaultColors);
    this._colorPicker.onColorChange = (color: string) => {
      this._currentFontColor = color;
      this.applyValues();
    };

    fieldset.appendChild(this._colorPicker.getUI());

    return fieldset;
  }

  public override updateContent(): void {
    if (
      this._markerArea &&
      this._markerArea.currentMarkerEditor &&
      this._markerArea.currentMarkerEditor.is(TextMarkerEditor) &&
      this._colorPicker
    ) {
      this._currentEditor = this._markerArea.currentMarkerEditor;

      this._currentFontFamily = this._currentEditor.fontFamily;
      if (this._fontFamilySelect) {
        this._fontFamilySelect.value = this._currentFontFamily;
      }

      this._currentFontSize =
        this._currentEditor.fontSize.value.toString() || "1";

      this._currentFontColor = this._currentEditor.color || defaultColors[0];
      this._colorPicker.currentColor = this._currentFontColor;
    }

    this.updateButtonStates();
  }

  public override applyValues() {
    if (this._markerArea && this._currentEditor) {
      this._currentEditor.fontSize = {
        value: parseFloat(this._currentFontSize),
        units: this._currentEditor.fontSize.units,
        step: this._currentEditor.fontSize.step,
      };
      this._currentEditor.color = this._currentFontColor;
      this._currentEditor.fontFamily = this._currentFontFamily;
    }
  }

  public override updateVisibility(): void {
    const editor = this._markerArea.currentMarkerEditor;
    if (this._panel) {
      if (editor && editor.is(TextMarkerEditor)) {
        this._panel.classList.remove("hidden");
      } else {
        this._panel.classList.add("hidden");
      }
    }
  }

  private updateButtonStates() {
    const buttons = this._fontSizePicker?.querySelectorAll("button");
    if (buttons) {
      buttons.forEach((button) => {
        button.classList.remove("btn-active");
        if (button.getAttribute("data-size") === this._currentFontSize) {
          button.classList.add("btn-active");
        }
      });
    }
  }
}
