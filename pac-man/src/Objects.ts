export class Objects {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public render(ctx: CanvasRenderingContext2D) {
        const {x, y, width, height} = this;
        ctx.fillRect(x, y, width, height);
    }

    protected isClicked(event: MouseEvent) {
        if (event.type === "click") {
            const mouseX = event.offsetX;
            const mouseY = event.offsetY;
            if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
                return true;
            }
        }
        return false;
    }
}

export class TextObj extends Objects {
    size: number;
    text: string;
    color: string;
    align: CanvasTextAlign;
    onClickHandler = null;
    clicked = false;

    constructor(x: number, y: number, width: number, height: number, text: string, size: number, color: string, align: CanvasTextAlign) {
        super(x, y, width, height);
        this.text = text;
        this.size = size;
        this.color = color;
        this.align = align;
    }

    public render(ctx: CanvasRenderingContext2D) {
        if (this.clicked == false) {
            const {x, y, width, height, text, size, color, align} = this;
            ctx.fillStyle = "Black";
            ctx.fillRect(x, y, width, height);
            ctx.fillStyle = color;
            ctx.font = size + "px Ariel"
            ctx.textAlign = align;
            ctx.fillText(text, x, y + height, width);
        }
    }

    public handleEvent(event: MouseEvent) {
        if (this.onClickHandler && this.isClicked(event)) {
            this.onClickHandler(event);
        }
    }

    public onClick(func: any) {
        this.onClickHandler = func;
    }
}

export class ImageObj extends Objects {
    onClickHandler = null;
    protected src: any;

    constructor(x: number, y: number, width: number, height: number, src: HTMLImageElement) {
        super(x, y, width, height);
        this.src = src;
    }

    public render(ctx: CanvasRenderingContext2D) {
        const {x, y, width, height, src} = this;

        ctx.drawImage(src, x, y + height, width, height);
    }

    public handleEvent(event: MouseEvent) {
        if (this.onClickHandler && this.isClicked(event)) {
            this.onClickHandler(event);
        }
    }

    public onClick(func: any) {
        this.onClickHandler = func;
    }
}

export class WallObj extends Objects {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }

    get _coor() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        }
    }

    public render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}