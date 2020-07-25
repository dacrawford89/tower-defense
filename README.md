# tower-defense
Defend your base against enemy invaders!

# Setup & Configuration
- To use this app, clone from Github. There is no server to setup; simply copy the `index.html` path and paste into the browser to begin playing.
- To track changes made to files, run `npm run webpack` from the terminal.
# Overview of Technologies
- JS
- HTML
- SCSS
- Webpack
### note: this project has no backend server running.

# Features
- How to play Instructions displayed on splash page -- player may hover over "?" to view information about a particular UI element.
- Build towers that automatically target and attack invaders -- smart targeting system that focuses all towers to attack the closest enemy invader that crosses the battlefield's halfway point. Towers level up for every 10 enemies defeated -- each tower level increases its base damage by 10%. 
- Generate resources automatically and increase their generation rate.
- Click on towers after creating to view that tower's enemies defeated, current level, current damage. Clicking on towers also allows for upgrades and selling.
- View current game score, level, and enemies spawned.

# Explanation of Game Loop
Within `index.js` is the main game loop. 
### `main()` 
- This is the initial call to the game loop function, **not the animation loop.** 
### `newGame()` 
- initiates a new game by clearing the document body of all HTML elements, then initializing a new game, and finally starting a new game. Afterward, it initializes the function `startGame`.
### `startGame()` 
- Begins the animation loop. Note: newGame is passed into `Game` for use with an on click handler to begin a new game after losing.
- `game.newRound(n)` - sets the timer in seconds for the next round.
- `game.clearTimer()` - reset the timer
- `bf.createEnemies(enemyLevel)` - passes current game's level to be used for setting enemy health.
- `bf.animateField(game)` - main battlefield animation. Must pass in the game.

### Battlefield ###
#### `src/scripts/Battlefield.js`
- `constructor(game)` - Takes in an instance of `Game` from `index.js` and sets several configurations.
- `this.canvas` - creates the battlefield's main canvas. 
- `this.ctx` - sets the `canvas` context and is used throughout application for rendering.
- `this.castleCoords` - [x, y, width, height] arguments passed into an instance of `Castle` and are used with `canvas` to later render the castle background image.
- `this.numTowers` - sets the max towers that can be created. Note that current canvas layout is maximized for 6 towers.
- `this.firstTowerCoords` - [x,y,width,height] used for placing the first tower the user creates. These coords are used to calculate position rendering for later towers.
- `this.currentLevel` - set current level.
- `this.numEnemies` - num enemies to spawn for current level
- `this.enemies` - used to store instances of each enemy spawned
- `this.towers` - used to store instances of each tower created
- `this.nextTower` - array used for calculating where the next tower should be positioned after creating/selling.
- `this.enemyDefeatedSound` - create new `<audio>` HTMLElement that is later called with `.play()` to play a sound when an enemy is defeated.
- `this.battlefieldGrass` - create new `<img>` HTML Element that will be used in the battlefield's `<canvas>` HTML Element image as the grass background.
- `this.game` - stores the instance of the current game. This is passed through `constructor()`.
#### `initialize()`
- Creates battlefield canvas and castle.
#### `render()`
- Draws the battlefield, castle, and towers.
#### `clear()`
- Clears the entire battlefield canvas element.
#### `findClosestEnemies()`
- Searches the battlefield for any enemies within the canvas height and with health greater than 0. Returns the three closest enemies.
#### `attackEnemies(game)`
- Must take in instance of `Game`.
- Iterates through the `Battlefield`'s current towers and attacks enemies. Current tower's target will be set to a random closest enemy if that enemy is past the  y-axis of the `canvas`'s halfway point.
- Refreshes the tower modal after each iteration to keep each `Tower` stats up-to-date.
#### `createCanvas()`
- creates the main `canvas` HTML Element for the battlefield and appends it to the `document` DOM.
#### `drawBattlefield()`
- uses `this.battlefieldGrass` to set the `fillStyle` of `this.ctx` to the image.
#### `createCastle()`
- sets the `Castle` instance of the current `Game`
#### `drawCastle()`
- draws the castle. See `Castle` for more details.
#### `createTower({type})`
- Creates a `Tower` of the given type.
- Checks `this.nextTower` for the next position to create the tower at and uses it; otherwise, it's the first tower so it uses `this.firstTowerCoords`. It adds the next tower coords to `this.nextTower` for the next tower.
##### Please note the object destructuring of the argument.
#### `refreshTowerModal(tower)`
- Updates the tower modal after it has been created.
- Damage multiplier display manual calculation.
#### `addTowerModal(tower)`
- Creates the initial tower modal at the `Tower`'s position. 
#### `sellTower(towerId)`
- Sells the tower.
#### `upgradeTower(towerId)`
- Upgrades the specific tower's damage by 10% if there are enough current resources. 
- Increases upgrade cost.
- Updates the tower modal with new update cost.

# Future Developments
- Implement Express server to track high scores
- Click invaders to damage them
- Survival Mode Competitive play (see who can ward off invaders the longest)
- Custom Castle/Tower Images unlocked by user's highest score
