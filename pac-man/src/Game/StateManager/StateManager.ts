import { resourceManager } from "../ResourceManager/ResourceManager";
import { MainMenuState } from "./MainMenuState";

export class StateManager {
    private possibleStates: any = {};
    private currentState: any;

    public async start() {
        await resourceManager.loadAssets();
        this.possibleStates = {
            mainMenuState: new MainMenuState(),
        }

        this.currentState = this.possibleStates.mainMenuState;
    }

    public changeCurrentState(state: string) {
        const newState = this.possibleStates[state];
        if(!newState) {
            throw console.error("Zvolené štádium " + state + " neexistuje");
        }
        this.currentState = newState;
    }

    public render(context: CanvasRenderingContext2D) {
        this.currentState.render();
    }
}

export const stateManager = new StateManager();