import Tower from './Tower'

class TowerSplash extends Tower {
    constructor(ctx, coords, type){
        super(ctx, coords, type);
        this.damage = 5;
        this.speed = 10;
        this.cost = 300;
    }
    draw(){
        this.ctx.strokeStyle = "#d4d9d2";
        this.ctx.fillStyle = "#d19111";
        this.ctx.fillRect(...this.coords);
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#ff871f"
    }
    attack(enemy){
        super.attack(enemy);
    }
}
export default TowerSplash;