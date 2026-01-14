var colorPercent
var isRed

function setup() {
  createCanvas(400, 400);
  colorPercent = 0
  isRed = true
}

function draw() {

colorPercent += 1
    if (colorPercent > 255) {
        isRed = !isRed
        colorPercent = 0
    }

  background(220);
  stroke(255, 255, 255)
  if (isRed)
    fill(255, 0, 0)
  else
    fill(0, 0, 255)
  ellipse(200, 200, 100, 100)
}