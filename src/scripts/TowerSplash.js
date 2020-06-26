import Tower from './Tower'

class TowerSplash extends Tower {
    constructor(ctx, coords, type, id, score){
        super(ctx, coords, type, id, score);
        this.damage = 10;
        this.speed = 50;
        this.cost = 300;
        this.score = score;
    }
    draw(image){
        super.draw(image);
    }
    attack(enemy, game){
        debugger
        if (!!enemy){
            const enemyCenter = [enemy.coords[0] + (enemy.coords[2] / 2), enemy.coords[1] + (enemy.coords[3] / 2)];
            const enemyXRange = [enemyCenter[0] - enemy.coords[2], enemyCenter[0] + enemy.coords[2]];
            const enemyYRange = [enemyCenter[1] - enemy.coords[3], enemyCenter[1] + enemy.coords[3]];

            const enemies = game.battlefield.enemies;
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(enemyXRange[0], enemyYRange[0], (enemy.coords[0] + enemy.coords[2] - enemy.coords[2]), (enemy.coords[1] + enemy.coords[3] - enemy.coords[3]));
            
            super.attack(enemy, game);
        }
    }
}
export default TowerSplash;