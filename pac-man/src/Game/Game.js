export class Game {
    constructor() {
        this.canvas = document.getElementById("pac-man");
        const ctx = this.canvas.getContext("2d");

        if(!ctx) throw console.error("Žiadny kontext canvasu sa nenašiel");
        
        this.ctx = ctx;
    }

    start() {
        this.initialize();
    }

    initialize() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}