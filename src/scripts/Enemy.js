class Enemy {
    constructor(ctx, coords, radius, health){
        this.ctx = ctx;
        this.maxHealth = health;
        this.currentHealth = health;
        this.coords = coords;
        this.enemyColors = ["#9be5e8","#e80c1e","#7f53a3","#ff871f","#ffff0f"];
        this.radius = radius;
    }

    draw(){
        // 
        this.ctx.beginPath();
        let radius = 20;
        let x = this.coords[0];
        let y = this.coords[1];
        let startAngle = 0;
        let endAngle = Math.PI * 2;
        this.ctx.arc(x, y, radius, startAngle, endAngle);
        this.ctx.fillStyle = this.enemyColors[0];
        this.ctx.globalAlpha = (this.currentHealth / this.maxHealth);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
        // this.ctx.font = "16px Arial";
        // this.ctx.fillStyle = "#ff871f"
        // this.ctx.fillText(this.currentHealth, x, y);
    }
    update() {
        this.coords[1] += 5;
    }
    clear(){
        this.ctx.clearRect(this.coords[0],this.coords[1], this.maxX, this.maxY);
    }
}

export default Enemy