let luces = [];
let cantidad = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < cantidad; i++) {
    luces.push(new Luz());
  }
}

function draw() {
  background(10, 10, 25, 40);
  for (let l of luces) {
    l.actualizar();
    l.mostrar();
  }
}

class Luz {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.dx = random(-0.5, 0.5);
    this.dy = random(-0.5, 0.5);
    this.c = color(random(100, 255), random(100, 255), random(200, 255), 150);
  }

  actualizar() {
    this.x += this.dx + random(-0.3, 0.3);
    this.y += this.dy + random(-0.3, 0.3);

    if (this.x < 0 || this.x > width) this.dx *= -1;
    if (this.y < 0 || this.y > height) this.dy *= -1;
  }

  mostrar() {
    let distancia = dist(this.x, this.y, mouseX, mouseY);
    let tam = map(distancia, 0, 300, 12, 3);
    let brillo = map(distancia, 0, 300, 255, 50);

    fill(red(this.c), green(this.c), blue(this.c), brillo);
    noStroke();
    ellipse(this.x, this.y, tam, tam);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
