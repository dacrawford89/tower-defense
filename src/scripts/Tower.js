class Tower {
    constructor(ctx, coords){
        debugger
        this.ctx = ctx;
        this.coords = coords;
    }
    draw(){
        debugger
        this.ctx.strokeStyle = "#d4d9d2";
        this.ctx.fillStyle = "#bdbfbb";
        this.ctx.fillRect(...this.coords);
    }
}
export default Tower