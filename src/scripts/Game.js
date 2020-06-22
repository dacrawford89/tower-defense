import Castle from './Castle'
import Tower from './Tower'
import Enemy from './Enemy'
import LeftBar from './LeftBar'
import Timer from './Timer'
import Battlefield from './Battlefield'

class Game {
    constructor(){
        this.level = 1;
        this.score = 0;
        this.resources = 0;
        this.health = 100;
        this.spawn = false;
    }
    initialize(){
        this.battlefield = new Battlefield();
        this.leftBar = new LeftBar();
        
        this.battlefield.initialize();
        this.battlefield.render();
        this.leftBar.render();
        document.querySelector('.left-bar').addEventListener('click', () => this.battlefield.createTower('basic'))
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