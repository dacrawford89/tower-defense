import Tower from './Tower'

class TowerBasic extends Tower {
    constructor(ctx, coords, type, image){
        super(ctx, coords, type);
        this.damage = 5;
        this.speed = 100;
        this.cost = 100;
        this.image = image; 
    }
    draw(image){
        super.draw(image);

    }
    attack(enemy, game){
        super.attack(enemy, game);

    }
}
export default TowerBasic