import { ctx, canvas } from './util.js'
import { Road } from './Road.js'
import { Car } from './Car.js'
import { Fire } from './Fire.js'

export class Game {
    roud = new Road()
    car = new Car()
    bg = new Image()
    // another = new Car(false)
    anothers = []
    count  = 0
    



    
    constructor() {
        
        
        this.bg.src = "https://media.newyorker.com/photos/6525acbebc2aab991e523678/master/pass/JCK-Drone-Warfare-Imagery.jpg"
        this.bg.onload = () => ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
        this.id = requestAnimationFrame(() => this.run())

        setInterval(() => {
            this.anothers.push(new Car(false))
            // console.log(this.anothers.length);
            this.anothers.forEach(x => x.shoot())

        }, 1000)

        window.onkeydown = (e) => {
            if (e.key === "ArrowRight") {

                this.car.moveRight();
            } else if (e.key === "ArrowLeft") {

                this.car.moveLeft();
            }
            if (e.key === "ArrowUp") {
                this.car.moveDown();
            } else if (e.key == "ArrowDown") {
                this.car.moveUp()
            }
            if (e.key == " ") {
                this.car.shoot()
            }

        }
        

    }

    
    fierTankMe() {
        // console.log("dd");
        this.car.fires.forEach((elem, akk) => {
            this.anothers = this.anothers.filter(elo =>{
                if(Math.abs(elo.x - elem.x) < 110 && Math.abs(elo.y - elem.y)< 100){
                    this.count++
                    this.car.fires.splice(akk, 1)
                    return false
                }
                return true;
            })
        })
    }
    cancelAnimation() {
        this.lineOver()
        this.fierTankMe()
        this.anothers.forEach(elem => {

            if (Math.abs(this.car.x - elem.x) < this.car.w - 50 && Math.abs(this.car.y - elem.y) < this.car.h - 80) {
                cancelAnimationFrame(this.id)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.font = "90px Arial"
                this.car = null
                this.anothers = null
                ctx.fillText("Score : " + this.count, 80, 90);
                return ctx.fillText("Game Over Broo", innerWidth / 3, innerHeight / 2)
            }
        })
    }
    lineOver() {
        
        this.anothers.forEach(elem => {
            if (elem.y >= canvas.height) {
                cancelAnimationFrame(this.id)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.font = "90px Arial"
                this.car = null
                this.anothers = null
                ctx.fillText("Score : " + this.count, 80, 90);
                return ctx.fillText("Game Over Broo", innerWidth / 3, innerHeight / 2)
            }
        })
        
        
        
    }
    
    checkDamage() {
        this.anothers.forEach((e) => {
               e.fires.forEach(elm =>{
                   if (elm.x >= this.car.x   &&   elm.x <= this.car.x + 100) {
                        if (elm.y >= this.car.y   &&   elm.y <= this.car.y +50) {
                            cancelAnimationFrame(this.id)
                            ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.font = "90px Arial"
                ctx.fillStyle = "yellow"
                this.anothers = null
                this.car = null
                ctx.fillText("Score : " + this.count, 80, 90);
                return ctx.fillText("You are loser bro", innerWidth / 3, innerHeight / 2)
                console.log(this.count)
            }
                    }
                })
            })
        }  
        run() {
        //     let audio = new Audio("./Audio/pasxalka.mp3")
        // audio.play()
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            this.bg.onload()
            this.id = requestAnimationFrame(() => this.run())
            this.roud.move()
            this.car.draw()
            this.anothers.forEach(elem => elem.move())
            this.cancelAnimation();
            this.checkDamage()
            ctx.font = "80px Tahoma";
            ctx.fillStyle = "yellow"
            ctx.fillText("Score - " + this.count, 80, 90);
        }
    }