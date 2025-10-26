var countBackground = 0;
var countForground;
var shift = false;
var change = 0;
var a, b, c, d, e, f, g, h, i, j, k, l, m, n, p, q, r, s, t, song;

var audioName = "vertigo.mp3";
var path;

function preload() {
  a = loadImage("a-min.jpg");
  b = loadImage("b-min.jpg");
  b = loadImage("b-min.jpg");
  c = loadImage("c-min.jpg");
  d = loadImage("d-min.jpg");
  e = loadImage("e-min.jpg");
  f = loadImage("f-min.jpg");
  g = loadImage("g-min.jpg");
  h = loadImage("h-min.jpg");
  i = loadImage("i-min.jpg");
  j = loadImage("j-min.jpg");
  k = loadImage("k-min.jpg");
  l = loadImage("l-min.JPG");
  m = loadImage("m-min.JPG");
  n = loadImage("n-min.JPG");
  p = loadImage("p-min.JPG");
  q = loadImage("q-min.JPG");
  r = loadImage("r-min.jpg");
  s = loadImage("s-min.jpg");
  t = loadImage("t-min.JPG");
  song = loadSound("vertigo.mp3");
}

function setup() {
  //path = sketchPath(audioName);
  //file = new SoundFile(this, path);
  //file.play();

  //fullScreen();
  song.loop();
  createCanvas(windowWidth, windowHeight);
  background(255, 200, 200, 255);

  tint(255, 200, 200, 63);
  //loadPixels();
  //for (int i = 0; i < pixels.length; i++ ){
  //float rand = random(255);
  //color c = color(rand, 60);
  //pixels[i] = c;

  // updatePixels();
}

function draw() {
  fill(240, 128, 128);
  noStroke();
  rect(200, 200, 400, 400);
  fill(0);
  tint(255, 200, 200, 63);
  //text("Millis: "+millis(), 10, 15);

  var poem_one =
    "drenched in echoes of salty voices // your spirit lies in wake // eclipsed by neon // as your sunshine rusts";
  fill(50);
  text(poem_one, 30, 30, 150, 100);

  var poem_two =
    "locked in noise // something anchored in your throat // colonizes your voice // your lips crack";
  fill(50);
  text(poem_two, 30, 500, 150, 100);

  var poem_three =
    "i became the waves // nibbling day and night // at unending rocks // thrown at me";
  fill(50);
  text(poem_three, 1000, 30, 150, 100);

  var poem_four =
    "streaks of colour // snatched from their home of pink // left to rot at the back of your head // which is a graveyard";
  fill(50);
  text(poem_four, 1000, 500, 150, 100);

  if (millis() % 100 == 0) {
    change = 0;
  }

  if (millis() % 200 == 0) {
    change = 1;
  }

  if (millis() % 300 == 0) {
    change = 2;
  }

  tint(255, 200, 200, 63);
  image(a, random(1000), random(1000), a.width / 2, a.height / 2);
  switch (change) {
    case 0:
      tint(255, 200, 200, 63);
      image(h, random(300), random(300), b.width / 3, b.height / 3);
      image(j, random(300), random(300), b.width / 3, b.height / 3);
      image(d, random(300), random(300), b.width / 3, b.height / 3);
      image(e, random(300), random(300), b.width / 3, b.height / 3);
      break;
    case 1:
      tint(255, 200, 200, 63);
      image(f, random(300), random(300), b.width / 2, b.height / 2);
      image(g, random(300), random(300), b.width / 2, b.height / 2);
      image(h, random(300), random(300), b.width / 2, b.height / 2);
      image(i, random(300), random(300), b.width / 2, b.height / 2);
      break;

    case 2:
      tint(255, 200, 200, 63);
      image(p, random(700), random(700), b.width / 2, b.height / 2);
      image(q, random(700), random(700), b.width / 2, b.height / 2);
      image(r, random(700), random(700), b.width / 2, b.height / 2);
      image(s, random(700), random(700), b.width / 2, b.height / 2);
      break;
  }

  var div = 30;

  if (millis() % div == 0) {
    shift = true;
    countBackground = millis();
  }

  //text("Millis Background: "+countBackground, 10, 25);

  if (shift && millis() < countBackground + random(100, 1500)) {
    drawWithGreyScale();
    fill(225, 200, 200, 63);
    rect(0, 0, width, height);
  }

  if (shift && millis() < countBackground + 3000) {
    fill(225, 200, 200, 63);
    rect(0, 0, width, height);
  }
}

function drawWithGreyScale() {
  background(255, 200, 200, 255);
  loadPixels();
  for (var i = 0; i < pixels.length; i++) {
    var rand = random(255);
    var randb = random(200);
    var c = color(219, randb, randb, 50);
    pixels[i] = c;
  }
  updatePixels();
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
