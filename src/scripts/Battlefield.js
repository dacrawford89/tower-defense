import Enemy from './Enemy'
import Castle from './Castle'
import TowerBasic from './TowerBasic'
import TowerPower from './TowerPower'
import TowerSplash from './TowerSplash'
import * as THREE from 'three'
const path = require("path");
const images = './dist/images/';

class Battlefield {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.canvas.id = "canvas";
        this.canvas.classList.add('battlefield');
        this.canvas.width = window.innerWidth * .33;
        this.canvas.height = window.innerHeight * .9;
        this.ctx = this.canvas.getContext('2d');
        this.battlefieldColor = "#3dd11f";
        this.castleCoords = [this.canvas.width * .03, this.canvas.height * .92, this.canvas.width * .94, this.canvas.height * .07];
        this.firstTowerCoords = [this.castleCoords[0] + (this.canvas.width * .02), this.castleCoords[1] + this.castleCoords[3] * .7, this.canvas.width * .133, this.canvas.height * -.09];
        this.numTowers = 6;
        this.castle = "";
        this.currentLevel = 1;
        this.numEnemies = 20;
        this.numTowers = 6;
        this.enemies = {};
        this.towers = {};

        this.battlefieldGrass = new Image();
        this.battlefieldGrass.src = path.join(__dirname, images, "../images/grass.jpg");

     }
     initialize(){
        this.createCanvas();
        this.createCastle();

        this.castleTile = new Image();
        const castleTileImage = "castleTile.png";
        this.castleTile.src = path.join(__dirname, images, castleTileImage);

       
     }
     render(){

        this.drawBattlefield();
        this.drawCastle();
        this.drawTowers();
     }

     clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
     }
     attackEnemies(game){
        //  
         const remainingEnemies = Object.keys(this.enemies).length;
         // enemiesArr makes towers attack the closest enemy
         const enemiesArr = Object.values(this.enemies).filter(value => value.coords[1] == Math.max(...Object.values(this.enemies).filter(value => value.coords[1] > 0).map(enemy => enemy.coords[1])));
         debugger
         if (!!enemiesArr.length){
            Object.keys(this.towers).forEach(towerKey => {
                const tower = this.towers[towerKey];
                if (tower.target){

                    tower.attack(game)
                }
                if (!tower.target){
                    const enemyKey = Math.floor(Math.random() * enemiesArr.length);
                    const enemy = enemiesArr[enemyKey];
                    if ((enemy.coords[1] < this.canvas.height) && (enemy.coords[1] > 0)) tower.target = enemy;
                }
                debugger
            })
        }
        Object.keys(this.enemies).forEach(key => {
            if (this.enemies[key].currentHealth <= 0) delete this.enemies[key];
        })
     }
     createCanvas(){
         const canvasContainer = document.createElement('div');
         canvasContainer.classList.add('canvas-container');
         document.body.append(canvasContainer);
        if (!document.querySelector('canvas')) canvasContainer.append(this.canvas);
     }
     drawBattlefield(){
        const pat = this.ctx.createPattern(this.battlefieldGrass, 'repeat');
        this.ctx.fillStyle = pat;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
     }
     createCastle(){
        this.castle = new Castle(this.ctx, this.castleCoords, 100);
     }
     drawCastle(){
         
        this.castle.draw(this.castleTile);
     }
     createTower({type, cost}){
            
            let tower;
            let x = this.firstTowerCoords[0];
            let y = this.firstTowerCoords[1];
            let width = this.firstTowerCoords[2];
            let height = this.firstTowerCoords[3];
            let coords = this.firstTowerCoords;
            switch (type) {
                case 'Basic':
                    tower = new TowerBasic(this.ctx, [x,y,width,height], type);
                    break;
                case 'Power':
                    tower = new TowerPower(this.ctx, [x,y,width,height], type);
                    break
                case 'Splash':
                    tower = new TowerSplash(this.ctx, [x,y,width,height], type);
                    break
                default:
                    break;
            }
            this.towers[Object.keys(this.towers).length + 1] = tower;
            coords[0] += this.firstTowerCoords[2] + (this.canvas.width * .02);

     }
    //  createTowers(){
    //     for (let i = 0; i < this.numTowers; i++){
    //         let x = this.firstTowerCoords[0];
    //         let y = this.firstTowerCoords[1];
    //         let width = this.firstTowerCoords[2];
    //         let height = this.firstTowerCoords[3];
    //         let coords = this.firstTowerCoords;
    //         let tower = new Tower(this.ctx, [x,y,width,height]);
    //         this.towers[i] = tower;
    //         coords[0] += this.firstTowerCoords[2] + (this.canvas.width * .02);
    //     }
    //  }
     drawTowers(key){
        const tower = this.towers[key];
        if (!!tower) tower.draw(this.towerImage);
     }
    createEnemies(currentLevel){
        for (let i = 0; i < this.numEnemies; i++){
            let coords;
            let maxX = Math.random() * this.canvas.width;
            let maxY = -(Math.random() * this.canvas.height); // set so enemies spawn above
            let enemySize = 20;
            let health = currentLevel * 10;

            // set x value on enmies to spawn within the canvas
            if ((this.canvas.width - maxX >= 0) && this.canvas.width - maxX <= enemySize){ // > max length
                maxX -= enemySize;
            } else if ( maxX <= enemySize){ // < max length
                maxX += enemySize;
            }
            // set y value on enmies to spawn within the canvas
            if ((this.canvas.height + maxY >= 0)){ // have enemies spawn offscreen from the top
                maxY -= enemySize;
            }
            let enemy = new Enemy(this.ctx, [maxX, maxY], enemySize, health);
            this.enemies[i] = enemy;
        }
    }
    animateField(game){
        this.drawBattlefield();
        this.drawCastle();
        
        Object.keys(this.towers).forEach(towerKey => {
            this.drawTowers(towerKey);
        });
        this.attackEnemies(game);
        Object.keys(this.enemies).forEach(key => {
            this.clearEnemies(key, game);
            this.drawEnemies(key);
            this.updateEnemies(key);
        });
        const numEnemies = document.querySelector('.num-enemies');
        numEnemies.innerText = Object.keys(this.enemies).length;
    }

    drawEnemies(key){
        // 
        let enemy = this.enemies[key];
        if (!!enemy && (enemy.coords[1] <= this.castleCoords[1])) enemy.draw();
    }
    clearEnemies(key, game){
        let enemy = this.enemies[key];
        enemy.clear();
        if ((enemy.coords[1] >= this.castleCoords[1])){
            delete this.enemies[key];
            game.health -= 1;
            const currentHealth = document.querySelector('.current-health');
            currentHealth.innerText = game.health;
        } 

    }
    updateEnemies(key){
        let enemy = this.enemies[key];
        if (!!enemy && enemy.coords[1] <= this.castleCoords[1]) enemy.update(); 
    }
}
export default Battlefield;