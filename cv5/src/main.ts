import { Game } from "./game/Game";
import { PacMan } from "./game/GameObj/Characters/Player/PacMan";
import { Ghosts } from "./game/GameObj/Characters/Ghosts/Ghosts";

export const main = () => {
    const game = new Game("pac-man");
    const pacMan = new PacMan(100, 200, 15, 6, -5);
    const blinky = new Ghosts(200, 300, 60, 60, 5, -5, '/src/game/assets/img/blinky.png');
    const pinky = new Ghosts(300, 400, 30, 30, 5, -5, '/src/game/assets/img/pinky.png');
    

    game.init().catch(err => console.error(err));
    pacMan.init().catch(err => console.error(err));
    blinky.init().catch(err => console.error(err));
    pinky.init().catch(err => console.error(err));
}