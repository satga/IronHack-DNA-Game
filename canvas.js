var adenine;
var cytosine;
var thymine;
var guanine;

window.onload = () => {
var adenine1 = new AdenineUp(100,100);
var adenine2 = new AdenineUp(158,100);
  // drawAdenine();
  drawThymine()
  // adenine.draw();
  thymine.draw();

}; // end of onload function

var ctx = document.getElementById('canv').getContext('2d');

class AdenineUp {
  constructor(x,y){
    this.x= x;
    this.y= y;
    // this.rotation = rotation;
    this.width= 60;
    this.height= 90;
    this.imageSource= "images/AdenineUp.png";
    this.drawAdenineUp ();
  };
    drawAdenineUp () {
      var adenineImage = new Image();
      adenineImage.src = this.imageSource;
      adenineImage.onload = ()=>{
        // if (this.rotation) {
        //   ctx.rotate(20*Math.PI/180);
        // }
      ctx.drawImage(adenineImage, this.x, this.y, this.width, this.height)
    }
  }
}

  // function drawAdenine() {
  //   adenine = {
  //     x: 100,
  //     y: 100,
  //     width: 90,
  //     height: 60,
  //     imageSource: "images/Adenine.png"
  //   }
  //   adenine.draw = function()  {
  //     console.log(this)

  //     var adenineImage = new Image();
  //     adenineImage.src = this.imageSource;
  //     adenineImage.onload = ()=>{
  //       // ctx.rotate(90*Math.PI/180);
  //       ctx.drawImage(adenineImage, this.x, this.y, this.width, this.height)
  //     }
  //   }
  // }

  function drawThymine() {
    thymine = {
      x: 160,
      y: 260,
      width: 90,
      height: 60,
      imageSource: "images/Thymine.png"
    }
    thymine.draw = function()  {
      console.log(this)

      var thymineImage = new Image();
      thymineImage.src = this.imageSource;
      thymineImage.onload = ()=>{
        // ctx.rotate(20*Math.PI/180);
        ctx.drawImage(thymineImage, this.x, this.y, this.width, this.height)
      }
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