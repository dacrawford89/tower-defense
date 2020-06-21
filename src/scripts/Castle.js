class Castle {
    constructor(ctx, coords){

        this.ctx = ctx;
        this.ctx.fillStyle = "#eef2ed";
        this.coords = coords;
    }
    draw(){
             // draw castle base
        this.ctx.fillRect(...this.coords);
    }
}

export default Castle;