import { MainMenu } from "./MainMenu";
import { InstructionState } from "./InstructionState";
import { GameState } from "./GameState";
import { GameOver } from "./GameOver";

let STATES: { mainMenu: any; instructions: any; gameState: any; gameOver: any; };
let currentState: { init: () => void; deInit: () => void; handleEvent: (arg0: MouseEvent) => void; render: () => void; }

export class StateManager {
    public get _currentState() {
        return currentState;
    }

    public initStates(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {

        STATES = {
            mainMenu: new MainMenu(canvas, ctx),
            instructions: new InstructionState(canvas, ctx),
            gameState: new GameState(canvas, ctx),
            gameOver: new GameOver(canvas, ctx)
        }
        currentState = STATES.mainMenu;
        currentState.init();
    }

    public changeState(state: string) {
        const newState = STATES[state];

        if (!newState) throw new Error("State " + state + " not found ");
        currentState.deInit();
        currentState = newState;
        currentState.init();
    }

    public handleEvent(ev: MouseEvent) {
        currentState.handleEvent(ev);
    }

    public render() {
        currentState.render();
    }

    public clear(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        ctx.fillStyle = "Black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}