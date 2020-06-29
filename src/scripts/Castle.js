class Castle {
    constructor(ctx, coords, health){
        this.ctx = ctx;
        this.coords = coords;
        this.health = health;
    }
    draw(image){
        const pat = this.ctx.createPattern(image, 'repeat');
        this.ctx.fillStyle = pat;
        this.ctx.fillRect(...this.coords);
    }
}

export default Castle;