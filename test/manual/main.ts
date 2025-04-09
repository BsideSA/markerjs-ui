import "./style.css";
import sampleImage from "./images/sample-image.png";
import { AnnotationEditor, AnnotationViewer } from "./../../src/lib/index";
import sampleAnnotation from "./sample-state.json";

const targetImage = document.createElement("img");
targetImage.src = sampleImage;

const editor = new AnnotationEditor();
editor.targetImage = targetImage;
//editor.theme = "dark";

editor.addEventListener("editorsave", (event) => {
  console.log("Editor state:", event.detail.state);
  viewer.show(event.detail.state);
  // const dataUrl = event.detail.dataUrl;
  // if (dataUrl) {
  //   const link = document.createElement("a");
  //   link.href = dataUrl;
  //   link.download = "annotation.png";
  //   link.click();
  // }
});
editor.addEventListener("editorclose", () => {
  document.querySelector<HTMLDivElement>("#editorDiv")!.removeChild(editor);

  console.log("Editor closed");
});

const viewer = new AnnotationViewer();
viewer.targetImage = targetImage;
viewer.theme = "dark";

document.querySelector<HTMLDivElement>("#editorDiv")!.appendChild(editor);
document.querySelector<HTMLDivElement>("#viewerDiv")!.appendChild(viewer);

document
  .querySelector<HTMLButtonElement>("#toggleTheme")!
  .addEventListener("click", () => {
    editor.theme = editor.theme === "light" ? "dark" : "light";
    viewer.theme = viewer.theme === "light" ? "dark" : "light";
  });

editor.restoreState(sampleAnnotation);
