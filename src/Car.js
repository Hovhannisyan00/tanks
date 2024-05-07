import { Fire } from './Fire.js'
import {ctx, canvas, grn} from './util.js'
export class Car{
    img = new Image() 
    fire = null
    
    constructor(isPlayer = true){
        this.isPlayer = isPlayer
        this.x =this.isPlayer ? (innerWidth/2) - 55 : innerWidth/2
        this.y = this.isPlayer? innerHeight- 220 : 50
        this.w = 120
        this.h = 180
        if(this.isPlayer){
        this.img.src="./images/red.png"
        }else{
            this.img.src = "./images/blue.png"
        }
        this.img.onload= () => {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }

    }
    draw (){
        this.img.onload()
    }
    mowe(){
        this.draw()
        this.y +=2
        // if(this.y > innerHeight){
        //     this.y = -90
        //     this.x = grn(innerWidth/3*2 - 110, innerWidth/3)
        // }
    }

    moweRight(){
        this.x += 40
        if(this.x >= innerWidth- 120){
            this.x = innerWidth - 120
        }
    }
    moweLeft(){
        this.x -= 40
        if(this.x <= -20){
            this.x = -20
        }
    }
    moweDown(){
        this.y +=40
        if(this.y >= innerHeight - 200){
            this.y = innerHeight - 200
        }
    }
    moweUp  (){
        this.y -=40
        if(this.y <= 0){
            this.y = 0
        }
    }
    shoot(){
        this.fire = new Fire(this.x , this.y)
    }
}

