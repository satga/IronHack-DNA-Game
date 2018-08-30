const ctx = document.getElementById('canv').getContext('2d');

class Game {
  constructor(){
    this.pores = new Pores;
    this.waterLevelLeft=50;
    this.waterLevelRight=50;
    this.waterMolecules = [];
    this.saltMolecules=[];
    this.waterLevel = new Water(this.waterLevelLeft,this.waterLevelRight);
    this.spawnWaterMoleculesLeft(12)
    this.spawnWaterMoleculesRight(12)
    this.lineArray = this.pores.lineArray;
    this.allMolecules= this.waterMolecules.concat(this.saltMolecules);
  }

  drawContainer (){
    ctx.lineWidth = 10 ;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(50, 5 );
    ctx.lineTo(50, 450 );
    ctx.lineTo(800, 450);
    ctx.lineTo(800, 5);
    ctx.stroke();
  }

  drawEverything () {
    this.drawContainer()
    this.waterLevel.drawLeft()
    this.waterLevel.drawRight()
    this.pores.drawPores()
    this.waterMolecules.forEach((oneMol)=>{
      oneMol.draw();
    })
    this.saltMolecules.forEach((oneMol)=>{
      oneMol.draw();
    })
  }

  spawnWaterMoleculesLeft (qty) {
    for (let i = 0; i < qty; i++) {
      const theX = 50 + Math.floor(Math.random()*365); // between 55 * 425 -5
      const theY = 3+ this.waterLevelLeft + Math.ceil(Math.random()*385); // between 50 * 445 -5 
      this.waterMolecules.unshift( new WaterMol(theX, theY)) 
      this.waterMolecules[0].move();
    }
  }

  spawnWaterMoleculesRight (qty) {
    for (let i = 0; i < qty; i++) {
      const theX = 375 + Math.floor(Math.random()*420); // between 55 * 425 -5
      const theY = 3+ this.waterLevelRight + Math.ceil(Math.random()*385); // between 50 * 445 -5 
      this.waterMolecules.unshift( new WaterMol(theX, theY)) 
      this.waterMolecules[0].move();
    }
  }

  spawnSaltMoleculesRight (qty) {
    for (let i = 0; i < qty; i++) {
      const theX = 375 + Math.floor(Math.random()*420); // between 55 * 425 -5
      const theY = 3+ this.waterLevelRight + Math.ceil(Math.random()*385); // between 50 * 445 -5 
      this.saltMolecules.unshift( new Salt(theX, theY)) 
      this.saltMolecules[0].move();
    }
  }

  moleculeColission () { // should move to the Game class
    for (let i=0; i < this.allMolecules.length-1; i++) {
        for (let j=1; j < this.allMolecules.length; j++){
          var xDistance = (this.allMolecules[j].x - this.allMolecules[i].x); 
          var yDistance = (this.allMolecules[j].y - this.allMolecules[i].y);
          var distanceBetween = Math.sqrt((xDistance * xDistance) + (yDistance *yDistance)); 
          var sumOfRadius = ((this.allMolecules[i].radius) + (this.allMolecules[j].radius)); // add the balls radius together
          if (distanceBetween < sumOfRadius) {  
            this.allMolecules[i].vx *= -1;
            this.allMolecules[j].vx *= -1;
            this.allMolecules[i].vy *= -1;
            this.allMolecules[j].vy *= -1;
          }
        }
    }  
  }
}

class Pores {
  constructor(){
    this.x=425;
    this.poreWidth= 25;
    this.lineLength = 50;
    this.lineArray=[];
  }

  drawPores () { //must draw pores after water
    ctx.lineWidth = 10 ;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    for (let y=450; y>50; y=y-this.poreWidth-this.lineLength) {
       ctx.beginPath(); 
       ctx.moveTo(this.x, y);
       ctx.lineTo(this.x, y-this.lineLength);
       ctx.stroke();   
       ctx.closePath()  
       this.lineArray.push({startX: this.x-5,   startY: y, height: this.lineLength, width: ctx.lineWidth})
       }
  }
}

class Water {
  constructor(LeftLevel,RightLevel){
    this.LeftLevel=LeftLevel;
    this.RightLevel=RightLevel;
    
  }
  drawLeft (){ // must draw water before pores
    ctx.lineWidth = 10 ;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(55, this.LeftLevel);
    ctx.lineTo(55, 445);
    ctx.lineTo(425, 445);
    ctx.lineTo(425, this.LeftLevel);
    ctx.fillStyle = "#4ed1c8";
    ctx.fill();
  }

  drawRight (){ // must draw water before pores
    ctx.lineWidth = 10 ;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(425, this.RightLevel);
    ctx.lineTo(425, 445 );
    ctx.lineTo(795, 445);
    ctx.lineTo(795, this.RightLevel);
    ctx.fillStyle = "#4ed1c8";
    ctx.fill();
  }
}

class WaterMol {
  constructor(x,y){
    this.x= x;
    this.y= y;
    this.vx= 5;
    this.vy= 5;
    this.radius= 5;
    this.color= 'blue';
    this.randomDirection ()
  }
  randomDirection () {
    let angle = Math.random(0, 2*Math.PI);
    let direction = [Math.cos(angle), Math.sin(angle)];
    let a= -1;
    if (Math.random < 0.5) {a   = 1}
    this.vx= a*this.vx * direction[0];
    let b= -1;
    if (Math.random < 0.5) {b   = 1}
    this.vy= b*this.vy * direction[1];
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  move () {
    setInterval(()=>{
      this.x += this.vx;
      this.y += this.vy;
      if (this.x+ this.vx <425) { // left side
          if (this.y + this.vy > 445 || this.y + this.vy < theGame.waterLevelLeft+this.radius+2) {
            this.vy *= -1;
            }
          if (this.x + this.vx < 55) {
            this.vx *= -1;} 
        } 
      if (this.x + this.vx > 795) {
        this.vx *= -1;
        if (this.y + this.vy > 445 || this.y + this.vy < theGame.waterLevelRight+this.radius+2) {
          this.vy *= -1;
        }
      }
      if (this.y + this.vy > 445 || this.y + this.vy < theGame.waterLevelRight+this.radius+2) {
        this.vy *= -1;
      }
      theGame.moleculeColission ()
      this.poreColission ()
    },50)
  }
  poreColission () { // should move to the Game
    //this.lineArray.push({startX: this.x-5,   startY: y, height: this.lineLength, width: ctx.lineWidth})
    theGame.lineArray.forEach((thisLine)=> { 
      let futureX = this.x + this.vx;
      let xDist = Math.abs(futureX-thisLine.startX-0.5*thisLine.width);
      // let futureDist = Math.abs(this.x += this.vx-0.5*thisLine.width);
      if (xDist <= this.radius + 0.5*thisLine.width) {
        if(this.y + this.radius >= thisLine.startY-thisLine.height && this.y-this.radius <= thisLine.startY) {
          this.vx *= -1;
          // this.vy *= -1;
        }
      }
      // let topYdist = this.y - thisLine.startY+thisLine.height;
      // if (this.x + this.radius > thisLine.startX && this.y >= thisLine.startY-thisLine.height && this.y <= thisLine.startY) {     // colide from the left
      //   this.vx *= -1;
      //   // this.vy *= -1;
      // }
      // if (this.x - this.radius < thisLine.startX + thisLine.width && this.y >= thisLine.startY-thisLine.height && this.y <= thisLine.startY) {  // colide from the right
      //   this.vx *= -1;
      //   // this.vy *= -1;
      // }
      // if (this.y - this.radius <= thisLine.startY && this.x+ this.radius >= thisLine.startX && this.x-this.radius <= thisLine.startX+thisLine.width) {  // colide from below
      //   this.vy *= -1;
      //   // this.vx *= -1;
      // }
      // if (this.y + this.radius >= thisLine.startY + thisLine.lineLength && this.x+this.radius >= thisLine.startX && this.x- this.radius <= thisLine.startX+thisLine.width) {  // colide from above
      //   this.vy *= -1;
      //   // this.vx *= -1;
      // }
    });
  }
}

class Salt extends WaterMol{
  constructor(x,y){
    super(x, y)
    this.vx= 5;
    this.vy= 5;
    this.radius= 6;
    this.color= "#fc5f09";
    this.randomDirection ()
  }
}

function animate(){

  // setInterval(()=>{
    ctx.clearRect(0,0,600,900);
    theGame.drawEverything();

  window.requestAnimationFrame(animate);
}