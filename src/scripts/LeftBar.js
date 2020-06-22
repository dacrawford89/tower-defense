class LeftBar {
    constructor(towerTypes, resources, upgradeCost){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('left-bar');
        this.resources = resources;
        this.towerTypes = towerTypes;
        this.updateResourceCost = upgradeCost;
    }
    render(){
        this.initialize();
        document.body.prepend(this.wrapper);
    }
    initialize(){
        this.addUpgradeIncome();
        this.addResourcesDisplay();
        this.addTowerButtons();
    }
    
    addUpgradeIncome(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('upgrade-income');
        wrapper.innerText = "Upgrade Income";
        const upgradeCost = document.createElement('div');
        upgradeCost.classList.add('income-upgrade-cost');
        upgradeCost.innerText = this.updateResourceCost;
        wrapper.append(upgradeCost);
        this.wrapper.append(wrapper);
    }
    addResourcesDisplay(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('resources-display');
        const currentResources = document.createElement('div');
        currentResources.classList.add('current-resources');
        currentResources.innerText = this.resources;
        wrapper.innerText = `Resources:`;
        wrapper.append(currentResources)
        this.wrapper.append(wrapper);

    }
    addTowerButtons(){
        let button;
        for (let i = 0; i < this.towerTypes.length; i++){
            button = document.createElement('div');
            button.innerText = this.towerTypes[i];
            button.classList.add(this.towerTypes[i]);
            this.wrapper.append(button);
        }
    }
}

export default LeftBar