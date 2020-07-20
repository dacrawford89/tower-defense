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
        window.addEventListener('click', () => document.querySelectorAll('.help').forEach(element => element.style.display = ""));
        
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

        const helpIcon = document.createElement('i');
        helpIcon.classList.add('fas', 'fa-question-circle','help-icon');
        this.addHelpIconHandler(helpIcon)
        const help = document.createElement('div');
        help.classList.add('help');
        help.innerText = "Use this to increase your resource generation rate by 10%. Cost increases with each round"
        helpIcon.append(help);

        wrapper.append(helpIcon);
        upgradeCost.append(upgradeCostAmount);
        wrapper.append(upgradeCost);
        this.wrapper.append(wrapper);
    }
    addResourcesDisplay(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('resources-display');
        const coinImage = document.createElement('i');
        coinImage.classList.add('fas', 'fa-coins');
        wrapper.append(coinImage);
        const currentResources = document.createElement('div');
        currentResources.classList.add('current-resources');
        currentResources.innerText = this.resources;

        const helpIcon = document.createElement('i');
        helpIcon.classList.add('fas', 'fa-question-circle','help-icon');
        this.addHelpIconHandler(helpIcon)
        const help = document.createElement('div');
        help.classList.add('help');
        help.innerText = "These are your current resources, and generate automatically. 'Boost Income' below to increase generation rate."
        helpIcon.append(help);
        wrapper.append(currentResources);
        wrapper.append(helpIcon);
        this.wrapper.append(wrapper);
    }
    addTowerButtons(){
        let wrapper = document.createElement('div');
        wrapper.classList.add('add-towers-wrapper');

        const addTowersTitle = document.createElement('h2');
        addTowersTitle.classList.add('add-towers-title', 'sidebar-title')
        addTowersTitle.innerText = "Add Towers"
        wrapper.append(addTowersTitle);
        for (let i = 0; i < this.towerTypes.length; i++){
            const tower = document.createElement('div');
            tower.classList.add(this.towerTypes[i].type, 'add-tower-div');
            const towerType = document.createElement('p');
            towerType.classList.add('tower-type');
            towerType.innerText = this.towerTypes[i].type;
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