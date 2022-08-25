var bg,bg_img;
var hoop,  hoop_img;
var player,player_img;
var basketball,basketball_img;




function preload(){
    bg_img = loadImage("backround.jpg");
     hoop_img = loadImage("hoop.png");
    player_img = loadImage("boy.png")
    basketball_img = loadImage("basketball.png")
}


function setup(){
    createCanvas(1200,700);

    bg = createSprite(550,350);
    bg.addImage(bg_img);
    bg.scale=2.13;

    hoop = createSprite(550,100);
    hoop.addImage(hoop_img);
    
    player = createSprite(475,500);
    player.addImage(player_img);
 
    basketball = createSprite(500,400);
    basketball.addImage(basketball_img);
    basketball.scale = 0.0230
}


function draw(){
    background(0);

basketball.velocityY =-5
basketball.velocityX =3
    drawSprites();

}