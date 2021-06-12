var bullet;
var wall;
var speed;
var weight;
var thikness;

function setup() {
  createCanvas(1400, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(width - 1550, height - 200, 50, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;


  wall = createSprite(width - 200, height - 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(0);




  if (wall.x - bullet.x < wall.width / 2 + bullet.width / 2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / (22500);
    if (deformation > 180) {
      bullet.shapeColor = "white";
    }
    if (bullet.deformation < 180 && bullet.deformation > 100) {
      bullet.shapeColor = "white";
    }
    if (bullet.deformation < 100) {
      bullet.shapeColor = "white";
    }
  }

  if (hasCollided(bullet, wall)) {

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (damage > 10) {
      wall.shapeColor = "red";
    }
    if (damage < 10) {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge <= wallLeftEdge) {
    return true;
  }
  else {
    return false;
  }
}
