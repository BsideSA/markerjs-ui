import {
  MarkerTypeGroup,
  MarkerTypeItem,
  MarkerTypeList,
  ToolbarAction,
} from "./models/toolbar";

import PointerIcon from "@/assets/icons/pointer.svg?raw";
import DeleteIcon from "@/assets/icons/trash.svg?raw";
import OkIcon from "@/assets/icons/check.svg?raw";
import CloseIcon from "@/assets/icons/x.svg?raw";

import ChevronDownIcon from "@/assets/icons/chevron-down.svg?raw";
import AddIcon from "@/assets/icons/square-plus.svg?raw";

import FrameIcon from "@/assets/icons/markers/rectangle.svg?raw";
import CoverIcon from "@/assets/icons/markers/rectangle-filled.svg?raw";
import EllipseFrameIcon from "@/assets/icons/markers/oval-vertical.svg?raw";
import EllipseIcon from "@/assets/icons/markers/oval-vertical-filled.svg?raw";
import HighlightIcon from "@/assets/icons/markers/highlight.svg?raw";
import ArrowIcon from "@/assets/icons/markers/arrow-narrow-right.svg?raw";
import LineIcon from "@/assets/icons/markers/line.svg?raw";
import MeasurementIcon from "@/assets/icons/markers/ruler-measure.svg?raw";
import CurveIcon from "@/assets/icons/markers/vector-spline.svg?raw";
import TextIcon from "@/assets/icons/markers/text-size.svg?raw";
import CalloutIcon from "@/assets/icons/markers/bubble-text.svg?raw";
import CaptionFrameIcon from "@/assets/icons/markers/text-resize.svg?raw";
import FreehandIcon from "@/assets/icons/markers/scribble.svg?raw";
import PolygonIcon from "@/assets/icons/markers/polygon.svg?raw";

import {
  AnnotationState,
  ArrowMarker,
  CalloutMarker,
  CaptionFrameMarker,
  CoverMarker,
  CurveMarker,
  CustomImageMarker,
  EllipseFrameMarker,
  EllipseMarker,
  FrameMarker,
  FreehandMarker,
  HighlightMarker,
  LineMarker,
  MarkerArea,
  MarkerBaseEditor,
  MeasurementMarker,
  PolygonMarker,
  Renderer,
  TextMarker,
  HighlighterMarker,
  MarkerBase,
} from "@markerjs/markerjs3";

import { BaseToolbar } from "./BaseToolbar";
import { emojis } from "./models/emojis";
import { MarkerTypeGroupButton } from "./MarkerTypeGroupButton";

const markerTypes: MarkerTypeList = [
  {
    name: "Basic shapes",
    markerTypes: [
      {
        icon: FrameIcon,
        name: "Rectangle",
        markerType: FrameMarker,
      },
      {
        icon: CoverIcon,
        name: "Cover (filled rectangle)",
        markerType: CoverMarker,
      },
      {
        icon: HighlightIcon,
        name: "Highlight",
        markerType: HighlightMarker,
      },
      {
        icon: EllipseFrameIcon,
        name: "Ellipse",
        markerType: EllipseFrameMarker,
      },
      {
        icon: EllipseIcon,
        name: "Ellipse (filled)",
        markerType: EllipseMarker,
      },
    ],
  },
  {
    name: "Lines",
    markerTypes: [
      {
        icon: ArrowIcon,
        name: "Arrow",
        markerType: ArrowMarker,
      },
      {
        icon: LineIcon,
        name: "Line",
        markerType: LineMarker,
      },
      {
        icon: MeasurementIcon,
        name: "Measure",
        markerType: MeasurementMarker,
      },
      {
        icon: CurveIcon,
        name: "Curve",
        markerType: CurveMarker,
      },
    ],
  },
  {
    name: "Text",
    markerTypes: [
      {
        icon: TextIcon,
        name: "Text",
        markerType: TextMarker,
      },
      {
        icon: CalloutIcon,
        name: "Callout",
        markerType: CalloutMarker,
      },
      {
        icon: CaptionFrameIcon,
        name: "Captioned frame",
        markerType: CaptionFrameMarker,
      },
    ],
  },
  {
    name: "Advanced shapes",
    markerTypes: [
      {
        icon: FreehandIcon,
        name: "Freehand",
        markerType: FreehandMarker,
      },
      {
        icon: HighlightIcon,
        name: "Highlighter",
        markerType: HighlighterMarker,
      },
      {
        icon: PolygonIcon,
        name: "Polygon",
        markerType: PolygonMarker,
      },
    ],
  },
  {
    name: "Emojis",
    markerTypes: emojis,
  },
];

export class EditorToolbar extends BaseToolbar {
  private _toolbarContainer?: HTMLDivElement;
  private _leftActionContainer?: HTMLDivElement;
  private _rightActionContainer?: HTMLDivElement;
  private _markerTypeContainer?: HTMLDivElement;

  private _selectButton?: HTMLButtonElement;
  private _deleteButton?: HTMLButtonElement;

  private _markerTypeButtons: MarkerTypeGroupButton[] = [];

  private _okButton?: HTMLButtonElement;
  private _closeButton?: HTMLButtonElement;

  private _mode: "select" | "create" | "rendering" = "select";

  constructor(markerArea: MarkerArea) {
    super(markerArea);

    this.getUI = this.getUI.bind(this);
    this.createActionButton = this.createActionButton.bind(this);
    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
    this.handleMarkerTypeButtonClick =
      this.handleMarkerTypeButtonClick.bind(this);
    this.updateToolbarButtons = this.updateToolbarButtons.bind(this);
    this.updateMarkerTypeButtons = this.updateMarkerTypeButtons.bind(this);
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

      this._markerTypeContainer = document.createElement("div");
      this._markerTypeContainer.className =
        "hidden @xl:inline-flex space-x-1 items-center";
      this._toolbarContainer.appendChild(this._markerTypeContainer);

      this._rightActionContainer = document.createElement("div");
      this._rightActionContainer.className =
        "inline-flex space-x-1 p-1 border-1 border-transparent";
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

      // markers
      markerTypes.forEach((markerTypeGroup) => {
        const mtgButton = new MarkerTypeGroupButton(markerTypeGroup);
        mtgButton.onTypeButtonClick = this.handleMarkerTypeButtonClick;
        this._markerTypeButtons.push(mtgButton);
        this._markerTypeContainer?.appendChild(mtgButton.getUI());
      });

      this._okButton = this.createActionButton("OK", "save", OkIcon);
      this._rightActionContainer.appendChild(this._okButton);
      this._closeButton = this.createActionButton("Close", "close", CloseIcon);
      this._rightActionContainer.appendChild(this._closeButton);
    }

    this.updateToolbarButtons();

    return this._toolbarContainer;
  }

  private attachMarkerAreaEvents() {
    this._markerArea.addEventListener("markerselect", () => {
      this.updateToolbarButtons();
    });
    this._markerArea.addEventListener("markerdeselect", () => {
      this.updateToolbarButtons();
    });
    this._markerArea.addEventListener("markercreate", (ev) => {
      if (
        ev.detail.markerEditor.state !== "new" &&
        ev.detail.markerEditor.state !== "creating"
      ) {
        this._mode = "select";
      }
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
      case "select": {
        this._mode = "select";
        this._markerArea.switchToSelectMode();
        this.updateToolbarButtons();
        break;
      }
      case "delete": {
        this._markerArea.deleteSelectedMarkers();
        this.updateToolbarButtons();
        break;
      }
    }
  }

  private handleMarkerTypeButtonClick(markerType: MarkerTypeItem) {
    this._mode = "create";
    this.updateMarkerTypeButtons(markerType);

    const markerEditor = this._markerArea.createMarker(markerType.markerType);
    if (markerEditor && markerEditor.marker instanceof CustomImageMarker) {
      markerEditor.marker.defaultSize = { width: 32, height: 32 };
      markerEditor.marker.svgString = markerType.icon;
    }
  }

  private updateToolbarButtons() {
    if (this._mode === "select") {
      this._selectButton?.classList.add("btn-active");
      if (this._markerArea.selectedMarkerEditors.length > 0) {
        this._deleteButton?.classList.remove("btn-disabled");
      } else {
        this._deleteButton?.classList.add("btn-disabled");
      }
      this.updateMarkerTypeButtons();
    }
  }

  private updateMarkerTypeButtons(markerType?: MarkerTypeItem) {
    if (this._mode === "create") {
      this._selectButton?.classList.remove("btn-active");
    }
    this._markerTypeButtons.forEach((mtgButton) => {
      mtgButton.setCurrentType(markerType);
    });
  }
}
