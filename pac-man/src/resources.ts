const IMAGES: { name: string; src: string; }[] = [
    {name: "blinky", src: "./images/blinky.png"},
    {name: "pinky", src: "./images/pinky.png"},
    {name: "clyde", src: "./images/clyde.png"},
    {name: "inky", src: "./images/inky.png"},
    {name: "pacman", src: "./images/pacman.png"},
];

const SOUNDS: { name: string; src: string; }[] = [
    {name: "intro", src: "./sounds/game_start.wav"},
    {name: "death", src: "./sounds/death_1.wav"},
];

class ResourceManager {
    private images: Map<string, HTMLImageElement> = new Map();
    private sounds: Map<string, HTMLAudioElement> = new Map();

    public initManager = async () => {
        await this.loadImgs();
        await this.loadSounds().catch(err => console.error(err));
    };

    public getImage = (name: string) => {
        const image = this.images.get(name);
        if (!image) throw new Error("Image named " + name + " does not exist.");
        return image;
    };

    public getSound = (name: string) => {
        const sound = this.sounds.get(name);
        if (!sound) throw new Error("No sound named " + name + " exists");
        return sound;
    };

    private loadImgs = async () => {
        await Promise.all(IMAGES.map(img => this.loadImg(img)));
    };

    private loadSounds = async () => {
        await Promise.all(SOUNDS.map(sound => this.loadSound(sound)));
    };

    private loadSound = async ({name, src}: { src: string; name: string }) => new Promise<HTMLAudioElement>((resolve, reject: (reason?: any) => void) => {
        const sound: HTMLAudioElement = new Audio(src);
        sound.preload = "auto";
        sound.controls = false;
        sound.style.display = "none";
        sound.oncanplaythrough = () => {
            this.sounds.set(name, sound);
            resolve(sound);
        }
        sound.onerror = (err: Event | string) => reject(err);
    });

    private loadImg = async ({name, src}: { src: string; name: string; }) => new Promise<HTMLImageElement>((resolve, reject: (reason?: any) => void) => {
        const image: HTMLImageElement = new Image();
        image.src = src;
        image.onload = () => {
            this.images.set(name, image);
            resolve(image);
        }
        image.onerror = (err: Event | string) => reject(err);
    });
}

export const resourceManager = new ResourceManager();