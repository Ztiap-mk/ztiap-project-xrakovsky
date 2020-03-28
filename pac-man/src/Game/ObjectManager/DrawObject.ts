import { Objects } from "./Objects";

export class DrawObjects extends Objects {
    constructor(x: number, y: number, width: number, heigth: number, protected image: HTMLImageElement) {
        super(x, y, width, heigth);
    }
    
    public render(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}