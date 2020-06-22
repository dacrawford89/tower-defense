class LeftBar {
    constructor(towerTypes, resources){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('left-bar');
        this.resources = resources;
        this.towerTypes = towerTypes;
    }
    render(){
        this.initialize();
        document.body.prepend(this.wrapper);
    }
    initialize(){
        this.addResourcesDisplay();
        this.addTowerButtons();
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