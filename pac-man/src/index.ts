import { Game } from "./game";

const game = new Game();

game.init().catch(err => console.error(err));