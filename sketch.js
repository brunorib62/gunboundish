let tank;
function preLoad() {
}

function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100);
    frameRate(60)
    tank = new Tank(50, 750);
}

function draw() {
    clear();
    background(100);
    line(0, 800, windowWidth, 800);

    if (keyIsDown(65)) {
        tank.move(-5);
    }

    if (keyIsDown(68)) {
        tank.move(5);
    }
    tank.draw();
}


let timeForMousePress;
function mousePressed() {
    timeForMousePress = new Date().getTime();

}

function mouseReleased() {
    const timeHolding = new Date().getTime() - timeForMousePress;
    tank.shoot(timeHolding/10);
}

