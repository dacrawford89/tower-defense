class Timer {
    constructor(remaining){
        this.remaining = remaining;
        this.timer = document.createElement('p');
        this.timer.classList.add('timer');
        this.timer.innerText = this.remaining;
        this.interval = setInterval(this.tick.bind(this), 1000);
    }
    render(){
   
        document.body.append(this.timer);
    }
    tick(){
        this.remaining -= 1;
        this.timer.innerText = this.remaining;
    }
    clear(){
        clearInterval(this.interval);
        const timer = document.querySelector('.timer');
        if (!!timer) timer.parentNode.removeChild(timer);
    }
}

export default Timer;