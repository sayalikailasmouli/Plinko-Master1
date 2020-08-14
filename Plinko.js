class Plinko{
    constructor(x,y){
    var options={
      restitution: 1,
      friction: 0,
      isStatic:true
    }
    this.body = Bodies.circle(x,y,14,options);
    this.x= x;
    this.y = y;

    World.add(world,this.body);
    }
    display(){
      this.pox=this.body.position;
      fill("pink");
      ellipseMode(CENTER);
      ellipse(this.x,this.y,14);


    }
}