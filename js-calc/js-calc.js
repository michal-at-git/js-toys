function jscalc(txt) {

 var lcd = document.getElementById('display');
  var numbs = lcd.value; 
  
 if (txt != '+' && txt != '-' && txt != '*'  && txt != '/' && txt != '=' && txt != '.')
 {
  document.getElementById('display').innerHTML += txt;
 }
 
 else 
 {	
   
	   
   if (numbs.slice(-1) == '+' || numbs.slice(-1) == '*' || numbs.slice(-1) == '-' || numbs.slice(-1) == '/' || numbs.slice(-1) == '.' )
	  { 
	    
	     backup = numbs.slice(numbs.lenght,-1);
	    
	   document.getElementById('display').innerHTML = backup;
	   document.getElementById('display').innerHTML += txt;
	   
	  }
	  else 
	  {
	    	    document.getElementById('display').innerHTML += txt;
	  }
 }
 	
if (txt == "=")
  
{
 var result =  eval(numbs);
 document.getElementById('display').innerHTML = result;
}
else if (txt == "c")
{
 document.getElementById('display').innerHTML = ''; 
}
 else if (txt == "p")
 {
   
   var num = parseInt(numbs);
   num = Math.sqrt(num);
   document.getElementById('display').innerHTML = num;
 }
 
}
