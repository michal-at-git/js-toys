var position = [ /*aa*/null, /*ca*/ null, /*ea*/ null,/*ga*/ null, /*bb*/null, /*db*/null, /*fb*/null, /*hb*/null, 
  /*ac*/null, /*cc*/null, /*ec*/null, /*gc*/null, /*bd*/null, /*dd*/null, /*fd*/null, 
  /*hd*/null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null];
function start() {
  var white = ['aa', 'ca', 'ea', 'ga', 'bb', 'db', 'fb', 'hb'];
  var black = ['bh', 'dh', 'fh', 'hh','ag', 'cg', 'eg', 'gg'];
  

  var i = 0;
  while (i < 8)
  { position[i] = "white";
    position[32-i] = "black"; 

 document.getElementById(white[i]).innerHTML = "&#x25cf;";
 document.getElementById(black[i]).innerHTML = "&#x25cb;";
  
 ++i;
  }
}
var move = 0;
var in = 0;
var out = 0;
function checkers(inpt)
{ 

 if (move == 0) {
   
   var in = inpt;
   move = 1;
 }
 
 else { 
 move = 0;
 var out = inpt;
 position[out] =  position[in];
  position[in] = null;

 }
 return 0;
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