function setup() {
  createCanvas(600, 400);

  // 배경
  
  noStroke();
  fill('#FF8B94');  // 하늘
  rect(0, 0, 600, 180);
  
  fill('#D25353');
  quad(0, 0, 0, 180, 130, 180, 200,0)

  fill('#264653'); // 먼바다
  rect(0, 180, 600, 220);

  fill('#2A9D8F'); // 가까운 바다
  quad(0, 250, 600, 200, 600, 400, 0, 400);
  
  fill('#79C9C5'); 
  quad(0, 250, 196, 232, 340, 400, 0, 400)
  
  fill('#E9C46A'); // 태양
  ellipse(480, 100, 90, 90);
  fill('#FFD400');
  ellipse(480, 100, 80, 70);

  noFill(); // 파도
  stroke('#FFFFFF');
  strokeWeight(3);
  arc(100, 180, 200, 60, radians(0), radians(180)); 
  arc(300, 180, 200, 60, radians(180), radians(360)); 
  arc(500, 180, 200, 60, 0, PI);                         

  
  // 내부 요소
  
  noStroke();
  fill('#3D405B'); // 돛단배
  rect(270, 80, 6, 160);
  
  fill('#81B29A'); // 돛1
  triangle(265, 90, 265, 210, 180, 215);
  
  fill('#E07A5F'); // 돛2
  triangle(275, 90, 380, 200, 275, 220);

  fill('#3D2C24'); // 배
  quad(150, 220, 400, 220, 360, 270, 190, 270);
  
  stroke('#2B2D42'); // 갈매기
  strokeWeight(2);
  noFill();
  arc(120, 80, 40, 20, radians(180), radians(360));
  arc(160, 80, 40, 20, radians(180), radians(360));
  arc(180, 30, 40, 20, radians(180), radians(360));
  arc(220, 30, 40, 20, PI, TWO_PI);

  
  // 추상화스러워지기위해 넣어본 도형
  noStroke();

  fill('#F4A261');
  circle(80, 320, 120);

  fill('#457B9D');
  quad(450, 220, 580, 250, 520, 350, 420, 300);

  rectMode(CENTER);
  fill('#E76F51');
  rect(540, 330, 40, 40);

  fill('#EDF2F4');
  circle(420, 320, 10);
  circle(450, 340, 6);
  circle(380, 350, 8);
}