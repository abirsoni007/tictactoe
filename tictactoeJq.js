var x1=Math.random();
var x =Math.round(x1);
debugger
var firstplayername;
var secondplayername;
var ele;
var count=0;

$(document).ready(function(){
  
  $("#startbutton").click(function(){
      firstplayername = $("#fpn").val();
      secondplayername = $("#spn").val();

             
  });
 
});

function assign(){

   startButtonDisable();
  for (i = 0; i<=2; i++){
 debugger
    if(x==1){
      
      $("#name").html(firstplayername);
      x=0;
    }else{
      
      $("#name").html(secondplayername);
      x=1;  
    }
}
   switch (x){
  
    case 1:
      ele = "X";
      $("#val").html(ele);
      $("#name").html(firstplayername);
      break;    
    case 0:
      ele = "O";
       
      $("#val").html(ele);
      $("#name").html(secondplayername);
      break;
   }

}

function print(buttonId){
 
  $("#"+buttonId).html(ele);
    checkWinner();
    gameButtonDisable(buttonId);
    assign();
    
}

function startButtonDisable(){
  $("#startbutton").attr("disabled", true);
}

function gameButtonDisable(buttonId){
  $("#"+buttonId).attr("disabled", true); 
}

function checkWinner(){
  
  var c1 = $("#1").text();
  var c2 = $("#2").text();
  var c3 = $("#3").text();
  var c4 = $("#4").text();
  var c5 = $("#5").text();
  var c6 = $("#6").text();
  var c7 = $("#7").text();
  var c8 = $("#8").text();
  var c9 = $("#9").text();
  count++;
  
    if (c1==c2 && c2==c3 && c3== "X"){
        winner(c3);
    }
    else if (c1==c4 && c4==c7 && c7== "X"){
        winner(c7);
    }
    else if (c1==c5 && c5==c9 && c9== "X"){
        winner(c9);
    }
    else if (c2==c5 && c5==c8 && c8== "X"){
        winner(c8);
    }
    else if (c3==c6 && c6==c9 && c9== "X"){
        winner(c9);
    }
    else if (c4==c5 && c5==c6 && c6== "X"){
        winner(c6);
    }
    else if (c7==c5 && c5==c3 && c3== "X"){
        winner(c3);
    }
    else if (c7==c8 && c8==c9 && c9== "X"){
        winner(c9);
    }
    else if (c1==c2 && c2==c3 && c3== "O"){
        winner(c3);
    }
    else if (c1==c4 && c4==c7 && c7== "O"){
        winner(c7);
    }
    else if (c1==c5 && c5==c9 && c9== "O"){
        winner(c9);
    }
    else if (c2==c5 && c5==c8 && c8== "O"){
        winner(c8);
    }
    else if (c3==c6 && c6==c9 && c9== "O"){
        winner(c9);
    }
    else if (c4==c5 && c5==c6 && c6== "O"){
        winner(c6);
    }
    else if (c7==c5 && c5==c3 && c3== "O"){
        winner(c3);
    }
    else if (c7==c8 && c8==c9 && c9== "O"){
     
        winner(c9);
    }
    else if(count==9){
      draw();
    }
}

function draw(){
  $("#draw").html("MATCH DRAW");
}

 function winner(winner){

   alert("winner "+winner );
   location.reload();
}