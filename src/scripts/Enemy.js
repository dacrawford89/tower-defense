const path = require('path');
const images = './dist/images/';

class Enemy {
    constructor(ctx, coords, health, speed, id){
        this.ctx = ctx;
        this.maxHealth = health;
        this.currentHealth = health;
        this.coords = coords;
        this.enemyColors = ["#9be5e8","#e80c1e","#7f53a3","#ff871f","#ffff0f"];
        this.speed = speed;
        this.id = id;
        this.enemyImage = new Image();
        this.enemyImagePath = "troll.png";
        this.enemyImage.src = `src/images/${this.enemyImagePath}`;

        // this.enemyImage.src = path.join(__dirname, images, this.enemyImagePath);
        
    }
    draw(){
        this.ctx.globalAlpha = (this.currentHealth / this.maxHealth);
        this.ctx.drawImage(this.enemyImage, ...this.coords) 
        this.ctx.globalAlpha = 1;
    }
    update() {
        this.coords[1] += this.speed;
    }
    clear(){
        this.ctx.clearRect(this.coords[0],this.coords[1], this.maxX, this.maxY);
    }
}

export default Enemy