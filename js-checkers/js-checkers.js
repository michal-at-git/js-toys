var position = [ /*aa*/null, /*ca*/ null, /*ea*/ null,/*ga*/ null, /*bb*/null, /*db*/null, /*fb*/null, /*hb*/null, 
  /*ac*/null, /*cc*/null, /*ec*/null, /*gc*/null, /*bd*/null, /*dd*/null, /*fd*/null, 
  /*hd*/null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null];
  var board = ['aa', 'ca', 'ea', 'ga', 
	      'bb', 'db', 'fb', 'hb',
	      'ac', 'cc', 'ec', 'gc', 
	      'bd', 'ed', 'fd', 'hd', 
	      'ae', 'ce', 'ee', 'ge', 
	      'bf', 'df', 'ff', 'hf', 
	      'ag', 'cg', 'eg', 'gg',
	      'bh', 'dh', 'fh', 'hh',
	     ]
function start() {
  var white = ['aa', 'ca', 'ea', 'ga', 'bb', 'db', 'fb', 'hb'];
  var black = ['bh', 'dh', 'fh', 'hh','ag', 'cg', 'eg', 'gg'];
  

  var i = 0;
  while (i < 8)
  { position[i] = "white";
    position[31-i] = "black"; 

 document.getElementById(white[i]).innerHTML = "&#x25cf;";
 document.getElementById(black[i]).innerHTML = "&#x25cb;";
  
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
   move = 1;
 }
 
 else { 
   while (board[j] != inpt) {
     ++j;
   }
   position[j] = position[i];
   position[i] = null;
   refresh();
 move = 0;
  i = 0, j = 0;
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
/*
function move (from, cell) {
  if (from 
  return 0;
}

function cell(pos) {
  if(pos='aa') return 0; if (pos == 'aa') return 1; if (pos == 'ca') return 2 if (pos == 'ea') return 3;
      if (pos == 'ga') return 4; if (pos == 'bb') return 5; if(pos == 'db') return 6, if (pos == 'fb') return 7; if (pos == 'hb') return 8; if (pos =='ac') return 9;
      if (pos == 'cc') return 10; if (pos == 'ec') return 11; if (pos == 'gc') return 12; if (pos == 'bd') return 13; if (pos == dd) return 14;
      if pos == 'fd') return 15; if pos == 'hd') return 16;  
}*/