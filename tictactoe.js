var x1=Math.random();
var x =Math.round(x1);
var firstplayername;
var secondplayername;
var ele;

var i;
var count=0;

function playerName(){

  gameBoardDisplay();
  //function call for start game button disable
  startButtondisable();
  //getting 1st player name
  firstplayername = document.getElementById("fpn").value; 
  //getting 2st player name
  secondplayername = document.getElementById("spn").value;

  //loop for printing player name with his X or O
  for (i = 0; i<3; i++){

    //condition check for 1 chance of the player
    if(x==1){
      document.getElementById("Name").innerHTML =firstplayername;
      x=0;
    }else{
      document.getElementById("Name").innerHTML= secondplayername;
      x=1;  
    }
  }

  //random assign X or O to player
  switch (x){
  
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


function print(buttonId){

  //print the X or O
  document.getElementById(buttonId).innerHTML = ele;
   
  //function call for check winning or draw condtion
  checkWinner();

  // button disable after click
  gameButtonDisable(buttonId)


  //function call to again change the player or his assign element
  playerName();
}

function checkWinner(){
    // take value from tictactoe.html
   
  var c1 = document.getElementById("1").innerHTML;
  var c2 = document.getElementById("2").innerHTML;
  var c3 = document.getElementById("3").innerHTML;
  var c4 = document.getElementById("4").innerHTML;
  var c5 = document.getElementById("5").innerHTML;
  var c6 = document.getElementById("6").innerHTML;
  var c7 = document.getElementById("7").innerHTML;
  var c8 = document.getElementById("8").innerHTML;
  var c9 = document.getElementById("9").innerHTML;
    
  count++; 
  // if(count==9){
  //   if(c1==c2 && c2==c3){
  //      winner(c1);
  //   }
  //   else if (c1==c4 && c4==c7){
  //       winner(c1);
  //   }
  //   else if (c1==c5 && c5==c9){
  //       winner(c1);
  //   }
  //   else if (c2==c5 && c5==c8){
  //       winner(c2);
  //   }
  //   else if (c3==c6 && c6==c9){
  //       winner(c3);
  //   }
  //   else if (c4==c5 && c5==c6){
  //       winner(c4);
  //   }
  //   else if (c7==c5 && c5==c3){
  //       winner(c7);
  //   }
  //   else if (c7==c8 && c8==c9){
  //       winner("winner" + c7);
  //   }
  //     //condition for O
  //   else if(c1==c2 && c2==c3 && c3=="O")
  //     {
  //       winner(c3);
        
  //     }
  //    else if (c1==c4 && c4==c7 && c7=="O") 
  //     {
  //       winner(c1);
  //     }
    
  //   else if (c1==c5 && c5==c9 && c9=="O") 
  //     {
  //       winner(c1);
  //     }
  //   else if (c2==c5 && c5==c8 && c8=="O") 
  //     {
  //       winner(c2);
  //     }
  //   else if (c3==c6 && c6==c9 && c9=="O") 
  //     {
  //       winner(c3);
  //     }
  //   else if (c4==c5 && c5==c6 && c6=="O") 
  //     {
  //       winner(c4);
  //     }
  //   else if (c7==c5 && c5==c3 && c3=="O") 
  //     {
  //       winner(c7);
  //     }
  //   else if (c7==c8 && c8==c9 && c9=="O") 
  //     {
  //       winner(c7);
  //     }
  //   else{
  //     draw();
  //   }
  // }else{ 
  //   //condtion for X

    if(c1==c2 && c2==c3){
       winner(c1);
    }
    else if (c1==c4 && c4==c7){
        winner(c1);
    }
    else if (c1==c5 && c5==c9){
        winner(c1);
    }
    else if (c2==c5 && c5==c8){
        winner(c2);
    }
    else if (c3==c6 && c6==c9){
        winner(c3);
    }
    else if (c4==c5 && c5==c6){
        winner(c4);
    }
    else if (c7==c5 && c5==c3){
        winner(c7);
    }
    else if (c7==c8 && c8==c9){
        winner(c7);
    }
    else if(count==9){
      draw();
    }
    //   //condition for O
    // else if(c1==c2 && c2==c3 && c3=="O")
    //   {
    //     winner(c3);
        
    //   }
    //  else if (c1==c4 && c4==c7 && c7=="O") 
    //   {
    //     winner(c1);
    //   }
    
    // else if (c1==c5 && c5==c9 && c9=="O") 
    //   {
    //     winner(c1);
    //   }
    // else if (c2==c5 && c5==c8 && c8=="O") 
    //   {
    //     winner(c2);
    //   }
    // else if (c3==c6 && c6==c9 && c9=="O") 
    //   {
    //     winner(c3);
    //   }
    // else if (c4==c5 && c5==c6 && c6=="O") 
    //   {
    //     winner(c4);
    //   }
    // else if (c7==c5 && c5==c3 && c3=="O") 
    //   {
    //     winner(c7);
    //   }
    // else if (c7==c8 && c8==c9 && c9=="O") 
    //   {
    //     winner(c7);
    //   } 
  
}

function draw(){

  document.getElementById("draw").innerHTML = "MATCH DRAW";
}

function winner(winner){

  document.getElementById("winner").innerHTML =  winner;
  location.reload();
}

function startButtondisable(){
 
  document.getElementById("startbutton").disabled = true;
}

function gameButtonDisable(buttonId){
  document.getElementById(buttonId).disabled = true;
}

function gameBoardDisplay(){
  document.getElementById("showgamegrid").style.display = 'block';
}
