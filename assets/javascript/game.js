  $(document).ready(function(){ //start of JQuery

  var userScore = 0;

  var valueRed

  var valueBlue

  var valueYellow

  var valueGreen

  var randomNumber = 19 + Math.floor(Math.random() * 102);
    console.log(randomNumber);

  var valueOne = 1 + Math.floor(Math.random() * 12);
    console.log(valueOne);

  var valueTwo = 1 + Math.floor(Math.random() * 12);
    console.log(valueTwo);

  var valueThree = 1 + Math.floor(Math.random() * 12);
    console.log(valueThree);

  var valueFour = 1 + Math.floor(Math.random() * 12);
    console.log(valueFour);

  $('#randomNo').html(randomNumber);

  $('#yourScore').html(userScore);

  $('#red')
  .click(function() {
    var valueRed = valueOne;
    console.log(valueRed);

  });

   $('#blue')
  .click(function() {
    var valueBlue = valueTwo;
    console.log(valueBlue);

  });

   $('#yellow')
  .click(function() {
    var valueYellow = valueThree;
    console.log(valueYellow);

  });

  $('#green')
  .click(function() {
    var valueGreen = valueFour;
    console.log(valueGreen);

  });

  

    


})



