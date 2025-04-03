import { MarkerTypeGroup } from "./models/toolbar";

import ChevronDownIcon from "@/assets/icons/chevron-down.svg?raw";

export class MarkerTypeGroupButton {
  private _markerTypeGroup: MarkerTypeGroup;

  constructor(markerTypeGroup: MarkerTypeGroup) {
    this._markerTypeGroup = markerTypeGroup;

    this.getUI = this.getUI.bind(this);
  }

  public getUI(): HTMLDivElement {
    const groupButton = document.createElement("div");
    groupButton.className =
      "join p-1 border-1 border-solid border-transparent rounded-md hover:border-base-300";
    groupButton.setAttribute("aria-label", this._markerTypeGroup.name);

    const currentTypeButton = document.createElement("div");
    currentTypeButton.role = "button";
    currentTypeButton.tabIndex = 0;
    currentTypeButton.className = "btn btn-square join-item btn-ghost";
    currentTypeButton.innerHTML = this._markerTypeGroup.markerTypes[0].icon;
    currentTypeButton.title = this._markerTypeGroup.markerTypes[0].name;
    currentTypeButton.setAttribute(
      "aria-label",
      this._markerTypeGroup.markerTypes[0].name
    );
    currentTypeButton.setAttribute(
      "data-marker-type",
      this._markerTypeGroup.markerTypes[0].markerType.typeName
    );

    groupButton.appendChild(currentTypeButton);

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
        currentTypeButton.innerHTML = markerType.icon;
        currentTypeButton.title = markerType.name;
        currentTypeButton.setAttribute("aria-label", markerType.name);
        currentTypeButton.classList.add("btn-active");

        dropDown.removeAttribute("open");
      });

      dropDownContent.appendChild(markerTypeButton);
    });

    return groupButton;
  }
}
