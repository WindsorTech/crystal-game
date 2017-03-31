$(document).ready(function() {

//Global varibales
var win = 0;
var loss = 0;
var cpuNumber = 0;
var valueRed = 0;
var valueBlue = 0;
var valueYellow = 0;
var valueGreen = 0;
var userScore = 0;

//generate random numbers 
function randomNumber(min,max){
	return Math.floor(Math.random() *(max - min + 1) + min);
};

//reset game function
function reset() {
 	cpuNumber = 0;
 	valueRed = 0;
 	valueBlue = 0;
 	valueYellow = 0;
	valueGreen = 0;
	userScore = 0;
	$('#yourScore').text(0);
	startGame();
};

//compare score function
function checkScore() {
	if (userScore == cpuNumber) {
	win++;
	$('#yourWins').text(win);
	reset();
	};

	if (userScore > cpuNumber) {
		loss++;
		$('#yourLosses').text(loss);
		reset();
	};
};

//start game
function startGame(){
	//computer choose random number
		var numb1 = randomNumber(19,120);
		cpuNumber = numb1;
		$('#randomNo').text(cpuNumber);

	//diamond 1 choosen
		var numb2 = randomNumber(1,12);
		valueRed = numb2;

	//diamond 2 choosen
		var numb3 = randomNumber(1,12);
		valueBlue = numb3;

	//diamond 3 choosen
		var numb4 = randomNumber(1,12);
		valueYellow = numb4;

	//diamond 4 choosen
		var numb5 = randomNumber(1,12);
		valueGreen = numb5;

		debugger;

}

//click diamond 1
$("#red").click(function(){
	userScore += valueRed;
	$('#yourScore').text(userScore);
	checkScore();
});

//click diamond 2
$("#blue").click(function(){
	userScore += valueBlue;
	$('#yourScore').text(userScore);
	checkScore();
});

//click diamond 3 
$("#yellow").click(function(){
	userScore += valueYellow;
	$('#yourScore').text(userScore);
	checkScore();
});

//click diamond 4
$("#green").click(function(){
	userScore += valueGreen;
	$('#yourScore').text(userScore);
	checkScore();
});

startGame();

});

