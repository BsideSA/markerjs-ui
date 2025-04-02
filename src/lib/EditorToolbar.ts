import { MarkerArea } from "@markerjs/markerjs3";
import { ToolbarAction } from "./models/toolbar";

import PointerIcon from "@/assets/icons/pointer.svg?raw";
import DeleteIcon from "@/assets/icons/trash.svg?raw";
import OkIcon from "@/assets/icons/check.svg?raw";
import CloseIcon from "@/assets/icons/x.svg?raw";
import { BaseToolbar } from "./BaseToolbar";

export class EditorToolbar extends BaseToolbar {
  private _toolbarContainer?: HTMLDivElement;
  private _leftActionContainer?: HTMLDivElement;
  private _rightActionContainer?: HTMLDivElement;

  private _selectButton?: HTMLButtonElement;
  private _deleteButton?: HTMLButtonElement;

  private _okButton?: HTMLButtonElement;
  private _closeButton?: HTMLButtonElement;

  constructor(markerArea: MarkerArea) {
    super(markerArea);

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

  protected createActionButton(
    title: string,
    action: ToolbarAction,
    icon: string
  ) {
    return super.createActionButton(
      title,
      action,
      icon,
      this.handleActionButtonClick
    );
  }

  private handleActionButtonClick(action: ToolbarAction) {
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
