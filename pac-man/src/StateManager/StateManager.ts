import { MainMenuState } from "./MainMenuState";
import { resourceManager } from "../ResourceManager/ResourceManager";
import { GameState } from "./GameState";

export class StateManager {
    private possibleStates: any = {};
    private currentState: any;
    
    public async initialize() {
        await resourceManager.loadAssets();
        this.possibleStates = {
            mainMenuState: new MainMenuState(),
            gameState: new GameState(),
        }

        this.currentState = this.possibleStates.mainMenuState;
    }

    public getState() {
        if(this.currentState == this.possibleStates.mainMenuState) {
            return "mainMenuState";
        }
        if(this.currentState == this.possibleStates.gameState) {
            return "gameState";
        }
    }

    public changeState(state: string) {
        const newState = this.possibleStates[state];
        if(!newState) console.error("Invalid game state (" + state + ")");
        this.currentState = newState;
    }
    public render(context: CanvasRenderingContext2D) {
        this.currentState.render(context);
    }
}