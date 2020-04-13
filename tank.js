class Tank {
    constructor(posX, posY) {
        this.tankImage = loadImage('./assets/tank-80x80.png');
        this.cannon = loadImage('./assets/pipe.png');
        this.pos = {
            x: posX,
            y: posY
        };

        this.offset = {
            x:35,
            y:8
        }
        this.cannonBalls = [];
        this.direction = 0;
        angleMode(DEGREES);
    }

    draw() {
        for (let i = this.cannonBalls.length - 1; i >= 0; i--) {
            if (!this.cannonBalls[i].draw()) {
                this.cannonBalls.splice(i, 1);
            }
        }

        this.positionTank();
        this.positionCannon();
        strokeWeight(10);
    }

    positionTank(){
        image(this.tankImage, this.pos.x, this.pos.y);
    }

    shoot(){
        this.cannonBalls.push(new CannonBall({
            x: this.pos.x + this.offset.x,
            y: this.pos.y + this.offset.y
        }, this.direction));
    }

    positionCannon(){
        let a = atan2((mouseY - this.pos.y - this.offset.y) / 2, (mouseX - this.pos.x - this.offset.x) / 2);
        translate(this.pos.x + this.offset.x, this.pos.y + this.offset.y);
        rotate(a);

        image(this.cannon, 0, -6);
        this.direction = a ;
    }

    move(x) {
        this.pos.x += x;
    }

    aim(dir) {
        this.direction += dir;
        if (this.direction > 90) {
            this.direction == 90;
        } else if(this.direction < 0) {
            this.direction = 0;
        }
    }
}