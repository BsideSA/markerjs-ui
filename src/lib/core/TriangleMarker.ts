import { ShapeMarkerBase } from "@markerjs/markerjs3"

export class TriangleMarker extends ShapeMarkerBase {
    public static typeName = "TriangleMarker"
    public static title = "Triangle marker"

    constructor(container: SVGGElement) {
        super(container)

        this.strokeColor = "#ff0000"
        this.fillColor = "#0000"
        this.strokeWidth = 3
    }

    protected getPath(width = this.width, height = this.height): string {
        return `M ${width / 2} 0 L ${width} ${height} L 0 ${height} Z`
    }
}
