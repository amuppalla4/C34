class Rock{
    constructor(x,y,width,height){
      var options ={ restitution:0.6, 
    friction:1,
    density:1}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.image = loadImage("images/rock1.png");
      this.width = width;
      this.height = height;
    }
    show()
    {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  