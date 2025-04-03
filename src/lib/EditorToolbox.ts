import { MarkerArea } from "@markerjs/markerjs3";
import { BaseToolbar } from "./BaseToolbar";
import { ToolbarAction } from "./models/toolbar";

import UndoIcon from "@/assets/icons/arrow-back-up.svg?raw";
import RedoIcon from "@/assets/icons/arrow-forward-up.svg?raw";
import ZoomInIcon from "@/assets/icons/plus.svg?raw";
import ZoomOutIcon from "@/assets/icons/minus.svg?raw";
import ZoomResetIcon from "@/assets/icons/relation-one-to-one.svg?raw";

export class EditorToolbox extends BaseToolbar {
  private _toolbarContainer?: HTMLDivElement;
  private _leftActionContainer?: HTMLDivElement;
  private _rightActionContainer?: HTMLDivElement;

  private _undoButton?: HTMLButtonElement;
  private _redoButton?: HTMLButtonElement;

  private _zoomInButton?: HTMLButtonElement;
  private _zoomOutButton?: HTMLButtonElement;
  private _zoomResetButton?: HTMLButtonElement;

  constructor(markerArea: MarkerArea) {
    super(markerArea);

    this.getUI = this.getUI.bind(this);
    this.createActionButton = this.createActionButton.bind(this);
    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
    this.updateToolbarButtons = this.updateToolbarButtons.bind(this);
  }

  public getUI() {
    if (this._toolbarContainer === undefined) {
      this.attachMarkerAreaEvents();
      this._toolbarContainer = document.createElement("div");
      this._toolbarContainer.className =
        "flex space-x-1 p-2 justify-between @container";

      this._leftActionContainer = document.createElement("div");
      this._leftActionContainer.className =
        "inline-flex space-x-1 p-1 border-1 border-transparent";
      this._toolbarContainer.appendChild(this._leftActionContainer);

      this._rightActionContainer = document.createElement("div");
      this._rightActionContainer.className =
        "inline-flex space-x-1 p-1 border-1 border-transparent";
      this._toolbarContainer.appendChild(this._rightActionContainer);

      this._undoButton = this.createActionButton("Undo", "undo", UndoIcon);
      this._leftActionContainer.appendChild(this._undoButton);
      this._redoButton = this.createActionButton("Redo", "redo", RedoIcon);
      this._redoButton.classList.add("hidden", "@xl:flex");
      this._leftActionContainer.appendChild(this._redoButton);

      const zoomGroup = document.createElement("div");
      zoomGroup.className = "join";
      this._rightActionContainer.appendChild(zoomGroup);

      this._zoomOutButton = this.createActionButton(
        "Zoom Out",
        "zoom-out",
        ZoomOutIcon
      );
      this._zoomOutButton.classList.add("join-item");
      zoomGroup.appendChild(this._zoomOutButton);

      this._zoomResetButton = this.createActionButton(
        "Zoom Reset",
        "zoom-reset",
        ZoomResetIcon
      );
      this._zoomResetButton.classList.add("join-item", "hidden", "@xl:flex");
      zoomGroup.appendChild(this._zoomResetButton);

      this._zoomInButton = this.createActionButton(
        "Zoom In",
        "zoom-in",
        ZoomInIcon
      );
      this._zoomInButton.classList.add("join-item");
      zoomGroup.appendChild(this._zoomInButton);
    }
    this.updateToolbarButtons();

    return this._toolbarContainer;
  }

  private attachMarkerAreaEvents() {
    this._markerArea.addEventListener("areastatechange", () => {
      this.updateToolbarButtons();
    });
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
      case "undo": {
        if (this._markerArea.isUndoPossible) {
          this._markerArea.undo();
        }
        break;
      }
      case "redo": {
        if (this._markerArea.isRedoPossible) {
          this._markerArea.redo();
        }
        break;
      }
      case "zoom-in": {
        this._markerArea.zoomLevel += 0.1;
        break;
      }
      case "zoom-out": {
        if (this._markerArea.zoomLevel > 0.2) {
          this._markerArea.zoomLevel -= 0.1;
        }
        break;
      }
      case "zoom-reset": {
        this._markerArea.zoomLevel = 1;
        break;
      }
    }
    this.updateToolbarButtons();
  }

  private updateToolbarButtons() {
    if (this._markerArea) {
      this._undoButton?.classList.toggle(
        "btn-disabled",
        !this._markerArea.isUndoPossible
      );
      this._redoButton?.classList.toggle(
        "btn-disabled",
        !this._markerArea.isRedoPossible
      );
    }
  }
}
