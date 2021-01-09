class Player{

constructor(){

this.aliean=createSprite(200,200);

this.aliean.addImage(jadu);

this.aliean.scale=0.2;
    this.aliean.velocityX=2
}
display(){
      drawSprites();

  if(keyCode===UP_ARROW){
  this.aliean.y-=5
 }

    if(keyCode===DOWN_ARROW){
    this.aliean.y+=5
    }

    if(keyCode===RIGHT_ARROW){
        this.aliean.x+=5
        }

        if(keyCode===LEFT_ARROW){
            this.aliean.x-=5
            }
};

}