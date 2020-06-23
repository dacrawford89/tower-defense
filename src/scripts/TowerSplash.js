import Tower from './Tower'

class TowerSplash extends Tower {
    constructor(ctx, coords, type){
        super(ctx, coords, type);
        this.damage = 5;
        this.speed = 10;
        this.cost = 300;
    }
    draw(image){
        super.draw(image);
    }
    attack(enemy, game){
        super.attack(enemy, game);
    }
}
export default TowerSplash;