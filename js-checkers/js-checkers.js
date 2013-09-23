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






////////////////////// <checkers()>
function checkers(py, px)
{ //alert(px+", "+py)
  if(position[py][px] && !from["x"] && !from["y"]) {
      if((whitemv && position[py][px] == "white") || (!whitemv && position[py][px] == "black")) 
	{
	alert("if(position[py][px]"+position[py][px])

	    from["x"] = px;
	    from["y"] = py;
	}
	else alert("wrong move");
    }
    else if (from["x"] && from["y"] && !to["x"] && !to["y"])
    {
      to["x"] = px;
      to["y"] = py;
      if(whitemv) { alert("white");
	mv("white");
	whitemv = false;
      }
      else { alert("black");
	mv("black"); 
	whitemv = true;
      }
     
      

    }
    else {
	from["x"] = from["y"] = to["x"] = to["y"] = false; 
	alert("bad move!");
      }

  
  highlight(px,py);
}


///////////////////// </checkers()>



function mv(pawn) {
 //lines 
 alert("mv()")
 if(pawn=="black") {
   0;
 }
 else if (pawn == "white") {
   if((from["x"] == to["x"] && to["y"]== (1 + from["y"])) || (from["x"] == (to["x"]-1) && to["y"]== (1 + from["y"])) ) {
      position[from["y"]][from["x"]] = false;
      position[to["y"]][to["x"]] = "white";

   }
 }
 
//finnaly: 
from["x"] = from["y"] = to["x"] = to["y"] = false; 
 refresh();

}









function refresh() {
  for (var uy = 0; uy < 8; uy++)
   for (var ux = 0; ux < 4; ux++)
  { 
    if (position[uy][ux] == "white")
       document.getElementById(board[uy][ux]).innerHTML = "&#x25cf;";
    else if (position[uy][ux] == "black")
    {
       document.getElementById(board[uy][ux]).innerHTML = "&#x25cb;";
    }
    else  document.getElementById(board[uy][ux]).innerHTML = "";
  }
}


function highlight(px, py)
 { alert(board[py][px]);
    var light = document.getElementById(board[py][px]);
    with (light.style) 
    {
	borderColor = 'red';
    }
   
 }
 