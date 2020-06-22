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
        this.spawn = false;
        this.battlefield = new Battlefield();
        this.leftBar = new LeftBar();
        this.rightBar = new RightBar();
    }
    initialize(){
        
        this.battlefield.initialize();
        this.battlefield.render();
        this.leftBar.render();
        document.querySelector('.add-tower').addEventListener('click', () => this.battlefield.createTower('basic'))
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