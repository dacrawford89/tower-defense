class Castle {
    constructor(ctx, coords, health){
        this.ctx = ctx;
        this.coords = coords;
        this.health = health;
        this.castleTile = new Image();
        const castleTileImage = "castleTile.png";
        this.castleTile.src = `src/images/${castleTileImage}`;
    }
    draw(){
        
        const pat = this.ctx.createPattern(this.castleTile, 'repeat');
        this.ctx.fillStyle = pat;
        this.ctx.fillRect(...this.coords);
    }
}

export default Castle;