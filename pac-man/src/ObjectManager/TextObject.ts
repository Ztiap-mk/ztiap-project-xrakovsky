import { ObjectManager } from "./ObjectManager";

export class TextObject extends ObjectManager {
    constructor(x: number, y: number, protected text: string, protected color: string, protected font: string, protected align: CanvasTextAlign) {
        super(x, y, 0, 0);
    }

    public render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.font = this.font;
        context.textAlign = this.align;
        context.fillText(this.text, this.x, this.y);
    }
}