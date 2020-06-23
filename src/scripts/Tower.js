const path = require('path');
const images = './dist/images/';

class Tower {
    constructor(ctx, coords, type){
        this.ctx = ctx;
        this.coords = coords;
        this.damage = 1;
        this.speed = 100;
        this.type = type;

    }

    draw(image){
        debugger
        this.ctx.clearRect(...this.coords);
        // this.towerTile.width = this.coords[2];
        // this.towerTile.height = this.coords[3];
        this.ctx.drawImage(image, ...this.coords);
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