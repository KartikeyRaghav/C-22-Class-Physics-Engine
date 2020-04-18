const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_display = {
        restitution: 1.0
    }

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200,100,20,ball_display);
    World.add(world,ball);

    console.log(ground);
    console.log(ball.position.x);
    console.log(ball.position.y);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    circle(ball.position.x,ball.position.y,20);
    rect(ground.position.x,ground.position.y,400,20);

}