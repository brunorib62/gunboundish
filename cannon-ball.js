class CannonBall {
    constructor(pos, direction) {
        // this.img = loadImage('./assets/ball.png');
        this.initialForce = 20;

        console.log(direction,
            'X : ' + Math.cos(direction * (Math.PI/180)),
            'Y : ' + Math.sin(direction * (Math.PI/180)));

        this.velocity = new Victor(
            Math.cos(direction * (Math.PI/180)) * this.initialForce,
            Math.sin(direction * (Math.PI/180)) * this.initialForce
        );

        this.pos = JSON.parse(JSON.stringify(pos));

        this.border = {
            x: {
                min: 0,
                max: windowWidth - 100
            },
            y: {
                min: 0,
                max: windowHeight - 250
            }
        };

        this.inverted = 0;
        this.ttl = 5;
    }

    addGravity() {
        this.velocity = this.velocity.add(Victor(0, 0.5));
    }

    addResistance(x, y) {
        this.velocity = this.velocity.multiply(Victor(x, y));
    }

    move() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;

        this.addGravity();
        this.addResistance(1, 0.99);

        if (this.inverted <= 0) {
            if (this.pos.x > this.border.x.max || this.pos.x < this.border.x.min) {
                this.velocity.invertX();
                this.addResistance(0.7, 1);
                this.inverted = 5;
                this.ttl--;
            }

            if (this.pos.y > this.border.y.max || this.pos.y < this.border.y.min) {
                this.velocity.invertY();
                this.inverted = 5;
                this.ttl--;
            }
        }
        this.inverted--;
    }

    draw() {
        this.move();
        point(this.pos.x, this.pos.y);
        if (this.ttl < 0) {
            return false;
        }
        return true;
    }
}