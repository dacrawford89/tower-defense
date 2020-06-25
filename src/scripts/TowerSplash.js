import Tower from './Tower'

class TowerSplash extends Tower {
    constructor(ctx, coords, type, id){
        super(ctx, coords, type, id);
        this.damage = 10;
        this.speed = 50;
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