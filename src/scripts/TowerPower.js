import Tower from './Tower'

class TowerPower extends Tower {
    constructor(ctx, coords, type){
        super(ctx, coords, type);
        this.damage = 10;
        this.speed = 10;
        this.cost = 200;
    }
    draw(){
        this.ctx.fillRect(...this.coords);

    }
    attack(enemy, game){
        super.attack(enemy, game);
    }
}
export default TowerPower;