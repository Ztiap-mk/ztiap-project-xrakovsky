export class Game {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById("pac-man") as HTMLCanvasElement;
        const ctx = this.canvas.getContext("2d");

        if(!ctx) console.error("Context not available");

        this.ctx = ctx;
    }

    public async start() {
        this.initialize()
        this.renderLoop();
    }

    private initialize() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private render() {
        this.clear();
        this.initialize()
    }

    private renderLoop() {
        requestAnimationFrame(() => {
            this.clear()
            this.render()
            this.renderLoop();
        })
    }

}