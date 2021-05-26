class Drop{
    constructor(x,y){ 
        var option = {
            'restitution': 0.02,
            'friction':0.1
        }
        this.x=x;
        this.y=y;
        this.rain = Bodies.circle(x,y,5,option);
        this.radius=5;
        World.add(world,this.rain);
    }
    display(){
        var pos = this.rain.position;

        //translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x,pos.y,this.radius,this.radius);
      
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
        }
    }
}