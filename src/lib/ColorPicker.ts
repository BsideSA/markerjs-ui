export class ColorPicker {
  private _colors: string[] = [];
  private _colorButtons: HTMLButtonElement[] = [];

  private _currentColor: string = "#000000";
  public get currentColor(): string {
    return this._currentColor;
  }
  public set currentColor(value: string) {
    this._currentColor = value;
    this.updateButtonStates();
  }

  public onColorChange: (color: string) => void = () => {};

  constructor(colors: string[]) {
    this._colors = colors;

    this.getUI = this.getUI.bind(this);
    this.updateButtonStates = this.updateButtonStates.bind(this);
  }

  public getUI(): HTMLDivElement {
    const colorButtonsContainer = document.createElement("div");
    colorButtonsContainer.className = "flex flex-wrap";

    this._colors.forEach((color) => {
      const button = document.createElement("button");
      button.className = "btn btn-square btn-sm btn-ghost base-content p-1.5";
      button.setAttribute("aria-label", color);
      button.setAttribute("data-color", color);

      if (color !== "transparent") {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="${color}" stroke-width="2" stroke="currentColor" d="M0,0 H24 V24 H0 Z" /></svg>`;
      } else {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="${color}" stroke-width={2} stroke="currentColor" d="M0,0 H24 V24 H0 Z" /><path fill="currentColor" opacity="0.2" stroke-width="0" d="M0,0 H12 V12 H0 Z" /><path fill="currentColor" opacity="0.2" stroke-width="0" d="M12,12 H24 V24 H12 Z" /></svg>`;
      }

      button.addEventListener("click", (event) => {
        const target = event.currentTarget as HTMLButtonElement;
        this._currentColor =
          target.getAttribute("data-color") || this._colors[0];
        // this.applyValues();
        this.updateButtonStates();
        if (this.onColorChange) {
          this.onColorChange(this._currentColor);
        }
      });
      this._colorButtons.push(button);
      colorButtonsContainer.appendChild(button);
    });

    return colorButtonsContainer;
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
}
