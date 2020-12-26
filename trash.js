class Trash {
  constructor(x,y){
    this.image=loadImage("dustbingreen.png")

    this.bottomBody=Bodies.rectangle(x,y,100,10,{isStatic:true})
    this.leftWallBody=Bodies.rectangle(x-45,y+10,10,10,{isStatic:true})
    this.rightWallBody=Bodies.rectangle(x+45,y-10,10,100,{isStatic:true})

    this.width=100
    this.width=100

    World.add(world,this.bottomBody)
    World.add(world,this.leftWallBody)
    World.add(world,this.rightWallBody)
  }
    
    display(){
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position;

  push()
  translate(posRight.x,posRight.y)
  rectMode(CENTER)
  angleMode(RADIUS)
  pop()

  push()
  translate(posLeft.x,posLeft.y)
  rectMode(CENTER)
  angleMode(RADIUS)
  pop()

  push()
  translate(posBottom.x,posBottom.y)
  rectMode(CENTER)
  imageMode(CENTER)
  image(this.image,0,0,this.width,this,height)
  pop()
    }
  }
  