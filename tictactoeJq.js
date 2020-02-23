var x1=Math.random();
var x =Math.round(x1);
var firstplayername;
var secondplayername;



debugger
function playerName(){
  $("#startbutton").click(function(){
      firstplayername = $("#fpn").val();
      secondplayername = $("#spn").val();
      startButtonDisable();       
    });

  for (i = 0; i<3; i++){

    if(x==1){
      
      $("#Name").html(firstplayername);
      x=0;
    }else{
      
      $("#Name").html(secondplayername);
      x=1;  
    }
  }
   switch (x){
  
    case 1:
      ele = "X";
      $("#val").html(ele);
      break;    
    case 0:
      ele = "O";
       
      $("#val").html(ele);
      break;
   }
}


function print(buttonId){
var i = buttonId;
debugger
  // //print the X or O
  // document.getElementById(buttonId).innerHTML = ele;
$("#"+buttonId).html(ele);
     playerName();
     gameButtonDisable(buttonId);
}

function startButtonDisable(){
$("#startbutton").attr("disabled", true);
}

function gameButtonDisable(buttonId){
 $("#"+ buttonId).attr("disabled", true); 
}