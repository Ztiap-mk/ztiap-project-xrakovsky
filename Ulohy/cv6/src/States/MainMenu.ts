import { CanvasInit } from "../Game/CanvasInit";
import { start, instructions } from "..";


export class MainMenuState {
    protected mainCanvas = new CanvasInit();
    protected canvas = this.mainCanvas.canvas;
    protected ctx = this.mainCanvas.canvas.getContext("2d");


    public initMenu() {
        this.clear();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.getText();
        this.handleText();
    }

    private getText() {
        this.createText("Start Game", this.canvas.width / 2, this.canvas.height / 2, "center", "yellow", "30px Ariel");
        this.createText("Instructions", this.canvas.width / 2, this.canvas.height / 2 + 50, "center", "white", "30px Ariel");
    }

    private handleText() {
        window.addEventListener("click", (e) => {
            const width = this.canvas.width / 2;
            const height = this.canvas.height / 2;
            let mousePos = this.mainCanvas.getMousePosition(this.canvas, e);
            if(mousePos.x >= width - 60 && mousePos.x <= width + 60 && mousePos.y >= height - 20 && mousePos.y <= height) {
                this.clear();
                start();
            } else if(mousePos.x >= width - 60 && mousePos.x <= width + 60 && mousePos.y >= height + 20 && mousePos.y <= height + 60) {
                this.clear();
                instructions();
            }
        })
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