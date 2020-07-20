import Enemy from './Enemy'
import Castle from './Castle'
import TowerBasic from './TowerBasic'
import TowerPower from './TowerPower'
import TowerSplash from './TowerSplash'
import * as d3 from 'd3'
import * as THREE from 'three'
const path = require("path");
const images = './dist/images/';

class Battlefield {
    constructor(game){
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
        this.numEnemies = 50;
        this.numTowers = 6;
        this.enemies = {};
        this.towers = {};
        this.nextTower = [];

        this.battlefieldGrass = new Image();
        this.battlefieldGrass.src = path.join(__dirname, images, "../images/grass.jpg");

        this.game = game;

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
        const availableEnemies = enemiesArr.filter(enemy => enemy.coords[1] > 0 && enemy.currentHealth > 0);
        const availableCoords = availableEnemies.map(enemy => enemy.coords[1]);
        const closestThreeCoords = availableCoords.sort((a,b) => b-a).slice(0,3);
        const closestEnemies = availableEnemies.filter(enemy => closestThreeCoords.includes(enemy.coords[1])).sort((a,b) => b-a);
        
        return closestEnemies;
    }
    randomTowerList(towers){
        const randomIds = [];
        while (towers.length){
            const randomIdx = Math.floor(Math.random() * towers.length);
            randomIds.push(towers[randomIdx]);
            const beg = towers.slice(0, randomIdx);
            const fin = towers.slice(randomIdx + 1, towers.length);
            towers = beg.concat(fin);
        }
        return randomIds;
    }
    attackEnemies(game){
        const remainingEnemies = Object.keys(this.enemies).length;
        const towerKeys = Object.keys(this.towers);
        const towers = Object.values(this.towers);
        const towerIds = towers.map(tower => tower.id)
        const randomIds = this.randomTowerList(towerIds);
        
        randomIds.forEach(towerId => {
            const closestEnemies = this.findClosestEnemies();
            const randomIdx = Math.floor(Math.random() * closestEnemies.length);
            const closestCoord = Math.max(...closestEnemies.map(enemy => enemy.coords[1]));
            const closestEnemy = closestEnemies.filter(enemy => enemy.coords[1] == closestCoord)[0];
            const tower = this.towers[towerId];

            if (!!tower.target && tower.target.currentHealth <= 0){
                if (!!this.enemies[tower.target.id]){
                    tower.enemiesDefeated++;
                    delete this.enemies[tower.target.id];
                }
                tower.target = null;
            }
            
            if (!tower.target){
                tower.target = closestEnemies[randomIdx];
            }
            if (closestCoord >= this.canvas.height / 2){
                tower.target = closestEnemy;
            }
            
            if (!!tower.target && tower.target.currentHealth > 0){
                tower.attack(tower.target, this.game)
            } 
            this.refreshTowerModal(tower);
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
        const towerIds = Object.keys(this.towers);
        let id;
        let nextTowerCoords;
        if (this.nextTower.length){
            let nextTower = this.nextTower.shift();
            id = nextTower.id;
            nextTowerCoords = nextTower.coords;
        } else {
            id = 0;
            nextTowerCoords = this.firstTowerCoords;
        }
        switch (type) {
            case 'Basic':
                tower = new TowerBasic(this.ctx, nextTowerCoords, type, id, this.game);
                break;
            case 'Power':
                tower = new TowerPower(this.ctx, nextTowerCoords, type, id, this.game);
                break
            case 'Splash':
                tower = new TowerSplash(this.ctx, nextTowerCoords, type, id, this.game);
                break
            default:
                break;
        }
        this.towers[id] = tower;
        if (!this.nextTower.length) {
            let next = nextTowerCoords;
            let x = next[0] + this.firstTowerCoords[2] + this.canvas.width * .02;
            let y = next[1];
            let width = next[2];
            let height = next[3];
            let nextId = id + 1;
            let nextCoords = [x, y, width, height];
            this.nextTower.push({id: nextId, coords: nextCoords});
        }

        this.addTowerModal(tower);
        this.addTowerStyleBox(tower);
        document.querySelector('.canvas-container').addEventListener('click', this.showTowerModal(tower).bind(this));
    }
    refreshTowerModal(tower){
        const level = document.querySelector(`.tower-modal-wrapper.tower-${tower.id} .tower-level strong`);
        const damage = document.querySelector(`.tower-modal-wrapper.tower-${tower.id} .tower-damage strong`);
        const enemiesDefeated = document.querySelector(`.tower-modal-wrapper.tower-${tower.id} .enemies-defeated strong`);

        level.innerText = `${tower.towerLevel}`;
        const damageMultiplier = Math.round((tower.damage * (((tower.towerLevel - 1) / 10) + 1)) * 1e2) / 1e2;
        damage.innerText = `${damageMultiplier}`;
        enemiesDefeated.innerText = `${tower.enemiesDefeated + ((tower.towerLevel - 1) * 10)}`;
    }
    addTowerModal(tower){
        const modalX = [this.castleCoords[0], this.castleCoords[0] + this.castleCoords[2]];
        const modalY = [this.firstTowerCoords[1] + (this.firstTowerCoords[3] * 2) - this.canvas.height * .01, this.firstTowerCoords[3]];

        const towerModalWrapper = document.createElement('div');
        towerModalWrapper.classList.add(`tower-modal-wrapper`);
        towerModalWrapper.classList.add(`tower-${tower.id}`);
        towerModalWrapper.style.left = `0`;
        towerModalWrapper.style.bottom = "13vh";

        // const id = document.createElement('div');
        // id.classList.add('tower-id');
        // id.innerText = `Id: ${tower.id}`;
        // towerModalWrapper.append(id);
        let twoCol = document.createElement('div');
        twoCol.classList.add('two-col');

        const towerType = document.createElement('div');
        towerType.classList.add('tower-type-modal');
        towerType.innerHTML = `${tower.type} Tower`;
        twoCol.append(towerType);

        const level = document.createElement('div');
        level.classList.add('tower-level');
        level.innerHTML = `Level: <strong>${tower.towerLevel}</strong>`;
        twoCol.append(level);

        const close = document.createElement('div');
        close.classList.add('close-modal');
        close.innerText = "X";
        twoCol.append(close);
        close.onclick = () => this.hideTowerModals();

        towerModalWrapper.append(twoCol);

        const damage = document.createElement('div');
        damage.classList.add('tower-damage');
        const damageMultiplier = (tower.damage * tower.towerLevel).toFixed(2);
        damage.innerHTML = `Damage: <strong>${damageMultiplier}</strong>`;
        towerModalWrapper.append(damage);

        const enemiesDefeated = document.createElement('div');
        enemiesDefeated.classList.add('enemies-defeated');
        enemiesDefeated.innerHTML = `Defeated: <strong>${tower.enemiesDefeated}</strong>`;
        towerModalWrapper.append(enemiesDefeated);

        twoCol = document.createElement('div');
        twoCol.classList.add('two-col');

        const upgrade = document.createElement('div');
        upgrade.classList.add('upgrade-tower');
        const currentUpgradeCost = document.createElement('span');
        currentUpgradeCost.classList.add('current-upgrade-cost');
        currentUpgradeCost.innerText = tower.upgradeCost;
        upgrade.innerText = `Upgrade:`;
        const coinImage = document.createElement('i');
        coinImage.classList.add('fas', 'fa-coins');
        upgrade.append(coinImage);
        upgrade.append(currentUpgradeCost);
        towerModalWrapper.append(twoCol);
        upgrade.onclick = () => this.upgradeTower(tower.id, tower.upgradeCost);
        twoCol.append(upgrade);
        
        const sell = document.createElement('div');
        sell.classList.add('sell-tower');
        sell.innerText = "Sell";
        twoCol.append(sell);
        sell.onclick = () => this.sellTower(tower.id);

        const arrowDown = document.createElement('i');
        arrowDown.classList.add('arrow', 'down');
        arrowDown.style.position = "absolute";
        const arrowWidth = tower.coords[0] + (tower.coords[2] / 2) - 3;
        arrowDown.style.left = `${arrowWidth}px`;
        arrowDown.style.bottom = `.5vh`;
        towerModalWrapper.append(arrowDown);


        document.querySelector('.canvas-container').append(towerModalWrapper);
    }
    sellTower(towerId){
        const tower = this.towers[towerId];
        
        const refund = (tower.cost + (tower.upgradeCost - 100)) * .8;
        this.game.resources += refund;
        
        const towerObj = {
            id: towerId,
            coords: tower.coords,
        };
        
        this.nextTower.unshift(towerObj);

        delete this.towers[towerId];
        this.hideTowerModals();
    }
    upgradeTower(towerId, cost){
        const tower = this.towers[towerId];
        if (this.game.resources >= tower.upgradeCost){
            this.game.resources -= tower.upgradeCost;
            tower.damage *= 1.1;

            tower.upgradeCost += 100;

            document.querySelector(`.tower-${towerId} .current-upgrade-cost`).innerText = tower.upgradeCost;
        }
    }
    hideTowerModals(){
        d3.selectAll('.tower-modal-wrapper').style("display", "none");
    }
    addTowerStyleBox(tower){
        const towerX = [tower.coords[0], tower.coords[0] + tower.coords[2]];
        const towerY = [tower.coords[1], tower.coords[1] + tower.coords[3]];
        const towerXMid = tower.coords[0] + (tower.coords[2] / 2);
        const towerYMid = tower.coords[1] + (tower.coords[3] / 2);

        const towerModalWrapper = document.createElement('div');
        towerModalWrapper.classList.add(`tower-box`);
        towerModalWrapper.classList.add(`tower-${tower.id}`);
        towerModalWrapper.id = `tower-${tower.id}`;
        towerModalWrapper.style.height = `${tower.coords[3] * -1}px`;
        towerModalWrapper.style.width = `${tower.coords[2]}px`;
        towerModalWrapper.style.position = "absolute";
        towerModalWrapper.style.left = `${towerX[0]}px`;
        towerModalWrapper.style.top = `${towerY[1]}px`;

        document.querySelector('.canvas-container').append(towerModalWrapper);
        const towerBox = document.querySelector(`.tower-modal-wrapper.tower-${tower.id}`);

        towerBox.onclick = () => this.showTowerModal(tower).bind(this);
    }
    showTowerModal(tower){
        return event => {
            const towerX = [tower.coords[0], tower.coords[0] + tower.coords[2]];
            const towerY = [tower.coords[1], tower.coords[1] + tower.coords[3]];
            const towerXMid = tower.coords[0] + (tower.coords[2] / 2);
            const towerYMid = tower.coords[1] + (tower.coords[3] / 2);

            this.refreshTowerModal(tower);

            if (event.target.classList.contains('tower-box')){
                this.hideTowerModals();
                const towerModal = document.querySelector(`.${event.target.id}`);
                towerModal.style.display = "flex";
            } 
        }
    }

    drawTowers(key){
        const tower = this.towers[key];
        if (!!tower) tower.draw(this.towerImage);
    }
    createEnemies(currentLevel){
        let enemyWidth = this.canvas.width * .15;
        let enemyHeight = this.canvas.height * .07;
        let health = currentLevel * 20;
        let speed = 1;
        for (let i = 0; i < this.numEnemies; i++){
            let maxX = Math.random() * this.canvas.width;
            let maxY = -(Math.random() * this.canvas.height); // set so enemies spawn above
            // set x value on enmies to spawn within the canvas
            if ((this.canvas.width - maxX >= 0) && this.canvas.width - maxX <= enemyWidth){ // > max length
                maxX -= enemyWidth;
            } else if ( maxX <= enemyWidth){ // < max length
                maxX += enemyWidth;
            }
            // set y value on enmies to spawn within the canvas
            if ((this.canvas.height + maxY >= 0)){ // have enemies spawn offscreen from the top
                maxY -= enemyHeight;
            }
            let enemy = new Enemy(this.ctx, [maxX, maxY, enemyWidth, enemyHeight], health, speed, i);
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