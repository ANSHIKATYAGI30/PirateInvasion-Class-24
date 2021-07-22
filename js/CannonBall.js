class CannonBall {
    constructor(x, y) {
     
      var Cannon_options={
          restitution: 0.5,
          friction:1.0,
          density:1.0,
          isStatic: true
      }
      this.r= 40;
      this.body= Bodies.circle(x,y, this.r, Cannon_options);
        this.image= loadImage("assets/cannonball.png");
        World.add(world,this.body);
    }
    shoot(){
        var velocity= p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();  
     
    }
  }
  