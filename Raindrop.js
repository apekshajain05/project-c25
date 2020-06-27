class Raindrop{
    constructor(){
        this.x=random(0,displayWidth);
        this.y=random(-400,-50);
        this.z=random(0,15);
        this.len=map(this.z,0,15,10,50);
        this.ySpeed=map(this.z,0,20,1,20);

    }

    fall(){
        this.y=this.y+this.ySpeed;
        var gravity =map(this.z,0,20,0,0.2);
        this.ySpeed=this.ySpeed+gravity;

        if(this.y>height){
            this.y=random(-200,-100);
            this.ySpeed=map(this.z,0,20,4,10);
        }
    }

    display(){
        var thick= map(this.z,0,15,1,3);
        strokeWeight(thick);
        stroke("blue");
        line(this.x,this.y,this.x,this.y+this.len);
    }
}