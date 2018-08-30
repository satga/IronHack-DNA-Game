class Enzymes{
  constructor(arrayOfEnzymes){
    this.enzymes = arrayOfEnzymes;
    this.shuffleEnzymes();
  } // end of constructor

  shuffleEnzymes() {
    for (let i =0; i <this.enzymes.length; i++) {
      let j = Math.floor(Math.random()*(this.enzymes.length));
      let a = this.enzymes[i];
      this.enzymes[i]= this.enzymes[j];
      this.enzymes[j]= a;
    }
    // loadEnzymes();
  }

  loadEnzymes() {
    var htmlToInsert = '';
    this.enzymes.forEach(function (oneEnz) {
    htmlToInsert += '<div class="col-2 enz" name="'+ oneEnz.name +'">';
    htmlToInsert += '  <img src="images/'+ oneEnz.img +'" alt="'+ oneEnz.displayText +'">';
    htmlToInsert += '  <p>'+ oneEnz.displayText +'</p>';
    htmlToInsert += '</div>';
    });
    $('#enzymes').html(htmlToInsert);
  }
} // end of Enzyme class

class Processes{
  constructor(arrayOfProcesses){
    this.processes = arrayOfProcesses;
    this.shuffleProcesses();
  }// end of constructor
  shuffleProcesses() {
    for (let i =0; i <this.processes.length; i++) {
      let j = Math.floor(Math.random()*(this.processes.length));
      let a = this.processes[i];
      this.processes[i]= this.processes[j];
      this.processes[j]= a;
    }
    // loadProcesses();
  }

  loadProcesses() {
    var htmlToInsert = '';
    this.processes.forEach(function (oneProc) {
    htmlToInsert += '<p name="'+ oneProc.name +'" class="process-item '+ oneProc.name +'">'+ oneProc.displayText +'</p>'; 
    }); //  += '<button type="button" name="'+ oneProc.name +'" class="list-group-item list-group-item-action '+ oneProc.name +'">'+ oneProc.displayText +'</button>'; 
    $('#process').html(htmlToInsert);
  }

} // end of Processes Class  list-group-item-action

class Game{
  constructor(){
    this.correctOrder =['helicase', 'primase', 'DNA polymerase 3', 'helicase', 'primase', 'DNA polymerase 3', 'DNA polymerase 1', 'ligase',];
    this.guessedSteps=0;
    this.missedClicks=0;
    this.totalClicks=0;
    this.wrongSound = document.getElementById("wrongAnswer"); 
    this.rightSound = document.getElementById("correctAnswer"); 
  }
  checkEnzymeOrder(enzymePick) {
    this.totalClicks++;
    this.updateClicks();
    if (this.correctOrder[this.guessedSteps] == enzymePick ) {
      console.log('enzyme match')
      this.rightSound.play()
      return true
    } else {
      this.missedClicks++
      this.wrongSound.play()
    } 
  }

  checkProcessOrder(processPick) {
    this.totalClicks++;
    this.updateClicks();
    if (this.correctOrder[this.guessedSteps] == processPick) {
      this.rightSound.play()
      console.log('process match')
      return true
    } else {
      this.missedClicks++
      this.wrongSound.play()
    } 
  }  

  updateClicks() {
    var displayClicks = $('span');
    var maxClicks=2*this.correctOrder.length;
    // var totalClicks = this.missedClicks + this.guessedSteps*2;
    displayClicks.html(`${this.totalClicks} out of ${maxClicks}`)
    if (this.missedClicks > 0.3*(maxClicks)) {
      $('#clicks').removeClass("normal");
      $('#clicks').addClass("warning");
    }
  }

  gotOneMatch(pickedEnzyme, pickedProcess){
    // alert('Congratulations, you got a match!')
    pickedProcess.removeClass("pressed");
    // pickedProcess.addClass("disabled");
    pickedEnzyme.removeClass("pressed");
    // pickedEnzyme.addClass("disabled");
    $('#process').removeClass("blocked");
    $('#enzymes').removeClass("blocked");
    this.guessedSteps++;
    this.updateSlides();
    this.checkIfWon();
    this.narrateProcess ()
  }

  updateSlides() {
    var htmlToInsert = '<img class="slides" src="images/DNAanimation/'+ slides[this.guessedSteps].img +'">';
    $('#animation').html(htmlToInsert);
  }

  narrateProcess () {
    if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance(slides[this.guessedSteps].description);
      window.speechSynthesis.speak(msg);
    }
  }

  checkIfWon() {
    if (this.guessedSteps == this.correctOrder.length) {
        if (this.missedClicks == 0) {
          alert('Congratulations! \nYou won the game with the minimum number of steps!')
        } else if (this.missedClicks < 0.2*this.correctOrder.length) {
          alert(`Congratulations, you won the game with only ${this.missedClicks} misses. \nTry again so you can get closer to the minimum number of steps!`)
        } else {
          alert(`You finished the game with ${this.missedClicks} misses. \nTry again so you can get closer to the minimum number of steps!`)
        }
        location.reload();// reload window
    }
  }

} // end of Game class