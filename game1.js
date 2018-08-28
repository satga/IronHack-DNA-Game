
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
    this.guessedEnds=[];
    this.getRandomSetup ();
    this.drawStrands();
  } // end of constructor

  getRandomSetup () {
    this.setup = this.endOptions[Math.floor(Math.random()*this.endOptions.length)]
  }

  drawStrands () {
    if (this.setup.position === 'vertical') {
      let arrayOfBases = basesLeft.drawRandomStrand(400,50, 8); // vertical
      basesRight.drawComplementaryStrand(490, 54,arrayOfBases); // vertical
    } else {
      let arrayOfBases = basesUp.drawRandomStrand(120,100, 12);
      basesDown.drawComplementaryStrand(120, 190,arrayOfBases);
    } 
    this.drawCircle(this.setup.circleX,this.setup.circleY);
    this.drawText(this.setup.textX,this.setup.textY,`${this.setup.end} ' end`);
  } 

  drawCircle(x,y) {
    let radius = 20;
    ctx.fillStyle = "#FF0000";
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
    let hue = 0;
    function shiftHue(hue) {
      return (hue+1)%360
    }
  
    function updateCanvas(){
      hue = shiftHue(hue);
      var color = "hsl("+hue+",100%,50%)"
      //console.log(color)
      ctx.clearRect(x-radius,y-radius,2*radius,2*radius);
      ctx.fillStyle = color;
      ctx.arc(x,y,radius,0,2*Math.PI);
      ctx.fill();
      window.requestAnimationFrame(updateCanvas);
    }
  
    window.requestAnimationFrame(updateCanvas);
  }

  drawText(x,y,text){
    ctx.font = '36px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y);
  };
} // end of structureGame

