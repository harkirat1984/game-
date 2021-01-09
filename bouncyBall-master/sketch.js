var back
var jadu
var player,ncp
var tigersharkimg
var makosharkimg
var coinimg
var coinGroup
var animalGroup
var score= 0
function preload(){
back=loadImage("images/background 2.jpg");
jadu=loadImage("images/aleain.png");
coinimg=loadImage("images/coin.png")

}
function setup() {
createCanvas(windowWidth-10,windowHeight-10);
coinGroup=new Group()
animalGroup=new Group()
player=new Player()
npc=new Npc()
}
function draw() {
background(back); 
player.display();
npc.displays();
npc.spawnanimals();
npc.spawcoins();
if(player.aliean.isTouching(coinGroup)){
score=score+10

}
text ("score"+score,200,200);
}

