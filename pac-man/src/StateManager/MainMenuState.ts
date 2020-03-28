import { State } from "./State";
import { DrawObject } from "../ObjectManager/DrawObject";
import { TextObject } from "../ObjectManager/TextObject";
import { resourceManager } from "../ResourceManager/ResourceManager";

export class MainMenuState extends State {
    constructor() {
        super();
        this.objects = [
            new DrawObject(400, 0, 100, 100, resourceManager.getImage('pac-man')),
            new TextObject(300, 60, "Pac-Man", "white", "30px Ariel", "left"),
            new TextObject(400, 240, "Start Game", "yellow", "30px Ariel", "center"),
            new TextObject(400, 280, "Instructions", "white", "30px Ariel", "center"),
        ];
    }
}