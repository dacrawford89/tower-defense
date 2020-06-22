class LeftBar {
    constructor(towerTypes){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('left-bar');
        this.towerTypes = towerTypes;
    }
    render(){
        this.generateButtons();
        document.body.prepend(this.wrapper);
    }
    generateButtons(){
        this.addBasicTower();
    }
    addBasicTower(){
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