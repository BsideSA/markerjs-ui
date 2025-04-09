import { ToolbarAction } from "./models/toolbar";

export class BaseToolbar {
  constructor() {
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
    button.className = "btn btn-square btn-ghost base-content btn-sm p-1.5";
    button.innerHTML = icon;
    if (actionHandler) {
      button.addEventListener("click", () => {
        actionHandler(action);
      });
    }

    return button;
  }
}
