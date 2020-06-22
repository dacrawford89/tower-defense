import Game from './scripts/Game'
import Battlefield from "./scripts/Battlefield";
import LeftBar from './scripts/LeftBar'
import Timer from "./scripts/Timer";
import './styles/index.scss'
// const testObj = {
//   key1: "hi",
//   key2: {
//     key3: "Hello",
//   },
// };

// const greeting = testObj?.key2?.key3 || testObj.key1;
// window.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("center");
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World!</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
// });

const main = () => {
  // initial load
  const game = new Game();
  game.initialize();

  const bf = game.battlefield;
    // debugger
    let animating = true;
    const animation = () => {
      // debugger
      const timer = game.timer;
      if (!timer){
        game.startTimer(0);
      } else if (timer.remaining < 0) {
        // debugger
        timer.clear();
        if (!Object.keys(bf.enemies).length) bf.createEnemies();
        bf.animateField();
        if (Object.keys(bf.enemies).length <= 0) game.startTimer(0);
      }
      window.requestAnimationFrame(animation);
    }
    window.requestAnimationFrame(animation);
 


    // let animating = true;

    //   let timer = new Timer(0);
    //   timer.create();
    //   bf.createEnemies();
    //   bf.drawEnemies();
    //   const animation = () => {
    //     bf.render();
    //     Object.keys(bf.towers).forEach(key => {
    //       bf.drawTowers(key);
    //     })
    //     // debugger
    //     if (timer.remaining < 0 && Object.keys(bf.enemies).length) {
    //       // debugger
    //       timer.clear();
    //       bf.attackEnemies();
    //       Object.keys(bf.enemies).forEach(key => {
    //       if (animating) bf.updateEnemies(key);
    //         bf.clearEnemies(key);
    //         bf.drawEnemies(key);
    //       })
    //     }
    //     if (Object.keys(bf.enemies).length === 0){
    //       main();
    //     } else {
    //       window.requestAnimationFrame(animation);
    //     }
    //   };
    //   window.requestAnimationFrame(animation);

}

window.addEventListener("DOMContentLoaded", main);

