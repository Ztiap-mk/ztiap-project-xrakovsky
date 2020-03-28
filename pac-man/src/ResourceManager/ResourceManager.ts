const images = require("../Assets/img/*.png");

interface Resource {
    name: string, 
    src: string,
}

const IMAGES: Resource[] = [
    { name: "pac-man", src: "pac-man.png" },
];

class ResourceManager {
    private loadedImages: Map<string, HTMLImageElement> = new Map();

    public async loadAssets() {
        this.loadImages();
    }

    public getImage(imgName: string) {
        const image = this.loadedImages.get(imgName);

        if(!image) console.error("Image " + imgName + " is not available");
        
        return image;
    }

    private async loadImages() {
        await Promise.all(IMAGES.map(image => this.loadImage(image)));
    }

    private async loadImage(imgRes: Resource) {
        return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.src = imgRes.name;
            img.onload = () => {
                this.loadedImages.set(imgRes.name, img);
                resolve(img);
            }
        });
    }
}