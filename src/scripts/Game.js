import Castle from './Castle'
import Tower from './Tower'
import Enemy from './Enemy'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import Timer from './Timer'
import Battlefield from './Battlefield'

class Game {
    constructor(){
        this.level = 1;
        this.score = 0;
        this.resources = 0;
        this.health = 100;
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

        this.rightBar = new RightBar();

    }
    initialize(){
        
        this.battlefield.initialize();
        this.battlefield.render();
        this.leftBar.render();
        for (let i = 0; i < this.towerTypes.length; i++){
            debugger
            document.querySelector(`.${this.towerTypes[i].type}`)
                .addEventListener('click', () => {
                    if (this.resources >= this.towerTypes[i].cost){
                        this.resources -= this.towerTypes[i].cost;
                        this.battlefield.createTower(this.towerTypes[i]);
                    } 
                });
        }

        // debugger
        this.resourceInterval = setInterval(this.generateResources.bind(this), this.resourceRate);
        document.querySelector('.upgrade-income').addEventListener('click', () => this.upgradeIncome());
        this.rightBar.render();
    }
    upgradeIncome(){
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
    
    startTimer(remaining){
        this.timer = new Timer(remaining);
        this.timer.render();
    }
    clearTimer(){
        this.timer.clear();
    }
}

export default Game;