import { StateManager } from "../StateManager/StateManager";
import { DrawObject } from "../ObjectManager/DrawObject";
import { resourceManager } from "../ResourceManager/ResourceManager";
import { TextObject } from "../ObjectManager/TextObject";
import { throws } from "assert";

export class Game {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    protected stateManager = new StateManager();

    constructor() {
        this.canvas = document.getElementById("pac-man") as HTMLCanvasElement;
        const ctx = this.canvas.getContext("2d");

        if(!ctx) console.error("Context not available");

        this.ctx = ctx;
    }

    public async start() {
        try {
            await this.stateManager.initialize();
        } catch (err) {
            console.error(err);
        }
        this.initialize()
        this.renderLoop();
    }

    private initialize() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.stateManager.getState() == "mainMenuState") {
            this.canvas.addEventListener("click", (event) => {
                let x = event.pageX;
                let y = event.pageY;
                if(x > 300 && x < 600 && y > 240 && y < 260) {
                    this.stateManager.changeState("gameState");
                }
            })
        }
    
    }

    private clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private render() {
        this.clear();
        this.initialize()
        this.stateManager.render(this.ctx);
    }

    private renderLoop() {
        requestAnimationFrame(() => {
            this.clear()
            this.render()
            this.renderLoop();
        })
    }

}