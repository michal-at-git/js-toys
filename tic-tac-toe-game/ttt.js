 var run = 0;
var a, b, c, d, e, f, g, h, i;
function move(mv){
if (!checkmv(mv))
{  
  if (run == 0)
  { 
    result(mv, "X");
  document.getElementById(mv).innerHTML= "X";
  
  run=1;
  resultmap("X");

  }
   else if (run == 1)
  {
   result(mv, "O");
  document.getElementById(mv).innerHTML= "O";
  run =0;
  resultmap("O");
  }
}
else alert("Bad move!");
}

function result(mv, value) {
 
  if (mv == "a") {
  a=value;
   
  }
  else if (mv == "b") {
  b=value;
   
  }
   else if (mv == "c") {
  c=value;
   
  }
  else if (mv == "d") {
  d=value;
   
  }
   else if (mv == "e") {
  e=value;
   
  }
  else if (mv == "f") {
  f=value;
   
  }
   else if (mv == "g") {
  g=value;
   
  }
   else if (mv == "h") {
  h=value;
   
  }
  else if (mv == "i") {
  i=value;
   
  }
}

function resultmap(player) {
   if (a == player && b == player && c == player)
    {
      alert(player+" wins!"); 
            run = 2;

    }
    else if (a == player && d == player && g == player)
       {
      alert(player+" wins!") ; 
          run = 2;

    }
     else if (a == player && e == player && i == player)
       {
      alert(player+" wins!"); 
           run = 2;

    }
    else if (d == player && e == player && f == player)
       {
      alert(player+" wins!"); 
          run = 2;
    }
     else if (g == player && h == player && i == player)
       {
      alert(player+" wins!"); 
           run = 2;

    }
     else if (b == player && e == player && h == player)
       {
      alert(player+" wins!"); 
           run = 2;

    }
     else if (c == player && f == player && i == player)
       {
      alert(player+" wins!"); 
           run = 2;

    }
    else if (c == player && e == player && g == player)
       {
      alert(player+" wins!"); 
      run = 2;
    }
}

function checkmv(mv){
if (mv == "a") return a;
else if (mv == "b") return b;
else if (mv == "c") return c;
else if (mv == "d") return d;
else if (mv == "e") return e;
else if (mv == "f") return f;
else if (mv == "g") return g;
else if (mv == "h") return h;
else if (mv == "i") return i;
else return false;
}
