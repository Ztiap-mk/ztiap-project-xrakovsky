import { resourceManager } from "./resources";

let playingSound: HTMLAudioElement = null;
let muted: boolean = false;


class Sounds {
    public playSound(name: string) {
        this.stop();
        playingSound = resourceManager.getSound(name);
        playingSound.muted = muted;
        playingSound.currentTime = 0;
        playingSound.loop = false;
        playingSound.play();
    }

    public stop() {
        if(playingSound) {
            playingSound.currentTime = 0;
            playingSound.pause();
        }
    }

    public soundMute() {
        muted = muted == false;

        playingSound.muted = muted;
    }

    public get _muted() {
        return muted;
    }

}

export const soundManager: Sounds = new Sounds();