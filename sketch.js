const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

function preload(){
  fruitImg = loadImage("images/melon.png")
  bgImg = loadImage("images/background.png")
  bunnyImg = loadImage("images/Rabbit-01.png")
}

function setup() {
  createCanvas(500,650);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(250, 650, 500, 20, { isStatic: true });
  World.add(world, ground);

  rope = new Rope(6,{x:250,y:30})
  fruit = Bodies.circle(250,200,20,{restitution: 0.1})
  World.add(world, fruit);
  link = new Link(rope,fruit)

  btn = createImg("images/cut_btn.png")
  btn.position(230, 30)
  btn.size(50, 50)
  btn.mouseClicked(function(){
    rope.break()
    link.break()
  })

  bunny = createSprite(250, 550)
  bunny.addImage(bunnyImg)
  bunny.scale = 0.2
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, 500, 20)
  push()
  imageMode(CENTER)
  image(fruitImg, fruit.position.x, fruit.position.y, 70, 70)
  pop()
  rope.display()
  drawSprites()
}




