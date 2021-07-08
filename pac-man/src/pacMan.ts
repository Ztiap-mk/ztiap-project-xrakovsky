import { Objects } from "./Objects";

export class PacMan extends Objects {
    speed: { dx: number; dy: number; magnitude: number; };
    direction: { name: string; angle: number; };
    radius: number;
    mouthAnimation: { speed: number; gap: number; angle: number; dir: number; update: () => void; };
    
    constructor(x: number, y: number, w: number, h: number, radius: number) {
        super(x, y, w, h);
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

    public render(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);

        if(this.direction.name == "LEFT") {
            ctx.scale(1, -1);
        }

        ctx.rotate(this.direction.angle);
        ctx.translate(-this.x, -this.y);

        ctx.beginPath()

        ctx.arc(this.x, this.y, this.radius, Math.PI / 4 - this.mouthAnimation.angle, 1.75 * Math.PI + this.mouthAnimation.angle);
        ctx.lineTo(this.x, this.y);

        const newX = this.radius * Math.cos(Math.PI / 4 - this.mouthAnimation.angle) + this.x;
        const newY = this.radius * Math.sin(Math.PI / 4 - this.mouthAnimation.angle) + this.y;
        ctx.lineTo(newX, newY);

        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.closePath();

        this.drawEye(ctx);

        ctx.restore();
        this.update();

        document.addEventListener("keydown", (e) => {
            this.move(e.code);
        })
    }

    private drawEye(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y - this.radius / 2, this.radius * 0.15, 0, 2 * Math.PI)
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    }

    public move(code: string | number) {
        if(code == 38 || code == "ArrowUp") {
            this.direction = {
                name: "UP",
                angle: Math.PI * 1.5
            };
            this.speed.dy = -this.speed.magnitude;
            this.speed.dx = 0;
        } else if (code == 37 || code == "ArrowLeft") {
            this.direction = {
                name: "LEFT",
                angle: Math.PI,
            };
            this.speed.dx = -this.speed.magnitude;
            this.speed.dy = 0;
        } else if (code == 40 || code == "ArrowDown") {
            this.direction = {
                name: "DOWN",
                angle: Math.PI / 2,
            };
            this.speed.dx = 0;
            this.speed.dy = this.speed.magnitude;
        } else if (code == 39 || code == "ArrowRight") {
            this.direction = {
                name: "RIGHT",
                angle: 0
            }
            this.speed.dx = this.speed.magnitude;
            this.speed.dy = 0;
        }
    }

    public update() {
        this.x += this.speed.dx;
        this.y += this.speed.dy;
        this.mouthAnimation.update();
    }

    get _coor(): { x: number; y: number; width: number; height: number; } {
        return {
            width: this.width,
            height: this.height,
            x: this.x,
            y: this.y
        };
    }

    public stop() {
        this.speed.dx = 0;
        this.speed.dy = 0;
    }
}