class Tower {
    constructor(ctx, coords){
        
        this.ctx = ctx;
        this.ctx.strokeStyle = "#d4d9d2";
        this.ctx.fillStyle = "#bdbfbb";
        this.coords = coords;
    }
    draw(){
        
        this.ctx.fillRect(...this.coords);
    }
}
export default Tower