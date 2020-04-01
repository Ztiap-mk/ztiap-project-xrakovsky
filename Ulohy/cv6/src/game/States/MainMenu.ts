import { Game } from "../Game";
import { main } from "../../main";
import { Instructions } from "./Instruction";

export class MainMenu extends Game {
    protected instructions = new Instructions();
    constructor() {
        super("pac-man");
    }
    
    public async startMenu() {
        await this.drawPacmanMenu();
    }

    private async drawPacmanMenu() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "yellow";
        this.ctx.textAlign = "center";
        this.ctx.font = "30px Ariel";
        this.ctx.fillText("Start Game", this.canvas.width/2, this.canvas.height/2);
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Instructions", this.canvas.width/2, this.canvas.height/2 + 50);

        this.canvas.addEventListener("mousedown", (e) => {
            const width = (this.canvas.width / 2);
            const height = (this.canvas.height / 2);
            let mousePosition = this.getCursorPosition(this.canvas, e);
            if (mousePosition.x >= width - 60 && mousePosition.x <= width + 60 && mousePosition.y >= height - 30 && mousePosition.y <= height){
                this.clearMenu();
                main();
            } else if (mousePosition.x >= width - 60 && mousePosition.x <= width + 60 && mousePosition.y >= (height + 50) - 20 && mousePosition.y <= height + 80) {
                this.clearMenu();
                this.instructions.initInstructions();
            }
        });
    }

    private clearMenu() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
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
}