import { ImageObj, TextObj, WallObj } from "../Objects";
import { StateManager } from "./StateManager";
import { Game } from "../game";
import { resourceManager } from "../resources";
import { soundManager } from "../sounds";
import {PacMan} from "../pacMan";

export class GameState {
    protected textObjects: TextObj[] = [];
    protected characterObjects: ImageObj[] = [];
    protected wallObjects: WallObj[] = [];
    protected stateManager: StateManager = new StateManager();
    protected game = new Game();
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    public pacMan: PacMan;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    public init() {
        const score = new TextObj(50, 10, 200, 20, "Score: 0", 20, "white", "start");
        const highScore = new TextObj(this.canvas.width / 2 - 20, 10, 200, 20, "High Score: 0", 20, "white", "start");
        const blinky = new ImageObj(this.canvas.width / 2, 225, 30, 30, resourceManager.getImage("blinky"));
        const pinky = new ImageObj(this.canvas.width / 2 - 65, 300, 30, 30, resourceManager.getImage("pinky"));
        const clyde = new ImageObj(this.canvas.width / 2, 300, 30, 30, resourceManager.getImage("clyde"));
        const pacman = new PacMan(this.canvas.width / 2, 415, 30, 30, 15);
        const inky = new ImageObj(this.canvas.width / 2 + 60, 300, 30, 30, resourceManager.getImage("inky"));
        const dock = new WallObj(this.canvas.width / 2 - 70, this.canvas.height / 2 - 10, 170, 100);
        const pacman_lives_1 = new ImageObj(50, this.canvas.height - 45, 20, 20, resourceManager.getImage("pacman"));
        const pacman_lives_2 = new ImageObj(75, this.canvas.height - 45, 20, 20, resourceManager.getImage("pacman"));
        const soundToggle = new TextObj(this.canvas.width - 110, 10, 100, 20, "Sound ON/OFF", 20, "white", "start");
        const gameOverScreen = new TextObj(this.canvas.width - 100, this.canvas.height - 20, 100, 20, "Game Over Screen >", 20, "white", "start");
        soundToggle.onClick(() => {
            soundManager.soundMute();
        });

        gameOverScreen.onClick(() => {
            this.stateManager.changeState("gameOver");
            soundManager.playSound("death");
        });

        this.textObjects = [
            score,
            highScore,
            soundToggle,
            gameOverScreen,
        ];

        this.characterObjects = [
            blinky,
            pinky,
            clyde,
            inky,
            pacman_lives_1,
            pacman_lives_2
        ];

        this.wallObjects = [
            // okraje
            new WallObj(30, 50, 740, 20), //top
            new WallObj(30, this.canvas.height - 50, 740, 20), //bottom
            new WallObj(30, 50, 20, 500), // left
            new WallObj(this.canvas.width - 50, 50, 20, 500), // right
            dock,
            new WallObj(30, this.canvas.height / 2 - 50, 100, 20),
            new WallObj(30, this.canvas.height / 2 + 100, 100, 20),
            new WallObj(this.canvas.width - 30, this.canvas.height / 2 - 50, -100, 20),
            new WallObj(this.canvas.width - 30, this.canvas.height / 2 + 100, -100, 20),
            new WallObj(100, this.canvas.height - 120, 600, 20),
            new WallObj(100, 120, 600, 20),
            new WallObj(180, 200, 20, 240),
            new WallObj(this.canvas.width - 190, 200, 20, 240)
        ];

        this.pacMan = pacman;

        this.render();
    }

    public deInit() {
        this.game.clear();
    }

    public render() {
        this.wallObjects.forEach(obj => obj.render(this.ctx));
        this.textObjects.forEach(obj => obj.render(this.ctx));
        this.characterObjects.forEach(obj => obj.render(this.ctx));
        this.pacMan.render(this.ctx);
        this.wallObjects.forEach(obj => this.wallCollision(this.pacMan, obj));
    }

    public wallCollision(pacman: PacMan, wall: WallObj) {

        const dx = (pacman._coor.x  + pacman._coor.width / 2) - (wall._coor.x + wall._coor.width / 2);
        const dy = (pacman._coor.y + pacman._coor.height / 2) - (wall._coor.y + wall._coor.height /2)
        const width = (pacman._coor.width + wall._coor.width) / 2;
        const height = (pacman._coor.height + wall._coor.height) /2;
        const crossWidth = width * dy;
        const crossHeight = height * dx;

        if(Math.abs(dx) <= width && Math.abs(dy) <= height){
            if(crossWidth > crossHeight) {
                if(crossWidth > - crossHeight) {
                    pacman.stop();
                } else{
                    pacman.stop();
                }
            } else {
                if(crossWidth > -crossHeight) {
                    pacman.stop();
                } else pacman.stop();
            }
        }
    }

    public handleEvent(ev: any) {
        this.textObjects.forEach(obj => obj.handleEvent(ev));
    }

}