class Box  {
  constructor(x, y, width, height){
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity = 255;
  }

  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    if(this.body.speed < 5){
    rect(pos.x, pos.y, this.width, this.height);
  } else {
          World.remove(world, this.body);
      push();
    this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
  }
  }
}
