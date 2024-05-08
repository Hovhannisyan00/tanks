import {ctx, canvas} from './util.js'
import {Road} from './Road.js'
import {Car} from './Car.js'
import { Fire } from './Fire.js'

export class Game{
    roud = new Road()
    car = new Car()
    bg = new Image()
    another = new Car(false)
    anothers = []
    // ano = new Car(false)




    constructor(){
        
        this.bg.src= "./images/phoy.jpeg"
        this.bg.onload = () => ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
        this.id = requestAnimationFrame(()=> this.run())

        setInterval(()=>{
            this.anothers.push(new Car(false)),
            this.anothers.forEach(x => x.shoot())

        }, 2000)

        window.onkeydown = (e) => {
            if (e.key === "ArrowRight") {
                
                this.car.moveRight();
            } else if (e.key === "ArrowLeft") {
                
                this.car.moveLeft();
            }
            if(e.key === "ArrowUp"){
                this.car.moveDown();
            }else if(e.key == "ArrowDown"){
                this.car.moveUp()
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
        this.another.move()
        this.anothers.forEach(elem => elem.move())
        this.cancelAnimation();
        this.fierTankMe()

    }
    cancelAnimation(){
        this.lineOver()
        // console.log("Let's play a game")
        if (Math.abs(this.car.x - this.another.x) < this.car.w - 50  && Math.abs(this.car.y - this.another.y) < this.car.h -80) {
            cancelAnimationFrame(this.id)
        }   
        this.anothers.forEach(elem =>{

            if (Math.abs(this.car.x - elem.x) < this.car.w - 50  && Math.abs(this.car.y - elem.y) < this.car.h -80) {
                cancelAnimationFrame(this.id)
            } 
    })
    } 

    lineOver(){
        // console.log(855555)
        this.anothers.forEach(elem => {
            if(elem.y >= canvas.height ){
                cancelAnimationFrame(this.id)
            }
        })
        if(this.another.y >= canvas.height ){
            cancelAnimationFrame(this.id)
            ctx.clearRect(0, 0,  canvas.width, canvas.height,)
            ctx.font= "90px"
            // this.car = null
            this.anothers = null
            this.another = null
            

        }
        

    }
    fierTankMe(){       
        // this.car.fires.forEach((elem, akk) => {
        //     this.anothers = this.anothers.filter(elo =>{
        //         if(Math.abs(elo.x - elem.x) < 110 && Math.abs(elo.x - elem.x) < 110){
        //             this.car.fires.splice(akk, 1)
        //             return false
        //         }
        //         return true;
        //     })
        // })
        this.another.forEach(ano => ano.anothers.forEach(fire =>{
            if (Math.abs(this.car.x - fire.x) <60 && Math.abs(this.car.y - fire.y ) < 20){
                cancelAnimationFrame(this.id)
            }
        }))
0
    }

    

}