var iterator = 0;
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
  background(13,73,63,80);
  
  iterator ++;
  
  var p = noise(iterator/100+200) * width;
  var q = noise(iterator/100) * height;
  var x = random() * width;
  var y = random() * height;
  var a = random() * 5 + 5;
  
  var colorList = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093'];
                 
   var colorHex = random(colorList);
  
  noStroke();
  fill(75,224,135,50);
  arc(p,q,120,120,frameCount,frameCount + 330);

  for( var i = random()*2; i < a; i += 2){
  var r = 2 * sq(i);
  if(dist(x,y,p,q) > (60) ){
  stroke(lerpColor(color('#f794a4'),color('#64b3f4'),frameCount/24));
  strokeWeight(0.5);
  noFill();
  ellipse(x,y,r);
  } else {
  for( var c = 0; c < 360; c += 3){
  stroke(color(colorHex));
  //fill(255);
  //line(x - r/2,y + r/2,x + r/2,y - r/2);  
  line(x - (cos(c)*r/2),y - (sin(c)*r/2),x + (cos(c)*r/2),y + (sin(c)*r/2));
  
  }
  }
  }
}