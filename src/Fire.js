import {ctx, canvas, grn} from './util.js'
export class Fire{
    img = new Image()
    w = 50
    h = 50
    constructor(x, y){
        this.img.src = "https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-512.png"
        this.x = x
        this.y = y
        this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }
    }
    draw(){
        this.img.onload()
    }   
    move(){
        this.draw()
        this.x += 5
    }
}

// https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-512.png