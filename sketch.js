var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = null;
var plinkos = [];
var divisions = [];
var particles = [];
var divisionHeight=300;
var score =0;
var divx = [10,80,90, 160, 170, 240, 250,320, 330, 400, 410, 480, 490, 560, 570, 640, 650, 720, 730, 800]
var divy = 500;
var ballcount = 0
var gs = 0
var particle1 = null,   particle2 = null,   particle3 = null,   particle4 = null,   particle5 = null,   particle6 = null,   particle7 = null,   particle8 = null,   particle9 = null   //particle10 =null
let multiples = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
particles.push(particle1 ,particle2 ,particle3 ,particle4 ,particle5 ,particle6 ,particle7 ,particle8 ,particle9 ,particle10)
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //Value assignment
  //Division 1 and 10
   div1val = random(multiples)
   div10val = div1val
   div2val = random(multiples)
   div9val = div2val
   div3val = random(multiples)
   div8val = div3val
   div4val = random(multiples)
   div7val = div4val
   div5val = random(multiples)
   div6val = div5val
  gameState = "start"
   
  

   //
  // Map Setup
    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
 
  textSize(20)
  if(gameState === "start"){
    background("white");
    text("Welcome to this Plinko game, in which you will able to rank up points to win. The \n game is simple all you have to do is press the up arrow, and the game will begin, \n move your mouse left and right, and every few seconds a ball will fall, at a position, \n aligned to your mouse, the point value of the boxes are random so you will need a bit \n of luck  to win. To win you must gain upwards of 2500 points. You have 10 balls, begin!", 30, 330)
    console.log("hello")
    if(gs === 1){
      gameState = "play"
    }
  }
 if (gameState === "play"){
  console.log("goodbye")
  background("black");
  text("Score : "+score,20,30);
  //text("Xpos: "+ mouseX +"yPos: "+ mouseY,500,40);

  text(div1val, (divx[0]+divx[1])/4, divy)
  text(div2val, (divx[2]+divx[3])/2.1, divy)
  text(div3val, (divx[4]+divx[5])/2.1, divy)
  text(div4val, (divx[6]+divx[7])/2.1, divy)
  text(div5val, (divx[8]+divx[9])/2.1, divy)
  text(div6val, (divx[10]+divx[11])/2.1, divy)
  text(div7val, (divx[12]+divx[13])/2.1, divy)
  text(div8val, (divx[14]+divx[15])/2.1, divy)
  text(div9val, (divx[16]+divx[17])/2.1, divy)
  text(div10val,(divx[18]+divx[19])/2.1, divy)

  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   for (var k = 0; k < divisions.length; k++) {  
    divisions[k].display();
  }
  for (var k = 0; k < particles.length; k++) {  
    if(particles[k]){
    particles[k].display();
    getPoints(particles[k])
  }
  }
 
   //text(ran1, 400, 400)
  if(ballcount >= 10 && particles[9].body.position.y > 520){
    textSize(40)
    text("Game Over",280, 330)
    if(score > 2500){
      text("You Win!",280, 230)
    }
    if(score < 2500){
      text("You Lose!",280, 230)
    }
  }
  mousePressed();
  }
}
function mousePressed(){
  if(frameCount%60 === 0 && ballcount < 10 ){
  //particles[0].x = mouseX
  //particles[0].y = 10
  particles[ballcount] = new Particle(mouseX, 10, 10)
  ballcount = ballcount + 1 
  //console.log(particles[0].x + "y"+ particles[0].y)
}
}
function keyPressed() {
  if (keyCode === UP_ARROW && gameState === "start") {
     clear();
    gs = 1
   }
 }
function getPoints(object){
  var divx = [10,80,90, 160, 170, 240, 250,320, 330, 400, 410, 480, 490, 560, 570, 640, 650, 720, 730, 800]
  //console.log(body.x)
  if(object.body.position.y > 495 && object.body.position.y < 500){
  if(object.body.position.x > divx[0] && object.body.position.x < divx[1]){
    score = score + div1val
  }
  if(object.body.position.x > divx[2] && object.body.position.x < divx[3]){
    score = score + div2val
  }
  if(object.body.position.x > divx[4] && object.body.position.x < divx[5]){
    score = score + div3val
  }
  if(object.body.position.x > divx[6] && object.body.position.x < divx[7]){
    score = score + div4val
  }
  if(object.body.position.x > divx[8] && object.body.position.x < divx[9]){
    score = score + div5val
  }
  if(object.body.position.x > divx[10] && object.body.position.x < divx[11]){
    score = score + div6val
  }
  if(object.body.position.x > divx[12] && object.body.position.x < divx[13]){
    score = score + div7val
  }
  if(object.body.position.x > divx[14] && object.body.position.x < divx[15]){
    score = score + div8val
  }
  if(object.body.position.x > divx[16] && object.body.position.x < divx[17]){
    score = score + div9val
  }
  if(object.body.position.x > divx[18] && object.body.position.x < divx[19]){
    score = score + div10val
  }
  }
}
