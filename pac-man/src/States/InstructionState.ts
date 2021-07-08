import { TextObj } from "../Objects";
import { StateManager } from "./StateManager";

export class InstructionState {
    protected stateManager: StateManager = new StateManager();
    protected objects: TextObj[] = [];
    protected ctx: CanvasRenderingContext2D;
    protected canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;

    }

    public init() {
        const close = new TextObj(this.canvas.width - 30, 10, 50, 30, "X", 30, "red", "start");
        close.onClick(() => this.stateManager.changeState("mainMenu"));

        this.objects = [
            new TextObj(this.canvas.width / 2 - 50, 50, 200, 30, "Inštrukcie", 30, "yellow", "left"),
            new TextObj(100, 100, 300, 30, "1. Ovládanie šípkami", 20, "white", "left"),
            new TextObj(100, 140, 300, 30, "2. Nenechať sa chytiť duchom", 20, "white", "left"),
            new TextObj(100, 180, 300, 30, "3. Jedz žlté bodky a získaj body", 20, "white", "left"),
            new TextObj(100, 220, 300, 30, "4. Veľké biele bodky sú power-ups", 20, "white", "left"),
            new TextObj(100, 260, 300, 30, "5. Ovocie pridáva extra body", 20, "white", "left"),
            new TextObj(100, 300, 300, 30, "6. Have fun!", 20, "white", "left"),
            close
        ];
        this.render();
    }

    public deInit() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public render() {
        this.objects.forEach(obj => obj.render(this.ctx));
    }

    public handleEvent(ev) {
        this.objects.forEach(obj => obj.handleEvent(ev));
    }
}