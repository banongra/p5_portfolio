let startTime;
let skyColor1, skyColor2;
let gullX = 0;
let cXs = new Array(3);
let cYs = new Array(3);
let cSizes = new Array(3);

function setup() {
  createCanvas(600, 400);
  colorMode(RGB, 255); 
  startTime = millis(); 
  skyColor1 = color('#FF8B94');
  skyColor2 = color('#3D405B');

  cXs[0] = 420; cYs[0] = 320; cSizes[0] = 10;
  cXs[1] = 450; cYs[1] = 340; cSizes[1] = 6;
  cXs[2] = 380; cYs[2] = 350; cSizes[2] = 8;
}

function draw() {
  rectMode(CORNER);

  let elapsedTime = millis() - startTime;
  if (elapsedTime > 3000) { 
    skyColor1 = skyColor2;
    skyColor2 = color(random(100, 255), random(100, 200), random(150, 255));
    startTime = millis();
    elapsedTime = 0;
  }
  let amt = elapsedTime / 3000.0;
  let currentSkyColor = lerpColor(skyColor1, skyColor2, amt);

  noStroke();
  fill(currentSkyColor); 
  rect(0, 0, 600, 180);
  
  fill('#D25353');
  quad(0, 0, 0, 180, 130, 180, 200, 0);

  fill('#264653');
  rect(0, 180, 600, 220);

  fill('#2A9D8F'); 
  quad(0, 250, 600, 200, 600, 400, 0, 400);
  
  fill('#79C9C5'); 
  quad(0, 250, 196, 232, 340, 400, 0, 400);

  let sunSize = sin(frameCount * 0.05) * 10; 
  
  fill('#E9C46A'); 
  ellipse(480, 100, 90 + sunSize, 90 + sunSize);
  fill('#FFD400');
  ellipse(480, 100, 80 + sunSize, 70 + sunSize);

  let waveMove = cos(frameCount * 0.05) * 10; 

  noFill(); 
  stroke('#FFFFFF');
  strokeWeight(3);
  arc(100 + waveMove, 180, 200, 60, radians(0), radians(180)); 
  arc(300 + waveMove, 180, 200, 60, radians(180), radians(360)); 
  arc(500 + waveMove, 180, 200, 60, 0, PI);                        

  let boatBob = sin(frameCount * 0.1) * 5; 

  noStroke();
  fill('#3D405B'); 
  rect(270, 80 + boatBob, 6, 160);
  
  fill('#81B29A'); 
  triangle(265, 90 + boatBob, 265, 210 + boatBob, 180, 215 + boatBob);
  
  fill('#E07A5F'); 
  triangle(275, 90 + boatBob, 380, 200 + boatBob, 275, 220 + boatBob);

  fill('#3D2C24');
  quad(150, 220 + boatBob, 400, 220 + boatBob, 360, 270 + boatBob, 190, 270 + boatBob);
  
  gullX += 2;
  gullX %= width + 200; 

  stroke('#2B2D42'); 
  strokeWeight(2);
  noFill();

  arc(gullX - 280, 80, 40, 20, radians(180), radians(360));
  arc(gullX - 240, 80, 40, 20, radians(180), radians(360));
  arc(gullX - 220, 30, 40, 20, radians(180), radians(360));
  arc(gullX - 180, 30, 40, 20, PI, TWO_PI);


  noStroke();

  let circleSize = sin(frameCount * 0.08) * 15;
  fill('#F4A261');
  circle(80, 320, 120 + circleSize);

  let quadMove = sin(frameCount * 0.05) * 10;
  fill('#457B9D');
  quad(450 + quadMove, 220, 580 + quadMove, 250, 520 + quadMove, 350, 420 + quadMove, 300);

  rectMode(CENTER);
  fill('#E76F51');
  rect(540, 330 + cos(frameCount * 0.05) * 10, 40, 40);

  fill('#EDF2F4');
  for(let i = 0; i < 3; i++) {
    let yOffset = sin(frameCount * 0.1 + i) * 10;
    circle(cXs[i], cYs[i] + yOffset, cSizes[i]);
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}