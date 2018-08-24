var slides = [
  { name: 'Start point',          img: 'Slide02.png' },
  { name: 'after helicase',       img: 'Slide04.png' },
  { name: 'after primase',        img: 'Slide06.png' },
  { name: 'after Pol3',           img: 'Slide07.png' },
  { name: 'helicase again',       img: 'Slide10.png' },
  { name: 'after 2nd helicase',   img: 'Slide11.png' },
  { name: 'after 2nd primase',    img: 'Slide12.png' },
  { name: 'after 2nd Pol3',       img: 'Slide13.png' },
  { name: 'primers removed',      img: 'Slide14.png' },
  { name: 'Pol 1',                img: 'Slide15.png' },
];

var pic = 1;
console.log(slides[1])
/* <img class="enz" src="images/ligase.png" alt="ligase"> */
var htmlToInsert = '<img class="slides" src="images/DNAanimation/'+ slides[pic].img +'">';
// Add all the div's to the HTML
$('#animation').html(htmlToInsert);

$('.enz').click(function () {
  console.log(this);
});

$('.enz').click(function () {
  console.log(this);
});