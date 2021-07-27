var bg,craft1,craft2,craft3,craft4,iss;
var bgImage,craft1Image,craft2Image,craft3Image,craft4Image
var issImage;
var hasDocked;
var craft1,craft2,craft3,craft4;
var craft,craftImage;
var s;

function preload(){
bgImage=loadImage("spacebg.jpg");
craft1Image=loadImage("spacecraft1.png")
craft2Image=loadImage("spacecraft2.png")
craft3Image=loadImage("spacecraft3.png")
craft4Image=loadImage("spacecraft4.png")

issImage=loadImage("iss.png")




}



function setup() {
  createCanvas(1300,500);
bg=createSprite(400, 200, 500, 50);
bg.addImage(bgImage);
bg.scale=3


iss=createSprite(200,200,50,50);
iss.addImage(issImage);
iss.scale=0.8

craft=createSprite(1200,400,50,50);
craft.addImage(craft1Image)
craft.scale=0.2;

s=createSprite(150,220,10,10)
s.visible=false
}

function draw() {
  background(255,255,255);  
  craft.addImage(craft1Image)

if(keyCode==UP_ARROW){
  craft.y=craft.y-5
  craft.addImage(craft2Image)
}

if(keyCode==RIGHT_ARROW){
  craft.x=craft.x+10
  craft.addImage(craft4Image)
}
if(keyCode==LEFT_ARROW){
  craft.x=craft.x-10
  craft.addImage(craft3Image)
}


  if(!hasDocked){
  if(frameCount%100==0){
  craft.x=Math.round(random(100,1290))
}}
if(craft.isTouching(s)){
  hasDocked=true;
  background(0)
 
  textSize(100)
  fill("yellow")
  text("*Congragulation*",300,350);
  text("!! Docked Sucessful !!",250,490);

bg.visible=false
}


  drawSprites();
}