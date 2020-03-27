import { Game } from "../../../Game";

export class PacMan extends Game {
    protected dx: number;
    protected dy: number;
    protected x: number;
    protected y: number;
    protected r: number;
    protected saveDx: number;
    protected saveDy: number;

    constructor(x: number, y: number, r: number, dx: number, dy: number) {
        super("pac-man");
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.saveDx = this.dx;
        this.saveDy = this.dy;

    }

    public async init() {
        await this.drawPacman(100, this.x, this.y, this.r);
    }

    private async drawPacman(MouthOpen: number, x: number, y: number, radius: number) {
        const open: number = MouthOpen/100;

        this.render();
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, (open * 0.2) * Math.PI, (2 - open * 0.2) * Math.PI);        
        this.ctx.lineTo(x, y);
        this.ctx.closePath();

        this.ctx.fillStyle = "yellow";
        this.ctx.fill();
        
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        
        this.drawEye(x, y);

        this.animate(x, y);
    }

    private drawEye(x: number, y: number) {
        this.ctx.beginPath();
        this.ctx.arc(x - 3, y - 7 , 5, 0, 2 * Math.PI);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
     
        this.ctx.strokeStyle = 'white';
        this.ctx.stroke();
        this.ctx.closePath();
    }

    private animate(x: number, y: number) {
        requestAnimationFrame(() => {
            if(x + this.dx > this.canvas.width - this.r || x + this.dx < this.r) {
                this.dx = -(this.dx);
                this.saveDx = this.dx;
            }
            if(y + this.dy > this.canvas.height - this.r || y + this.dy < this.r) {
                this.dy = -(this.dy);
                this.saveDy = this.dy;
            }  
            
            window.addEventListener("keydown", event => {
                
                if (event.isComposing || event.keyCode === 229) {
                    return;
                } else if(this.saveDx === this.dx && event.keyCode === 70) {
                    this.stop();
                } else if(this.saveDx !== this.dx && event.keyCode === 71) {
                    this.start();
                }
            });
            
            x += this.dx;
            this.drawPacman(100, x,  y, this.r).catch(err => console.error(err));
            
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