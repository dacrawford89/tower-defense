class Enemy {
    constructor(ctx, maxX, maxY){
        this.ctx = ctx;
        this.maxX = maxX;
        this.maxY = maxY;
        this.enemyColors = ["#9be5e8","#e80c1e","#7f53a3","#ff871f","#ffff0f"];
    }

    draw(){
        debugger
       // draw enemy

        this.ctx.beginPath();
        let x = Math.random() * this.maxX;
        let y = Math.random() * this.maxY;
        let radius = 20;
        let startAngle = 0;
        let endAngle = Math.PI * 2;
        this.ctx.arc(x, y, radius, startAngle, endAngle);
        this.ctx.fillStyle = this.enemyColors[0];
        this.ctx.fill();
        this.maxX += 10;
        this.maxY += 10;

    }
}

export default Enemy