class Dustbin{
    constructor(x,y,w,h){
        var options = {
        isStatic:true,
        density : 1,
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
        this.dustbin = loadImage ('dustbingreen.png')
    }
display(){
    var pos =this.body.position;
    imageMode(CENTER);
    fill("brown");
    image(this.dustbin,pos.x, pos.y, this.w, this.h);
}

}