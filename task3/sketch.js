let hairColor = '#281E14';

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#F0F0F0');

  let eyeX = (mouseX - 300) / 100;
  let eyeY = (mouseY - 200) / 100;

  // 방향키로 머리색 변경, 스페이스바로 원래색 복구
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) hairColor = '#FF0000';
    else if (keyCode === DOWN_ARROW) hairColor = '#235445';
    else if (keyCode === LEFT_ARROW) hairColor = '#508039';
    else if (keyCode === RIGHT_ARROW) hairColor = '#013034';
    else if (key === ' ') hairColor = '#281E14';
  }

  // 귀와 목
  strokeWeight(2);
  fill('#BFA28C'); // 실제로 자주 입는 색상 (애착 색상)
  rect(164, 272, 272, 112, 40, 40, 0, 0); //몸통
  fill('#FFDCC2'); //귀
  rect(196, 136, 208, 48, 32);

  beginShape(); // 목
  vertex(268, 264);
  vertex(300, 305);
  vertex(332, 264);
  vertex(268, 224);
  vertex(332, 224);
  endShape(CLOSE);

  fill('#FFDCC2');
  noStroke();
  triangle(268, 208, 332, 208, 300, 240);

  // 얼굴 윤곽
  stroke('#000000');
  fill('#FFE0BD');
  ellipse(300, 144, 176, 224);

  // 내가 25년동안 고수했던 머리스타일 (댄디컷 느낌)
  fill(hairColor);
  beginShape();
  vertex(300, 16);
  vertex(348, 24);
  vertex(380, 48);
  vertex(388, 88);
  vertex(380, 112);
  vertex(348, 100);
  vertex(316, 112);
  vertex(284, 96);
  vertex(252, 116);
  vertex(220, 112);
  vertex(212, 88);
  vertex(220, 48);
  vertex(252, 24);
  endShape(CLOSE);

  // 진하고 두꺼운 나의 눈썹
  fill('#140F0A');
  beginShape();
  vertex(236, 122);
  vertex(244, 118);
  vertex(264, 108);
  vertex(288, 122);
  vertex(284, 126);
  vertex(264, 114);
  endShape(CLOSE);

  beginShape();
  vertex(316, 122);
  vertex(312, 118);
  vertex(336, 108);
  vertex(360, 122);
  vertex(364, 126);
  vertex(336, 114);
  endShape(CLOSE);

  // 눈, 눈동자 그리고 한쪽만 있는 쌍꺼풀
if (keyIsPressed && (key === 'a' || key === 'A' || key ==='ㅁ')) {
// A 키를 누르면 눈이 하트로 변함
  noStroke();
  fill('#FF6464'); // 하트 색상
  // 왼쪽 하트 눈
  ellipse(248, 138, 15, 15);
  ellipse(264, 138, 15, 15);
  triangle(241, 142, 271, 142, 256, 154);
  // 오른쪽 하트 눈
  ellipse(336, 138, 15, 15);
  ellipse(352, 138, 15, 15);
  triangle(329, 142, 359, 142, 344, 154);
  stroke(0); // 다시 선 설정 복구
  strokeWeight(2);
  } else if (mouseIsPressed) {
    // 마우스 클릭 시 윙크
    strokeWeight(3);
    line(238, 144, 274, 144);
    line(326, 144, 362, 144);
    strokeWeight(2);
  } else {
    // 평소 눈 (시선 이동)
    fill('#FFFFFF');
    ellipse(256, 144, 36, 13);
    ellipse(344, 144, 36, 16);
    noFill();
    arc(256, 139, 36, 12, PI, TWO_PI);
    fill('#1E1E1E');
    circle(256 + eyeX, 144 + eyeY, 13);
    circle(344 + eyeX, 144 + eyeY, 13);
    fill('#FFFFFF');
    circle(258 + eyeX, 142 + eyeY, 6);
    circle(346 + eyeX, 142 + eyeY, 6);
  }

  // 우람한 나의 광대, 큰 코
  fill('#F6DBC5'); // 광대
  arc(244, 184, 40, 32, 0, PI * 11 / 20);
  arc(356, 184, 40, 32, PI * 9 / 20, PI);

  fill('#FFDCC2'); // 콧대
  triangle(300, 152, 288, 188, 312, 188);

  fill('#D2A082'); // 콧구멍
  arc(294, 188, 8, 4, 0, PI);
  arc(306, 188, 8, 4, 0, PI);

  // 입술 / A키 하트입
if (keyIsPressed && (key === 'm' || key === 'M'|| key ==='ㅡ')) {
  beginShape();
  strokeWeight(2);
  fill('#FF6464');
  vertex(200, 100); // 시작점 (위쪽 가운데)
  bezierVertex(200, 80, 150, 80, 150, 110); // 왼쪽 곡선
  bezierVertex(150, 150, 200, 170, 200, 190); // 왼쪽 아래
  bezierVertex(200, 170, 250, 150, 250, 110); // 오른쪽 아래
  bezierVertex(250, 80, 200, 80, 200, 100); // 오른쪽 곡선
  line(272, 224, 328, 224)
  endShape();   
  } else {
    fill('#E69696'); // 아랫입술
    arc(300, 224, 56, 28, 0, PI);
    fill('#F0A0A0'); // 윗입술
    triangle(300, 216, 272, 224, 328, 224);
  }

  // 카라
  fill('#A98B76'); // 카라
  triangle(268, 264, 244, 272, 298, 304);
  triangle(332, 264, 356, 272, 302, 304);

  stroke('#000000C1');
  line(380, 304, 380, 384);
  line(220, 304, 220, 384);

  // 끊임없이 자라는 새치
  stroke('#FFFFFF');
  line(316, 32, 332, 56);
  line(324, 36, 340, 60);
  line(284, 24, 296, 48);
  line(356, 64, 372, 80);
  line(244, 48, 260, 64);
  
  stroke(0);
  strokeWeight(2);
}

// 방향키로 머리색 변경이 가능합니다. 
//다양한 색의 머리색을 체험해 볼 수 있으며 스페이스바를 누르면 원래색으로 복구 됩니다.
// A 키를 누르면 눈이 하트로 변합니다.한글로 설정되어 있으면 입력이 먹히지 않는 불편한 상황이 생겨 이후 ‘A’ ‘a’ ‘ㅁ’ 모두 실행되도록 수정했습니다.
// 화면을 클릭하면 눈을 감도록 만들었습니다. 앞선 눈 하트 if 문뒤에 else if를 사용하여 만들었습니다.
// ‘M’ ‘m’ ‘ㅡ’ 키를 누르면 입이 작아지지만 큰 하트를 보냅니다. 
// 마우스 움직이면 눈동자가 마우스를 따라 움직입니다.
function keyPressed() {
  if (key === 'g' || key === 'G' || key ==='ㅎ') {
    saveGif('my_character', 10, { delay: 1 });
  }
}