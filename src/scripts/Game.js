import Castle from './Castle'
import Tower from './Tower'
import Enemy from './Enemy'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import Timer from './Timer'
import Battlefield from './Battlefield'

class Game {
    constructor(){
        this.level = 0;
        this.score = 0;
        this.resources = 0;
        this.health = 20;
        this.towerTypes = [
            {type: "Basic", cost: 100},
            {type: "Power", cost: 200},
            {type: "Splash", cost: 300},
        ];
        this.spawn = false;
        this.battlefield = new Battlefield();

        this.resourceRate = 100;
        this.updateResourceCost = 100;

        this.leftBar = new LeftBar(this.towerTypes, this.resources, this.updateResourceCost);

        this.rightBar = new RightBar(this.health);

        this.upgradeIncomeBind = this.upgradeIncome.bind(this);

    }
    initialize(){
        this.battlefield.initialize();
        this.battlefield.render();
        this.leftBar.render();
        for (let i = 0; i < this.towerTypes.length; i++){
            document.querySelector(`.${this.towerTypes[i].type}`)
                .addEventListener('click', () => {
                    if (this.resources >= this.towerTypes[i].cost && Object.keys(this.battlefield.towers).length < 6){
                        this.resources -= this.towerTypes[i].cost;
                        this.battlefield.createTower(this.towerTypes[i]);
                    } 
                });
        }

        // debugger
        this.resourceInterval = setInterval(this.generateResources.bind(this), this.resourceRate);

        
        document.querySelector('.upgrade-income').addEventListener('click', this.upgradeIncomeBind);
        this.rightBar.render();
    }
    newRound(remaining){
        this.level++;
        this.generateLevel();
        this.startTimer(remaining);
    }
    upgradeIncome(){
        debugger
        if (this.resources >= this.updateResourceCost){
            this.resources -= this.updateResourceCost;
            this.updateResourceCost += 100;
            const resources = document.querySelector('.income-upgrade-cost');
            resources.innerText = this.updateResourceCost;
            clearInterval(this.resourcesInterval);
            this.resourceRate += 100;
            this.resourceInterval = setInterval(this.generateResources.bind(this), this.resourceRate);
        }
    }
    generateResources(){
        this.resources += 10;
        const resources = document.querySelector('.current-resources');
        resources.innerText = this.resources;
    }
    stopResources(){
        clearInterval(this.resourceInterval);
    }
    generateScore(){

    }
    generateLevel(){
        const currentLevel = document.querySelector('.current-level');
        currentLevel.innerText = this.level;
    }
    startTimer(remaining){
        this.timer = new Timer(remaining);
        this.timer.render();
    }
    clearTimer(){
        this.timer.clear();
    }
    lose(requestId){
        debugger
        window.cancelAnimationFrame(requestId);
        this.clearTimer();
        this.stopResources();
        this.generateLoseMessage();

        document.querySelector('.upgrade-income').removeEventListener('click', this.upgradeIncomeBind);
    }
    generateLoseMessage(){
        if (!document.querySelector('.lose-message')){
            const wrapper = document.createElement('div');
            wrapper.classList.add('lose-message');
            wrapper.innerText = "You Lose";
            document.body.append(wrapper);
        }
    }
}

export default Game;