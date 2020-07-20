class RightBar {
    constructor(health){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('right-bar');
        this.health = health;
        this.addHelpIconHandler = this.addHelpIconHandler.bind(this);
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
    addHelpIconHandler(element){
        // debugger
        element.addEventListener('click', (e) => {
            e.stopPropagation();
            const helpBoxes = document.querySelectorAll('.help')
            helpBoxes.forEach(box => box.style.display = "")
            const help = e.currentTarget.firstChild;
                help.style.display = "block"
        })
    }
    createHelpBox(message){
        const helpIcon = document.createElement('i');
        helpIcon.classList.add('fas', 'fa-question-circle','help-icon');
        this.addHelpIconHandler(helpIcon)
        const help = document.createElement('div');
        help.classList.add('help');
        help.innerHTML = message;
        helpIcon.append(help)
        return helpIcon;      
    }
    addScore(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('score-wrapper');
        wrapper.innerText = "Score: ";
        const help = this.createHelpBox('Score increases by the amount of damage dealt.');
        wrapper.append(help);
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
        const help = this.createHelpBox('Level increases when all enemies of the current level are defeated. Enemies start with more health with each new level.');
        wrapper.append(help);

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
        const help = this.createHelpBox('Health starts at 20 and decreases by 1 for each enemy that reaches your towers. When health reaches 0, you lose.');
        wrapper.append(help);

        const currentHealth = document.createElement('div');
        currentHealth.innerText = this.health;
        currentHealth.classList.add('current-health');
        wrapper.append(currentHealth);

        this.wrapper.append(wrapper);
    }
    addNumEnemies(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('num-enemies-wrapper');
        wrapper.innerText = "Enemies:";
        const help = this.createHelpBox('This shows the current number of enemies for the current level. Defeat them all to move to the next level.');
        wrapper.append(help);

        const numEnemies = document.createElement('div');
        numEnemies.classList.add('num-enemies');
        numEnemies.innerText = 0;
        wrapper.append(numEnemies);

        this.wrapper.append(wrapper);
    }
}
export default RightBar;