$( document ).ready(function(){
    // Generates random number to between 19 and 120
    var Random=Math.floor(Math.random()*102+19);
    
    // Display random number
    $("#randomNumber").text(Random);
    
    //Generate random number for each crystal between 1 and 12
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    // Variables to keep track of wins, losses and total
    var yourTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset game
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $("#randomNumber").text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $("#yourScore").text(yourTotal);
        } 
  // Display wins
  function playerWins(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function playerLoses(){
  alert ("You lost!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals
    $('.red').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            playerWins();
          }
          else if ( playerTotal > Random){
            playerLoses();
          }   
    })  
    $('.blue').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            playerWins();
          }
          else if ( playerTotal > Random){
            playerLoses();
          } 
    })  
    $('.yellow').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
  
            if (playerTotal == Random){
                playerWins();
          }
          else if ( playerTotal > Random){
            playerLoses();
          } 
    })  
    $('.green').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
                playerWins();
          }
          else if ( playerTotal > Random){
            playerLoses();
          }
    });   
  }); 