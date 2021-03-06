import Tower from './Tower'

class TowerSplash extends Tower {
    constructor(ctx, coords, type, id, score){
        super(ctx, coords, type, id, score);
        this.damage = 1.5;
        this.speed = 5;
        this.cost = 300;
        this.score = score;
        this.soundEffect = new Audio('src/sounds/blast2.wav');
    }
    draw(image){
        super.draw(image);
    }
    attack(enemy, game){
        if (!!enemy){
            const enemyCenter = [enemy.coords[0] + (enemy.coords[2] / 2), enemy.coords[1] + (enemy.coords[3] / 2)];
            const enemyXRange = [enemyCenter[0] - enemy.coords[2], enemyCenter[0] + enemy.coords[2]];
            const enemyYRange = [enemyCenter[1] - enemy.coords[3], enemyCenter[1] + enemy.coords[3]];

            const enemyTotalRange = [enemyXRange[0], enemyYRange[0], enemy.coords[2] * 2, enemy.coords[3] * 2];

            const enemies = game.battlefield.enemies;
            const enemyXStart = enemyTotalRange[0];
            const enemyYStart = enemyTotalRange[1];
            const enemyXEnd = enemyXStart + enemy.coords[2];
            const enemyYEnd = enemyYStart + enemy.coords[3];
            
            
            const nearbyEnemies = Object.values(game.battlefield.enemies)
                .filter(enemy => {
                    const otherEnemyCenter = [enemy.coords[0] + (enemy.coords[2] / 2), enemy.coords[1] + (enemy.coords[3] / 2)];
                    const otherEnemyXRange = [otherEnemyCenter[0] - enemy.coords[2], otherEnemyCenter[0] + enemy.coords[2]];
                    const otherEnemyYRange = [otherEnemyCenter[1] - enemy.coords[3], otherEnemyCenter[1] + enemy.coords[3]];
        
                    const otherEnemyTotalRange = [otherEnemyXRange[0], otherEnemyYRange[0], enemy.coords[2] * 2, enemy.coords[3] * 2];
        
                    const enemies = game.battlefield.enemies;

                    const otherEnemyXStart = otherEnemyTotalRange[0];
                    const otherEnemyYStart = otherEnemyTotalRange[1];
                    const otherEnemyXEnd = otherEnemyXStart + enemy.coords[2];
                    const otherEnemyYEnd = otherEnemyYStart + enemy.coords[3];

                    if (
                        ((otherEnemyXStart <= enemyXEnd && enemyYStart <= otherEnemyYEnd) ||
                        (enemyXStart <= otherEnemyXEnd && enemyYStart <= otherEnemyYEnd) ||
                        (otherEnemyXStart <= enemyXEnd && otherEnemyYStart <= enemyYEnd) ||
                        (enemyXStart <= otherEnemyXEnd && otherEnemyYStart <= enemyYEnd)) &&
                        (otherEnemyYStart >= 0 && otherEnemyYStart <= this.game.battlefield.canvas.height)
                        )
                        {
                            return enemy;
                        }
                });

            this.attackAnimation += this.speed;

            const towerDamageEle = document.querySelector(`.tower-modal-wrapper.tower-${this.id} .tower-damage strong`);
            const damageMultiplier = parseFloat(this.damage * (((this.towerLevel - 1) / 10) + 1).toFixed(2));
            towerDamageEle.innerText = `Dmg: ${damageMultiplier}`;
    
            if (this.attackAnimation >= 500 && !!this.target){
                this.target.currentHealth -= damageMultiplier;
                this.game.score += damageMultiplier;
                this.soundEffect.pause();
                this.soundEffect.currentTime = 0;
                this.soundEffect.play();


                nearbyEnemies.forEach(enemy => {
                    enemy.currentHealth -= damageMultiplier;
                    this.game.score += damageMultiplier;
                    if (enemy.currentHealth <= 0){
                        delete game.battlefield.enemies[enemy.id];
                        this.enemiesDefeated++;
                        this.game.battlefield.refreshTowerModal(this);
                    } 
                })

                this.attackAnimation = 0;
            }
            const currentScore = document.querySelector('.current-score');
            currentScore.innerText = parseFloat(this.game.score.toFixed(0));


        }
    }
}
export default TowerSplash;