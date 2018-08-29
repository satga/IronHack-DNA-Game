
window.onload = () => {
$('#startGame').click(function(e){ //  document.getElementById('startGame').onclick = function () { //
    console.log(this);
    $('#instructions-g1').hide()
    basesUp = new BaseUp("images/AdenineUp.png","images/ThymineUp.png","images/cytosineUp.png","images/GuanineUp.png");
    basesDown = new BaseDown("images/AdenineDown.png","images/ThymineDown.png","images/cytosineDown.png","images/GuanineDown.png");
    basesLeft = new BaseLeft("images/Adenine.png","images/Thymine.png","images/cytosine.png","images/Guanine.png");
    basesRight = new BaseRight("images/AdenineRight.png","images/ThymineRight.png","images/cytosineRight.png","images/GuanineRight.png");
    strandGame = new structureGame();
    // animate();
  }); // end of click function

  document.onkeydown = function (event) {
    console.log(event.key)
    if (event.key == 3 || event.key == 5) {
      strandGame.checkKey(event.key)
      // ctx.clearRect(0,0,canvas.width, canvas.height);
    } 
  }; // end of onekeydown
}; // end of window.onload


let canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");


class structureGame {
  constructor(){
    this.endOptions = [
      {position: 'vertical',   textX: 550, textY: 560, end: 5, circleX: 410, circleY:547,},
      {position: 'vertical',   textX: 390, textY: 560, end: 3, circleX: 560, circleY:547,},
      {position: 'vertical',   textX: 390, textY: 35,  end: 5, circleX: 560, circleY:22,},
      {position: 'vertical',   textX: 550, textY: 35,  end: 3, circleX: 410, circleY:20,},
      {position: 'horizontal', textX: 25,  textY: 120, end: 3, circleX: 65,  circleY:260,},
      {position: 'horizontal', textX: 830, textY: 120, end: 5, circleX: 865, circleY:260,},
      {position: 'horizontal', textX: 830, textY: 270, end: 3, circleX: 865, circleY:120,},
      {position: 'horizontal', textX: 25,  textY: 270, end: 5, circleX: 65,  circleY:120,},
    ];
    this.setup ={};
    this.guessedEnds=0;
    this.level =1;
    this.getRandomSetup ();
    // this.circle = [];
  } // end of constructor

  getRandomSetup () {
    this.setup = this.endOptions[Math.floor(Math.random()*this.endOptions.length)]
    this.drawStrands();
  }

  drawStrands () {
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    if (this.setup.position === 'vertical') {
      let arrayOfBases = basesLeft.drawRandomStrand(400,50, 8); // vertical
      basesRight.drawComplementaryStrand(490, 54,arrayOfBases); // vertical
    } else {
      let arrayOfBases = basesUp.drawRandomStrand(130,100, 12);
      basesDown.drawComplementaryStrand(130, 190,arrayOfBases);
    } 
    // this.drawCircle(this.setup.circleX,this.setup.circleY);
    if (this.level <2) {
      this.drawText(this.setup.textX,this.setup.textY,`${this.setup.end} ' end`);
    }
    // this.circle = new Circle(this.setup.circleX,this.setup.circleY);
    // this.drawCircle();
    this.drawText(this.setup.circleX,this.setup.circleY, '?')
    // animate(this.setup.circleX,this.setup.circleY);
    // this.circle.animateCircle();
    // this.drawCircle(this.setup.circleX,this.setup.circleY);
    // window.requestAnimationFrame(this.drawCircle.updateCanvas);
  } 

  drawText(x,y,text){
    ctx.font = '36px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y);
  };

  checkKey(key) {
    console.log(this.circle)
    if (key == 3 && this.setup.end == 5 || key == 5 && this.setup.end == 3) {
      this.guessedEnds++;
      this.checkIfWon ();
    } else {
      this.guessedEnds= 0;
    } 
    // this.circle=[];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $('#score').html(`You have a winning streak of ${this.guessedEnds}. Get to 5 to win this level`);
    this.getRandomSetup ();
  }  

  checkIfWon () {
    if (this.guessedEnds == 5 && this.level ==1){
      this.level=2;
      $('#popUp').html("You've passed level 1");
      $('#popUp').show();
      setTimeout(function(){
        $('#popUp').hide();
        }, 2000);
    } else if (this.guessedEnds == 5 && this.level ==2){
      $('#popUp').html("You've passed level 2");
      $('#popUp').show();
      setTimeout(function(){
        $('#popUp').hide();
        }, 2000);
    }
  };
  // drawCircle(x,y) {
  //   // window.cancelAnimationFrame(updateCanvas)
  //   ctx.beginPath();
  //   let radius = 20;
  //   ctx.fillStyle = "#FF0000";
  //   ctx.arc(x,y,radius,0,2*Math.PI);
  //   ctx.fill();
  //   ctx.closePath();
  // }
    // let hue =0;
    // updateCanvas();
    //   function shiftHue(hue) {
    //     return (hue+1)%360
    //   };
  //     function updateCanvas(){
  //       // window.cancelAnimationFrame(updateCanvas)
  //       hue = shiftHue(hue);
  //       var color = "hsl("+hue+",100%,50%)"
  //       //console.log(color)
  //       ctx.clearRect(x-radius,y-radius,2*radius,2*radius);
  //       ctx.beginPath();
  //       ctx.fillStyle = color;
  //       ctx.arc(x,y,radius,0,2*Math.PI);
  //       ctx.fill();
  //       ctx.closePath();
  //       window.requestAnimationFrame(updateCanvas);
  //     }
  //     window.requestAnimationFrame(updateCanvas);
  //   }
} // end of structureGame

// class Circle {
//   constructor(x,y){
//     this.x = x;
//     this.y = y;
//     // this.hue = 0;
//     this.radius = 20;
//   } 
//   drawCircle() {
//     ctx.beginPath();
//     console.log("drawing circle", this)
    
//     ctx.fillStyle = "#FF0000";
//     ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
//     ctx.fill();
//     ctx.closePath();
//     // this.updateCanvas();
//     // window.requestAnimationFrame(this.updateCanvas);
//   }
  
  // shiftHue(hue) {
  //   return (hue+1)%360
  // };
  // animateCircle() {
  //   updateCanvas(this.x,this.y,this.radius);
  //   function 
  // updateCanvas(x,y, radius){
  //       let hue = 0;
  //       hue = (hue+1)%360//this.shiftHue(this.hue);
  //       var color = "hsl("+hue+",100%,50%)"
  //       ctx.clearRect(x,y,2*radius,2*radius);
  //       ctx.beginPath();
  //       ctx.fillStyle = color;
  //       ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
  //       ctx.fill();
  //       ctx.closePath();
  //       // window.requestAnimationFrame(updateCanvas);
  //     }
      // window.requestAnimationFrame(updateCanvas);
  // }
// }

// function animate(x,y){
//   setInterval(()=>{
//     updateCanvas(x,y)
//     frames++;
//   },50)
//   // window.requestAnimationFrame(animate);
// }
// function updateCanvas(x,y){
//   let hue = 0;
//   let radius=20;
//   hue = (hue+1)%360//this.shiftHue(this.hue);
//   var color = "hsl("+hue+",100%,50%)"
//   ctx.clearRect(x,y,2*radius,2*radius);
//   ctx.beginPath();
//   ctx.fillStyle = color;
//   ctx.arc(x,y,radius,0,2*Math.PI);
//   ctx.fill();
//   ctx.closePath();
//   // window.requestAnimationFrame(updateCanvas);
// }