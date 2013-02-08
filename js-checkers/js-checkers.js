var position = [ /*aa*/null, /*ca*/ null, /*ea*/ null,/*ga*/ null, /*bb*/null, /*db*/null, /*fb*/null, /*hb*/null, 
  /*ac*/null, /*cc*/null, /*ec*/null, /*gc*/null, /*bd*/null, /*dd*/null, /*fd*/null, 
  /*hd*/null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null];
  var board = ['aa', 'ca', 'ea', 'ga', 
	      'bb', 'db', 'fb', 'hb',
	      'ac', 'cc', 'ec', 'gc', 
	      'bd', 'dd', 'fd', 'hd', 
	      'ae', 'ce', 'ee', 'ge', 
	      'bf', 'df', 'ff', 'hf', 
	      'ag', 'cg', 'eg', 'gg',
	      'bh', 'dh', 'fh', 'hh',
	     ]
function start() {
   var i = 0;
  while (i < 8)
  { position[i] = "white";
    position[31-i] = "black"; 

 document.getElementById(board[i]).innerHTML = "&#x25cf;";
 document.getElementById(board[31-i]).innerHTML = "&#x25cb;";
  
 ++i;
  }
}
var move = 0;
var _in = 0;
var _out = 0;
var i = 0, j = 0;






////////////////////// <checkers()>
function checkers(inpt)
{ 
 
 if (move == 0) {
   while (board[i] != inpt) {
     ++i;
   }
   if (position[i]){
     move = 1;
     highlight(board[i], move);
    }
   else {
     move = 0;   
     i = 0;
    }

 }
 
 else { 
   while (board[j] != inpt) {
     ++j;
   }
   
  if ((mv(i, j, position[i])))//test imp of mv()!!!
  {
   alert("true");
   position[j] = position[i];
   position[i] = null;
   move = 0;
   highlight(board[i], move);
   refresh();
  i = 0, j = 0;

  }
  else move = 1; 
  //i = 0, j = 0;

   
 }
 return 0;
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
   for (y = 0; y <= 6; y++)
   { 
      if ((from == line[x][y]) && (to == line[x+1][y]))  
      {
	alert("legal move");

	x = 7;
	res = true;
      }
      else if ((from == line[x][y+1]) && (to == line[x+1][y])) // not finished & not good
	{
	  alert("legal move");
	  x = 7;
	  res = true;
	}

   }
 }
 
else if (pawn == "black")
{
  for (x = 7; x >= 0; x--)
 {
  
   for (y = 6; y >= 1; y--)
   { 
      if ((from == line[x][y]) && (to == line[x-1][y]))  
      {
	alert("legal move");

	x = 0;
	res = true;
      }
      else if ((from == line[x][y-1]) && (to == line[x-1][y])) // UNSTABLE - NOT WORKING
	{
	  alert("legal move");
	  x = 0;
	  res = true;
	}

   }
 }
}

 
 return res;
}










function refresh() {
  var i;
  for (i = 0; i < 32; i++)
  {
    if (position[i] == "white")
       document.getElementById(board[i]).innerHTML = "&#x25cf;";
    else if (position[i] == "black")
    {
       document.getElementById(board[i]).innerHTML = "&#x25cb;";
    }
    else  document.getElementById(board[i]).innerHTML = "";
  }
}

function highlight(board, move)
 {
 if (move == 1)
 {
    var light = document.getElementById(board);
    with (light.style) 
    {
	borderColor = 'red';
    }
 }
    else{ 
	var light = document.getElementById(board);
	with (light.style) 
	    {
	      borderColor = '#000000';
	    }
	}
 }


// function rules(i, j, pawn) {
//   if (pawn == "white")
//   {
//  if (i>j) return false;
//  else if (i == j) return false;
//  else return true; 
//   }
//   else if (pawn == "black")
//   {
//     if (i<j) return false;
//  else if (i == j) return false;
//  else return true; 
//   }
// }