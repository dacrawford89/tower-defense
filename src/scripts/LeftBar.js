class LeftBar {
    constructor(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('left-bar');
        this.wrapper.style.height = "25px";
        this.wrapper.style.width = "25px";
        this.wrapper.style.backgroundColor = "red";
    }
    render(){
        document.body.append(this.wrapper);
        
    }
}

export default LeftBar