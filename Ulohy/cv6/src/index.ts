import { CanvasInit } from "./Game/CanvasInit";
import { PacMan } from "./Game/Characters/PacMan";
import { Ghost } from "./Game/Characters/Ghost";

const canvasInit = new CanvasInit;
const pacMan = new PacMan(500, 500, 20, 10);
const ghosts: Ghost[] = [
    new Ghost(500, 300, 60, 60, "/src/Assets/img/blinky.png"),
    new Ghost(300, 300, 30, 30, "/src/Assets/img/pinky.png"),
];
export let pacManCoor = pacMan.pacmanCoor;

function start() {
    canvasInit.start();
    pacMan.initPacman();
    ghosts.forEach(ghost => {
        ghost.initGhost();
    });
    pacManCoor = pacMan.pacmanCoor;

    requestAnimationFrame(start);
}

start();