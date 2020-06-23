class Castle {
    constructor(ctx, coords, health){

        this.ctx = ctx;
        this.coords = coords;
        this.health = health;
    }
    draw(){
        this.ctx.fillStyle = "#eef2ed";
        this.ctx.fillRect(...this.coords);
    }
}

export default Castle;