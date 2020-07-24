import Castle from './Castle'
import Tower from './Tower'
import Enemy from './Enemy'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import Timer from './Timer'
import Battlefield from './Battlefield'
import * as THREE from 'three';

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
        this.battlefield = new Battlefield(this);

        this.resourceRate = .1;
        this.updateResourceCost = 100;

        this.leftBar = new LeftBar(this.towerTypes, this.resources, this.updateResourceCost);

        this.rightBar = new RightBar(this.health);

        this.upgradeIncomeBind = this.upgradeIncome.bind(this);

        this.startGame = this.startGame.bind(this);
        this.showInstructions = this.showInstructions.bind(this);
        this.hideInstructions = this.hideInstructions.bind(this);
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
        document.querySelector('.upgrade-income').addEventListener('click', this.upgradeIncomeBind);
        this.rightBar.render();
    }

    intro(){
        this.canvasContainer = document.querySelector('.canvas-container');

        this.generateInstructions();
        this.addShowInstructionsButton();
        document.querySelector('.show-instructions-button').addEventListener('click', this.showInstructions);
        document.querySelector('.hide-instructions-button').addEventListener('click', this.hideInstructions);

        const container = document.querySelector('.instructions-wrapper');
        this.addStartButton(container);
        document.querySelector('.start-button').addEventListener('click', this.startGame);
    }
    generateInstructions(){
        const instructionsWrapper = document.querySelector('.instructions-wrapper');
        this.canvasContainer.append(instructionsWrapper);
    }
    startGame(){
        this.resourceInterval = setInterval(this.generateResources.bind(this), 10 / this.resourceRate);

        // const intro = document.getElementById('intro');
        // intro.style.display = "none";
        
        const instructions = document.querySelector('#instructions-wrapper');
        if (instructions) instructions.style.display = "none";
    }
    addShowInstructionsButton(){
        const button = document.createElement('button');
        button.classList.add('show-instructions-button');

        button.innerText = "How To Play";
        document.querySelector('.instructions-wrapper').append(button);
    }
    showInstructions(){
        document.querySelector('.instructions').style.display = "flex";
    }
    hideInstructions(){
        document.querySelector('.instructions').style.display = "none";
    }
    addStartButton(container, startGameFX){
        const wrapper = document.createElement('div');
        wrapper.classList.add('start-button-wrapper');

        const button = document.createElement('button');
        button.addEventListener('click',this.startGame);
        button.classList.add('start-button');
        button.innerText = "START";
        wrapper.append(button);

        // button.addEventListener('click', () => this.startGame());
        container.append(wrapper);
    }
    newRound(remaining){
        this.level++;
        this.generateLevel();
        this.startTimer(remaining);
    }
    upgradeIncome(){
        if (this.resources >= this.updateResourceCost){
            this.resources -= this.updateResourceCost;
            this.updateResourceCost += 100;
            const resources = document.querySelector('.upgrade-cost-amount');
            resources.innerText = this.updateResourceCost;
            clearInterval(this.resourceInterval);
            this.resourceRate += .01;
            const resourceSpeed = 10 / this.resourceRate;
            this.resourceInterval = setInterval(this.generateResources.bind(this), resourceSpeed);
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
        delete this.timer;
    }
    lose(){
        this.stopResources();
        this.generateLoseMessage();

        document.querySelector('.upgrade-income').removeEventListener('click', this.upgradeIncomeBind);

    }
    generateLoseMessage(startGameFx){
        if (!document.querySelector('.lose-message')){
            const wrapper = document.createElement('div');
            wrapper.classList.add('lose-message');
            wrapper.innerText = "You Lose";
            this.addStartButton(wrapper);
            document.body.append(wrapper);
        }
    }
}

export default Game;