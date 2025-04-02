import { MarkerArea } from "@markerjs/markerjs3";
import { ToolbarAction } from "./models/toolbar";

import PointerIcon from "@/assets/icons/pointer.svg?raw";
import DeleteIcon from "@/assets/icons/trash.svg?raw";
import OkIcon from "@/assets/icons/check.svg?raw";
import CloseIcon from "@/assets/icons/x.svg?raw";

export class EditorToolbar {
  private _markerArea: MarkerArea;

  private _toolbarContainer?: HTMLDivElement;
  private _leftActionContainer?: HTMLDivElement;
  private _rightActionContainer?: HTMLDivElement;

  private _selectButton?: HTMLButtonElement;
  private _deleteButton?: HTMLButtonElement;

  private _okButton?: HTMLButtonElement;
  private _closeButton?: HTMLButtonElement;

  constructor(markerArea: MarkerArea) {
    this._markerArea = markerArea;

    this.getUI = this.getUI.bind(this);
    this.createActionButton = this.createActionButton.bind(this);
    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
  }

  public getUI() {
    this._toolbarContainer = document.createElement("div");
    this._toolbarContainer.className =
      "flex space-x-1 p-2 justify-between border-b border-slate-100";

    this._leftActionContainer = document.createElement("div");
    this._leftActionContainer.className = "inline-flex space-x-1";
    this._toolbarContainer.appendChild(this._leftActionContainer);

    this._rightActionContainer = document.createElement("div");
    this._rightActionContainer.className = "inline-flex space-x-1";
    this._toolbarContainer.appendChild(this._rightActionContainer);

    this._selectButton = this.createActionButton(
      "Select",
      "select",
      PointerIcon
    );
    this._leftActionContainer.appendChild(this._selectButton);

    this._deleteButton = this.createActionButton(
      "Delete",
      "delete",
      DeleteIcon
    );
    this._leftActionContainer.appendChild(this._deleteButton);

    this._okButton = this.createActionButton("OK", "save", OkIcon);
    this._rightActionContainer.appendChild(this._okButton);
    this._closeButton = this.createActionButton("Close", "close", CloseIcon);
    this._rightActionContainer.appendChild(this._closeButton);

    return this._toolbarContainer;
  }

  private createActionButton(
    title: string,
    action: ToolbarAction,
    icon: string
  ) {
    const button = document.createElement("button");
    button.title = title;
    button.setAttribute("aria-label", title);
    button.className = "btn btn-square btn-ghost base-content";
    button.innerHTML = icon;
    button.addEventListener("click", () => {
      this.handleActionButtonClick(action);
    });

    return button;
  }

  private handleActionButtonClick(action: ToolbarAction) {
    console.log(`Action: ${action}`);

    switch (action) {
      case "select": {
        this._markerArea.switchToSelectMode();
        break;
      }
      case "delete": {
        this._markerArea.deleteSelectedMarkers();
        break;
      }
    }
  }
}
