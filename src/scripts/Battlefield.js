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
        this.canvas.width = window.innerWidth * .25;
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
     findClosestEnemies(){
         const enemiesArr = Object.values(this.enemies);
         const availableEnemies = enemiesArr.filter(enemy => enemy.coords[1] > 0);
         const availableCoords = availableEnemies.map(enemy => enemy.coords[1]);
         const closestThreeCoords = availableCoords.sort((a,b) => b-a).slice(0,3);
         const closestEnemies = availableEnemies.filter(enemy => closestThreeCoords.includes(enemy.coords[1])).sort((a,b) => b-a);
         
         return closestEnemies;
     }
    randomTowerList(towers){
        const randomIds = [];
        while (towers.length){
            debugger
            const randomIdx = Math.floor(Math.random() * towers.length);
            randomIds.push(towers[randomIdx]);
            const beg = towers.slice(0, randomIdx);
            const fin = towers.slice(randomIdx + 1, -1);
            towers = beg.concat(fin);
        }

    }
     attackEnemies(game){
        //  
         const remainingEnemies = Object.keys(this.enemies).length;
         // enemiesArr makes towers attack the closest enemy
         this.randomTowerList(Object.values(this.towers).map(tower => tower.id));
         
         Object.keys(this.towers).forEach(towerKey => {
            const closestEnemies = this.findClosestEnemies();
            const randomIdx = Math.floor(Math.random() * closestEnemies.length);
            const closestCoord = Math.max(...closestEnemies.map(enemy => enemy.coords[1]));
            const closestEnemy = closestEnemies.filter(enemy => enemy.coords[1] == closestCoord)[0];
            const tower = this.towers[towerKey];

            if (!tower.target){
                tower.target = closestEnemies[randomIdx];
            }
            if (closestCoord >= this.canvas.height / 2){
                tower.target = closestEnemy;
            }

            if (!!tower.target && tower.target.currentHealth > 0){
                tower.attack(game)
            } 
        })

        // debugger
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
            let id = Object.keys(this.towers).length;
            let x = this.firstTowerCoords[0];
            let y = this.firstTowerCoords[1];
            let width = this.firstTowerCoords[2];
            let height = this.firstTowerCoords[3];
            let coords = this.firstTowerCoords;
            switch (type) {
                case 'Basic':
                    tower = new TowerBasic(this.ctx, [x,y,width,height], type, id);
                    break;
                case 'Power':
                    tower = new TowerPower(this.ctx, [x,y,width,height], type, id);
                    break
                case 'Splash':
                    tower = new TowerSplash(this.ctx, [x,y,width,height], type, id);
                    break
                default:
                    break;
            }
            this.towers[id] = tower;
            coords[0] += this.firstTowerCoords[2] + (this.canvas.width * .02);

            this.addTowerModal(tower);

            // this.canvas.addEventListener('click', this.addTowerHandler(tower), false);
     }
     addTowerModal(tower){
            const towerX = [tower.coords[0], tower.coords[0] + tower.coords[2]];
            const towerY = [tower.coords[1], tower.coords[1] + tower.coords[3]];
            const towerXMid = tower.coords[0] + (tower.coords[2] / 2);
            const towerYMid = tower.coords[1] + (tower.coords[3] / 2);


            const towerModalWrapper = document.createElement('div');
            towerModalWrapper.classList.add(`tower-modal-wrapper-${tower.id}`);
            towerModalWrapper.style.opacity = .9;
            towerModalWrapper.style.height = `${tower.coords[3] * -1}px`;
            towerModalWrapper.style.width = `${tower.coords[2]}px`;
            towerModalWrapper.style.position = "absolute";
            towerModalWrapper.style.left = `${towerX[0]}px`;
            towerModalWrapper.style.top = `${towerY[1]}px`;
            towerModalWrapper.style.backgroundColor = "red";

            const id = document.createElement('div');
            id.classList.add('tower-id');
            id.innerText = tower.id;
            towerModalWrapper.append(id);

            const enemiesDefeated = document.createElement('div');
            enemiesDefeated.classList.add('enemies-defeated');
            enemiesDefeated.innerText = tower.enemiesDefeated;
            towerModalWrapper.append(enemiesDefeated);

            document.querySelector('.canvas-container').append(towerModalWrapper);

     }
    //  addTowerModal(tower){
    //      return event => {
    //         const towerX = [tower.coords[0], tower.coords[0] + tower.coords[2]];
    //         const towerY = [tower.coords[1], tower.coords[1] + tower.coords[3]];
    //         const towerXMid = tower.coords[0] + (tower.coords[2] / 2);
    //         const towerYMid = tower.coords[1] + (tower.coords[3] / 2);
    //         debugger
    //         if ((event.offsetX < towerX[1] && event.offsetX > towerX[0]) && (event.offsetY < towerY[0] && event.offsetY > towerY[1])){
    //             // alert('yes');

    //             const towerModalWrapper = document.createElement('div');
    //             towerModalWrapper.classList.add('tower-modal-wrapper');
    //             towerModalWrapper.style.opacity = .9;
    //             towerModalWrapper.style.height = `${tower.coords[3] * -1}px`;
    //             towerModalWrapper.style.width = `${tower.coords[2]}px`;
    //             towerModalWrapper.style.position = "absolute";
    //             towerModalWrapper.style.left = `${towerX[0]}px`;
    //             towerModalWrapper.style.top = `${towerY[1]}px`;
    //             towerModalWrapper.style.backgroundColor = "red";

    //             const enemiesDefeated = document.createElement('div');
    //             enemiesDefeated.classList.add('enemies-defeated');
    //             enemiesDefeated.innerText = tower.enemiesDefeated;
    //             towerModalWrapper.append(enemiesDefeated);

    //             document.querySelector('.canvas-container').append(towerModalWrapper);
    //         } 
    //         debugger
            
    //     }
    //  }

     drawTowers(key){
        const tower = this.towers[key];
        if (!!tower) tower.draw(this.towerImage);
     }
    createEnemies(currentLevel){
        let enemySize = this.canvas.width * .05;
        let health = currentLevel * 20;
        let speed = this.canvas.height * .005;
        for (let i = 0; i < this.numEnemies; i++){
            let maxX = Math.random() * this.canvas.width;
            let maxY = -(Math.random() * this.canvas.height); // set so enemies spawn above
            
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
            let enemy = new Enemy(this.ctx, [maxX, maxY], enemySize, health, speed);
            this.enemies[i] = enemy;
        }
    }
    animateField(game){

        this.drawBattlefield();
        this.drawCastle();
        
        Object.keys(this.towers).forEach(towerKey => {
            this.drawTowers(towerKey);
        });
        if (!!Object.keys(this.enemies).length){
            this.attackEnemies(game);
            Object.keys(this.enemies).forEach(key => {
                this.clearEnemies(key, game);
                this.drawEnemies(key);
                this.updateEnemies(key);
            });
        }
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