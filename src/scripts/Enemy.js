class Enemy {
    constructor(ctx, coords, radius){
        this.ctx = ctx;
        this.coords = coords;
        this.enemyColors = ["#9be5e8","#e80c1e","#7f53a3","#ff871f","#ffff0f"];
        this.radius = radius;
    }

    draw(){
        // draw enemy
        
        this.ctx.beginPath();
        let radius = 20;
        
        debugger
        let x = this.coords[0];
        let y = this.coords[1];
        let startAngle = 0;
        let endAngle = Math.PI * 2;
        this.ctx.arc(x, y, radius, startAngle, endAngle);
        this.ctx.fillStyle = this.enemyColors[0];
        this.ctx.fill();
    }
    update() {
        this.coords[1] += 1;
    }
    clear(){
        debugger
        this.ctx.clearRect(0, 0, this.maxX, this.maxY);
    }
}

export default Enemy