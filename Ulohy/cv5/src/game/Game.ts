
export class Game {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;

    constructor(protected canvasId: string) {

        this.canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
        const ctx = this.canvas.getContext("2d");

        if(!ctx) throw console.error("Žiadny kontext canvasu!");

        this.ctx = ctx;    
    }

    public async init() {
        this.draw();
    }
    
    private draw() {
        
        this.canvas.style.background = "url('/src/game/assets/img/map.png')";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.font = "30px Ariel";
        this.ctx.fillText("pac-man", this.canvas.width/2, 60);
        
    }

    private clear() {
        const {width, height} = this.canvas;

        this.ctx.clearRect(0, 0, width, height);
    }

    public render() {
        this.clear();
        this.draw();
    }
}