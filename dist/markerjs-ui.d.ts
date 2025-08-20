import { AnnotationState } from '@markerjs/markerjs3';
import { MarkerArea } from '@markerjs/markerjs3';
import { MarkerView } from '@markerjs/markerjs3';

/**
 * AnnotationEditor is a web component that, as the name suggests, allows users to annotate images easily.
 *
 * It's a UI wrapper for marker.js 3 `MarkerArea` component.
 *
 * @group Components
 *
 * @example
 *
 * ```js
 * import { AnnotationEditor } from "@markerjs/markerjs-ui";
 *
 * // image to annotate
 * const targetImage = document.createElement("img");
 * targetImage.src = "image.jpg";
 *
 * // create the editor
 * const editor = new AnnotationEditor();
 * editor.targetImage = targetImage;
 * containerDiv.appendChild(editor);
 *
 * // handle save event
 * editor.addEventListener("editorsave", (event) => {
 * console.log("Editor state:", event.detail.state);
 * const dataUrl = event.detail.dataUrl;
 *
 * // download the rasterized image
 * if (dataUrl) {
 *   const link = document.createElement("a");
 *   link.href = dataUrl;
 *   link.download = "annotation.png";
 *   link.click();
 * }
 * });
 * ```
 */
export declare class AnnotationEditor extends HTMLElement {
    private _mainContainer?;
    private _toolbarContainer?;
    private _toolboxContainer?;
    private _markerAreaContainer?;
    private _markerArea;
    /**
     * The underlying `MarkerArea` component.
     * This is the main component that handles the annotation functionality.
     */
    get markerArea(): MarkerArea;
    private _toolbar?;
    private _toolbox?;
    /**
     * The target image to annotate.
     */
    targetImage?: HTMLImageElement;
    private _theme;
    /**
     * The theme of the editor.
     * Can be either "light" or "dark".
     *
     * The default is "light".
     */
    get theme(): "light" | "dark";
    /**
     * Set the theme of the editor.
     * Can be either "light" or "dark".
     *
     * The default is "light".
     */
    set theme(value: "light" | "dark");
    private _settings;
    /**
     * The settings for the editor.
     * This is used to configure the editor behavior.
     */
    get settings(): AnnotationEditorSettings;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private addStyles;
    private createLayout;
    private addMarkerArea;
    private registerMarkerType;
    private addToolbar;
    private handleSaveButtonClick;
    private handleCloseButtonClick;
    private addToolbox;
    private attachEvents;
    /**
     * Loads a previously saved annotation into the editor.
     *
     * @param state The state to restore.
     */
    restoreState(state: AnnotationState): void;
    private closeOpenDropdowns;
    addEventListener<T extends keyof AnnotationEditorEventMap>(type: T, listener: (this: AnnotationEditor, ev: AnnotationEditorEventMap[T]) => void, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions | undefined): void;
    removeEventListener<T extends keyof AnnotationEditorEventMap>(type: T, listener: (this: AnnotationEditor, ev: AnnotationEditorEventMap[T]) => void, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void, options?: boolean | EventListenerOptions | undefined): void;
}

/**
 * Annotation editor custom event data.
 */
export declare interface AnnotationEditorEventData {
    /**
     * The annotation editor instance.
     */
    annotationEditor: AnnotationEditor;
}

/**
 * Annotation editor custom event types.
 */
declare interface AnnotationEditorEventMap {
    /**
     * Close button clicked.
     */
    editorclose: CustomEvent<AnnotationEditorEventData>;
    /**
     * Save button clicked.
     */
    editorsave: CustomEvent<AnnotationEditorRenderEventData>;
}

/**
 * Annotation editor custom event data for the render/save event.
 */
export declare interface AnnotationEditorRenderEventData extends AnnotationEditorEventData {
    /**
     * The annotation state.
     */
    state: AnnotationState;
    /**
     * The rendered image data URL.
     */
    dataUrl?: string;
}

export declare interface AnnotationEditorSettings {
    /**
     * Whether the rasterized image should be rendered on save.
     * If set to false the `editorsave` event will not contain the `dataUrl` property.
     */
    renderOnSave?: boolean;
    /**
     * Configuration for the image renderer.
     * This is used to configure the image rendering settings.
     */
    rendererSettings: {
        /**
         * Whether the image should be rendered at the original (natural) target image size.
         */
        naturalSize?: boolean;
        /**
         * Rendered image type (`image/png`, `image/jpeg`, etc.).
         */
        imageType?: string;
        /**
         * For formats that support it, specifies rendering quality.
         *
         * In the case of `image/jpeg` you can specify a value between 0 and 1 (lowest to highest quality).
         *
         * @type {number} - image rendering quality (0..1)
         */
        imageQuality?: number;
        /**
         * When set to true, only the marker layer without the original image will be rendered.
         */
        markersOnly?: boolean;
        /**
         * When set and `naturalSize` is `false` sets the width of the rendered image.
         *
         * Both `width` and `height` have to be set for this to take effect.
         */
        width?: number;
        /**
         * When set and `naturalSize` is `false` sets the height of the rendered image.
         *
         * Both `width` and `height` have to be set for this to take effect.
         */
        height?: number;
    };
}

/**
 * AnnotationViewer is a web component that allows you to display an image with an annotations overlay on top of it.
 *
 * @example
 * ```js
 * import { AnnotationViewer } from "@markerjs/markerjs-ui";
 *
 * // image to annotate
 * const targetImage = document.createElement("img");
 * targetImage.src = "image.jpg";
 *
 * // create the viewer
 * const viewer = new AnnotationViewer();
 * viewer.targetImage = targetImage;
 * containerDiv.appendChild(viewer);
 * viewer.show(savedState);
 * ```
 */
export declare class AnnotationViewer extends HTMLElement {
    private _mainContainer?;
    private _toolbarContainer?;
    private _markerViewContainer?;
    private _markerView;
    /**
     * The underlying marker.js 3 `MarkerView` component.
     * This is the component that actually renders the annotations on top of the image.
     */
    get markerView(): MarkerView;
    private _toolbar?;
    /**
     * The target image element to be annotated.
     * This is the image that will be displayed in the viewer.
     */
    targetImage?: HTMLImageElement;
    private _theme;
    /**
     * The theme of the viewer. Can be either "light" or "dark".
     */
    get theme(): "light" | "dark";
    /**
     * Sets the theme of the viewer. Can be either "light" or "dark".
     */
    set theme(value: "light" | "dark");
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private addStyles;
    private createLayout;
    private addMarkerView;
    private addToolbar;
    /**
     * Displays a previously saved annotation in the viewer.
     *
     * @param state The state to be shown in the viewer.
     */
    show(state: AnnotationState): void;
}

export { }
