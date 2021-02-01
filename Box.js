class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    
  }
display(){
  super.display();
  rect(this.body.position.x, this.body.position.y, 50,50)
}
};
