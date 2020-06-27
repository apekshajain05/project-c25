var rain=[];


function setup() {
  createCanvas(displayWidth,500);
  for(var i=0;i<350;i++){
    rain[i]=new Raindrop();
  }
  
}

function draw() {
  background('#fae');
  for(var i=0;i<rain.length;i++){
    rain[i].fall();
    rain[i].display();
  }
  
}