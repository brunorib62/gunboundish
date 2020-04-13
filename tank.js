class Tank {
    constructor() {
        this.tankImage = loadImage('./assets/tank-80x80.png');
        this.cannon = loadImage('./assets/pipe.png');
        this.pos = {
            x: 40,
            y: 40
        };

        this.offset = {
            x:35,
            y:8
        }
        this.direction = 0;
        angleMode(DEGREES);
    }

    draw() {
        this.positionTank();
        this.positionCannon();
    }

    positionTank(){
        strokeWeight(10); // Make the points 10 pixels in size
        point(this.pos.x + this.offset.x, this.pos.y + this.offset.y);

        image(this.tankImage, this.pos.x, this.pos.y);
    }

    positionCannon(){
        let a = atan2((mouseY - this.pos.y - this.offset.y) / 2, (mouseX - this.pos.x - this.offset.x) / 2);
        translate(this.pos.x + this.offset.x, this.pos.y + this.offset.y);
        rotate(a);

        console.log(a);
        image(this.cannon, 0, -6);
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