import Tower from './Tower'

class TowerBasic extends Tower {
    constructor(ctx, coords, type, id){
        super(ctx, coords, type, id);
        this.damage = 5;
        this.speed = 100;
        this.cost = 100;
    }
    draw(image){
        super.draw(image);

    }
    attack(enemy, game){
        super.attack(enemy, game);

    }
}
export default TowerBasic