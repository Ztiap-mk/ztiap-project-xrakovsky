const images = require('../Assets/img/*.png');

interface Resource {
    name: string;
    src: string;
}

const IMAGES: Resource[] = [
    {name: 'pac-man', src: 'pac-man.png'},
];



export class ResourceManager {
    private loadedImages: Map<string, HTMLImageElement> = new Map();

    public async loadAssets() {
        await this.loadImages();
    }

    public getImage(imgName: string): HTMLImageElement {
        const img = this.loadedImages.get(imgName);
        if (!img) {
            console.error(`Image (${imgName}) is not available`);
        }
        return img;
    }

    private async loadImages() {
        await Promise.all(IMAGES.map(image => this.loadImage(image)))
    }

    private async loadImage(imgResource: Resource) {
        return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.src = images[imgResource.name];
            img.onload = () => {
                this.loadedImages.set(imgResource.name, img);
                resolve(img);
            }
        });
    }
}

export const resourceManager = new ResourceManager();