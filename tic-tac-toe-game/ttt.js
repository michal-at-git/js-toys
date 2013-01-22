 var i = 0;

function move(mv){
  if (i == 0)
  {
  document.getElementById(mv).innerHTML= "X";
  i=1;
  }
   else if (i == 1)
  {
  document.getElementById(mv).innerHTML= "O";
  i=0;
  }
}