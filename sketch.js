let trazos = [];
let trazoActual = [];
let paleta = [
  [222, 218, 145], // amarillo suave
  [191, 186, 176], // gris cálido
  [166, 136, 99],  // ocre
  [198, 153, 144], // rosado viejo
  [144, 178, 126]  // verde apagado
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(238, 227, 202); // fondo cálido claro
  noCursor();
}

function draw() {
  background(238, 227, 202);

  for (let t of trazos) {
    drawTrazo(t);
  }

  drawTrazo(trazoActual);

  // cursor visual suave
  noStroke();
  fill(50, 50, 50, 60);
  ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed() {
  trazoActual = [];
}

function mouseDragged() {
  let c = paleta[int(random(paleta.length))];
  for (let i = 0; i < 4; i++) {
    let ox = random(-10, 10);
    let oy = random(-10, 10);
    trazoActual.push({ x: mouseX + ox, y: mouseY + oy, c: color(...c, 200) });
  }
}

function mouseReleased() {
  if (trazoActual.length > 0) {
    trazos.push(trazoActual);
    trazoActual = [];
  }
}

function drawTrazo(trazo) {
  noStroke();
  for (let p of trazo) {
    fill(p.c);
    ellipse(p.x, p.y, random(8, 14), random(8, 14));
  }
}

function keyPressed() {
  if (key === 'z' || key === 'Z') {
    trazos.pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
