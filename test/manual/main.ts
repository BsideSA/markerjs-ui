import "./style.css";
import sampleImage from "./images/sample-image.png";
import { AnnotationEditor } from "./../../src/lib/index";

const targetImage = document.querySelector<HTMLImageElement>("#sampleImage")!;
targetImage.src = sampleImage;

const editor = new AnnotationEditor();
editor.targetImage = targetImage;

document.querySelector<HTMLDivElement>("#app")!.appendChild(editor);
