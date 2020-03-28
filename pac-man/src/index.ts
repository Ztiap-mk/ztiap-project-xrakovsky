import { Game } from "./Game/Game";

const game = new Game();

game.start().catch(err => console.error(err));
