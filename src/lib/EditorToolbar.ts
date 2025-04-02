export class EditorToolbar {
  private _toolbarContainer?: HTMLDivElement;
  private _leftActionContainer?: HTMLDivElement;
  private _rightActionContainer?: HTMLDivElement;

  private _selectButton?: HTMLButtonElement;

  private _closeButton?: HTMLButtonElement;

  constructor() {
    this.getUI = this.getUI.bind(this);
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

    this._selectButton = document.createElement("button");
    this._selectButton.className = "btn";
    this._selectButton.innerText = "👆";
    this._leftActionContainer.appendChild(this._selectButton);

    this._closeButton = document.createElement("button");
    this._closeButton.className = "btn";
    this._closeButton.innerText = "❌";
    this._rightActionContainer.appendChild(this._closeButton);

    return this._toolbarContainer;
  }
}
