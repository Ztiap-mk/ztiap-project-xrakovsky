import { ObjectManager } from "../ObjectManager/ObjectManager";

export class State {
    protected objects: ObjectManager[] = [];

    public render(context: CanvasRenderingContext2D) {
        this.objects.forEach(element => element.render(context));
    }
}