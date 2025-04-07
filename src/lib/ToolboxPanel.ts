import { MarkerArea } from "@markerjs/markerjs3";

export class ToolboxPanel {
  protected _markerArea: MarkerArea;
  protected _title: string;
  protected _icon: string;

  protected _panel?: HTMLDetailsElement;

  protected width = "w-26";

  constructor(markerArea: MarkerArea, title: string, icon: string) {
    this._markerArea = markerArea;
    this._title = title;
    this._icon = icon;

    this.getUI = this.getUI.bind(this);
    this.getContentUI = this.getContentUI.bind(this);
    this.updateVisibility = this.updateVisibility.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.applyValues = this.applyValues.bind(this);
  }

  public getUI() {
    this._panel = document.createElement("details");
    this._panel.className = "dropdown dropdown-top dropdown-center hidden";
    this._panel.addEventListener("toggle", (event) => {
      const ev = event as ToggleEvent;
      if (ev.newState === "closed") {
        this.applyValues();
      }
    });

    const toolboxButton = document.createElement("summary");
    toolboxButton.className = "btn btn-ghost btn-sm base-content p-1.5";
    toolboxButton.innerHTML = this._icon;
    toolboxButton.title = this._title;
    toolboxButton.setAttribute("aria-label", this._title);
    this._panel.appendChild(toolboxButton);

    const panelContent = document.createElement("div");
    panelContent.className =
      "dropdown-content bg-base-100 rounded-box z-1 p-2 mt-2 border-2 border-solid border-base-200 shadow-lg";
    panelContent.classList.add(this.width);
    this._panel.appendChild(panelContent);

    panelContent.appendChild(this.getContentUI());

    return this._panel;
  }

  protected getContentUI(): HTMLElement {
    const content = document.createElement("div");
    content.className = "flex flex-col space-y-1 p-2";
    content.innerText = "Base panel content";
    return content;
  }

  public updateVisibility(): void {
    if (this._panel) {
      if (this._markerArea.currentMarkerEditor) {
        this._panel.classList.remove("hidden");
      } else {
        this._panel.classList.add("hidden");
      }
    }
  }

  public updateContent(): void {}

  public applyValues(): void {}
}
