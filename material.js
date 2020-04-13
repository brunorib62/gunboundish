class Material {
    constructor(pos) {
        this.pos = pos;
        this.velocity = new Victor(0,0);
        this.inverted = 0;

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
    }

    addPush(axisX, axisY, force) {
        console.log(`Pushing with values ${axisX * force} and ${axisY * force}`)
        this.velocity = this.velocity.add(Victor(axisX * force, axisY * force));
    }

    addGravity() {
        this.velocity = this.velocity.add(Victor(0, 0.5));
    }

    addResistance(x, y) {
        this.velocity = this.velocity.multiply(Victor(x, y));
    }

    addMaterialMovement() {
        this.addGravity();
        this.addResistance(1, 0.99);
    }

    checkBorder() {
        let hitAWall = false;
        if (this.inverted <= 0) {
            if (this.pos.x > this.border.x.max || this.pos.x < this.border.x.min) {
                this.velocity.invertX();
                this.addResistance(0.7, 1);
                this.inverted = 5;
                hitAWall = true;
            }

            if (this.pos.y > this.border.y.max || this.pos.y < this.border.y.min) {
                this.velocity.invertY();
                this.addResistance(1, 0.9);
                // if (this.velocity.y < 0.5) {
                //     this.velocity.y = 0;
                // }
                this.inverted = 5;
                hitAWall = true;
            }
        }
        this.inverted--;
        return hitAWall;
    }
}