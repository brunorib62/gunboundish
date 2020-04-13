class Ball {
    constructor() {
        this.img = loadImage('./assets/ball.png');
        this.velocity = new Victor(5, 0);
        this.pos = {
            x: 0,
            y: 0
        };

        this.border = {
            x: {
                min: 0,
                max: windowWidth - 100
            },
            y: {
                min: 0,
                max: windowHeight - 100
            }
        }

        this.inverted = 0;
    }

    addGravity() {
        this.velocity = this.velocity.add(Victor(0, 0.5));
    }

    addResistance(x, y) {
        this.velocity = this.velocity.multiply(Victor(x, y));
    }

    addMouseForce(x, y) {
        this.velocity = this.velocity.add(Victor(x * 0.05, y * 0.05));
    }

    addRandomForce() {
        const maxX = 25;
        const maxY = 25;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        this.velocity = this.velocity.add(Victor(randomX, randomY))
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
            }

            if (this.pos.y > this.border.y.max || this.pos.y < this.border.y.min) {
                this.velocity.invertY();
                this.inverted = 5;
            }
        }
        this.inverted--;
    }

    draw() {
        image(this.img, this.pos.x, this.pos.y);
    }

}