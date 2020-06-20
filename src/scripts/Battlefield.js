import Enemy from './Enemy'

class Battlefield {
    constructor(props){
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth * .33;
        this.canvas.height = window.innerHeight * .9;
        this.canvas.style.border = "1px solid black";
        this.ctx = this.canvas.getContext('2d');
        this.battlefieldColor = "#3dd11f"
    //  this.towersContainerColor = "#464f44"
    //  this.towerContainerCoords = [this.canvas.width * .03, this.canvas.height * .85, this.canvas.width * .94, this.canvas.height * .13]
        this.castleColor = "#eef2ed"
        this.castleCoords = [this.canvas.width * .03, this.canvas.height * .92, this.canvas.width * .94, this.canvas.height * .07]
        this.numTowers = 6;

        this.enemies = [];
        this.numEnemies = 10;
     }
     createCanvas(){
         document.body.append(this.canvas);
     }
     drawBattlefield(){
        // debugger;
        this.ctx.fillStyle = this.battlefieldColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
     }
     drawTowerContainer(){
        //  debugger
        // this.ctx.fillStyle = this.towersContainerColor;
        // this.ctx.fillRect(...this.towerContainerCoords);
     }
     drawCastle(){
         // draw castle base
        this.ctx.fillStyle = this.castleColor;
        this.ctx.fillRect(...this.castleCoords);
        
        let towerCoords = [this.castleCoords[0] + (this.canvas.width * .02), this.castleCoords[1] + this.castleCoords[3], this.canvas.width * .133, this.canvas.height * -.09]

        // draw castle towers
        this.ctx.strokeStyle = "#d4d9d2";
        this.ctx.fillStyle = "#bdbfbb";

        // display towers
        for (let i = 0; i < this.numTowers; i++){
            this.ctx.fillRect(...towerCoords);
            towerCoords[0] += towerCoords[2] + (this.canvas.width * .02);
        }
     }
    createEnemies(){
        for (let i = 0; i < this.numEnemies; i++){
            let coords;
            let maxX = Math.random() * this.canvas.width;
            let maxY = Math.random() * this.canvas.height;
            let enemySize = 20;
            if ((this.canvas.width - maxX >= 0) && this.canvas.width - maxX <= enemySize){ // > max length
                maxX -= enemySize;
            } else if ( maxX <= enemySize){ // < max length
                maxX += enemySize;
            }
            let enemy = new Enemy(this.ctx, [maxX, maxY], enemySize);
            this.enemies.push(enemy);
        }
    }
    drawEnemies(){
        debugger
        // draw enemy
        for (let i = 0; i < this.enemies.length; i++){
            let enemy = this.enemies[i];
            enemy.draw();
        }
    }
    clearEnemies(){
        debugger
        for (let i = 0; i < this.enemies.length; i++){
            const enemy = this.enemies[i];
            enemy.clear();
        }
    }
    updateEnemies(){
        for (let i = 0; i < this.enemies.length; i++){
            const enemy = this.enemies[i];
            enemy.update();
        }
    }
}
export default Battlefield;