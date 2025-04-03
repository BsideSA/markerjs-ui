import { MarkerTypeGroup, MarkerTypeItem } from "./models/toolbar";

import ChevronDownIcon from "@/assets/icons/chevron-down.svg?raw";

export class MarkerTypeGroupButton {
  private _markerTypeGroup: MarkerTypeGroup;
  private _currentMarkerType: MarkerTypeItem;
  private _currentTypeButton?: HTMLDivElement;

  public onTypeButtonClick?: (markerType: MarkerTypeItem) => void;

  constructor(markerTypeGroup: MarkerTypeGroup) {
    this._markerTypeGroup = markerTypeGroup;
    this._currentMarkerType = markerTypeGroup.markerTypes[0];

    this.getUI = this.getUI.bind(this);
    this.setCurrentType = this.setCurrentType.bind(this);
  }

  public getUI(): HTMLDivElement {
    const groupButton = document.createElement("div");
    groupButton.className =
      "join p-1 border-1 border-solid border-transparent rounded-md hover:border-base-300";
    groupButton.setAttribute("aria-label", this._markerTypeGroup.name);

    this._currentTypeButton = document.createElement("div");
    this._currentTypeButton.role = "button";
    this._currentTypeButton.tabIndex = 0;
    this._currentTypeButton.className = "btn btn-square join-item btn-ghost";

    this.setCurrentType(this._markerTypeGroup.markerTypes[0], true);
    this._currentTypeButton.addEventListener("click", () => {
      if (this.onTypeButtonClick) {
        this.onTypeButtonClick(this._currentMarkerType);
      }
    });

    groupButton.appendChild(this._currentTypeButton);

    const dropDown = document.createElement("details");
    dropDown.className = "dropdown dropdown-bottom dropdown-end join-item";
    groupButton.appendChild(dropDown);

    const dropDownTriggerButton = document.createElement("summary");
    dropDownTriggerButton.className = "btn btn-ghost join-item p-0";
    dropDownTriggerButton.innerHTML = ChevronDownIcon;
    dropDown.appendChild(dropDownTriggerButton);

    const dropDownContent = document.createElement("div");
    dropDownContent.className =
      "dropdown-content bg-base-100 rounded-box z-1 w-24 p-2 -mr-2 shadow-lg";
    dropDown.appendChild(dropDownContent);

    this._markerTypeGroup.markerTypes.forEach((markerType) => {
      const markerTypeButton = document.createElement("button");
      markerTypeButton.title = markerType.name;
      markerTypeButton.setAttribute("aria-label", markerType.name);
      markerTypeButton.className = "btn btn-square btn-ghost base-content";
      markerTypeButton.innerHTML = markerType.icon;
      markerTypeButton.addEventListener("click", () => {
        this.setCurrentType(markerType);

        this._currentMarkerType = markerType;

        dropDown.removeAttribute("open");

        if (this.onTypeButtonClick) {
          this.onTypeButtonClick(this._currentMarkerType);
        }
      });

      dropDownContent.appendChild(markerTypeButton);
    });

    return groupButton;
  }

  public setCurrentType(markerType?: MarkerTypeItem, suppressActive = false) {
    if (this._currentTypeButton) {
      if (
        markerType &&
        this._markerTypeGroup.markerTypes.indexOf(markerType) > -1
      ) {
        this._currentMarkerType = markerType;
        this._currentTypeButton.innerHTML = markerType.icon;
        this._currentTypeButton.title = markerType.name;
        this._currentTypeButton.setAttribute("aria-label", markerType.name);
        this._currentTypeButton.setAttribute(
          "data-marker-type",
          markerType.markerType.typeName
        );

        if (!suppressActive) {
          this._currentTypeButton.classList.add("btn-active");
        }
      } else {
        this._currentTypeButton.classList.remove("btn-active");
      }
    }
  }
}
