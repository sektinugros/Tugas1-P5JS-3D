function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(200);

  directionalLight(255, 255, 255, 5, 1, 2);
  pointLight(255, 255, 255, 0, 0, 300); 
  ambientLight(20); 
  
  push();
  noStroke();
  fill(100, 100, 255);
  
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.0,3);
  rotateZ(frameCount * 0.1);

  cylinder(8, 300);
 
  fill(255, 0, 0);
  sphere (90);
  
  fill(255,255,255)
  cylinder(25, 210);
}