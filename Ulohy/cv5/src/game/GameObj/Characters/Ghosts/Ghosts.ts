import { Game } from "../../../Game";

export class Ghosts extends Game {
    protected dx: number;
    protected dy: number;
    protected x: number;
    protected y: number;
    protected w: number;
    protected h: number;
    protected saveDx: number;
    protected saveDy: number;
    protected img: HTMLImageElement;
    protected src: string;

    constructor(x: number, y: number, w:number, h:number, dx: number, dy: number, src: string) {
        super("pac-man");
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.dy = dy;
        this.saveDx = this.dx;
        this.saveDy = this.dy;
        this.src = src;
    }

    public async init() {
        await this.drawGhost(this.x, this.y, this.h, this.w, this.src);
    }

    private async drawGhost(x: number, y:number, w: number, h: number, src:string) {
        const img = new Image();
        img.src = src;
        this.ctx.drawImage(img, x, y, w, h);

        this.animate(x, y);
    }

    private animate(x: number, y: number) {
        requestAnimationFrame(() => {
            if(x + this.dx > this.canvas.width - this.w || x + this.dx < this.w) {
                this.dx = -(this.dx);
                this.saveDx = this.dx;
            }
            if(y + this.dy > this.canvas.height - this.h || y + this.dy < this.h) {
                this.dy = -(this.dy);
                this.saveDy = this.dy;
            }  
            
            window.addEventListener("keydown", event => {
                
                if (event.isComposing || event.keyCode === 229) {
                    return;
                } else if(this.saveDx === this.dx && event.keyCode === 70) {
                    this.stop();
                    console.log(this.dx + " " + this.saveDx);
                } else if(this.saveDx !== this.dx && event.keyCode === 71) {
                    this.start();
                    console.log(this.dx + " " + this.saveDx);
                }
            });
            
            x += this.dx;
            this.drawGhost(x,  y, this.w, this.h, this.src).catch(err => console.error(err));
            
        });
    }

    private stop() {
        this.dx = 0;
        this.dy = 0;
    }

    private start() {
        this.dx = this.saveDx;
        this.dy = this.saveDy;
    }
}