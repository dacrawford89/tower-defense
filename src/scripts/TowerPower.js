import Tower from './Tower'

class TowerPower extends Tower {
    constructor(ctx, coords, type, id,score){
        super(ctx, coords, type, id, score);
        this.damage = 10;
        this.speed = 50;
        this.cost = 200;
        this.score = score;
    }
    draw(image){
        super.draw(image);

    }
    attack(enemy, game){
        super.attack(enemy, game);
    }
}
export default TowerPower;