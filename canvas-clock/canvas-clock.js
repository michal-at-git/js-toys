function CanvasClock() {
  
  var clock = document.getElementById("clock").getContext('2d');
  
  clock.beginPath();
  clock.strokeStyle = "rgb(0,0,255)";
  clock.fillStyle="rgb(200,250,50)";
  clock.arc(150,150, 100, 0, Math.PI*2, true);
  clock.lineWidth = 3;
  clock.fill();
  clock.stroke();
  
  //hours
  clock.beginPath();
  clock.strokeStyle= "rgb(0,200,0)";
  clock.lineWidth = 8;
  clock.moveTo(150, 150); // (x, y)
  clock.lineTo(150,100); //(x, y)
  clock.lineCap = 'round';
  clock.stroke();
  
    //minutes
  clock.beginPath();
  clock.strokeStyle= "rgb(0,50,150)";
  clock.lineWidth = 4;
  clock.moveTo(150, 150); // (x, y)
  clock.lineTo(150,80); //(x, y)
  clock.stroke();
  
    //seconds
  clock.beginPath();
  clock.strokeStyle= "rgb(255,50,50)";
  clock.lineWidth = 1;
  clock.moveTo(150, 150); // (x, y)
  clock.lineTo(150,60); //(x, y)
  clock.stroke();
}

function hours(hour) {
  
}

function minSec() {
  
}


document.onload = CanvasClock();