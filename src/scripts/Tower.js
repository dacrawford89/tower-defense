const path = require('path');
const images = './dist/images/';

class Tower {
    constructor(ctx, coords, type, id, game){
        this.ctx = ctx;
        this.coords = coords;
        this.type = type;
        this.towerLevel = 1;
        this.towerImage = new Image();
        this.basicTowerImage = "basicTower.png";
        this.powerTowerImage = "powerTower.png";
        this.splashTowerImage = "splashTower.png";
        this.attackAnimation = 1;
        this.enemiesDefeated = 0;
        this.id = id;
        this.game = game;
        this.upgradeCost = 100;
        this.active = true;
    }
    clear(){
        this.ctx.clearRect(...this.coords);
    }
    draw(){
        let image;
        if (!this.active) return null
        switch (this.type) {
            case 'Basic':
                image = path.join(__dirname, images, this.basicTowerImage);
                break;
            case 'Power':
                image = path.join(__dirname, images, this.powerTowerImage);
                break;
            case 'Splash':
                image = path.join(__dirname, images, this.splashTowerImage);
                break;
            default:
                break;
        }
        this.towerImage.src = image;

        this.checkEnemyHealth();
        if (this.enemiesDefeated % 10 == 0 && this.enemiesDefeated > 0) {
            this.levelUp(); 
        }
        if (!!this.levelAnimation && this.levelAnimation > 0) {
            
            this.levelAnimation -= .01;
            this.ctx.globalAlpha = this.levelAnimation;
            this.ctx.font = "16px Arial";
            this.ctx.fillStyle = "#bd0900"
            this.ctx.fillText("Level Up!", this.coords[0], this.coords[1]);
            this.ctx.globalAlpha = 1;
        } 

    }
    levelUp(){
        this.enemiesDefeated = 0;
        this.towerLevel++;
        this.levelAnimation = 1;
        
        const tower = document.querySelector(`.tower-${this.id} .tower-level strong`);
        tower.innerText = `${this.towerLevel}`;
    }
    checkEnemyHealth(){
        if (!!this.target && this.target.currentHealth > 0){ 
           this.faceEnemy();
           this.attack();
        } else if (!!this.target && this.target.currentHealth <= 0) {
            this.ctx.drawImage(this.towerImage, ...this.coords) // default tower facing direction
        } else {
            this.ctx.drawImage(this.towerImage, ...this.coords) // default tower facing direction
        }
    }
    faceEnemy(){
        const towerXCenter = this.coords[0] + this.coords[2] / 2;
        const towerYCenter = this.coords[1] + this.coords[3] / 2;
        let towerCenter = [towerXCenter, towerYCenter];

        let targetX = this.target.coords[0];
        let targetY = this.target.coords[1];

        let slope = (towerYCenter - targetY) / (towerXCenter - targetX);
        let radians = Math.atan(slope);

        const baseRadian = (radians >= 0) ? -1.5708 : 1.5708;

        // face towers toward enemies
        this.ctx.save();  
        this.ctx.translate(towerXCenter, towerYCenter);  
        this.ctx.rotate(radians + baseRadian);  
        this.ctx.translate(-towerXCenter, -towerYCenter);  
        this.ctx.drawImage(this.towerImage, ...this.coords);
        this.ctx.restore(); 
    }
    
    attack(enemy, game){
        if (!this.active) return null;
        this.attackAnimation += this.speed;

        const towerDamageEle = document.querySelector(`.tower-modal-wrapper.tower-${this.id} .tower-damage strong`);
        const damageMultiplier = parseFloat(this.damage * (((this.towerLevel - 1) / 10) + 1).toFixed(2));
        towerDamageEle.innerText = `${damageMultiplier}`;

        if (this.attackAnimation >= 500 && !!this.target){
            this.target.currentHealth -= damageMultiplier;
            this.game.score += damageMultiplier;
            this.attackAnimation = 0;
        }
        const currentScore = document.querySelector('.current-score');
        currentScore.innerText = parseFloat(this.game.score.toFixed(0));
    }
}
export default Tower