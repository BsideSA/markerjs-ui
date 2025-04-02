import "./style.css";
import { AnnotationEditor } from "./../../src/lib/index";

const editor = new AnnotationEditor();

document.querySelector<HTMLDivElement>("#app")!.appendChild(editor);
