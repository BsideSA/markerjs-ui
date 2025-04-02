import "./style.css";
import sampleImage from "./images/sample-image.png";
import { AnnotationEditor } from "./../../src/lib/index";
import sampleAnnotation from "./sample-state.json";

const targetImage = document.createElement("img");
targetImage.src = sampleImage;

const editor = new AnnotationEditor();
editor.targetImage = targetImage;

document.querySelector<HTMLDivElement>("#app")!.appendChild(editor);

editor.restoreState(sampleAnnotation);
