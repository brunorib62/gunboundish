class CannonBall extends Material {
    constructor(pos, axisX, axisY) {
        super(JSON.parse(JSON.stringify(pos)));
        this.velocity = new Victor(axisX,axisY);

        this.ttl = 5;
    }

    move() {
        this.addMaterialMovement();
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    }

    draw() {
        this.move();
        point(this.pos.x, this.pos.y);

        if (this.checkBorder()) {
            this.ttl--;
        }
        if (this.ttl < 0) {
            return false;
        }
        return true;
    }
}