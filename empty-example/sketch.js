function setup() {
  createCanvas(1370, 600);
}

function draw() {
  if (mouseIsPressed) {
    fill(195);
  } else {
    fill(24);
  }
  ellipse(mouseX, mouseY, 80, 80);
}