import { State } from "./State";
import { DrawObject } from "../ObjectManager/DrawObject";
import { resourceManager } from "../ResourceManager/ResourceManager";

export class GameState extends State {
    constructor() {
        super();
        this.objects = [
            new DrawObject(500, 300, 50, 50, resourceManager.getImage("pac-man"))
        ]
    }
}