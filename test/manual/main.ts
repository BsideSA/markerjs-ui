import "./style.css";
import sampleImage from "./images/sample-image.png";
import { AnnotationEditor } from "./../../src/lib/index";
import sampleAnnotation from "./sample-state.json";

const targetImage = document.createElement("img");
targetImage.src = sampleImage;

const editor = new AnnotationEditor();
editor.targetImage = targetImage;
//editor.theme = "dark";

editor.addEventListener("editorsave", (event) => {
  console.log("Editor state:", event.detail.state);
  const dataUrl = event.detail.dataUrl;
  if (dataUrl) {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "annotation.png";
    link.click();
  }
});
editor.addEventListener("editorclose", () => {
  document.querySelector<HTMLDivElement>("#app")!.removeChild(editor);

  console.log("Editor closed");
});

document.querySelector<HTMLDivElement>("#app")!.appendChild(editor);

document
  .querySelector<HTMLButtonElement>("#toggleTheme")!
  .addEventListener("click", () => {
    editor.theme = editor.theme === "light" ? "dark" : "light";
  });

editor.restoreState(sampleAnnotation);
