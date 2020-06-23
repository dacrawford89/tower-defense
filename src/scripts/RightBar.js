class RightBar {
    constructor(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('right-bar');
    }
    render(){
        this.initialize();
        document.body.append(this.wrapper);
    }
    initialize(){
        this.addScore();
        this.addLevel();
        this.addHealth();
        this.addNumEnemies();
    }
    addScore(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('score-wrapper');
        wrapper.innerText = "Score: ";
        const currentScore = document.createElement('div');
        currentScore.classList.add('current-score');
        currentScore.innerText = 0;
        wrapper.append(currentScore);

        this.wrapper.append(wrapper);   
    }
    addLevel(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('level-wrapper');
        wrapper.innerText = "Level: ";

        const currentLevel = document.createElement('div');
        currentLevel.classList.add('current-level');
        currentLevel.innerText = 1;

        wrapper.append(currentLevel);

        this.wrapper.append(wrapper);

    }
    addHealth(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('health-wrapper');
        wrapper.innerText = "Health:";

        const currentHealth = document.createElement('div');
        currentHealth.innerText = 100;
        currentHealth.classList.add('current-health');
        wrapper.append(currentHealth);

        this.wrapper.append(wrapper);
    }
    addNumEnemies(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('num-enemies-wrapper');
        wrapper.innerText = "Enemies:";

        const numEnemies = document.createElement('div');
        numEnemies.classList.add('num-enemies');
        numEnemies.innerText = 0;
        wrapper.append(numEnemies);

        this.wrapper.append(wrapper);
    }
}
export default RightBar;