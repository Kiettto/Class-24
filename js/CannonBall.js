class CannonBall{
    constructor(x,y){
        this.body=Bodies.circle(x,y,40)
        World.add(world,this.body)
        this.image = loadImage("assets/cannonball.png");
    }

    display(){
        var pos = this.body.position
        image(this.image,pos.x,pos.y,40,40)

    }
    
    shoot(){
        var velocity=p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20);
        Matter.Body.setVelocity(this.body,{x:velocity.x, y:velocity.y})
    }
}
