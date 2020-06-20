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
  const bf = new Battlefield();
  bf.createCanvas();
  bf.drawBattlefield();
  bf.drawTowerContainer();
  bf.drawCastle();
  bf.createEnemies();
  bf.drawEnemies();
  let animating = true;

  const timer = new Timer(10);
  timer.create();
  const animation = () => {
    if (timer.remaining == 0) timer.clear();
    bf.clearEnemies();
    if (animating) bf.updateEnemies();
    bf.drawBattlefield();
    bf.drawTowerContainer();
    bf.drawCastle();
    bf.drawEnemies();
    window.requestAnimationFrame(animation);
    // if (canvas.coords[0] + canvas.coords[2] > canvas.canvas.width)
      // canvas.reverseAnimation();
    // if (canvas.coords[0] < 0) canvas.reverseAnimation();
  };
  

  

  window.requestAnimationFrame(animation);

  // debugger
}

window.addEventListener("DOMContentLoaded", main);

