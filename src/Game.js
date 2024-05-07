import {ctx, canvas} from './util.js'
import {Road} from './Road.js'
import {Car} from './Car.js'

export class Game{
    roud = new Road()
    car = new Car()
    bg = new Image()
    another = new Car(false)



    constructor(){
        this.bg.src= "./images/phoy.jpeg"
        this.bg.onload = () => ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
        this.id = requestAnimationFrame(()=> this.run())

        window.onkeydown = (e) => {
            if (e.key === "ArrowRight") {
                
                this.car.moweRight();
            } else if (e.key === "ArrowLeft") {
                
                this.car.moweLeft();
            }
            if(e.key === "ArrowUp"){
                this.car.moweUp();
            }else if(e.key == "ArrowDown"){
                this.car.moweDown()
            }
            if(e.key == " "){
                this.car.shoot()
            }
            
        }
        
    }

    run(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.bg.onload()
        this.id = requestAnimationFrame(()=> this.run())
        // console.log(this.id)
        this.roud.move()
        this.car.draw()
        this.another.mowe()
        console.log("Let's play a game")
        if (Math.abs(this.car.x - this.another.x) < this.car.w - 50  && Math.abs(this.car.y - this.another.y) < this.car.h -80) {
            cancelAnimationFrame(this.id)
        }   
    }


}