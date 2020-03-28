import { stateManager } from "./StateManager/StateManager";

export class Game {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById("pac-man") as HTMLCanvasElement;
        const ctx = this.canvas.getContext("2d");

        if(!ctx) {
            throw console.error("Žiadny kontext canvasu!");
        }

        this.ctx = ctx;
    }

    public async start() {
        try {
            stateManager.start()
        } catch (err) {
            console.error(err);
        }
        await this.initialize();
    }

    public async initialize() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}