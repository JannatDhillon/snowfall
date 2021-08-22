class Snowfall{
    constructor(x,y,r){
      this.r=r
    this.body=Bodies.circle(x,y,this.r);
    this.snow=loadImage("snow4.webp")
    World.add(world,this.body);
  
    }
  
    display(){
  
      var pos=this.body.position;
      var angle=this.body.angle;
      
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.snow,10,10,this.r,this.r);
      pop()  
    }
  }