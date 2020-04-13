class Tank extends Material {
    constructor(posX, posY) {
        super();

        this.tankImage = loadImage('./assets/tank-80x80.png');
        this.cannon = loadImage('./assets/pipe.png');
        this.pos = {
            x: posX,
            y: posY
        };

        this.offset = {
            x: 35,
            y: 8
        }


        this.cannonBalls = [];
        this.inclination = 0;
        angleMode(DEGREES);
    }

    draw() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
        this.addResistance(0.8, 1);
        this.checkBorder();

        for (let i = this.cannonBalls.length - 1; i >= 0; i--) {
            if (!this.cannonBalls[i].draw()) {
                this.cannonBalls.splice(i, 1);
            }
        }

        this.positionTank();
        this.positionCannon();
        strokeWeight(10);
    }

    positionTank() {
        image(this.tankImage, this.pos.x, this.pos.y);
    }

    shoot(force) {
        this.cannonBalls.push(new CannonBall({
                x: this.pos.x + this.offset.x,
                y: this.pos.y + this.offset.y
            },
            Math.cos(this.inclination * (Math.PI / 180)) * force,
            Math.sin(this.inclination * (Math.PI / 180)) * force
        ));

        this.addPush(Math.cos(this.inclination * (Math.PI / 180)) * -1, 0, force);
    }

    positionCannon() {
        let a = atan2((mouseY - this.pos.y - this.offset.y) / 2, (mouseX - this.pos.x - this.offset.x) / 2);
        translate(this.pos.x + this.offset.x, this.pos.y + this.offset.y);
        rotate(a);

        image(this.cannon, 0, -6);
        this.inclination = a;
    }

    move(x) {
        this.pos.x += x;
    }
}