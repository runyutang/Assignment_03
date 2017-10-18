var iterator = 0;
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
  background(0,0,0,50);
  iterator ++;
  var p = noise(iterator/100+200) * width;
  var q = noise(iterator/100) * height;
  var x = random() * width;
  var y = random() * height;
  var a = random() * 5 + 5;
  
  noStroke();
  fill(color('#54A92A'),50);
  arc(p,q,120,120,frameCount*2,frameCount*2 + 330);

  for( var i = random()*2; i < a; i += 2){
  var r = 2 * sq(i);
  if(dist(x,y,p,q) > (60 + r) ){
  stroke(lerpColor(color('#f794a4'),color('#64b3f4'),frameCount/24));
  strokeWeight(0.5);
  noFill();
  ellipse(x,y,r);
  } else {
  fill(255);
  line(x - r/2,y - r/2,x + r/2,y + r/2);
  }
  }
}