var font;
var vehicles = [];
let fontSize = 180;
let words = ['LU', 'LUM', 'MUSM', '143'];
let item = 0;

function preload() {
  font = loadFont("Best School Font by Kelik (7NTypes).otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function mousePressed(){
  if(item < words.length){
  var points = font.textToPoints(words[item], 200, height/2, fontSize, {sampleFactor: 0.15});
    if (points.length > vehicles.length){
      for (let i = 0; i < vehicles.length; i++){
        let v = vehicles[i];
        let pt = points[i];
        v.newTarget(pt.x, pt.y);
        }
        for (let i = vehicles.length; i < points.length; i++){
          let pt = points[i];
          let vehicle = new Vehicle(pt.x, pt.y);
          vehicles.push(vehicle);
      }
    }
    else if (points.length < vehicles.length){
      for (let i = points.length; i < vehicles.length; i++) {
        let v = vehicles[i];
        v.newTarget(width+10, random(height));
        }
        for (let i =0; i < points.length; i++) {
        let pt = points[i];
        let v = vehicles[i];
        v.newTarget(pt.x, pt.y);
      }
    }
  item++;
  }
}