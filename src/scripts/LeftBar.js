class LeftBar {
    constructor(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('left-bar');
    }
    render(){
        this.generateButtons();
        document.body.prepend(this.wrapper);
    }
    generateButtons(){
        this.addTowers();
    }
    addTowers(){
        let button;
        button = document.createElement('div');
        button.innerText = "Add Tower";
        button.classList.add('add-tower');
        this.wrapper.append(button);
    }
}

export default LeftBar