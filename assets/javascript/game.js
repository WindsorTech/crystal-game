  $(document).ready(function(){ //start of JQuery
  //Defining all the variables:
  var userScore = 0;

  var valueRed

  var valueBlue

  var valueYellow

  var valueGreen
  // Defining the variable which generates the Random Number
  var randomNumber = 19 + Math.floor(Math.random() * 102);
    console.log(randomNumber);
  //Defining the variable with the random value of first crystal
  var valueOne = 1 + Math.floor(Math.random() * 12);
    console.log(valueOne);
  //Defining the variable with the random value of second crystal
  var valueTwo = 1 + Math.floor(Math.random() * 12);
    console.log(valueTwo);
  //Defining the variable with the random value of third crystal
  var valueThree = 1 + Math.floor(Math.random() * 12);
    console.log(valueThree);
  //Defining the variable with the random value of fourth crystal
  var valueFour = 1 + Math.floor(Math.random() * 12);
    console.log(valueFour);

  //Printing random number to its Div
  $('#randomNo').html(randomNumber);
  //Printing User Score to its Div
  $('#yourScore').html(userScore);

  //On the click of red crystal, assign the random valueOne to it
  $('#red')
  .click(function() {
    var valueRed = valueOne;
    console.log(valueRed);
    $('#yourScore').append(valueRed);
  });//append the value to be added later

  //On the click of blue crystal, assign the random valueTwo to it
   $('#blue')
  .click(function() {
    var valueBlue = valueTwo;
    console.log(valueBlue);
    $('#yourScore').append(valueBlue);
  });//append the value to be added later

  //On the click of yellow crystal, assign the random valueThree to it
   $('#yellow')
  .click(function() {
    var valueYellow = valueThree;
    console.log(valueYellow);
    $('#yourScore').append(valueYellow);
  });//append the value to be added later

  //On the click of green crystal, assign the random valueFour to it
  $('#green')
  .click(function() {
    var valueGreen = valueFour;
    console.log(valueGreen);
    $('#yourScore').append(valueGreen);
  });//append the value to be added later

  //NOW HOW DO I ADD ALL VALUES IN ORDER TO BUILD THE USER SCORE? GOT STUCK HERE.


})



