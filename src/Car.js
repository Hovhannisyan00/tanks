import { ctx, grn } from './util.js';
import { Fire } from './Fire.js';

export class Car {
    img = new Image();
    // img2 = new Image()
    // fire = null;

    
    constructor(isPlayer = true) {
        // this.fire = new Fire(this.x , this.y + 800  );
        this.isPlayer = isPlayer;
        this.x = this.isPlayer ? (innerWidth / 2) - 55 : grn(0, innerWidth);
        this.y = this.isPlayer ? innerHeight - 220 : 50;
        this.w = 120;
        this.h = 180;
        this.fires = []
        // this.fires2 = []
        if (this.isPlayer) {
            this.img.src = "./images/red.png";
        } else {
            this.img.src = "./images/blue.png";
        }
        this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        };
    }

    draw() {
        if(this.fires.length !== 0 ){
            this.fireMowe()
        }

        // if(this.fires2.length !== 0){
        //     this.fireMowe2()
        // }
        this.img.onload();
    }

    move() {
        this.draw();
        this.y += 2;
        // this.fire.move();
    }

    moveRight() {
        this.x += 40;
        if (this.x >= innerWidth - 120) {
            this.x = innerWidth - 120;
        }
    }

    moveLeft() {
        this.x -= 40;
        if (this.x <= -20) {
            this.x = -20;
        }
    }

    moveDown() {
        this.y -= 40;
        if (this.y <= 0) {
            this.y = 0;
        }
    }
    moveUp() {
        this.y += 40;
        if (this.y >= innerHeight - 200) {
            this.y = innerHeight - 200;
        }
    }
    shoot (){
        let fire = new Fire( this.x+40 , this.y);
        this.fires.push(fire)
        
    


        // this.fires2.img2.src = "https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-512.png"
        
        // let fire2 = new Fire( this.x+80, this.y - 30);
        // this.fires2.push(fire)


        
    }
    fireMowe(){
        if (this.isPlayer){

            this.fires.forEach(elem => elem.draw())
            this.fires.forEach(elm => elm.y -= 20)
        }else{
            this.fires.forEach(elem => elem.draw())
            this.fires.forEach(elm => elm.y += 20)
        }

    }
    // fireMowe2 (){
    //     this.fires2.forEach(elem => elem.draw())
    //     this.fires2.forEach(elm => elm.y -= 20)
    // }
}
