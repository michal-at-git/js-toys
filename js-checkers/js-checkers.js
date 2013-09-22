var position = [[false, false, false, false],
	      [false, false, false,false],
	      [false, false, false,false],
	      [false, false, false,false],
	      [false, false, false,false],
	      [false, false, false,false],
	      [false, false, false,false],
	      [false, false, false,false]
	      ];
	      
  var board = [['aa', 'ca', 'ea', 'ga'], 
	      ['bb', 'db', 'fb', 'hb'],
	      ['ac', 'cc', 'ec', 'gc'], 
	      ['bd', 'dd', 'fd', 'hd'], 
	      ['ae', 'ce', 'ee', 'ge'], 
	      ['bf', 'df', 'ff', 'hf'], 
	      ['ag', 'cg', 'eg', 'gg'],
	      ['bh', 'dh', 'fh', 'hh']
	     ];
var x=0; var y=0;	     
function start() {
  while (y < 3) {
    while(x<4)
      { 
	document.getElementById(board[y][x]).innerHTML = "&#x25cf;"; //white
 	document.getElementById(board[7-y][x]).innerHTML = "&#x25cb;"; //black
	position[y][x] = "&#x25cf;"; //white
	position[7-y][x] = "&#x25cb;"; //black
	++x;      
      }
      x = 0;
      ++y;
  }
}
var whitemv = true; // white first
var move = {"from":false, "to":false}
// var _in = 0;
// var _out = 0;
// var i = 0, j = 0;






////////////////////// <checkers()>
function checkers(py, px)
{ alert(px+", "+py)

  if(whitemv) {
    alert("legal move for white"); //debug
   whitemv=false;

  }
  else {
    
   alert("legal move for black"); //debug
   whitemv=true;
  
  }
  
  highlight(px,py);
 /*
 if (move == 0) {
   alert("move == 0"); /////////////////////////
   while (board[i] != inpt) {
     ++i;
   }
   if (position[i]){
     move = 1;
   highlight(board[i], move);
    }
   else {
     alert("bad move!");
     move = 0;   
     i = 0;
    }

 }
 
 else 
 {
    while (board[j] != inpt)
    {
      ++j;
    }
   
    if (mv(i, j, position[i]))//test imp of mv()!!!
    {  
      alert("move == 1:   if (mv(i, j, position[i]))"); /////////////////////////

      position[j] = position[i];
      position[i] = null;
      highlight(board[i], 0);
      refresh();
      i = 0, j = 0;
      move = 0;

  }
   else
   {
           alert("move == 1:   else move = 1"); /////////////////////////
	  move = 0; 
	  highlight(board[i], move);
	  j = 0;
	  i = 0;
   }
 }

   
 
 return 0;*/
}


///////////////////// </checkers()>



//will be renamed to move()! conflict with wariable name ;P
function mv(from, to, pawn) {
 //lines

 from += 1;
 to += 1;
 var res = false;
 var line = []
 line[0] = [1,2,3,4];
 line[1] = [5,6,7,8];
 line[2] = [9,10,11,12];
 line[3] = [13,14,15,16];
 line[4] = [17,18,19,20];
 line[5] = [21,22,23,24];
 line[6] = [25,26,27,28];
 line[7] = [29,30,31,32];

if (pawn == "white") 
 for (x = 0; x <= 7; x++)
 {
   for (y = 0; y <= 3; y++) // it was  (y = 0; y <= 6; y++) - correct to 3 because table has only 4 elements
   { 
      if ((from == line[x][y]) && (to == line[x+1][y]))  
      {
	alert("legal move");
	res = isbusy(position[to-1]);
	x = 7;
      }
      else if ((x%2) != 0 && (from == line[x][y]) && (to == line[x+1][y+1])) // not finished & not good
	{
	  alert("legal move");
	  res = isbusy(position[to-1]);
	  x = 7;
	}
	else if ((x%2) == 0 && (from == line[x][y]) && (to == line[x+1][y-1])) // not finished & not good
	{
	  alert("legal move");
	  res = isbusy(position[to-1]);
	  x = 7;
	}
	
   }
 }
 
else if (pawn == "black")
{
  for (x = 7; x >= 0; x--)
 {
  
   for (y = 3; y >= 0; y--) // it was  (; y <= 6; ) - correct to 3 because table has only 4 elements
   { 
      if ((from == line[x][y]) && (to == line[x-1][y]))  
      {
	alert("legal move");
	res = isbusy(position[to-1]);
	x = 0;
      }
      else if ((x%2) == 0 && (from == line[x][y]) && (to == line[x-1][y-1])) // UNSTABLE - NOT WORKING
	{
	  alert("legal move");
	  res = isbusy(position[to-1]);
	  x = 0;
	}
	else if ((x%2) != 0 && (from == line[x][y]) && (to == line[x-1][y+1])) // UNSTABLE - NOT WORKING
	{
	  alert("legal move");
	  res = isbusy(position[to-1]);
	  x = 0;
	}
	

   }
 }
}
//if (!res) res = kill(position[from],from, to);

 
 return res;
}










function refresh() {
  var x;
  for (x = 0; x < 32; x++)
  {
    if (position[x] == "white")
       document.getElementById(board[x]).innerHTML = "&#x25cf;";
    else if (position[x] == "black")
    {
       document.getElementById(board[x]).innerHTML = "&#x25cb;";
    }
    else  document.getElementById(board[x]).innerHTML = "";
  }
}

function highlight(px, py)
 { alert(board[py][px]);
    var light = document.getElementById(board[py][px]);
    with (light.style) 
    {
	borderColor = 'red';
    }
   
//  if (move == 1)
//  {
//     var light = document.getElementById(board[py][px]);
//     with (light.style) 
//     {
// 	borderColor = 'red';
//     }
//  }
//     else{ 
// 	var light = document.getElementById(board);
// 	with (light.style) 
// 	    {
// 	      borderColor = '#000000';
// 	    }
// 	}
 }

 
function isbusy(arg)
{
 if (arg != null)
 {
   alert("busy: "+arg); 
   return false;
 }
 else return true;
}

 
 
//  function kill(player, from, to) {
//    var res;
//    var x;
//    var y;
//     var line = []
//  line[0] = [1,2,3,4];
//  line[1] = [5,6,7,8];
//  line[2] = [9,10,11,12];
//  line[3] = [13,14,15,16];
//  line[4] = [17,18,19,20];
//  line[5] = [21,22,23,24];
//  line[6] = [25,26,27,28];
//  line[7] = [29,30,31,32];
// 
//  var opponent = position[to];
// alert(to);
// 
// var pin = [0,0], pto = [0,0], pbetween = [0,0];
// 
// 
// for(x = 0; x<= 7; x++)
//   {
//    for(y = 0; y <= 3; y++)
//    {    
//      if(from == line[x][y])
//      {
//       pin[0] = x;
//       pin[1] = y;
//      }
//      else if (to == line[x][y]) 
//      {
//        pto[0] = x;
//        pto[1] = y;
//      }
//    }
//   }
//   
//   pbetween[0]
//  
//  if (player == "white" /*&& opponent == "black"*/ )
//  {
//   
//     
//   alert("legal kill");
//   res = true;
//  }
//  else if(player == "black" /*&& opponent == "white"*/)
//  {
//   alert ("legal kill"); 
//   res = true;
//  }
//  else 
//  {
//    alert("illegal moved!");
//    res = false;
//  }
//  alert(pto[0]);
//  alert(pto[1]);
//  return res;
//  }