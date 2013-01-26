function start() {
  var white = ['aa', 'ca', 'ea', 'ga', 'bb', 'db', 'fb', 'hb'];
  var black = ['bh', 'dh', 'fh', 'hh','ag', 'cg', 'eg', 'gg'];
  var position = [ null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null];

  var i = 0;
  while (i < 8)
  { position[i] = "white";
    position[32-i] = "black"; 

 document.getElementById(white[i]).innerHTML = "&#x25cf;";
 document.getElementById(black[i]).innerHTML = "&#x25cb;";
  
 ++i;
  }
}

function checkers(position)
{
 return 0;
}

function move (from, cell) {
  return 0;
}