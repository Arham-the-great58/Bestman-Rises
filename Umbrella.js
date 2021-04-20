class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.image = loadImage("bat/Bestman-01.png");
        this.image2 = loadImage("Walking-Frame/walking_1.png");
    }

    display(){
        var pos = this.umbrella.position;



        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount>=200){
            image(this.image,pos.x,pos.y+70,300,300);
        }else{
            image(this.image2,pos.x,pos.y+70,300,300);
        }
        
    }
}
