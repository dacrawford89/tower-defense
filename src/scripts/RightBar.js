class RightBar {
    constructor(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('right-bar');
    }
    render(){
        document.body.append(this.wrapper);
    }
}
export default RightBar;