class Tower {
    constructor(ctx, coords, type){
        this.ctx = ctx;
        this.coords = coords;
        this.damage = 1;
        this.speed = 100;
        this.type = type;
    }

    draw(){
        this.ctx.strokeStyle = "#d4d9d2";
        this.ctx.fillStyle = "#bdbfbb";
        this.ctx.fillRect(...this.coords);
    }
    
    attack(enemy, game){
        enemy.currentHealth -= this.damage;
        game.score += this.damage;
        const currentScore = document.querySelector('.current-score');
        currentScore.innerText = game.score;
    }
}
export default Tower