import { ctx, grn } from './util.js';
import { Fire } from './Fire.js';

export class Car {
    img = new Image();
    souund = new Audio()
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


        this.img.onload();
    }

    move() {
        this.draw();
        this.y += 1;
        // this.fire.move();
    }

    moveRight() {
        this.x += 40;
        if (this.x >= innerWidth - 120) {
            this.x = innerWidth - 120;
        }
        this.souund.src = "./Audio/aker.wav"
            this.souund.play()
    }

    moveLeft() {
        this.x -= 40;
        if (this.x <= -20) {
            this.x = -20;
        }
        this.souund.src = "./Audio/aker.wav"
            this.souund.play()
    }

    moveDown() {
        this.y -= 40;
        if (this.y <= 0) {
            this.y = 0;
        }
        this.souund.src = "./Audio/aker.wav"
        this.souund.play()
    }
    moveUp() {
        this.y += 40;
        if (this.y >= innerHeight - 200) {
            this.y = innerHeight - 200;
        }
        this.souund.src = "./Audio/aker.wav"
        this.souund.play()
    }
    shoot (){
        let fire = new Fire( this.x+40 , this.y);
        this.fires.push(fire)
        this.souund.src = "./Audio/boom.wav"
        this.souund.play()
                
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
}
