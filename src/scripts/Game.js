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
        this.towerTypes = ["Basic", "Power", "Splash"];
        this.spawn = false;
        this.battlefield = new Battlefield();
        this.leftBar = new LeftBar(this.towerTypes);
        this.rightBar = new RightBar();
    }
    initialize(){
        
        this.battlefield.initialize();
        this.battlefield.render();
        this.leftBar.render();
        for (let i = 0; i < this.towerTypes.length; i++){
            document.querySelector(`.${this.towerTypes[i]}`).addEventListener('click', () => this.battlefield.createTower(this.towerTypes[i]))
        }
        this.rightBar.render();
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