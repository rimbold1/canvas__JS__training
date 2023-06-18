const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ctx.fillRect(0,0,10,10);
// ctx.fillStyle = "brown"
// ctx.fillRect(100, 30, 50,50)
// ctx.fillRect(100, 30, 50,50)
// ctx.fillStyle = "green"
// ctx.fillRect(120, 80, 10,20)
// ctx.fillRect(70, 100, 110,10)
// ctx.fillRect(95, 110, 60,60)
// ctx.fillStyle = "black"
// ctx.fillRect(100, 170, 10,80)
// ctx.fillRect(140, 170, 10,80)

// ctx.fillStyle = "red"
// ctx.fillRect(5,0,50,100)
// ctx.fillStyle = "green"
// ctx.fillRect(55,0,50,100)
// ctx.fillStyle = "blue"
// ctx.fillRect(105,0,50,100)


// ctx.strokeStyle = "white"
// ctx.lineWidth = 4
// ctx.strokeRect(10,10,20,20)

// ctx.strokeStyle = "Turquoise";
// ctx.lineWidth = 4;
// ctx.beginPath(); //Початок нового шляху для малювання
// ctx.moveTo(10,10); // Визначаємо місце (в координатах X та Y) звідки почати малювати
// ctx.lineTo(60,60); // Малюємо лінію задаючи координати напрямку
// ctx.moveTo(60,10);
// ctx.lineTo(10,60);
// ctx.stroke(); // умовно "завершити" малювання початого шляху

// ctx.lineWidth = 4;
// ctx.strokeRect(50,50,20,20);
// ctx.beginPath();
// ctx.moveTo(60,72);
// ctx.lineTo(60,110);
// ctx.moveTo(35,75);
// ctx.lineTo(60,90);
// ctx.lineTo(85,75);
// ctx.moveTo(35,145);
// ctx.lineTo(60,108);
// ctx.lineTo(80,145)
// ctx.stroke();

// let isDrawing = false;

// function startDrawing(e) {
//   isDrawing = true;
//   ctx.beginPath();
//   ctx.moveTo(e.clientX, e.clientY - 11);
// }

// function draw(e) {
//   if (!isDrawing) return;
//   ctx.lineTo(e.clientX, e.clientY - 11);
//   ctx.stroke();
// }

// function stopDrawing() {
//   isDrawing = false;
// }

// canvas.addEventListener('mousedown', startDrawing);
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', stopDrawing);

// ctx.fillStyle = "blue";
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(50,150);
// ctx.lineTo(50,200);
// ctx.lineTo(150,200);
// ctx.lineTo(150,150);
// ctx.lineTo(100,100);
// ctx.fill();

// ctx.linewidth = 4;
// ctx.strokeStyle = "red";

// ctx.beginPath();
// ctx.arc(100, 100, 20, 0, Math.PI/2);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 150, 20, 0, Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 200, 20, 0, Math.PI*2);
// ctx.stroke();


// function drawCircle(x,y,r,n) {
    
//     ctx.beginPath();
//     ctx.arc(x,y,r,n,false);
//     ctx.stroke();
// }

// drawCircle(100,100, 30, Math.PI*2);
// drawCircle(100,100, 20, Math.PI*2);
// drawCircle(100,100, 10, Math.PI*2);

// function drawCri(x,y,radius, fillOrStroke, color) {
//     ctx.strokeStyle = color;
//     ctx.fillStyle = color;
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI*2, false);
//     (fillOrStroke === true) ? ctx.fill() : ctx.stroke();
    
// }

// drawCri(200, 200, 30, false, "white"); // head
// drawCri(190, 190, 6, true, "green");//left eye
// drawCri(210, 190, 6, true, "green");// right eye
// drawCri(200, 203, 6, true, "orange");//nose
// drawCri(200, 270, 40, false, "white");//body
// drawCri(200, 250, 6, true, "black");
// drawCri(200, 266, 6, true, "black");
// drawCri(200, 282, 6, true, "black");

// function drawCri(x,y,radius, fillOrStroke, color) {
//     ctx.strokeStyle = color;
//     ctx.fillStyle = color;
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI*2, false);
//     (fillOrStroke === true) ? ctx.fill() : ctx.stroke();
    
// }


// function drawSnowman(x, y) { // function that draws snowman by the given coordinates.
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     drawCri(x, y, 30, false, "white"); // head
//     drawCri(x-10, y-10, 6, true, "green");//left eye
//     drawCri(x+10, y-10, 6, true, "green");// right eye
//     drawCri(x, y+3, 6, true, "orange");//nose
//     drawCri(x, y+70, 40, false, "white");//body
//     drawCri(x, y+50, 6, true, "black");
//     drawCri(x, y+66, 6, true, "black");
//     drawCri(x, y+82, 6, true, "black");
// }


// drawSnowman(100,100);

// next function

// let points = [[50, 50], [50,100], [100,100], [100,50], [50,50]];
// let mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];

// function drawPoints(array) { // function that draws lines by the given coordinates.
//     let x = array[0][0];
//     let y = array[0][1];
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         ctx.lineTo(element[0], element[1]);
//     }
//     ctx.stroke();
// }

// drawPoints(points);
// drawPoints(mysteryPoints);

