import Battlefield from "./scripts/Battlefield";
import Timer from "./scripts/Timer";
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
  const bf = new Battlefield(20);
  bf.createCanvas();
  bf.drawBattlefield();
  bf.drawCastle();
  bf.createTowers();
  
  bf.drawTowers();
  bf.createEnemies();
  bf.drawEnemies();
  let animating = true;

  const timer = new Timer(0);
  timer.create();
  const animation = () => {
    bf.drawBattlefield();
    bf.drawCastle();
    Object.keys(bf.towers).forEach(key => {
      bf.drawTowers(key);
    })
      if (timer.remaining < 0 && Object.keys(bf.enemies).length) {
        timer.clear();
        bf.attackEnemies();
        Object.keys(bf.enemies).forEach(key => {

          if (animating) bf.updateEnemies(key);
          
          bf.clearEnemies(key);
          bf.drawEnemies(key);
        })
      }
      window.requestAnimationFrame(animation);
    
    // if (canvas.coords[0] + canvas.coords[2] > canvas.canvas.width)
      // canvas.reverseAnimation();
    // if (canvas.coords[0] < 0) canvas.reverseAnimation();
  };
  

  

  window.requestAnimationFrame(animation);

  
}

window.addEventListener("DOMContentLoaded", main);

