const path = require('path');
const images = './dist/images/';

class Tower {
    constructor(ctx, coords, type){
        this.ctx = ctx;
        this.coords = coords;
        this.damage = 1;
        this.speed = 100;
        this.type = type;
        this.towerImage = new Image();
        this.basicTowerImage = "basicTower.png";
        this.powerTowerImage = "powerTower.png";
        this.splashTowerImage = "splashTower.png";
    }

    draw(){
        // debugger
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
        // this.ctx.clearRect(...this.coords);
        // this.ctx.globalAlpha = .2;
        // this.towerTile.width = this.coords[2];
        // this.towerTile.height = this.coords[3];
        this.ctx.drawImage(this.towerImage, ...this.coords);
        // this.ctx.globalAlpha = 1;
        // const pat = this.ctx.createPattern(image, 'repeat-y');
        // this.ctx.fillStyle = "white";
        // this.ctx.fillStyle = pat;
        // this.ctx.fillRect(...this.coords);
    }
    
    attack(enemy, game){
        enemy.currentHealth -= this.damage;
        game.score += this.damage;
        const currentScore = document.querySelector('.current-score');
        currentScore.innerText = game.score;
    }
}
export default Tower