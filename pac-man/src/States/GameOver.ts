import { TextObj } from "../Objects";
import { StateManager } from "./StateManager";
import { Game } from "../game";
import { soundManager } from "../sounds";

export class GameOver {
    protected objects: TextObj[] = [];
    protected stateManager: StateManager = new StateManager();
    protected game = new Game();
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    public init() {
        const play = new TextObj(this.canvas.width / 2 - 50, this.canvas.height / 2 + 40, 200, 40, "Play Again", 30, "white", "left");
        play.onClick(() => {
            soundManager.playSound("intro");
            this.stateManager.changeState("gameState");
        });

        this.objects = [
            new TextObj(this.canvas.width / 2 - 50, this.canvas.height / 2, 200, 40, "Game Over", 60, "yellow", "left"),
            play
        ];
        this.render();
    }

    public deInit() {
        this.game.clear();
    }

    public render() {
        this.objects.forEach(obj => obj.render(this.ctx));
    }

    public handleEvent(ev: MouseEvent) {
        this.objects.forEach(obj => obj.handleEvent(ev));
    }

}