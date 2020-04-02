import { CanvasInit } from "../Game/CanvasInit";
import { MainMenuState } from "./MainMenu";

export class Instructions {
    protected mainCanvas = new CanvasInit();
    protected canvas = this.mainCanvas.canvas;
    protected ctx = this.mainCanvas.canvas.getContext("2d");
    protected mainMenu = new MainMenuState();

    public initInstructions() {
        this.clear();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.getText();
        this.handleText();
    }

    private getText() {
        this.createText("INSTRUCTIONS", this.canvas.width / 2, 60, "center", "yellow", "30px Ariel");
        this.createText("1. Move by arrows", 0, 100, "left", "white", "30px Ariel");
        this.createText("X", this.canvas.width - 30, 60, "right", "red", "30px Ariel");
    }

    private handleText() {
        window.addEventListener("click", (e) => {
            const width = this.canvas.width;
            let mousePos = this.mainCanvas.getMousePosition(this.canvas, e);
            if(mousePos.x >= width - 40 && mousePos.x <= width - 10 && mousePos.y >= 40 && mousePos.y <= 70) {
                this.clear()
                this.mainMenu.initMenu();
            }
        });
    }
    
    private createText(text: string, x: number, y: number, align: CanvasTextAlign, color: string | CanvasGradient | CanvasPattern, font: string) {
        this.ctx.fillStyle = color;
        this.ctx.font = font;
        this.ctx.textAlign = align;
        this.ctx.fillText(text, x, y);
    }

    public clear() {
        this.ctx.clearRect(0, 0, this.mainCanvas.canvas.width, this.mainCanvas.canvas.height);
    }
}