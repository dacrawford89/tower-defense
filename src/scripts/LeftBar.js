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
        upgradeCost.innerText = `${this.updateResourceCost}`;
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
        wrapper.append(currentResources);
        this.wrapper.append(wrapper);
    }
    addTowerButtons(){
        let wrapper = document.createElement('div');
        wrapper.classList.add('add-towers-wrapper');
        for (let i = 0; i < this.towerTypes.length; i++){
            const tower = document.createElement('div');
            tower.classList.add(this.towerTypes[i].type);
            const towerType = document.createElement('div');
            towerType.classList.add('tower-type');
            towerType.innerText = this.towerTypes[i].type;
            tower.append(towerType);
            const towerCost = document.createElement('div');
            towerCost.classList.add('tower-cost');
            towerCost.innerText = this.towerTypes[i].cost
            tower.append(towerCost);
            wrapper.append(tower);

            this.wrapper.append(wrapper);
        }
    }
    removeHandlers(){
    }
}

export default LeftBar