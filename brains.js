var slides = [
  { name: 'Step1',   img: 'Slide02.png' },
  { name: 'Step2',   img: 'Slide04.png' },
  { name: 'Step3',   img: 'Slide06.png' },
  { name: 'Step4',   img: 'Slide07.png' },
  { name: 'Step5',   img: 'Slide10.png' },
  { name: 'Step6',   img: 'Slide11.png' },
  { name: 'Step7',   img: 'Slide12.png' },
  { name: 'Step8',   img: 'Slide13.png' },
  { name: 'Step9',   img: 'Slide14.png' },
  { name: 'Step10',  img: 'Slide15.png' },
];

var enzymes = [
  { name: 'Step1',   displayText: 'Helicase' ,            img: 'helicase.png' },
  { name: 'Step2',   displayText: 'Primase' ,             img: 'primase.png' },
  { name: 'Step3',   displayText: 'DNA Polymerase III' ,  img: 'DNA_pol_III.jpg' },
  { name: 'Step4',   displayText: 'DNA Polymerase I' ,    img: 'DNA_pol_I.png' },
  { name: 'Step5',   displayText: 'Ligase' ,              img: 'ligase.png' },
];

var processes = [
  { name: 'Step1',   displayText: 'Unwind the DNA helix' ,},
  { name: 'Step2',   displayText: 'Add RNA nucleotides' ,},
  { name: 'Step3',   displayText: 'Add DNA nucleotides' ,},
  { name: 'Step4',   displayText: 'Remove & replace RNA nucleotides' ,},
  { name: 'Step5',   displayText: 'Connect Okazaki fragments' ,},
];

$(document).ready(function(){
  var pic = 1;
  console.log(slides[1])
  /* <img class="enz" src="images/ligase.png" alt="ligase"> */
  var htmlToInsert = '<img class="slides" src="images/DNAanimation/'+ slides[pic].img +'">';
  // Add all the div's to the HTML
  $('#animation').html(htmlToInsert);

  var enzymeClass = new Enzymes(enzymes);  
  enzymeClass.loadEnzymes();

  var processClass = new Processes(processes);  
  processClass.loadProcesses();

$('.enz').click(function () {
  console.log(this);
  var x = document.getElementById("wrongAnswer"); 
    x.play(); 
});

$('.process').click(function () {
  console.log(this);
});
}) // end of document ready load function



/* class game
 -function to check if clicked enzyme is in correct order
 -function to check if process is correct 
 -function to change the background image
 -function to keep track of points
 -function to suffle order of enzymes
 -function to suffle order of processes
 -make sound for incorrect choice
 -say the enzyme's name when hovering
*/