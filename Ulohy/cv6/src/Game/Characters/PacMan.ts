import { CanvasInit } from "../CanvasInit";
import { start } from "../../index";
import { MainMenuState } from "../../States/MainMenu";

export class PacMan {
    public x: number;
    public y: number;
    protected radius: number;
    public speed: { dx: number; dy: number; magnitude: number; };
    protected mainCanvas = new CanvasInit();
    protected ctx = this.mainCanvas.canvas.getContext("2d");
    protected mouthAnimation: { speed: number; gap: number; angle: number; dir: number; update: () => void; };
    protected direction: { name: string; angle: number; };


    constructor(x: number, y: number, radius: number, speed: number) {
        this.x = x;
        this.y = y;
        this.speed = {
            dx: 0,
            dy: 0,
            magnitude: 3,
        };

        this.direction = {
            name: "RIGHT",
            angle: 0
        }

        this.radius = radius;
        
        this.mouthAnimation = {
            speed: 0.05,
            gap: 0.3,
            angle: 0,
            dir: 1,
            update: function() {
                if(this.dir == 1) {
                    this.angle += this.speed;
                } else {
                    this.angle -= this.speed;
                }

                if(this.angle > 1 - this.gap || this.angle < 0) {
                    this.dir *= -1;
                }
            }
        }
    }

    public get pacmanCoor(): {x: number; y: number} {
        let coor: { x: number, y: number } = {
            x: this.x,
            y: this.y,
        }
        return coor;
    }
    
    private isGameOver(): boolean {
        let pacManCoor = this.pacmanCoor;
        const { width, height } = this.mainCanvas.canvas
        if(pacManCoor.x > width- this.radius || pacManCoor.y > height - this.radius || pacManCoor.x < this.radius || pacManCoor.y  < this.radius) {
            this.mainCanvas.clearCanvas();
            this.ctx.fillRect(0,0, width, height);
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Game Over", width / 2, height / 2);
            this.ctx.fillText("Play Again", width / 2, height / 2 + 30);


            
            this.mainCanvas.canvas.addEventListener("click", (e: MouseEvent) => {
                let mousePos = this.mainCanvas.getMousePosition(this.mainCanvas.canvas, e);
                if(mousePos.x >= width / 2 - 60 && mousePos.x <= width /2 + 60 && mousePos.y >= height / 2 + 10 && mousePos.y <= height / 2 + 60) {
                    this.mainCanvas.render();
                    new MainMenuState().initMenu();
                    return false;
                }
            });


            return true;
        } else return false;
    }

    public async initPacman() {
        this.mainCanvas.render();
        await this.drawPacMan();
        this.update();

        document.addEventListener("keydown", (e) => {
            this.move(e.keyCode);
        })
    }


    private async drawPacMan() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
       
        if(this.direction.name == "LEFT") {
            this.ctx.scale(1, -1);
        }
       
        this.ctx.rotate(this.direction.angle);
        this.ctx.translate(-this.x, -this.y);

        this.ctx.beginPath()

        this.ctx.arc(this.x, this.y, this.radius, Math.PI / 4 - this.mouthAnimation.angle, 1.75 * Math.PI + this.mouthAnimation.angle);
        this.ctx.lineTo(this.x, this.y);

        const newX = this.radius * Math.cos(Math.PI / 4 - this.mouthAnimation.angle) + this.x;
        const newY = this.radius * Math.sin(Math.PI / 4 - this.mouthAnimation.angle) + this.y;
        this.ctx.lineTo(newX, newY);

        this.ctx.fillStyle = "yellow";
        this.ctx.fill();

        this.ctx.closePath(); // uvidíme

        await this.drawPacManEye();

        this.ctx.restore();

    }

    private async drawPacManEye() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y - this.radius / 2, this.radius * 0.15, 0, 2 * Math.PI)
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();
    }

    private stop() {
        this.speed.dx = 0;
        this.speed.dy = 0;
    }

    private update() {
        if(!this.isGameOver()) {
            this.x += this.speed.dx;
            this.y += this.speed.dy;
            this.mouthAnimation.update();
        }
    }

    private async move(code: string | number) {
            if(code == 38 || code == "UP") {
                this.direction = {
                    name: "UP", 
                    angle: Math.PI * 1.5
                };
                this.speed.dy = -this.speed.magnitude;
                this.speed.dx = 0;
            } else if (code == 37 || code == "LEFT") {
                this.direction = {
                    name: "LEFT",
                    angle: Math.PI,
                };
                this.speed.dx = -this.speed.magnitude;
                this.speed.dy = 0;
            } else if (code == 40 || code == "DOWN") {
                this.direction = {
                    name: "DOWN",
                    angle: Math.PI / 2,
                };
                this.speed.dx = 0;
                this.speed.dy = this.speed.magnitude;
            } else if (code == 39 || code == "RIGHT") {
                this.direction = {
                name: "RIGHT",
                angle: 0
            }
                this.speed.dx = this.speed.magnitude;
                this.speed.dy = 0;
        } else if (code == 71) {
            this.stop();
        }
    }
}