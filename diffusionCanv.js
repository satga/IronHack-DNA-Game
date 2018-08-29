const ctx = document.getElementById('canv').getContext('2d');

class Game {
  constructor(){
    this.pores = new Pores;
    this.waterLevelLeft=50;
    this.waterLevelRight=50;
    this.waterMolecules = [];
    this.waterLevel = new Water(this.waterLevelLeft,this.waterLevelRight);
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
  }

  spawnWaterMoleculesLeft () {
    const theX = 55 + Math.floor(Math.random()*370); // between 55 * 425
    const theY = 50 + Math.floor(Math.random()*395); // between 50 * 445
    this.waterMolecules.push( new WaterMol(theX, theY)) 
    // this.waterMolecules[0].runAccrossTheScreen();
  }
}

class Pores {
  constructor(){
    this.x=425;
    this.poreWidth= 20;
    this.lineLength = 50;
    this.lineArray=[];
  }

  drawPores () { //must draw pores after water
    ctx.lineWidth = 10 ;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    for (let y=50; y<450; y=y+this.poreWidth+this.lineLength) {
       ctx.beginPath(); 
      ctx.moveTo(this.x, y);
       ctx.lineTo(this.x, y+this.lineLength);
       ctx.stroke();   
       ctx.closePath()  
       this.lineArray.push({startX: this.x-5,   startY: y, height: this.lineLength, width: ctx.lineWidth})
       }
       console.log(this.lineArray);
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
    this.vy= 2;
    this.radius= 25;
    this.color= 'green';
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}