import { CanvasInit } from "../CanvasInit";
import { pacManCoor } from "../../index";

export class Ghost {
    protected x: number;
    protected y: number;
    protected w: number;
    protected h: number;
    protected src: string;
    protected mainCanvas = new CanvasInit();
    protected ctx: CanvasRenderingContext2D = this.mainCanvas.canvas.getContext("2d");
    protected speed: { dx: number; dy: number; magnitude: number; }


    constructor(x: number, y: number, w: number, h: number, src: string) {
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h;
        this.src = src;
        this.speed = {
            dx: 0,
            dy: 0,
            magnitude: 1
        };
    }

    public async initGhost() {
        await this.drawGhost(this.x, this.y, this.w, this.h);
        await this.update();
    }

    private async drawGhost(x: number, y: number, w: number, h: number) {
        const img: HTMLImageElement = new Image();
        img.src = this.src;
        this.ctx.drawImage(img, x, y, w, h);
    }

    private async update() {
        this.x += this.speed.dx;
        this.y += this.speed.dy;

        let ghostCoor = {
            x: this.x,
            y: this.y
        }

        if(ghostCoor !== pacManCoor) {
            if(ghostCoor.x > pacManCoor.x) {
                this.move("LEFT");
            } else if (ghostCoor.x < pacManCoor.x) {
                this.move("RIGHT");
            } else if (ghostCoor.y > pacManCoor.y) {
                this.move("UP");
            } else if (ghostCoor.y < pacManCoor.y) {
                this.move("DOWN");
            }
        }
    }

    private move(code: string) {
        if(code == "UP") {
            this.speed.dy = -this.speed.magnitude;
            this.speed.dx = 0;
        } else if (code == "LEFT"){
            this.speed.dx = -this.speed.magnitude;
            this.speed.dy = 0;
        } else if (code == "DOWN"){
            this.speed.dx = 0;
            this.speed.dy = this.speed.magnitude;
        } else if (code == "RIGHT"){
            this.speed.dx = this.speed.magnitude;
            this.speed.dy = 0;
        } 
    }
}