
// window.onload = () => {
//   // let basesUp = new BaseUp("images/AdenineUp.png","images/ThymineUp.png","images/cytosineUp.png","images/GuanineUp.png");
//   // let basesDown = new BaseDown("images/AdenineDown.png","images/ThymineDown.png","images/cytosineDown.png","images/GuanineDown.png");
//   let basesLeft = new BaseLeft("images/Adenine.png","images/Thymine.png","images/cytosine.png","images/Guanine.png");
//   let basesRight = new BaseRight("images/AdenineRight.png","images/ThymineRight.png","images/cytosineRight.png","images/GuanineRight.png");
//   let arrayOfBases = basesLeft.drawRandomStrand(100,100, 10);
//   // basesUp.drawComplementaryStrand(100, 100,arrayOfBases);
//   basesRight.drawComplementaryStrand(190, 99,arrayOfBases);
//   // 
// }; // end of onload function

// make a class for basesUp, another for basesDown, basesRight, basesLeft, randomize one but keep a dummy variable to keep track. 
// make strands of random length and random orientation and ask to identify 3' or 5' end
// level 1, one of the ends is already marked for 3' of 5' in single strands
// level 2, none of the ends are marked in single strand
// level 3, one of the ends is marked in a double strand
// level 4, none of the ends are marked in a double strand
// var ctx = document.getElementById('canv').getContext('2d');

class BaseUp {
  constructor(adenineSource,thymineSource,cytosineSource,guanineSource){
    this.ctx = document.getElementById('canv').getContext('2d');
    this.width= 60;
    this.height= 90;
    this.bases = ['A', 'T', 'G', 'C'];
    this.adenineSource= adenineSource;
    this.thymineSource=thymineSource;
    this.cytosineSource=cytosineSource;
    this.guanineSource=guanineSource;
    // this.drawAdenineUp ();
  };
    drawAdenine (x,y) {
      var adenineImage = new Image();
      adenineImage.src = this.adenineSource
      adenineImage.onload = ()=>{
      this.ctx.drawImage(adenineImage, x, y, this.width, this.height)
    }
  }
  drawThymine (x,y) {
    var thymineImage = new Image();
    thymineImage.src = this.thymineSource;
    thymineImage.onload = ()=>{
    this.ctx.drawImage(thymineImage, x, y, this.width, this.height)
    }
  }

  drawGuanine (x,y) {
    var guanineImage = new Image();
    guanineImage.src = this.guanineSource;
    guanineImage.onload = ()=>{
    this.ctx.drawImage(guanineImage, x, y, this.width, this.height)
    }
  }

  drawCytosine (x,y) {
    var cytosineImage = new Image();
    cytosineImage.src = this.cytosineSource;
    cytosineImage.onload = ()=>{
    this.ctx.drawImage(cytosineImage, x, y, this.width, this.height)
    }
  }

  drawComplementaryStrand(x,y,baseArray) {
    baseArray.forEach(base => {
      switch (base) {
        case 'A':
          this.drawThymine (x,y) 
          break;
        case 'T':
          this.drawAdenine (x,y) 
          break;
        case 'C':
          this.drawGuanine (x,y) 
          break;
        case 'G':
          this.drawCytosine (x,y) 
          break;
        default:
          break;
      }
      x += this.width-2;
    });
  }

  drawRandomStrand(x,y, length) {
    let newBaseArray = [];
    for (let i = 0; i < length; i++) {
      let thisBase = this.bases[Math.floor(Math.random()*4)];
      switch (thisBase) {
        case 'A':
          this.drawAdenine (x,y) 
          break;
        case 'T':
          this.drawThymine (x,y) 
          break;
        case 'C':
          this.drawCytosine (x,y) 
          break;
        case 'G':
          this.drawGuanine (x,y) 
          break;
        default:
          break;
      } 
      x += this.width-2;
      newBaseArray.push(thisBase)

    } return newBaseArray;
  }

} // end of baseUp class

class BaseDown extends BaseUp{
  constructor(adenineSource,thymineSource,cytosineSource,guanineSource){
    super(adenineSource,thymineSource,cytosineSource,guanineSource)
  }
}

class BaseLeft extends BaseUp{
  constructor(adenineSource,thymineSource,cytosineSource,guanineSource){
    super(adenineSource,thymineSource,cytosineSource,guanineSource)
    this.width= 90;
    this.height= 60;
  }
  drawComplementaryStrand(x,y,baseArray) {
    baseArray.forEach(base => {
      switch (base) {
        case 'A':
          this.drawThymine (x,y) 
          break;
        case 'T':
          this.drawAdenine (x,y) 
          break;
        case 'C':
          this.drawGuanine (x,y) 
          break;
        case 'G':
          this.drawCytosine (x,y) 
          break;
        default:
          break;
      }
      y += this.height-2;
    });
  }
  drawRandomStrand(x,y, length) {
    let newBaseArray = [];
    for (let i = 0; i < length; i++) {
      let thisBase = this.bases[Math.floor(Math.random()*4)];
      switch (thisBase) {
        case 'A':
          this.drawAdenine (x,y) 
          break;
        case 'T':
          this.drawThymine (x,y) 
          break;
        case 'C':
          this.drawCytosine (x,y) 
          break;
        case 'G':
          this.drawGuanine (x,y) 
          break;
        default:
          break;
      } 
      y += this.height-2;
      newBaseArray.push(thisBase)

    } return newBaseArray;
  }
}

class BaseRight extends BaseLeft{
  constructor(adenineSource,thymineSource,cytosineSource,guanineSource){
    super(adenineSource,thymineSource,cytosineSource,guanineSource)
  }
}


// class Replication{
//   constructor() {
//   this.contx = document.getElementById('canv').getContext('2d')
//   this.contx.clearRect(0,0,200,200);
//   this.startX =100
//   this.startY = 100
//   this.drawAll();
//   }

//   drawPentagon(ctx, x, y, points, radius1, radius2, alpha0) {
//     //points: number of points (or number of sides for polygons)
//     //radius1: "outer" radius of the star
//     //radius2: "inner" radius of the star (if equal to radius1, a polygon is drawn)
//     //angle0: initial angle (clockwise), by default, stars and polygons are 'pointing' up
//     var i, angle, radius;
//     if (radius2 !== radius1) {
//         points = 2 * points;
//     }
//     for (i = 0; i <= points; i++) {
//         angle = i * 2 * Math.PI / points - Math.PI / 2 + alpha0;
//         radius = i % 2 === 0 ? radius1 : radius2;
//         ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
//     }
//   }
//   drawAll () {
//     this.contx.moveTo(this.startX*2, this.startY*1.2)
//     this.drawPentagon(this.contx, this.startX*2, this.startY*2, 5, 80, 80, 0);
//     this.contx.strokeStyle = "#bada55";
//     // contx.fillStyle = "#bada55";
//     this.contx.lineWidth = 2;
//     this.contx.stroke();
//     this.drawLineToPhosphate()
//     this.drawPhosphate()
//     this.drawBase()
//   }
//   drawLineToPhosphate() {
//     this.contx.moveTo(this.startX*1.24, this.startY*1.76) // connect sugar to phosphate
//     this.contx.lineTo(this.startX, this.startY)
//     this.contx.stroke();
//   }
//   drawPhosphate() {
//     this.contx.beginPath(); //draw phosphate
//     var x = this.startX*.9; // x coordinate
//     var y = this.startY*.7; // y coordinate
//     var radius = this.startX*.3; // Arc radius
//     var startAngle = 0; // Starting point on circle
//     var endAngle = Math.PI*2; // End point on circle
//     this.contx.arc(x, y, radius, startAngle, endAngle, true);
//     this.contx.fillStyle = "yellow";
//     this.contx.stroke();
//     this.contx.closePath();
//     this.contx.fill();
//   }
//   drawBase() {
//     this.contx.moveTo(this.startX*2.77, this.startY*1.76) // sugar to base
//     this.contx.lineTo(this.startX*3.50, this.startY*1.76)
//     this.contx.stroke();
//     this.contx.strokeStyle = "red";
//     this.contx.strokeRect(this.startX*3.50, this.startY*1.28, 200, 100);
//     this.contx.font = '48px sans-serif';
//     this.contx.fillStyle = 'blue';
//     this.contx.fillText('A', this.startX*4.30, this.startY*1.90);
//   }
// }

// $(document).ready(function(){
//   var replImg = new Replication();
// }); // end of document load


/*  Resources:
http://jsfiddle.net/8vwjn4cx/330/
https://getbootstrap.com/docs/4.0/components/list-group/

*/