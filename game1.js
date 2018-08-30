
window.onload = () => {
$('#startGame').click(function(e){ //  document.getElementById('startGame').onclick = function () { //
    console.log(this);
    $('#instructions-g1').hide()
    basesUp = new BaseUp("images/AdenineUp.png","images/ThymineUp.png","images/cytosineUp.png","images/GuanineUp.png");
    basesDown = new BaseDown("images/AdenineDown.png","images/ThymineDown.png","images/cytosineDown.png","images/GuanineDown.png");
    basesLeft = new BaseLeft("images/Adenine.png","images/Thymine.png","images/cytosine.png","images/Guanine.png");
    basesRight = new BaseRight("images/AdenineRight.png","images/ThymineRight.png","images/cytosineRight.png","images/GuanineRight.png");
    strandGame = new structureGame();
  }); // end of click function

  document.onkeydown = function (event) {
    console.log(event.key)
    if (event.key == 3 || event.key == 5) {
      strandGame.checkKey(event.key)
    } 
  }; // end of onekeydown
}; // end of window.onload


let canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");


class structureGame {
  constructor(){
    this.endOptions = [
      {position: 'vertical',   textX: 550, textY: 560, end: 3, sideEnd:[390,560], oppositeEnd:[550, 35], crossEnd:[390,35]},
      {position: 'vertical',   textX: 390, textY: 560, end: 5, sideEnd:[550,560], oppositeEnd:[390,35], crossEnd:[550, 35]},
      {position: 'vertical',   textX: 390, textY: 35,  end: 3, sideEnd:[550, 35], oppositeEnd:[390,560], crossEnd: [550,560]},
      {position: 'vertical',   textX: 550, textY: 35,  end: 5, sideEnd:[390,35], oppositeEnd:[550,560], crossEnd:[390,560]},
      {position: 'horizontal', textX: 25,  textY: 120, end: 5, sideEnd:[25,260], oppositeEnd:[830,120], crossEnd: [830, 270]},
      {position: 'horizontal', textX: 830, textY: 120, end: 3, sideEnd:[830, 270], oppositeEnd:[25,120], crossEnd: [25,260]},
      {position: 'horizontal', textX: 830, textY: 270, end: 5, sideEnd:[830,120], oppositeEnd:[25,270], crossEnd: [25,120]},
      {position: 'horizontal', textX: 25,  textY: 270, end: 3, sideEnd:[25,120], oppositeEnd:[830,270], crossEnd: [830,120]},
    ];
    this.verticalPoints = [[550,560],[390,560],[390,35],[550, 35]];
    this.horizontalPoints = [[25,120],[25,260],[830,120],[830, 270]];
    this.setup ={};
    this.guessedEnds=0;
    this.level =1;
    this.getRandomSetup ();
  } // end of constructor

  getRandomSetup () {
    this.setup = this.endOptions[Math.floor(Math.random()*this.endOptions.length)]
    this.drawStrands();
  }

  drawStrands () {
    if (this.setup.position === 'vertical') {
      let arrayOfBases = basesLeft.drawRandomStrand(400,50, 8); // vertical
      basesRight.drawComplementaryStrand(490, 54,arrayOfBases); // vertical
    } else {
      let arrayOfBases = basesUp.drawRandomStrand(130,100, 12);
      basesDown.drawComplementaryStrand(130, 190,arrayOfBases);
    } 
    switch (this.level) {
      case 1:
        this.drawText(this.setup.sideEnd[0],this.setup.sideEnd[1],`${this.setup.end} ' end`);
        break;
      case 2:
        this.drawText(this.setup.oppositeEnd[0],this.setup.oppositeEnd[1],`${this.setup.end} ' end`);
        break;
      case 3:
      let text = '5';
      if (this.setup.end == 5) {text   = '3'}
        this.drawText(this.setup.crossEnd[0],this.setup.crossEnd[1],`${text} ' end`);
        break;
      case 4:
        console.log(`this level is ${this.level}`)
      break;
      default:
        break;
    }
    this.drawText(this.setup.textX,this.setup.textY, '?')
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $('#score').html(`You have a winning streak of ${this.guessedEnds}. Get to 5 to win this level`);
    this.getRandomSetup ();
  }  

  checkIfWon () {
    if (this.guessedEnds == 5){
      this.guessedEnds= 0;
      switch (this.level) {
        case 1:
          $('#popUp').html("You've passed level 1");
          $('#popUp').show();
          this.level = 2;
          setTimeout(function(){
            $('#popUp').hide();
            }, 2000);
          break;
        case 2:
          $('#popUp').html("You've passed level 2! For level 3: \n Pay attention to the location of phosphates");
          $('#popUp').show();
          this.level = 3;
          setTimeout(function(){
            $('#popUp').hide();
            }, 2000);
          break;
        case 3:
          $('#popUp').html("You've passed level 3! For level 4: \n Remeber phosphates are on the 5' end");
          $('#popUp').show();
          this.level = 4;
          setTimeout(function(){
            $('#popUp').hide();
            }, 2000);
        case 4:
        console.log('check if level 4 won')
          $('#popUp').html("Great job!: \n You understand the location of the 3' and 5' ends");
          $('#popUp').show();
          setTimeout(function(){
            $('#popUp').hide();
            // location.reload();
            }, 2000);
          break;
        default:
          break;
      }
    };
  }
}// end of structureGame
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
//} 

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