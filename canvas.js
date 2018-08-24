// var canv = document.getElementById('canvas');
// var contx = canv.getContext('2d');
// contx.clearRect(0, 0, canv.width, canv.height);

// function drawShape(ctx, x, y, points, radius1, radius2, alpha0) {
//     //points: number of points (or number of sides for polygons)
//     //radius1: "outer" radius of the star
//     //radius2: "inner" radius of the star (if equal to radius1, a polygon is drawn)
//     //angle0: initial angle (clockwise), by default, stars and polygons are 'pointing' up
//     var i, angle, radius;
//     if (radius2 !== radius1) {
//         points = 2 * points;
//     }
//     for (i = 0; i <= points; i++) {
//         angle = i * 2 * Math.PI / points - Math.PI / 2 + alpha0;
//         radius = i % 2 === 0 ? radius1 : radius2;
//         ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
//     }
// }

// contx.moveTo(200, 120)
// drawShape(contx, 200, 200, 5, 80, 80, 0);

// contx.moveTo(700, 580); // upside down pentagon
// drawShape(contx, 700, 500, 5, 80, 80, Math.PI);

// contx.strokeStyle = "#bada55";
// // contx.fillStyle = "#bada55";
// contx.lineWidth = 2;
// contx.stroke();

// contx.moveTo(124, 176) // connect sugar to phosphate
// contx.lineTo(100, 100)
// contx.stroke();

// contx.beginPath(); //draw phosphate
// var x = 90; // x coordinate
// var y = 70; // y coordinate
// var radius = 30; // Arc radius
// var startAngle = 0; // Starting point on circle
// var endAngle = Math.PI*2; // End point on circle
// contx.arc(x, y, radius, startAngle, endAngle, true);
// contx.fillStyle = "yellow";
// contx.stroke();
// contx.closePath();
// contx.fill();

// contx.moveTo(277, 176) // sugar to base
// contx.lineTo(350, 176)
// contx.stroke();
// contx.strokeStyle = "red";
// contx.strokeRect(350, 128, 200, 100);

//  contx.font = '48px sans-serif';
//  contx.fillStyle = 'blue';
//  contx.fillText('A', 430, 190);

/*  Resources:
http://jsfiddle.net/8vwjn4cx/330/
https://getbootstrap.com/docs/4.0/components/list-group/

*/