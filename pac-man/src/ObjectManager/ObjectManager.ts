
export class ObjectManager {
    protected x: number;
    protected y: number;
    protected width: number;
    protected heigth: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = height
    }

    public render(context: CanvasRenderingContext2D) {
        context.fillRect(this.x, this.y, this.width, this.heigth);
    }
}