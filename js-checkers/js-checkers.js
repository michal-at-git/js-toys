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
	position[y][x] = "white"; //white
	position[7-y][x] = "black"; //black
	++x;      
      }
      x = 0;
      ++y;
  }
}
var whitemv = true; // white first
var from = {"x":false, "y":false}; 
var to = {"x":false, "y":false};
// var _in = 0;
// var _out = 0;
// var i = 0, j = 0;






////////////////////// <checkers()>
function checkers(py, px)
{ alert(px+", "+py)

  if(whitemv && position[py][px] && !from["x"] && !from["y"]) {
    
	alert("legal move for white"); //debug
	alert("from"); //debug

	from["x"] = px;
	from["y"] = py;
    }
    
    else if (from["x"] && from["y"])
    {
      to["x"] = px;
      to["y"] = py;
      if(whitemv) {
	mv("white");
	whitemv = false;
      }
      else {
	mv("black"); 
	whitemb = true;
      }
    }
//     else {    alert("to"); //debug
// 
//       to["x"] = px;
//       to["y"] = py;
//       mv("white");
//     }
//    whitemv=false;

//   }
//   else if (from["x"] && from["y"]) {
//     
//    alert("legal move for black"); //debug
//    whitemv=true;
//   
//   }
  
  highlight(px,py);
 
}


///////////////////// </checkers()>



//will be renamed to move()! conflict with wariable name ;P
function mv(pawn) {
 //lines
 
 
//finnaly: 
from["x"] = from["y"] = to["x"] = to["y"] = false; 
 
/*
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
 8*/
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

 
// function isbusy(arg)
// {
//  if (arg != null)
//  {
//    alert("busy: "+arg); 
//    return false;
//  }
//  else return true;
// }

 