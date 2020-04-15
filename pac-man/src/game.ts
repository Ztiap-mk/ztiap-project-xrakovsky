import { StateManager } from "./States/StateManager";
import { resourceManager } from "./resources";

export class Game {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    protected time: number;
    protected stateManager: StateManager = new StateManager();

    constructor() {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.time = Date.now();
    }

    public async init() {
        this.clear();
        this.initEvents();
        try {
            await resourceManager.initManager();
        } catch (err) {
            console.error(err);
        }
        this.stateManager.initStates(this.canvas, this.ctx);
        this.renderLoop();
    }

    private initEvents() {
        this.canvas.addEventListener("click", (e) => {
            this.handleEvent(e);
        });
    }

    private render() {
        this.clear();
        this.stateManager.render();
    }

    public clear() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private renderLoop() {
        this.time = Date.now();
        this.step();
    }

    private step() {
        //const now = Date.now()
        //const dt = (now - this.time) / 100;
        //this.time = now;
        
        this.render();
        //console.log(this.stateManager._currentState);
        requestAnimationFrame(() => this.step());
    }

    private handleEvent(e: MouseEvent) {
        this.stateManager.handleEvent(e);
    }
}