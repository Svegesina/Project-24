class computerarcher{
    constructor(x,y,width,height) {
        this.body = Bodies.rectangle(x, y, width, height, options);
    
        this.width = width;
        this.height = height;
        this.x=x
        this.y=y
        this.image = loadImage("./assets/computerArcher.png");
    
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

    }