export class CanvasInit {
    public canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;

    constructor () {
        this.canvas = document.getElementById("pac-man") as HTMLCanvasElement;
        const ctx = this.canvas.getContext("2d");
        if(!ctx) throw new Error("No canvas context");

        this.ctx = ctx;
    }

    public async start() {
        this.initCanvas();
    }

    private initCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public render() {
        this.clearCanvas();
        this.initCanvas();
    }

    public getMousePosition(canvas: HTMLCanvasElement, e: MouseEvent) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
}