// window.onload = () => {
$(function() {
  // theGame = new Game;
  // animate();

  $('#playGame').click(function(e){ //  document.getElementById('startGame').onclick = function () { //
  console.log(e);
  $('#instructions-d').hide()
  $("#canv").show()
  theGame = new Game;
  animate();
  });

  // var startButton = document.getElementById('playGame');{
  //   startButton.onclick = theGame = new Game;
  // }; // end of click function

}); // end window.onload