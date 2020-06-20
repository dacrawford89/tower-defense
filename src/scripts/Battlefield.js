class Battlefield {
     constructor(props){
         this.canvas = document.createElement('canvas');
         this.canvas.width = 200;
         this.canvas.height = window.innerHeight * .9;
         this.canvas.style.border = "1px solid black";
         this.ctx = this.canvas.getContext('2d');
         this.battlefieldColor = "#3dd11f"
     }
     createCanvas(){
         document.body.append(this.canvas);
     }
     drawBattlefield(){
        debugger;
        this.ctx.fillStyle = this.battlefieldColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
     }
}
export default Battlefield;