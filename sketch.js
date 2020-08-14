const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


plinkos=[]
particle=[]
division=[]

var ground;
var divisionHeight=300;


function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
  
  
 
  ground=new Ground(100,690,1000,20);

  for(var k=0; k<=width; k=k+80){

  division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));

  }

  for(var j=40; j<=width;j=j+50){

    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10;j=j+50){

    plinkos.push(new Plinko(j,130));
  }

  for(var j=40; j<=width;j=j+50){

    plinkos.push(new Plinko(j,180));
  }


  for(var j=15; j<=width-10;j=j+50){

    plinkos.push(new Plinko(j,230));
  }

  for(var j=40; j<=width;j=j+50){

    plinkos.push(new Plinko(j,280));
  }

  for(var j=15; j<=width-10;j=j+50){

    plinkos.push(new Plinko(j,330));
  }

  // for(var u=0;u<=width-30,width+30;u=u+50){
  //   particle.push(new Particle(u,280))

  // }

console.log(frameCount);

  Engine.run(engine);
}

function draw() {
  background(250,67,89); 

   
  Engine.update(engine);
  
    ground.display();

    if(frameCount%60 === 0){
      particle.push(new Particle(random(width/2-10,width/2+10),5,5));
    }

    for(var k=0;k<division.length; k++){
  division[k].display();

    }

    for(var j=0;j<plinkos.length;j++){
      plinkos[j].display();
  
    }

    for(var j=0;j<plinkos.length;j++){
      plinkos[j].display();
  
    }

    for(var k=0;k<division.length; k++){
      division[k].display();
    
        }

    for(var j=0;j<plinkos.length;j++){
      plinkos[j].display();
      
        }    

        for(var j=0;j<plinkos.length;j++){
          plinkos[j].display();
      
        }

        for(var j=0;j<plinkos.length;j++){
          plinkos[j].display();
      
        }

        for (var j = 0; j < particle.length; j++) {
   
          particle[j].display();
        }

        // for(var u=0;u<particle.length;u++){
       

      }