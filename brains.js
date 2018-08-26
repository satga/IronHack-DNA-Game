var slides = [
  { name: 'Step0',   img: 'Slide01.png' },
  { name: 'Step1',   img: 'Slide02.png' },
  { name: 'Step2',   img: 'Slide03.png' },
  { name: 'Step3',   img: 'Slide04.png' },
  { name: 'Step4',   img: 'Slide05.png' },
  { name: 'Step5',   img: 'Slide06.png' },
  { name: 'Step6',   img: 'Slide07.png' },
  { name: 'Step7',   img: 'Slide08.png' },
  { name: 'Step8',   img: 'Slide09.png' },
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
  var pic = 0;
  // console.log(slides[1])
  /* <img class="enz" src="images/ligase.png" alt="ligase"> */
  var htmlToInsert = '<img class="slides" src="images/DNAanimation/'+ slides[pic].img +'">';
  // Add all the div's to the HTML
  $('#animation').html(htmlToInsert);

  var enzymeClass = new Enzymes(enzymes);  
  enzymeClass.loadEnzymes();

  var processClass = new Processes(processes);  
  processClass.loadProcesses();

  var theGame = new Game()
  var selectedEnzyme;
  var thisBtn;

$('.enz').click(function () {
  $(this).addClass("pressed");
  $('#enzymes').addClass("blocked");
  selectedEnzyme =$(this);
  if (theGame.checkEnzymeOrder($(this).attr('name'))) {
    if (($('#process').hasClass("blocked"))) {
      theGame.gotOneMatch(selectedEnzyme, thisBtn);
    } else {alert('Good Job! Now pick a process to match')}
  } else {
      theGame.updateClicks();
      if (($('#process').hasClass("blocked"))) {
        alert('Try selecting a different enzyme to match your process!')
        selectedEnzyme.removeClass("pressed");
        $('#enzymes').removeClass("blocked");
      } else {
        alert('Try selecting a different enzyme or process!')
        $('#enzymes').removeClass("blocked");
        selectedEnzyme.removeClass("pressed");
      }
  }

});

$('.process-item').click(function (e) {
  $(this).addClass("pressed");
  $('#process').addClass("blocked");
  thisBtn = $(this);
  if (theGame.checkProcessOrder(thisBtn.attr('name'))) {
    if (($('#enzymes').hasClass("blocked"))) {
      theGame.gotOneMatch(selectedEnzyme, thisBtn);
    } else {alert('Good Job! Now pick an enzyme to match')}
  } else {
      theGame.updateClicks();
      if (($('#enzymes').hasClass("blocked"))) {
        alert('Try selecting a different process to match your enzyme!')
        thisBtn.removeClass("pressed");
        $('#process').removeClass("blocked");
      } else {
        alert('Try selecting a different enzyme or process!')
        $('#process').removeClass("blocked");
        thisBtn.removeClass("pressed");
      }
    }
});
}) // end of document ready load function

/* class game
 -function to check if clicked enzyme is in correct order
 -function to check if process is correct 
 -function to change the background image
 -function to keep track of points
 -say the enzyme's name when hovering
*/