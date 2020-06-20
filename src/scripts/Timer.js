class Timer {
    constructor(remaining){
        this.remaining = remaining;
        this.timer = document.createElement('p');
        this.timer.innerText = this.remaining;
        this.interval = setInterval(this.tick.bind(this), 1000);
    }
    create(){
        document.body.append(this.timer);
    }
    tick(){
        this.remaining -= 1;
        this.timer.innerText = this.remaining;
    }
    clear(){
        clearInterval(this.interval);
    }
}

export default Timer;