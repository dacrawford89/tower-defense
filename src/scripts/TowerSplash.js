import Tower from './Tower'

class TowerSplash extends Tower {
    constructor(ctx, coords, type, id, score){
        super(ctx, coords, type, id, score);
        this.damage = 20;
        this.speed = 5;
        this.cost = 300;
        this.score = score;
    }
    draw(image){
        super.draw(image);
    }
    attack(enemy, game){
        if (!!enemy){
            debugger
            const enemyCenter = [enemy.coords[0] + (enemy.coords[2] / 2), enemy.coords[1] + (enemy.coords[3] / 2)];
            const enemyXRange = [enemyCenter[0] - enemy.coords[2], enemyCenter[0] + enemy.coords[2]];
            const enemyYRange = [enemyCenter[1] - enemy.coords[3], enemyCenter[1] + enemy.coords[3]];

            const enemyTotalRange = [enemyXRange[0], enemyYRange[0], enemy.coords[2] * 2, enemy.coords[3] * 2];
            // const enemyTotalRange = [enemyXRange[0], enemyYRange[0], enemy.coords[2] * 2, enemy.coords[3] * 2]

            const enemies = game.battlefield.enemies;
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(...enemyTotalRange);
            const enemyXStart = enemyTotalRange[0];
            const enemyYStart = enemyTotalRange[1];
            const enemyXWidth = enemyTotalRange[2];
            const enemyYHeight = enemyTotalRange[3];
            
            
            const nearbyEnemies = Object.values(game.battlefield.enemies)
                .filter(enemy => {
                    // const otherEnemyCenter = [enemy.coords[0] + (enemy.coords[2] / 2), enemy.coords[1] + (enemy.coords[3] / 2)]
                    // const otherEnemyXRange = [otherEnemyCenter[0] - enemy.coords[2], otherEnemyCenter[0] + enemy.coords[2]];
                    // const otherEnemyYRange = [otherEnemyCenter[1] - enemy.coords[3], enemyCenter[1] + enemy.coords[3]];
                    const otherEnemyCenter = [enemy.coords[0] + (enemy.coords[2] / 2), enemy.coords[1] + (enemy.coords[3] / 2)];
                    const otherEnemyXRange = [otherEnemyCenter[0] - enemy.coords[2], otherEnemyCenter[0] + enemy.coords[2]];
                    const otherEnemyYRange = [otherEnemyCenter[1] - enemy.coords[3], otherEnemyCenter[1] + enemy.coords[3]];
        
                    const otherEnemyTotalRange = [otherEnemyXRange[0], otherEnemyYRange[0], enemy.coords[2] * 2, enemy.coords[3] * 2];
        
                    this.ctx.fillStyle = "red";
                    this.ctx.fillRect(...otherEnemyTotalRange);

                    const enemies = game.battlefield.enemies;

                    const otherEnemyXStart = otherEnemyTotalRange[0];
                    const otherEnemyYStart = otherEnemyTotalRange[1];
                    const otherEnemyXWidth = otherEnemyTotalRange[2];
                    const otherEnemyYHeight = otherEnemyTotalRange[3];

                    if (enemyXStart <= otherEnemyXWidth && enemyYStart <= otherEnemyYHeight 
                        &&

                        )
                });
            super.attack(enemy, game);
            nearbyEnemies.forEach(enemy => {
                super.attack(enemy,game);
                if (enemy.currentHealth <= 0) delete game.battlefield.enemies[enemy.id]
            })
        }
    }
}
export default TowerSplash;