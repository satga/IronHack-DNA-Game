// window.onload = () => {
$(function() {
  // theGame = new Game;
  // animate();

  $('#playGame').click(function(e){ //  document.getElementById('startGame').onclick = function () { //
  console.log(e);
  $('#instructions-d').hide()
  $("#canv").show()
  $('#addSolutes').show()
  theGame = new Game;
  animate();
  });

  $('#addSolutes').click(function(e){ //  document.getElementById('startGame').onclick = function () { //
  console.log(e);
  theGame.spawnSaltMoleculesRight (5);
  });
  // var startButton = document.getElementById('playGame');{
  //   startButton.onclick = theGame = new Game;
  // }; // end of click function

}); // end window.onload
