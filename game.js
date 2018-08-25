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
    htmlToInsert += '<div class="col-2 enz">';
    htmlToInsert += '  <img src="images/'+ oneEnz.img +'" alt="'+ oneEnz.displayText +'" " name="'+ oneEnz.name +'">';
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
    htmlToInsert += '<button type="button" name="'+ oneProc.name +'" class="list-group-item list-group-item-action">'+ oneProc.displayText +'</button>';
    });
    $('#process').html(htmlToInsert);
  }

} // end of Processes Class
