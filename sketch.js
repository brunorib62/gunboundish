let tank;
let ball;
function preLoad() {
}

function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100);
    frameRate(120)
    tank = new Tank();
}

function draw() {
    clear();
    background(51);

    if (keyIsDown(LEFT_ARROW)) {
        tank.move(-5);
    }

    if (keyIsDown(RIGHT_ARROW)) {
        tank.move(5);
    }
    tank.draw();
}

// function mouseClicked() {
//     ball.addRandomForce();
// }

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        value = 255;
    } else if (keyCode === RIGHT_ARROW) {
        value = 0;
    }
}

let mousePos = {};
function mousePressed(){
    tank.aim(3.14 / 1);
}

function mouseReleased(){
    // ball.addMouseForce(mouseX - mousePos.x, mouseY - mousePos.y);
}
