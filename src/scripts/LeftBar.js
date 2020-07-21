class LeftBar {
    constructor(towerTypes, resources, upgradeCost){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('left-bar');
        this.resources = resources;
        this.towerTypes = towerTypes;
        this.updateResourceCost = upgradeCost;
        this.addHelpIconHandler = this.addHelpIconHandler.bind(this);
    }
    render(){
        this.initialize();
        document.body.prepend(this.wrapper);
    }
    initialize(){
        this.addResourcesDisplay();
        this.addUpgradeIncome();
        this.addTowerButtons();
        
    }
    addHelpIconHandler(element){
        // debugger
        element.addEventListener('mouseenter', (e) => {
            e.stopPropagation();
            const helpBoxes = document.querySelectorAll('.help')
            helpBoxes.forEach(box => box.style.display = "")
            const help = e.currentTarget.firstChild;
                help.style.display = "block"
        })
        element.addEventListener('mouseleave', (e) => {
            e.stopPropagation();
            const helpBoxes = document.querySelectorAll('.help')
            helpBoxes.forEach(box => box.style.display = "")
            const help = e.currentTarget.firstChild;
                help.style.display = ""
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
    addUpgradeIncome(){
        const wrapper = document.createElement('div');
        const arrowUp = document.createElement('i');
        arrowUp.classList.add('fas', 'fa-arrow-circle-up');
        wrapper.append(arrowUp);
        wrapper.classList.add('upgrade-income', 'sidebar-title');
        wrapper.innerHTML += "Boost Income";
        const upgradeCost = document.createElement('div');
        upgradeCost.classList.add('income-upgrade-cost');
        const coinImage = document.createElement('i');
        coinImage.classList.add('fas', 'fa-coins');
        upgradeCost.append(coinImage);
        const upgradeCostAmount = document.createElement('p');
        upgradeCostAmount.classList.add('upgrade-cost-amount');
        upgradeCostAmount.innerHTML = this.updateResourceCost;

        const help = this.createHelpBox('Use this to increase your resource generation rate by 10%. Cost increases with each round');

        wrapper.append(help);
        upgradeCost.append(upgradeCostAmount);
        wrapper.append(upgradeCost);
        this.wrapper.append(wrapper);
    }
    addResourcesDisplay(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('resources-display');
        const help = this.createHelpBox("These are your current resources, and generate automatically. 'Boost Income' below to increase generation rate.")
        wrapper.append(help);
        const coinImage = document.createElement('i');
        coinImage.classList.add('fas', 'fa-coins');
        wrapper.append(coinImage);
        const currentResources = document.createElement('div');
        currentResources.classList.add('current-resources');
        currentResources.innerText = this.resources;

        wrapper.append(currentResources);
        this.wrapper.append(wrapper);
    }
    addTowerButtons(){
        let wrapper = document.createElement('div');
        wrapper.classList.add('add-towers-wrapper');

        const addTowersTitle = document.createElement('h2');
        addTowersTitle.classList.add('add-towers-title', 'sidebar-title')
        addTowersTitle.innerText = "Add Towers"
        const help = this.createHelpBox('Create towers by clicking one below. Their cost is next to their name. ')
        addTowersTitle.append(help);
        wrapper.append(addTowersTitle);
        for (let i = 0; i < this.towerTypes.length; i++){
            const tower = document.createElement('div');
            tower.classList.add(this.towerTypes[i].type, 'add-tower-div');
            const towerType = document.createElement('p');
            towerType.classList.add('tower-type');
            towerType.innerText = this.towerTypes[i].type;
            let help;
            switch (this.towerTypes[i].type) {
                case 'Basic':
                    help = this.createHelpBox('Basic towers attack fast but have low damage.')
                    break;
                case 'Power':
                    help = this.createHelpBox('Power towers have high damage but slow attack.')
                    break;
                case 'Splash':
                    help = this.createHelpBox('Splash towers hit all enemies on canvas at the time of attack, but have low damage and attack speed.')
                    break;
                default:
                    break;
            }
            towerType.append(help);
            tower.append(towerType);
            const towerCost = document.createElement('p');
            towerCost.classList.add('tower-cost');
            const coinImage = document.createElement('i');
            coinImage.classList.add('fas', 'fa-coins');
            towerCost.prepend(coinImage);
            towerCost.innerHTML += this.towerTypes[i].cost;
            tower.append(towerCost);

            wrapper.append(tower);

            this.wrapper.append(wrapper);
        }
    }
}

export default LeftBar