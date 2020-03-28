import { Objects } from "../ObjectManager/Objects";

export class State {
    protected objects: Objects[] = [];

    public render(context: CanvasRenderingContext2D) {
        this.objects.forEach(object => object.render(context));
    }
}