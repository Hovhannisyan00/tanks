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
    // ano = new Car(false)




    constructor() {

        this.bg.src = "./images/phoy.jpeg"
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

    run() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.bg.onload()
        this.id = requestAnimationFrame(() => this.run())
        // console.log(this.id)
        this.roud.move()
        this.car.draw()
        // this.another.move()
        this.anothers.forEach(elem => elem.move())
        this.cancelAnimation();
        // this.fierTankMe()

    }
    cancelAnimation() {
        this.lineOver()
        this.fierTankMe()
        // console.log("Let's play a game")
        // if (Math.abs(this.car.x - this.another.x) < this.car.w - 50 && Math.abs(this.car.y - this.another.y) < this.car.h - 80) {
        //     cancelAnimationFrame(this.id)
        // }
        this.anothers.forEach(elem => {

            if (Math.abs(this.car.x - elem.x) < this.car.w - 50 && Math.abs(this.car.y - elem.y) < this.car.h - 80) {
                cancelAnimationFrame(this.id)
            }
        })
    }

    lineOver() {
        // console.log(855555)
        this.anothers.forEach(elem => {
            if (elem.y >= canvas.height) {
                cancelAnimationFrame(this.id)
            }
        })
        // if (this.another.y >= canvas.height) {
        //     cancelAnimationFrame(this.id)
        //     ctx.clearRect(0, 0, canvas.width, canvas.height,)
        //     ctx.font = "90px"
        //     // this.car = null
        //     this.anothers = null
        //     this.another = null


        // }


    }
    fierTankMe() {
        console.log("dd");
        this.car.fires.forEach((elem, akk) => {
            this.anothers = this.anothers.filter(elo =>{
                if(Math.abs(elo.x - elem.x) < 110 && Math.abs(elo.y - elem.y)< 100){
                    this.car.fires.splice(akk, 1)
                    return false
                }
                return true;
            })
        })










        // checkDamage() {
        //     this.enemies.forEach(enemy => enemy.fires.forEach(fire => {
        //         if (Math.abs(this.player.x - fire.x) < 60 && Math.abs(this.player.y - fire.y) < 20) {
        //             cancelAnimationFrame(this.id);
                    
        //         }
        //     }));
        // }


        // console.log(this.another)
        // this.car.fires.forEach(ano => ano.anothers.forEach(fire => {
        //     if (Math.abs(this.car.x - a.x) < 60 && Math.abs(this.car.y - fire.y) < 20) {
        //         cancelAnimationFrame(this.id)
        //     }

        // }))
        

        // this.car.forEach(enemy => enemy.fires.forEach(fire => {
        //     if (Math.abs(this.player.x - fire.x) < 60 && Math.abs(this.player.y - fire.y) < 20) {
        //         cancelAnimationFrame(this.id);
        //         ctx.clearRect(0, 0, canvas.width, canvas.height)
        //         ctx.font = "90px Arial"
        //         this.player = null
        //         this.enemies = null
        //         return ctx.fillText("Game Over", innerWidth / 3, innerHeight / 2)
        //     }
        // }));
        
            // this.car.fires.forEach((fire, fireIndex) => {
            //     this.enemies = this.enemies.filter(enemy => {
            //         if (Math.abs(enemy.x - fire.x) < 110 && Math.abs(enemy.y - fire.y) < 110) {
            //             this.points++
            //             this.destroyed.play()
            //             this.player.fires.splice(fireIndex, 1);
            //             return false;
            //         }
            //         return true;
            //     });
            // });
        

        // }
        // this.anothers.forEach(ano => ano.fires2.forEach(fire => {
        //     console.log("aaa");
        //     if (Math.abs(this.car.x - fire.x) < 50 && Math.abs(this.car.y - fire.y) < 60) {
        //         console.log("aaaaaaaaaa");
        //         cancelAnimationFrame(this.id)
        //     }
        // }))
    }



}