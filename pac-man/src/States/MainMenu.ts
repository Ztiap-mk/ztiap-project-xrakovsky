import { TextObj, ImageObj } from "../Objects";
import { StateManager } from "./StateManager";
import { Game } from "../game";
import { resourceManager } from "../resources";
import { soundManager } from "../sounds";

export class MainMenu {
    protected objects: TextObj[] = [];
    protected imageObjects: ImageObj[] = [];
    protected stateManager: StateManager = new StateManager(); 
    protected game = new Game();
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    public init() {
        const startGame = new TextObj(this.canvas.width / 2 - 50, this.canvas.height / 2 - 40, 200, 40, "Start Game", 30, "yellow", "left");
        const instructions = new TextObj(this.canvas.width / 2 - 50, this.canvas.height / 2, 200, 40, "Instructions", 30, "white", "left");
        const soundToggle = new TextObj(this.canvas.width / 2 - 50, this.canvas.height / 2 + 40, 100, 30, "Sound ON/OFF", 20, "white", "start");
        
        soundToggle.onClick(() => {
            soundManager.soundMute();
        })
        startGame.onClick(() => {
            soundManager.playSound("intro");
            this.stateManager.changeState("gameState");
        });
        instructions.onClick(() => {
            this.stateManager.changeState("instructions");
        });
        this.objects = [
            startGame, 
            instructions,
            new TextObj(this.canvas.width / 2 - 60, 100, 200, 60, "pac-man", 60, "white", "start"),
            soundToggle
        ];

        this.imageObjects = [
            new ImageObj(150, -135, 200, 200, resourceManager.getImage("pacman")),
        ];
        this.render();
    } 

    public deInit() {
        this.game.clear();
    }

    public render() {
        this.objects.forEach(obj => obj.render(this.ctx));
        this.imageObjects.forEach(obj => obj.render(this.ctx));
    }
    
    public handleEvent(ev: MouseEvent) {
        this.objects.forEach(obj => obj.handleEvent(ev));
    }

}