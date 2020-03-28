const images = require("../Assets/img/*.png");

const IMAGES = [
    {name: "", src: ""},
];

class ResourceManager {
    constructor() {
        this.loadedImages = new Map();
    }

    async loadAssets() {
        await this.loadImages();
    }

    getImage(imageName) {
        const img = this.loadedImages.get(imageName);

        if(!img) throw console.error("Obrázok " + imageName + " nieje k dispozicií");

        return img;
    }

    async loadImages() {
        await Promise.all(image => this.loadImage(image));
    }

    async loadImage(imgSource) {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = images[imgSource.name];
            img.onload = () => {
                this.loadedImages.set(imgSource.name, img);
                resolve(img);
            };
        });
    }
}

export const resourceManager = new ResourceManager();