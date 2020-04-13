let tank;
function preLoad() {
}

function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100);
    frameRate(60)
    tank = new Tank(50, 755);
}

function draw() {
    clear();
    background(100);
    line(0, 800, windowWidth, 800);


    if (keyIsDown(LEFT_ARROW)) {
        tank.move(-5);
    }

    if (keyIsDown(RIGHT_ARROW)) {
        tank.move(5);
    }
    tank.draw();
}



let mousePos = {};
function mousePressed(){
    tank.shoot();
}

