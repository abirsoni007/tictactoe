var x1=Math.random();
var x =Math.round(x1);
var firstplayername;
var secondplayername;
var ele;
var winname;
var i;
var count;

function playerName()
{
disable()
firstplayername = document.getElementById("fpn").value;
secondplayername = document.getElementById("spn").value;


for (i = 0; i < 9; i++)
  {
  if(x==1)
    {

      document.getElementById("Name").innerHTML =firstplayername;
     
      x=0;

    }
else
    {

      document.getElementById("Name").innerHTML= secondplayername;
      
      x=1;  
    }
  }

switch (x) 
  {
  
  case 1:
    
    // ele = "X";
    
     ele=document.getElementById("val").innerHTML = "X";
    
    break;
  
  case 0:
   
   // ele = "O";
    
    ele=document.getElementById("val").innerHTML = "O";
   
    break;
  }
}

function print(arg)
{
 
 document.getElementById(arg).innerHTML = ele;
 
 
 check()
 playerName();

}

function check(arg) {
 if(arg == 10)
 { 

  draw();
 }
else 
{
  

  var a1 = document.getElementById("1").innerHTML;
  var a2 = document.getElementById("2").innerHTML;
  var a3 = document.getElementById("3").innerHTML;
  if(a1==a2 && a2==a3 && a3=="X")
  {
    winner(a1)
    
  }
  var b1 = document.getElementById("1").innerHTML;
  var b2 = document.getElementById("4").innerHTML;
  var b3 = document.getElementById("7").innerHTML;
  if (b1==b2 && b2==b3 && b3=="X") 
  {
    winner(b1)
  }
  var c1 = document.getElementById("1").innerHTML;
  var c2 = document.getElementById("5").innerHTML;
  var c3 = document.getElementById("9").innerHTML;
  if (c1==c2 && c2==c3 && c3=="X") 
  {
    winner(c1)
  }

  var d1 = document.getElementById("1").innerHTML;
  var d2 = document.getElementById("2").innerHTML;
  var d3 = document.getElementById("3").innerHTML;
  if(d1==d2 && d2==d3 && d3=="O")
  {
    winner(d1)
  }
  var e1 = document.getElementById("1").innerHTML;
  var e2 = document.getElementById("4").innerHTML;
  var e3 = document.getElementById("7").innerHTML;
  if (e1==e2 && e2==e3 && e3=="O") 
  {
    winner(e1)
  }
  var f1 = document.getElementById("1").innerHTML;
  var f2 = document.getElementById("5").innerHTML;
  var f3 = document.getElementById("9").innerHTML;
  if (f1==f2 && f2==f3 && f3=="O") 
  {
    winner(f1)
  }
}
}

function draw()
{

  document.getElementById("dr").innerHTML = "MATCH DRAW";

}

function winner(a1)
{

document.getElementById("win").innerHTML = "WINNER " + a1;

}
function disable()
{
  document.getElementById("sbtn").disabled = true;
}