import { ObjectManager } from "./ObjectManager";

export class DrawObject extends ObjectManager {
    constructor(x: number, y: number, width:number, height: number, protected image: HTMLImageElement) {
        super(x, y, width, height);
    }

    public render(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, this.x, this.y, this.width, this.heigth);
    }
}