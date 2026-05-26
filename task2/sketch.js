function setup() { // 400*600 -> 600*400 수정해서 다시 올립니다.
  createCanvas(600, 400);
  background('#F0F0F0');
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
  fill('#281E14');
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
  fill('#FFFFFF');
  strokeWeight(2);
  ellipse(256, 144, 36, 13); // 짝짝이눈
  ellipse(344, 144, 36, 16);
  noFill();
  arc(256, 139, 36, 12, PI, TWO_PI); // 짝눈 쌍꺼풀
  fill('#1E1E1E');
  circle(256, 144, 13);
  circle(344, 144, 13);
  fill('#FFFFFF');
  circle(258, 142, 6);
  circle(346, 142, 6);
  // 우람한 나의 광대, 큰 코, 두꺼운 입술, 그리고 새치
  fill('#F6DBC5'); // 광대
  arc(244, 184, 40, 32, 0, PI*11/20);
  arc(356, 184, 40, 32, PI*9/20, PI);
  fill('#FFDCC2'); // 콧대
  triangle(300, 152, 288, 188, 312, 188);  
  fill('#D2A082'); // 콧구멍
  arc(294, 188, 8, 4, 0, PI);
  arc(306, 188, 8, 4, 0, PI);
  fill('#E69696'); // 아랫입술
  arc(300, 224, 56, 28, 0, PI);
  fill('#F0A0A0'); // 윗입술
  triangle(300, 216, 272, 224, 328, 224);
  fill('#A98B76'); // 카라
  triangle(268, 264, 244, 272, 298, 304);
  triangle(332, 264, 356, 272, 302, 304);
  stroke('#000000C1');
  line(380, 304, 380, 384);
  line(220, 304, 220, 384);  
  stroke('#FFFFFF');  // 끊임없이 자라는 새치
  line(316, 32, 332, 56);
  line(324, 36, 340, 60);
  line(284, 24, 296, 48);
  line(356, 64, 372, 80);
  line(244, 48, 260, 64);
}