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
   
  if (rules(i,j, position[i]))
  {
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


function rules(i, j, pawn) {
  if (pawn == "white")
  {
 if (i>j) return false;
 else if (i == j) return false;
 else return true; 
  }
  else if (pawn == "black")
  {
    if (i<j) return false;
 else if (i == j) return false;
 else return true; 
  }
}
