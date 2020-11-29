//Class-31: Plinko Game - I

//Create Namespaces
const {Engine, World, Bodies, Body} = Matter;

//Create variables
var myengine, myworld;

var ground;

//Creating arrays
var particles = [];
var plinkos = [];
var divisions = [];

//Specify division height
var divisionHeight = 180;

function setup() {
  createCanvas(400,500);
  
  myengine = Engine.create(); //Create physics engine
  myworld = myengine.world; //Create physics world from engine

  ground = new Ground(200,480,400,20);

  console.log(width, height);

  //Creating multiple divisions at the bottom of the screen
  for (let d = 0; d <= width; d += 80) {
    divisions.push(new Division(d, height - divisionHeight/2, 10, divisionHeight));
  }

  //Creating plinkos - I
  for (var o = 45; o <= width - 50; o += 50) {
    plinkos.push(new Plinko(o, 50));
  }

  //Creating plinkos - II
  for (var p = 20; p <= width; p += 50) {
    plinkos.push(new Plinko(p, 100));
  }

  //Creating plinkos - III
  for (var q = 45; q <= width - 50; q += 50) {
    plinkos.push(new Plinko(q, 150));
  }

  //Creating plinkos - IV
  for (var r = 20; r <= width; r += 50) {
    plinkos.push(new Plinko(r, 200));
  }

  //Creating plinkos - V
  for (var s = 45; s <= width - 50; s += 50) {
    plinkos.push(new Plinko(s, 250));
  }

}

function draw() {
  background(221, 220, 250);  

  Engine.update(myengine); //Update to physics engine

  ground.display();

  //Display divisions, plinkos & particles
  for (let i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

  for (let j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  //Displaying particles with regular intervals
  if (frameCount % 100 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for (let k = 0; k < particles.length; k++) {
    particles[k].display();
  }


}