import { State } from "./State";
import { DrawObjects } from "../ObjectManager/DrawObject";
import { resourceManager } from "../ResourceManager/ResourceManager";

export class MainMenuState extends State {
    constructor() {
        super();

        this.objects = [
            new DrawObjects(200, 300, 40, 40, resourceManager.getImage("pac-man")),
        ]
    }
}