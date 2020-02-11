function playerName()
{
var fpn = document.getElementById("fpn").value;
var spn = document.getElementById("spn").value;

}
 var x=1;
var i;
for (i = 0; i < 9; i++)
{
  if(x==1)//1 for player 1st
{
function getName()
{
document.getElementById("demo").innerHTML =fpn;

}
x=2;
}
else
{
function getName()
{
  document.getElementById("demo").innerHTML= spn;

}
x=1;  
}
}