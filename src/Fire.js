import {ctx, canvas, grn} from './util.js'


export class Fire{
    img = new Image()
   
    constructor(x, y){
        this.x = x
        this.y = y
        
        this.img.src = "https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-512.png"
        this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, 40, 40)
    }
    draw(){
        
        this.img.onload()
    }   
    move(){
        this.draw()
        this.y -= 20
        
        
    }
}

