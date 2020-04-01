import { Game } from "../Game";
import { mainMenuInit } from "../../main";

export class Instructions extends Game {
    constructor() {
        super("pac-man");
    }

    public async initInstructions() {
        await this.drawInstructions();
    }

    private async drawInstructions() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.createText("Instructions", this.canvas.width / 2, 60, "center", "yellow");
        this.createText("1. Move by mouse", 50, 120, "left", "white");
        this.createText("2. Enjoy", 50, 180, "left", "white");

        this.createText("X", this.canvas.width - 50, 60, "right", "red");

        this.canvas.addEventListener("mousedown", (e) => {
            let mousePosition = this.getCursorPosition(this.canvas, e);
            if(mousePosition.x > this.canvas.width - 70 && mousePosition.x < this.canvas.width  - 50 && mousePosition.y > 30 && mousePosition.y < 90) {
                this.clearInstructions();
                mainMenuInit();    
            }
        });
    }

    private clearInstructions() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private getCursorPosition(canvas: HTMLCanvasElement, event: { clientX: number; clientY: number; }) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        return {
            x,
            y
        };
    }

    private createText(text: string, x: number, y: number, align: CanvasTextAlign, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        this.ctx.fillText(text, x, y);
    }
}
