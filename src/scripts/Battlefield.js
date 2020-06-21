import Enemy from './Enemy'
import Castle from './Castle'
import Tower from './Tower'

class Battlefield {
    constructor(numEnemies){
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth * .33;
        this.canvas.height = window.innerHeight * .9;
        this.canvas.style.border = "1px solid black";
        this.ctx = this.canvas.getContext('2d');
        this.battlefieldColor = "#3dd11f";
        this.castleCoords = [this.canvas.width * .03, this.canvas.height * .92, this.canvas.width * .94, this.canvas.height * .07];
        this.firstTowerCoords = [this.castleCoords[0] + (this.canvas.width * .02), this.castleCoords[1] + this.castleCoords[3], this.canvas.width * .133, this.canvas.height * -.09];
        this.numTowers = 6;
        this.currentLevel = 1;
        this.numEnemies = numEnemies;
        this.enemies = {};
        this.towers = {};
     }
     attackEnemies(){
         const remainingEnemies = Object.keys(this.enemies).length;
         Object.keys(this.towers).forEach(tower => {
             let enemy = this.enemies[Object.keys(this.enemies)[0]];
             this.towers[tower].attack(enemy);
         })
     }
     createCanvas(){
        document.body.append(this.canvas);
     }
     drawBattlefield(){
        
        this.ctx.fillStyle = this.battlefieldColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
     }
     drawCastle(){
        const castle = new Castle(this.ctx, this.castleCoords);
        castle.draw();
     }
     createTowers(){
        for (let i = 0; i < this.numTowers; i++){
            
            let x = this.firstTowerCoords[0];
            let y = this.firstTowerCoords[1];
            let width = this.firstTowerCoords[2];
            let height = this.firstTowerCoords[3];
            let coords = this.firstTowerCoords;
            let tower = new Tower(this.ctx, [x,y,width,height]);
            this.towers[i] = tower;
            coords[0] += this.firstTowerCoords[2] + (this.canvas.width * .02);
        }
     }
     drawTowers(key){
         
        const tower = this.towers[key];
        if (!!tower) tower.draw();
     }
    createEnemies(){
        for (let i = 0; i < this.numEnemies; i++){
            let coords;
            let maxX = Math.random() * this.canvas.width;
            let maxY = -(Math.random() * this.canvas.height); // set so enemies spawn above
            let enemySize = 20;
            let health = this.currentLevel * 10;

            // set x value on enmies to spawn within the canvas
            if ((this.canvas.width - maxX >= 0) && this.canvas.width - maxX <= enemySize){ // > max length
                maxX -= enemySize;
            } else if ( maxX <= enemySize){ // < max length
                maxX += enemySize;
            }
            // set y value on enmies to spawn within the canvas
            if ((this.canvas.height + maxY >= 0)){ // have enemies spawn offscreen from the top
                maxY -= enemySize;
            }
            let enemy = new Enemy(this.ctx, [maxX, maxY], enemySize, health);
            this.enemies[i] = enemy;
        }
    }

    drawEnemies(key){
        let enemy = this.enemies[key];
        if (!!enemy && (enemy.coords[1] <= this.castleCoords[1])) enemy.draw();
    }
    clearEnemies(key){
        let enemy = this.enemies[key];
        enemy.clear();
        if ((enemy.coords[1] >= this.castleCoords[1])) delete this.enemies[key];

    }
    updateEnemies(key){
        let enemy = this.enemies[key];
        if (enemy.coords[1] <= this.castleCoords[1]) enemy.update(); 
    }
}
export default Battlefield;