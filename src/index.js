import Game from './scripts/Game'
import Battlefield from "./scripts/Battlefield";
import LeftBar from './scripts/LeftBar'
import Timer from "./scripts/Timer";
import './styles/index.scss'



const main = () => {
  // initial load
  let game = new Game();
  game.initialize();
  game.intro();

  const newGame = () => {
    const body = document.querySelector('body');
    while (body.firstChild){
        body.removeChild(body.firstChild);
    }
    game = new Game();
    game.initialize();
    game.startGame();
    startGame();
  }

  let requestId;
  
  document.querySelector('.start-button').addEventListener('click', () => startGame());


  const startGame = () => {

    game.startGame = newGame;
    const bf = game.battlefield;

    let animating = true;
    let spawning = true;

    const animation = () => {
      
      if (game.health <= 0){
        // game.lose(requestId);
        game.lose(newGame);
        return;
      }
      
      let timer = game.timer;
      if (!timer && !Object.keys(bf.enemies).length && game.health > 0){
        game.newRound(10);
      }  else if (!!timer && timer.remaining < 0){
        game.clearTimer();
        
        if (!Object.keys(bf.enemies).length) bf.createEnemies(game.level);

      }
      bf.animateField(game);
        requestId = window.requestAnimationFrame(animation);
      }
      requestId = window.requestAnimationFrame(animation);
  }
}

window.addEventListener("DOMContentLoaded", main);

