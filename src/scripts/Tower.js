class Tower {
    constructor(ctx, coords){
        
        this.ctx = ctx;
        this.coords = coords;
        this.damage = 1;
        this.speed = 100;

    }
    draw(){
        
        this.ctx.strokeStyle = "#d4d9d2";
        this.ctx.fillStyle = "#bdbfbb";
        this.ctx.fillRect(...this.coords);
    }
    attack(enemy){
        debugger
        console.log('hi');
        enemy.currentHealth -= this.damage;
    }
}
export default Tower