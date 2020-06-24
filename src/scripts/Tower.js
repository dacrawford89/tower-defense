const path = require('path');
const images = './dist/images/';

class Tower {
    constructor(ctx, coords, type){
        this.ctx = ctx;
        this.coords = coords;
        this.type = type;
        this.towerImage = new Image();
        this.basicTowerImage = "basicTower.png";
        this.powerTowerImage = "powerTower.png";
        this.splashTowerImage = "splashTower.png";
        this.attackAnimation = 1;
    }

    draw(){
        let image;
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
        
        if (!!this.target && this.target.currentHealth > 0){
            // this.ctx.clearRect(...this.coords);
            const towerXCenter = this.coords[0] + this.coords[2] / 2;
            const towerYCenter = this.coords[1] + this.coords[3] / 2;
            let towerCenter = [towerXCenter, towerYCenter];

            let targetX = this.target.coords[0];
            let targetY = this.target.coords[1];

            let slope = (towerYCenter - targetY) / (towerXCenter - targetX);
            let radians = Math.atan(slope);

            const baseRadian = (radians >= 0) ? -1.5708 : 1.5708

            debugger

            this.ctx.save();  
 
            this.ctx.translate(towerXCenter, towerYCenter);  

            this.ctx.rotate(radians + baseRadian);  

            this.ctx.translate(-towerXCenter, -towerYCenter);  

            this.ctx.drawImage(this.towerImage, ...this.coords);

            this.ctx.restore(); 
        } else {
            this.ctx.drawImage(this.towerImage, ...this.coords)
        }

    }
    
    attack(game){
        this.attackAnimation += this.speed;

  

        // this.ctx.drawImage(this.towerImage, ...this.coords);

        if (this.target.currentHealth <= 0) this.target = undefined;
        if (this.attackAnimation >= 500 && !!this.target){
            this.target.currentHealth -= this.damage;
            game.score += this.damage;
            this.attackAnimation = 1;
        }
        const currentScore = document.querySelector('.current-score');
        currentScore.innerText = game.score;
    }
}
export default Tower