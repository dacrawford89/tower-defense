class Castle {
    constructor(ctx, coords){

        this.ctx = ctx;
        this.coords = coords;
    }
    draw(){
        this.ctx.fillStyle = "#eef2ed";
        this.ctx.fillRect(...this.coords);
    }
}

export default Castle;