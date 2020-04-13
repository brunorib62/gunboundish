let tank;
function preLoad() {
}

function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100);
    frameRate(120)
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


let timeForMousePress;
function mousePressed(){
    timeForMousePress = new Date().getTime();
}

function mouseReleased() {
    const timeHolding = new Date().getTime() - timeForMousePress;
    tank.shoot(timeHolding/10);
}

