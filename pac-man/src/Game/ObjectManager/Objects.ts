export class Objects {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public render(context: CanvasRenderingContext2D) {
        context.fillRect(0, 0, this.width, this.height);
    }
}