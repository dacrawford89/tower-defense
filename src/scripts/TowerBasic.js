import Tower from './Tower'

class TowerBasic extends Tower {
    constructor(ctx, coords, type){
        super(ctx, coords, type);
        this.damage = 1;
        this.speed = 100;
    }
    draw(){
        debugger
        this.ctx.strokeStyle = "#d4d9d2";
        this.ctx.fillStyle = "#bdbfbb";
        this.ctx.fillRect(...this.coords);
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#ff871f"
    }
    attack(enemy){
        super.attack(enemy);
    }
}
export default TowerBasic