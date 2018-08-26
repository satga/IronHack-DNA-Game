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
    this.correctOrder =['Step1', 'Step2', 'Step3', 'Step4', 'Step5',];
    this.guessedSteps=0;
    this.missedClicks=0;
    this.wrongSound = document.getElementById("wrongAnswer"); 
    this.rightSound = document.getElementById("correctAnswer"); 
  }
  checkEnzymeOrder(enzymePick) {
    if (this.guessedSteps == enzymePick.split('Step')[1]-1 ) {
      console.log('enzyme match')
      this.rightSound.play()
      return true
    } else {
      this.missedClicks++
      this.wrongSound.play()
    } 
  }

  checkProcessOrder(processPick) {
    if (this.guessedSteps == processPick.split('Step')[1]-1 ) {
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
      displayClicks.html(this.missedClicks)
    }

    gotOneMatch(pickedEnzyme, pickedProcess){
      alert('Congratulations, you got a match!')
      pickedProcess.removeClass("pressed");
      // pickedProcess.addClass("disabled");
      pickedEnzyme.removeClass("pressed");
      // pickedEnzyme.addClass("disabled");
      $('#process').removeClass("blocked");
      $('#enzymes').removeClass("blocked");
      this.guessedSteps++;
      this.updateSlides();
      this.checkIfWon();
    }

    updateSlides() {
      var htmlToInsert = '<img class="slides" src="images/DNAanimation/'+ slides[this.guessedSteps].img +'">';
      $('#animation').html(htmlToInsert);
    }

    checkIfWon() {
      if (this.guessedSteps == this.correctOrder.length) {
        alert('Congratulations! You won the game!')
        // report accuracy
      }
    }

  }