var firstPage, secondPage, thirdPage, fourthPage, fifthPage, sixthPage, seventhPage, eighthPage;
var dottedImg, dotted, circle, circleImg, circle1, circleImg1, heart, heartImg, heart1, heartImg1, star, starImg, star1, starImg1, rectangle, rectangleImg, rectangle1, rectangleImg1, square, squareImg, square1, squareImg1, triangle, triangleImg, triangle1, triangleImg1, cylinder, cylinderImg, cylinder1, cylinderImg1, oval, ovalImg, sphere, sphereImg, decagon, decagonImg, heptagon, heptagonImg, hexagon, hexagonImg, hexagon1, hexagonImg1, zigZagLine, zigZagLineImg, nonagon, trapezium, trapeziumImg, acuteAngled, acuteAngledImg, cone, coneImg,
  equilateral, equilateralImg, isoceles, isocelesImg, obtuseAngled, obtuseAngledImg, prism, prismImg, pyramid, pyramidImg, pyramid1, pyramidImg1, rightAngled, rightAngledImg, scalene, scaleneImg, dot, dotImg, sleeping, sleepingImg, standing, standingImg, slanting, slantingImg, blackBoard, blackBoardImg, earth, earthImg, samosa, samosaImg, sandwich, sandwichImg, tent, tentImg, nonagonImg, octagon, octagonImg, pentagon, pentagonImg, cube, cubeImg, cube1, cubeImg1, cuboid, cuboidImg, kite, kiteImg, parallelogram, parallelogramImg, rhombus, rhombusImg;
function preload() {
  zigZagLineImg = loadImage("asserts/basics/zig zag line.png");
  dottedImg = loadImage("asserts/basics/image.png");
  dotImg = loadImage("asserts/basics/dot.png");
  sleepingImg = loadImage("asserts/basics/dotted-line.png");
  slantingImg = loadImage("asserts/basics/slanting line.png");
  standingImg = loadImage("asserts/basics/standingLine.png");
  circleImg = loadImage("asserts/circle/circle.png");
  circleImg1 = loadImage("asserts/circle/circle1.png");
  cylinderImg = loadImage("asserts/circle/cylinder.png");
  cylinderImg1 = loadImage("asserts/circle/cylinder1.png");
  ovalImg = loadImage("asserts/circle/Oval.png");
  sphereImg = loadImage("asserts/circle/sphere.png");
  heartImg = loadImage("asserts/other shapes/heart.png");
  heartImg1 = loadImage("asserts/other shapes/heart1.png");
  starImg = loadImage("asserts/other shapes/star.png");
  starImg1 = loadImage("asserts/other shapes/star1.png");
  decagonImg = loadImage("asserts/other shapes/decagon.png");
  heptagonImg = loadImage("asserts/other shapes/heptagon.png");
  hexagonImg = loadImage("asserts/other shapes/hexagon.png");
  hexagonImg1 = loadImage("asserts/other shapes/hexagon1.png");
  nonagonImg = loadImage("asserts/other shapes/nonagon.png");
  octagonImg = loadImage("asserts/other shapes/octagon.png");
  pentagonImg = loadImage("asserts/other shapes/pentaon.png");
  rectangleImg = loadImage("asserts/quadrilaterals/retangle.png");
  rectangleImg1 = loadImage("asserts/quadrilaterals/retangle1.png");
  squareImg = loadImage("asserts/quadrilaterals/square.png");
  squareImg1 = loadImage("asserts/quadrilaterals/square1.png");
  cubeImg = loadImage("asserts/quadrilaterals/cube.png");
  cubeImg1 = loadImage("asserts/quadrilaterals/cube1.png");
  cuboidImg = loadImage("asserts/quadrilaterals/cuboid.png");
  kiteImg = loadImage("asserts/quadrilaterals/kite.png");
  parallelogramImg = loadImage("asserts/quadrilaterals/parallelogram.png");
  rhombusImg = loadImage("asserts/quadrilaterals/rhombus.png");
  trapeziumImg = loadImage("asserts/quadrilaterals/trapezium.png");
  triangleImg = loadImage("asserts/triangle/triangle.png");
  triangleImg1 = loadImage("asserts/triangle/triangle1.png");
  acuteAngledImg = loadImage("asserts/triangle/acuteAngled.png");
  coneImg = loadImage("asserts/triangle/cone.png");
  equilateralImg = loadImage("asserts/triangle/equilateral.png");
  isocelesImg = loadImage("asserts/triangle/isoceles.png");
  obtuseAngledImg = loadImage("asserts/triangle/obtuseAngled.png");
  prismImg = loadImage("asserts/triangle/prism.png");
  pyramidImg = loadImage("asserts/triangle/pyramid.png");
  pyramidImg1 = loadImage("asserts/triangle/pyramid1.png");
  rightAngledImg = loadImage("asserts/triangle/rightAngled.png");
  scaleneImg = loadImage("asserts/triangle/scalene.png");
  blackBoardImg = loadImage("asserts/quiz/blackBoard.jpg");
  earthImg = loadImage("asserts/quiz/earth.jpg");
  samosaImg = loadImage("asserts/quiz/samosa.jpg");
  sandwichImg = loadImage("asserts/quiz/sandwich.jpg");
  tentImg = loadImage("asserts/quiz/tent.png");
}
function setup() {
  createCanvas(800, 800);
  gameState = 2;

  dotted = createSprite(450, 430, 50, 50);
  dotted.addImage("img", dottedImg);
  dotted.scale = 0.8;

  triangle = createSprite(360, 365, 50, 50);
  triangle.addImage(triangleImg);
  triangle.scale = 0.06;

  rectangle = createSprite(200, 365, 50, 50);
  rectangle.addImage(rectangleImg);
  rectangle.scale = 0.15;

  square = createSprite(470, 460, 50, 50);
  square.addImage(squareImg);
  square.scale = 0.1;

  circle = createSprite(265, 455, 50, 50);
  circle.addImage(circleImg);
  circle.scale = 0.15;

  star = createSprite(160, 450, 50, 50);
  star.addImage(starImg1);
  star.scale = 0.08;

  heart = createSprite(370, 475, 50, 50);
  heart.addImage(heartImg);
  heart.scale = 0.15;

  pyramid = createSprite(170, 575, 50, 50);
  pyramid.addImage(pyramidImg);
  pyramid.scale = 0.25;

  cube = createSprite(310, 575, 50, 50);
  cube.addImage(cubeImg);
  cube.scale = 0.15;

  cylinder = createSprite(490, 630, 50, 50);
  cylinder.addImage(cylinderImg);
  cylinder.scale = 0.6;

  hexagon = createSprite(530, 575, 50, 50);
  hexagon.addImage(hexagonImg);
  hexagon.scale = 0.53;

  dot = createSprite(420, 200);
  dot.addImage(dotImg);
  dot.visible = false;

  standing = createSprite(200, 200);
  standing.addImage(standingImg);
  standing.scale = 0.4;
  standing.visible = false;

  slanting = createSprite(420, 200);
  slanting.addImage(slantingImg);
  slanting.scale = 0.4;
  slanting.visible = false;

  sleeping = createSprite(420, 200);
  sleeping.addImage(sleepingImg);
  sleeping.scale = 0.4;
  sleeping.visible = false;

  square1 = createSprite(415, 200);
  square1.addImage(squareImg1);
  square1.scale = 0.20;
  square1.visible = false;

  rectangle1 = createSprite(415, 200);
  rectangle1.addImage(rectangleImg1);
  rectangle1.scale = 0.20;
  rectangle1.visible = false;

  rhombus = createSprite(420, 200);
  rhombus.addImage(rhombusImg);
  rhombus.scale = 0.9;
  rhombus.visible = false;

  parallelogram = createSprite(420, 200);
  parallelogram.addImage(parallelogramImg);
  parallelogram.scale = 0.9;
  parallelogram.visible = false;

  trapezium = createSprite(420, 200);
  trapezium.addImage(trapeziumImg);
  trapezium.scale = 0.35;
  trapezium.visible = false;

  kite = createSprite(420, 200);
  kite.addImage(kiteImg);
  kite.scale = 1.8;
  kite.visible = false;

  cube1 = createSprite(420, 200);
  cube1.addImage(cubeImg1);
  cube1.scale = 0.23;
  cube1.visible = false;

  cuboid = createSprite(420, 200);
  cuboid.addImage(cuboidImg);
  cuboid.scale = 0.4;
  cuboid.visible = false;

  triangle1 = createSprite(415, 200);
  triangle1.addImage(triangleImg1);
  triangle1.scale = 0.09;
  triangle1.visible = false;

  acuteAngled = createSprite(415, 180);
  acuteAngled.addImage(acuteAngledImg);
  acuteAngled.scale = 0.9;
  acuteAngled.visible = false;

  rightAngled = createSprite(420, 200);
  rightAngled.addImage(rightAngledImg);
  rightAngled.scale = 0.3;
  rightAngled.visible = false;

  obtuseAngled = createSprite(420, 200);
  obtuseAngled.addImage(obtuseAngledImg);
  obtuseAngled.scale = 0.9;
  obtuseAngled.visible = false;

  isoceles = createSprite(420, 200);
  isoceles.addImage(isocelesImg);
  isoceles.scale = 0.5;
  isoceles.visible = false;

  equilateral = createSprite(420, 200);
  equilateral.addImage(equilateralImg);
  equilateral.scale = 0.9;
  equilateral.visible = false;

  scalene = createSprite(420, 200);
  scalene.addImage(scaleneImg);
  scalene.scale = 0.9;
  scalene.visible = false;

  cone = createSprite(420, 200);
  cone.addImage(coneImg);
  cone.scale = 0.25;
  cone.visible = false;

  pyramid1 = createSprite(420, 200);
  pyramid1.addImage(pyramidImg1);
  pyramid1.scale = 0.4;
  pyramid1.visible = false;

  prism = createSprite(420, 200);
  prism.addImage(prismImg);
  prism.scale = 0.4;
  prism.visible = false;

  circle1 = createSprite(420, 200);
  circle1.addImage(circleImg1);
  circle1.scale = 0.25;
  circle1.visible = false;

  oval = createSprite(420, 200);
  oval.addImage(ovalImg);
  oval.scale = 2;
  oval.visible = false;

  sphere = createSprite(420, 200);
  sphere.addImage(sphereImg);
  sphere.scale = 0.5;
  sphere.visible = false;

  cylinder1 = createSprite(540, 280);
  cylinder1.addImage(cylinderImg1);
  cylinder1.scale = 1;
  cylinder1.visible = false;

  pentagon = createSprite(415, 200);
  pentagon.addImage(pentagonImg);
  pentagon.scale = 0.8;
  pentagon.visible = false;

  hexagon1 = createSprite(415, 200);
  hexagon1.addImage(hexagonImg1);
  hexagon1.scale = 0.8;
  hexagon1.visible = false;

  heptagon = createSprite(420, 200);
  heptagon.addImage(heptagonImg);
  heptagon.scale = 0.9;
  heptagon.visible = false;

  octagon = createSprite(420, 200);
  octagon.addImage(octagonImg);
  octagon.scale = 0.9;
  octagon.visible = false;

  nonagon = createSprite(420, 200);
  nonagon.addImage(nonagonImg);
  nonagon.scale = 1;
  nonagon.visible = false;

  decagon = createSprite(420, 200);
  decagon.addImage(decagonImg);
  decagon.scale = 1.8;
  decagon.visible = false;

  star1 = createSprite(420, 200);
  star1.addImage(starImg1);
  star1.scale = 0.13;
  star1.visible = false;

  heart1 = createSprite(420, 200);
  heart1.addImage(heartImg1);
  heart1.scale = 0.3;
  heart1.visible = false;

  blackBoard = createSprite(410, 220);
  blackBoard.addImage(blackBoardImg);
  blackBoard.scale = 0.4;
  blackBoard.visible = false;

  earth = createSprite(410, 220);
  earth.addImage(earthImg);
  earth.scale = 0.5;
  earth.visible = false;

  samosa = createSprite(410, 220);
  samosa.addImage(samosaImg);
  samosa.scale = 0.9;
  samosa.visible = false;

  sandwich = createSprite(410, 220);
  sandwich.addImage(sandwichImg);
  sandwich.scale = 0.6;
  sandwich.visible = false;

  tent = createSprite(410, 220);
  tent.addImage(tentImg);
  tent.scale = 0.28;
  tent.visible = false;

  firstPageGroup = createGroup();
  firstPageGroup.add(dotted);
  firstPageGroup.add(triangle);
  firstPageGroup.add(rectangle);
  firstPageGroup.add(square);
  firstPageGroup.add(circle);
  firstPageGroup.add(star);
  firstPageGroup.add(heart);
  firstPageGroup.add(pyramid);
  firstPageGroup.add(cube);
  firstPageGroup.add(cylinder);
  firstPageGroup.add(hexagon);

  firstPageNot = createGroup();
  firstPageNot.add(dot);
  firstPageNot.add(standing);
  firstPageNot.add(sleeping);
  firstPageNot.add(slanting);
  firstPageNot.add(square1);
  firstPageNot.add(rectangle1);
  firstPageNot.add(rhombus);
  firstPageNot.add(parallelogram);
  firstPageNot.add(trapezium);
  firstPageNot.add(kite);
  firstPageNot.add(cube1);
  firstPageNot.add(cuboid);
  firstPageNot.add(triangle1);
  firstPageNot.add(acuteAngled);
  firstPageNot.add(rightAngled);
  firstPageNot.add(obtuseAngled);
  firstPageNot.add(isoceles);
  firstPageNot.add(scalene);
  firstPageNot.add(equilateral);
  firstPageNot.add(cone);
  firstPageNot.add(pyramid1);
  firstPageNot.add(prism);
  firstPageNot.add(circle1);
  firstPageNot.add(oval);
  firstPageNot.add(sphere);
  firstPageNot.add(cylinder1);
  firstPageNot.add(pentagon);
  firstPageNot.add(hexagon1);
  firstPageNot.add(heptagon);
  firstPageNot.add(octagon);
  firstPageNot.add(nonagon);
  firstPageNot.add(decagon);
  firstPageNot.add(star1);
  firstPageNot.add(heart1);
  firstPageNot.add(blackBoard);
  firstPageNot.add(earth);
  firstPageNot.add(samosa);
  firstPageNot.add(sandwich);
  firstPageNot.add(tent);

  firstPage = new FirstPage;
  secondPage = new SecondPage;
  thirdPage = new ThirdPage;
  fourthPage = new FourthPage;
  fifthPage = new FifthPage;
  sixthPage = new SixthPage;
  seventhPage = new SeventhPage;
  eighthPage = new EighthPage;

}
function draw() {
  background("purple");
  textSize(50);
  fill(255);
  strokeWeight(3);
  stroke(0)
  text("SHAPE LEARNING", 190, 65);

  firstPage.display();
  if (gameState == 0) { 
  textSize(20);
  strokeWeight(2);
  text("LEARNING SHAPES NOT ONLY HELPS CHILDREN IDENTIFY ", 115, 140);
  text("AND ORGANIZE VISUAL INFORMATION , IT WILL HELP THEM ", 110, 175);
  text("LEARN SKILLS IN OTHER CURRICULUM AREAS INCLUDING", 115, 210);
  text("READING , MATH , AND SCIENCE LEARNING SHAPES ALSO", 115, 245);
  text("HELPS THEM UNDERSTAND OTHER SIGNS AND SYMBOLS...", 115, 280);
  text("THIS APP WILL HELP THEM TO REMEMBER THE SHAPES", 115, 450);
  text("WITH VERY EASY CONCEPTS AND THEY CAN IDENTIFY", 115, 485);
  text("THE SHAPES LIFELONG . IT WOULD BASICALLY EXPLAIN.", 115, 520);
  text("EXAMPLE : RECTANGLE - IT IS A SHAPE WHICH IS MADE ", 115, 555);
  text("AFTER STRETCHING THE SQUARE . SUCH FUN EXANPLES", 115, 590);
  text("ARE EMBEDDED IN THE APP.", 115, 625);
}
  else if (gameState == 1) {
  textSize(20);
  strokeWeight(2);
  text(" 1) BASICS", 120, 150);
  text(" 2) QUADRILATERALS", 120, 190);
  text(" 3) TRIANGLES", 120, 230);
  text(" 4) CIRCLES", 120, 270);
  text(" 5) OTHER SHAPES", 120, 310);
}

secondPage.display();
if (gameState == 3) {
  textSize(20);
  fill(255);
  strokeWeight(1.5);
  text(" 1) DOT (.)", 120, 150);
  text(" 2) STANDING LINE (|)", 120, 190);
  text(" 3) SLANTING LINE (/)", 120, 230);
  text(" 4) SLEEPING LINE(-)", 120, 270);
}
else if (gameState == 4) {
  textSize(20);
  fill(255);
  strokeWeight(1.5);
  text(" 1) SQUARE", 120, 150);
  text(" 2) RECTANGLE", 120, 190);
  text(" 3) RHOMBUS", 120, 230);
  text(" 4) PARALLELOGRAM", 120, 270);
  text(" 5) TRAPEZIUM", 120, 310);
  text(" 6) KITE", 120, 350);
  text(" 7) CUBE (3D SHAPE)", 120, 390);
  text(" 8) CUBOID (3D SHAPE)", 120, 430);
}
else if (gameState == 5) {
  textSize(20);
  fill(255);
  strokeWeight(1.5);
  text(" 1) TRIANGLES", 120, 150);
  text(" 2) ACUTE ANGLED TRIANGLE", 120, 190);
  text(" 3) RIGHT ANGLED TRIANGLE", 120, 230);
  text(" 4) OBTUSE ANGLED TRIANGLE", 120, 270);
  text(" 5) ISOCELES", 120, 310);
  text(" 6) EQULATERAL", 120, 350);
  text(" 7) SCALENE", 120, 390);
  text(" 8) CONE (3D)", 120, 430);
  text(" 9) PYRAMID (3D)", 120, 470);
  text(" 10) PRISM (3D)", 120, 510);
}
else if (gameState == 6) {
  textSize(20);
  fill(255);
  strokeWeight(1.5);
  text(" 1) CIRCLE", 120, 150);
  text(" 2) OVAL", 120, 190);
  text(" 3) SPHERE", 120, 230);
  text(" 4) CYLINDER", 120, 270);
}
else if (gameState == 7) {
  textSize(20);
  fill(255);
  strokeWeight(1.5);
  text(" 1) PENTAGON", 120, 150);
  text(" 2) HEXAGON", 120, 190);
  text(" 3) HEPTAGON", 120, 230);
  text(" 4) OCTAGON", 120, 270);
  text(" 5) NONAGON", 120, 310);
  text(" 6) DECAGON", 120, 350);
  text(" 7) STAR", 120, 390);
  text(" 8) HEART", 120, 430);
}

thirdPage.display();
if (gameState == 8) {
  dot.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("DOT", 380, 290);
  text("A DOT IS NOTHING BUT SMALL", 105, 360);
  text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
  text("THE BEGINNING OF THE ELEMENT.", 105, 440);
  text("AS IT MARKS THE BEGNNING AND", 105, 480);
  text("THE END OF THE LINE. ", 105, 520);
}
else if (gameState == 9) {
  standing.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("STANDING LINE(DOTS LINE)", 220, 210);
  text("A STANDING LINE IS NOTHING", 105, 360);
  text("BUT A VERTICLE LINE.WHICH  ", 105, 400);
  text("STARTS WITH A DOT AND ENDS", 105, 440);
  text("WITH A DOT.THE DOTS MAY BE", 105, 480);
  text("NEAR OR FAR OF EACH OTHER.", 105, 520);
}
else if (gameState == 10) {
  slanting.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("SLANTING LINE", 380, 290);
  text("SLANTING LINE IS DRAWN WITH", 105, 360);
  text("AN ANGLE JUST LIKE DIAGONALS.", 105, 400);
  text("DIAGONAL ARE NOTHING BUT THE", 105, 440);
  text("LINE WHICH JOIN TWO OPPOSITE", 105, 480);
  text("SIDES OF A FIGURE.", 105, 520);
}
else if (gameState == 11) {
  sleeping.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("SLEEPING LINE", 380, 290);
  text("SLEEPING LINE IS NOTHING BUT", 105, 360);
  text("HORIZONTAL LINE.THE ALPHABETS", 105, 400);
  text("ARE THE COMBINATION OF ", 105, 440);
  text("SLEEPING LINE , STANDING LINE,", 105, 480);
  text("SLANTING LINE.", 105, 520);
}

fourthPage.display();
if (gameState == 12) {
  square1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("SQUARE", 340, 320);
  text("SQUARE IS A SHAPE OF FOUR LINE. ", 105, 370);
  text("TWO SLEEPING AND TWO STANDING. ", 105, 410);
  text("IT IS A SHAPE WITH ALL FOUR ", 105, 450);
  text("LINES OF SAME LENGTH THEY MAKE", 105, 490);
  text("NINETY DEGREE(RIGHT ANGLE). ", 105, 530);
}
else if (gameState == 13) {
  rectangle1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("RECTAGLE", 320, 280);
  text("RECTAGLE IS DOUBLE OF SQUARE.", 105, 360);
  text("IN SIMPLE WORDS IF WE PULL TWO", 105, 400);
  text("SIDES OF SQUARE A RECTANGLE IS", 105, 440);
  text("FORMED.THE OPPOSITE SIDES OF ", 105, 480);
  text("RECTANGLE ARE EQUAL.", 105, 520);
}
else if (gameState == 14) {
  rhombus.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("RHOMBUS", 295, 300);
  text("RHOMBUS IS THE BIG BROTHER OF ", 105, 360);
  text("SQUARE. ONLY DIFFERENCE IS THE", 105, 400);
  text("ALL ANGLES OF RHOMBUS ARE NOT", 105, 440);
  text("90 BUT THE OPPOSITE ANGLES ARE", 105, 480);
  text("EQUAL.IF WE PUSH ONE SIDE OF A", 105, 520);
  text("SQARE IT BECOMES RHOMBUS.", 105, 560);
}
else if (gameState == 15) {
  parallelogram.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("PARALLELOGRAM", 250, 290);
  text("PARALLELOGRAM NAME IT SELF ", 105, 360);
  text("SUGGEST THAT THE OPPOSITE", 105, 400);
  text("SIDES OF IT IS PARALLEL", 105, 440);
  text("PARALLEL AND EQUAL TO EACH OTHER.", 105, 480);
  text("OPPOSITE ANGLES ARE EQUAL. ", 105, 520);
}
else if (gameState == 16) {
  trapezium.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("TRAPEZIUM", 320, 310);
  text("TRAPOZIAUM IS ONLY SHAPE", 105, 360);
  text("IN QUADRILATER WHOSE ONE PAIR", 105, 400);
  text("OF OPPOSITE SIDES ARE PARALLEL.", 105, 440);
  text("AND THE OTHER PAIR IS", 105, 480);
  text("NOT PARALLEL. ", 105, 520);
}
else if (gameState == 17) {
  kite.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("KITE", 380, 310);
  text("KITE SHAPE AND THE KITE WHICH", 105, 360);
  text("WE FLY IN THE SKY ARE SAME.", 105, 400);
  text("TWO PAIRS OF ADJACENT SIDES .", 105, 440);
  text("ARE CONGRUENT ONE PAIR.", 105, 480);
  text("OF OPPOSITE ANGLES IS CONGRUENT. ", 105, 520);
}
else if (gameState == 18) {
  cube1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("CUBE", 380, 320);
  text("CUBE IS A 3D FORM OF SQUARE.", 105, 360);
  text("IT IS A SOLID SHAPE THAT HAS ", 105, 400);
  text("SIX EQUAL SQUARE SIDES.", 105, 440);
  text("IT HAS EIGHT CORNERS, TWELVE ", 105, 480);
  text("EDGES AND SIX FACES. ", 105, 520);
}
else if (gameState == 19) {
  cuboid.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("CUBOID", 350, 320);
  text("CUBOID IS A 3D FORM OF RECTANGLE.", 105, 360);
  text("IT IS A SOLID SHAPE THAT HAS", 105, 400);
  text("SIX PARALLELOGRAM SHAPED FACES", 105, 440);
  text("IT HAS EIGHT CORNERS, TWELVE ", 105, 480);
  text("EDGES AND SIX FACES. ", 105, 520);
}

fifthPage.display();
if (gameState == 20) {
  triangle1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("TRIANGLE", 325, 310);
  text("TRIANGLE IS ONLY SHAPE WHICH ", 105, 360);
  text("HAS THREE SIDES. IT HAS THREE ", 105, 400);
  text("EDGES , THREE VERTICES AND ", 105, 440);
  text("THREE ANGLES. ANGLES OF  ", 105, 480);
  text("TRIANGLE ALWAYS SUM 180 DEGREE.", 105, 520);
}
else if (gameState == 21) {
  acuteAngled.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("ACUTE ANGLED TRIANGLE", 180, 280);
  text("ACUTE ANGLE IS A TYPE OF TRIANGLE", 70, 360);
  text("IT HAS SAME PROPERTISE LIKE ", 70, 400);
  text("TRIANGLE BUT THE INTERNAL ANGLES", 70, 440);
  text("OF THIS TRIANGLE ARE ACUTE THAT  ", 70, 480);
  text("IS, IT MEASURE LESS THAN 90 DEGREE ", 70, 520);
}
else if (gameState == 22) {
  rightAngled.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("RIGHT ANGLED TRIANGLE", 180, 300);
  text("RIGHT ANGLE IS A TYPE OF TRIANGLE", 50, 360);
  text("IT HAS SAME PROPERTISE LIKE TRIANGLE ", 50, 400);
  text("BUT THE INTERNAL ANGLES OF THIS", 50, 440);
  text("TRIANGLE ARE RIGHT THAT IS, IT", 50, 480);
  text("MEASURE EXACTLY 90 DEGREE.", 50, 520);
}
else if (gameState == 23) {
  obtuseAngled.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("OBTUSE ANGLED TRIANGLE", 180, 310);
  text("OBTUSE ANGLE IS A TYPE OF TRIANGLE", 50, 360);
  text("IT HAS SAME PROPERTISE LIKE TRIANGLE ", 50, 400);
  text("BUT THE INTERNAL ANGLES OF THIS", 50, 440);
  text("TRIANGLE ARE OBTUSE THAT IS, IT", 50, 480);
  text("MEASURE MORE THAN 90 DEGREE. ", 50, 520);
}
else if (gameState == 24) {
  isoceles.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("ISOCELES", 330, 310);
  text("ISOCELES IS A TYPE OF TRIANGLE.", 105, 360);
  text("IT HAS TWO EQUAL SIDES AND TWO ", 105, 400);
  text("EQUAL ANGLES .IT IS A 2D SHAPE", 105, 440);
}
else if (gameState == 25) {
  equilateral.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("EQUILATERAL", 300, 310);
  text("EQUILATERAL IS A TYPE OF TRIANGLE.", 50, 360);
  text("IT HAS ALL THREE SIDES EQUAL AND", 50, 400);
  text("THREE EQUAL ANGLES .IT IS A 2D SHAPE.", 50, 440);
}
else if (gameState == 26) {
  scalene.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("SCALENE", 340, 320);
  text("SCALENE IS A TYPE OF TRIANGLE.IT HAS", 50, 360);
  text(" ALL THREE SIDES DIFFERENT AND ALL ", 50, 400);
  text("THREE ANGLES UNEQUAL .IT IS A 2D SHAPE.", 20, 440);
}
else if (gameState == 27) {
  cone.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("CONE", 370, 320);
  text("CONE IS THE 3D FORM OF TRIANGLE", 80, 360);
  text("WITH A FLAT CIRCULAR BASE", 80, 400);
  text("THE COMMON POINT IS KNOWN AS.", 80, 440);
  text("APEX OR VERTEX", 80, 480);
}
else if (gameState == 28) {
  pyramid1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("PYRAMID", 350, 320);
  text("PYRAMID IS A 3D FORM OF TRIANGLE.", 70, 360);
  text("IT IS A SOLID SHAPE THAT HAS ", 70, 400);
  text("FOUR EQUAL TRIANGLE SIDES AND.", 70, 440);
  text("ONE SQUARE AT BASE", 70, 480);
  text("IT HAS FIVE CORNERS, EIGHT EDGES. ", 70, 520);
  text("AND FIVE FACES. ", 70, 560);
}
else if (gameState == 29) {
  prism.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("PRISM", 350, 320);
  text("PRISM 3D FORM OF TRIANGLE, IT IS", 70, 360);
  text("SOLID SHAPE THAT HAS TWO EQUAL  ", 70, 400);
  text("TRIANGLE SIDES AND THREE RECTANGLE.", 30, 440);
  text("FACES, IT HAS SIX CORNERS AND", 70, 480);
  text("NINE EDGES AND FIVE FACES. ", 70, 520);
}

sixthPage.display();
if (gameState == 30) {
  circle1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("CIRCLE", 350, 310);
  text("CIRCLE IS A FLAT ROUND SHAPE", 80, 360);
  text("LIKE A RING.IT IS THE ONLY SHAPE", 80, 400);
  text("THAT HAS NO CORNERS AND NO EDGES.", 45, 440);
  text("A CIRCLE CAN BE DEFINED AS A CLOSE", 45, 480);
  text("2-DIMENSIONAL CURVED SHAPE. ", 80, 520);
}
else if (gameState == 31) {
  oval.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("OVAL", 380, 310);
  text("OVAL IS THE BIG BROTHER OF", 80, 360);
  text("CIRCLE.IF WE PULL THE TWO SIDE", 80, 400);
  text("OF A CIRCLE OVAL IS FORMED.AN", 80, 440);
  text("OVAL IS A CLOSED CURVE IN A PLANE", 80, 480);
  text("WHICH SHOWS THE OUTLINE OF EGG", 80, 520);
}
else if (gameState == 32) {
  sphere.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("SPHERE", 350, 310);
  text("SPHERE IS NOTHING BUT THE 3D", 70, 360);
  text("FORM OF THE CIRCLE FOR EXAMPLE", 70, 400);
  text("THE BALL,LADDOO ,EARTH,MARBLES.", 70, 440);
  text("SPHERE HAS ONE CONTINUOUS ", 70, 480);
  text("SURFACE WITH NO EDGES OR VERTICES. ", 50, 520);
}
else if (gameState == 33) {
  cylinder1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("CYLINDER", 330, 310);
  text("CYLINDER IS A THREE DIMENSIONAL ", 70, 360);
  text("SOLID THAT HOLDS TWO PARALLEL ", 70, 400);
  text("BASES JOINED BY A CURVED SURFACE", 70, 440);
  text(",AT A FIXED DISTANCE.THE BASE ARE ", 70, 480);
  text("NORMALLY CIRCULAR IN SHAPE. ", 70, 520);
}

seventhPage.display();
if (gameState == 34) {
  pentagon.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("PENTAGON", 315, 315);
  text("PENTAGON IS THE ONLY SHAPE WHICH", 70, 360);
  text("HAS FIVE SIDES. IT IS A TWO ", 70, 400);
  text("DIMENSIONAL SHAPE.FOR EXAMPLE", 70, 440);
  text("TENT , THE MARKING ON SOCCER", 70, 480);
  text("BALL ,SCHOOL CROSSING SINGS.", 70, 520);
}
else if (gameState == 35) {
  hexagon1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("HEXAGON", 325, 315);
  text("THE FIGURE HAVING SIX SIDE IS", 105, 360);
  text("CALLED HEXAGON.IT IS A TWO  ", 105, 400);
  text("DIMENSIONAL SHAPE FOR EXAMPLE", 105, 440);
  text("NUT AND BEE HIVE.", 105, 480);
}
else if (gameState == 36) {
  heptagon.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("HEPTAGON", 315, 315);
  text("A FLAT SHAPE WITH SEVEN STRAIGHT ", 80, 360);
  text("SIDES AND SEVEN ANGLES. IT IS A", 105, 400);
  text("TWO DIMENSIONAL SHAPE.", 105, 440);
}
else if (gameState == 37) {
  octagon.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("OCTAGON", 330, 315);
  text("THE SHAPE THAT HAS EIGHT ", 125, 360);
  text("STRAIGHT SIDES IS CALLED ", 125, 400);
  text("OCTAGON . IT IS A TWO", 125, 440);
  text("DIMENSIONAL SHAPE.", 125, 480);
}
else if (gameState == 38) {
  nonagon.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("NONAGON", 330, 315);
  text("THE SHAPE THAT HAS NINE", 125, 360);
  text("STRAIGHT SIDES IS CALLED ", 125, 400);
  text("NONAGON.IT IS A TWO", 125, 440);
  text("DIMENSIONAL SHAPE. ", 125, 480);
}
else if (gameState == 39) {
  decagon.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("DECAGON", 325, 315);
  text("THE SHAPE THAT HAS TEN", 125, 360);
  text("STRAIGHT SIDES IS CALLED", 125, 400);
  text("DECAGON.IT IS A TWO", 125, 440);
  text("DIMENSIONAL SHAPE.", 125, 480);
}
else if (gameState == 40) {
  star1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("STAR", 380, 320);
  text("STAR IS A ASTRONOMICAL OBJECT ", 105, 360);
  text("IT IS A POLYGON SHAPE WHICH ", 105, 400);
  text("ARE CUT TO FORM A STAR SHAPE.", 105, 440);
}
else if (gameState == 41) {
  heart1.visible = true;
  textSize(35);
  fill(255);
  strokeWeight(1.5);
  stroke(0);
  text("HEART", 360, 320);
  text("HEART SHAPE CAN BE MADE BY  ", 105, 360);
  text("FOLDIND A RECTANGULAR PAGE ", 105, 400);
  text("AND BY CUTTING IT IN CURVE  ", 105, 440);
  text("AFTER THIS WHEN IT IS OPENED", 105, 480);
  text("HEART SHAPE IS READY. ", 105, 520);
}

eighthPage.display();
if (gameState == 42) {
  blackBoard.visible = true;
  textSize(25);
  fill(255);
  text("WHICH TYPE OF SHAPE IS THIS?", 210, 410);
  text("OPTION 1) RECTANGLE", 210, 450);
  text("OPTION 2) CUBOID", 210, 490);
}
else if (gameState == 43) {
  samosa.visible = true;
  textSize(25);
  fill(255);
  text("WHICH TYPE OF SHAPE IS THIS?", 210, 410);
  text("OPTION 1) CONE", 210, 450);
  text("OPTION 2) TRIANGLE", 210, 490);
}
else if (gameState == 44) {
  earth.visible = true;
  textSize(25);
  fill(255);
  text("WHICH TYPE OF SHAPE IS THIS?", 210, 410);
  text("OPTION 1) CIRCLE", 210, 450);
  text("OPTION 2) SPHERE", 210, 490);
}
else if (gameState == 45) {
  tent.visible = true;
  textSize(25);
  fill(255);
  text("WHICH TYPE OF SHAPE IS THIS?", 210, 410);
  text("OPTION 1) PENTAGON", 210, 450);
  text("OPTION 2) HEXAGON", 210, 490);
}
else if (gameState == 46) {
  sandwich.visible = true;
  textSize(25);
  fill(255);
  text("WHICH TYPE OF SHAPE IS THIS?", 210, 410);
  text("OPTION 1) SQUARE", 210, 450);
  text("OPTION 2) CUBE", 210, 490);
}
/*else if (gameState == 47) {
  var correctAns = "RECTANGLE";
}
else if (gameState == 48) {
  var correctAns = "TRIANGLE";
}
else if (gameState == 49) {
  var correctAns = "SPHERE";

}
else if (gameState == 50) {
  var correctAns = "PENTAGON";
}
else if (gameState == 51) {
  var correctAns = "SQUARE";
}*/

drawSprites();
  /*textSize(30);
 fill(0);
 strokeWeight(1.5);
 stroke(0)
 text("Shapes are our first step to start learning. ", 130, 150);
 text("This is a simple and enjoyable app for ", 130, 200);
 text("children to recognize and learn shape ", 130, 250);
 text("easily.", 130, 300);*/
}