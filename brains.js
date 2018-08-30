var slides = [
  { name: 'Step0',   img: 'Slide01.png', description: 'Start'},
  { name: 'Step1',   img: 'Slide02.png', description: 'helicase unwinds the double helix by breaking the hydrogen bonds between complementary base pairs'},
  { name: 'Step2',   img: 'Slide03.png', description: 'primase synthesizes a short fragment of RNA to which DNA nucleotides can be attached'},
  { name: 'Step3',   img: 'Slide04.png', description: 'DNA polymerase 3 attaches DNA nucleotides to the 3 prime end of the growing strand'},
  { name: 'Step4',   img: 'Slide05.png', description: 'helicase unwinds another section of the double helix'},
  { name: 'Step5',   img: 'Slide06.png', description: 'primase adds another primer to the lagging strand'},
  { name: 'Step6',   img: 'Slide07.png', description: 'DNA polymerase 3 continue to add DNA nucleotides to the lagging and leading strands'},
  { name: 'Step7',   img: 'Slide08.png', description: 'DNA polymerase 1 removes the RNA nucleotides and replaces them with DNA nucleotides'},
  { name: 'Step8',   img: 'Slide09.png', description: 'Ligase connect the Okazaki fragments made by DNA poymerase 1 with the previous fragment'},
];

var enzymes = [
  { name: 'helicase',            displayText: 'Helicase' ,            img: 'helicase.png' },
  { name: 'primase',             displayText: 'Primase' ,             img: 'primase.png' },
  { name: 'DNA polymerase 3',    displayText: 'DNA Polymerase III' ,  img: 'DNA_pol_III.jpg' },
  { name: 'DNA polymerase 1',    displayText: 'DNA Polymerase I' ,    img: 'DNA_pol_I.png' },
  { name: 'ligase',              displayText: 'Ligase' ,              img: 'ligase.png' },
];

var processes = [
  { name: 'helicase',           displayText: 'Unwind the DNA helix' ,},
  { name: 'primase',            displayText: 'Add RNA nucleotides' ,},
  { name: 'DNA polymerase 3',   displayText: 'Add DNA nucleotides' ,},
  { name: 'DNA polymerase 1',   displayText: 'Remove & replace RNA nucleotides' ,},
  { name: 'ligase',             displayText: 'Connect Okazaki fragments' ,},
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
  theGame.updateClicks()
  var selectedEnzyme;
  var thisBtn;

  $('.enz').click(function () {
    $(this).addClass("pressed");
    $('#enzymes').addClass("blocked");
    console.log($(this))
    selectedEnzyme =$(this);
    if (theGame.checkEnzymeOrder($(this).attr('name'))) {
      if (($('#process').hasClass("blocked"))) {
        theGame.gotOneMatch(selectedEnzyme, thisBtn);
      } //else {alert('Good Job! Now pick a process to match')}
    } else {
        if (($('#process').hasClass("blocked"))) {
          popAlert($('#popAlert'),'Try selecting a different enzyme to match your process')
          // alert('Try selecting a different enzyme to match your process!')
          selectedEnzyme.removeClass("pressed");
          $('#enzymes').removeClass("blocked");
        } else {
          popAlert($('#popAlert'),'Try selecting a different enzyme or process!')
          // alert('Try selecting a different enzyme or process!')
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
      } //else {alert('Good Job! Now pick an enzyme to match')}
    } else {
        if (($('#enzymes').hasClass("blocked"))) {
          popAlert($('#popAlert'),'Try selecting a different process to match your enzyme!')
          thisBtn.removeClass("pressed");
          $('#process').removeClass("blocked");
        } else {
          popAlert($('#popAlert'),'Try selecting a different enzyme or process!')
          // alert('Try selecting a different enzyme or process!')
          $('#process').removeClass("blocked");
          thisBtn.removeClass("pressed");
        }
      }
  });
}) // end of document ready load function

/* class game
 -ANIMATION!
*/

function popAlert(element,text) {
  element.html(text);
  element.show();
  setTimeout(function(){
    element.hide();
    }, 1500);
}