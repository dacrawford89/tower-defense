import Tower from './Tower'

class TowerBasic extends Tower {
    constructor(ctx, coords, type, id, score){
        super(ctx, coords, type, id, score);
        this.damage = 1;
        this.speed = 100;
        this.cost = 100;
        this.score = score;
    }
    draw(image){
        super.draw(image);

    }
    attack(enemy, game){
        super.attack(enemy, game);

    }
}
export default TowerBasic