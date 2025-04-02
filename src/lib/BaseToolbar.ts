import { MarkerArea } from "@markerjs/markerjs3";
import { ToolbarAction } from "./models/toolbar";

export class BaseToolbar {
  protected _markerArea: MarkerArea;

  constructor(markerArea: MarkerArea) {
    this._markerArea = markerArea;

    this.getUI = this.getUI.bind(this);
    this.createActionButton = this.createActionButton.bind(this);
  }

  public getUI(): HTMLDivElement | undefined {
    return undefined;
  }

  protected createActionButton(
    title: string,
    action: ToolbarAction,
    icon: string,
    actionHandler?: (action: ToolbarAction) => void
  ) {
    const button = document.createElement("button");
    button.title = title;
    button.setAttribute("aria-label", title);
    button.className = "btn btn-square btn-ghost base-content";
    button.innerHTML = icon;
    if (actionHandler) {
      button.addEventListener("click", () => {
        actionHandler(action);
      });
    }

    return button;
  }
}
