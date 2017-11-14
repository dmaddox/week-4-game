//Setup variables
var wins = 0;
var losses = 0;
var goal = getRandomIntInclusive(19, 120);
var score = 0;
var emerald = 0;
var sapphire = 0;
var moonstone = 0;
var opal = 0;




//game goal setup
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
$("#goal").text(goal);


//gem click functions
$("#emerald").on("click", function () {
	if (emerald == 0) {
		emerald = Math.floor(Math.random() * 12) + 1;
		score += emerald;
		scoreCheck();
	} else {
		score += emerald;
		scoreCheck();
	}		
});

$("#sapphire").on("click", function () {
	if (sapphire == 0) {
		sapphire = Math.floor(Math.random() * 12) + 1;
		score += sapphire;
		scoreCheck();
	} else {
		score += sapphire;
		scoreCheck();
	}		
});

$("#moonstone").on("click", function () {
	if (moonstone == 0) {
		moonstone = Math.floor(Math.random() * 12) + 1;
		score += moonstone;
		scoreCheck();
	} else {
		score += moonstone;
		scoreCheck();
	}		
});

$("#opal").on("click", function () {
	if (opal == 0) {
		opal = Math.floor(Math.random() * 12) + 1;
		score += opal;
		scoreCheck();
	} else {
		score += opal;
		scoreCheck();
	}		
});

//regularly check if the scores match
function scoreCheck() {
	$("#score").text(score);
	if (score == goal) {
		wins++;
		$("#wins").text(wins);

		reset();
	} else if (score > goal) {
		losses++;
		$("#losses").text(losses);
		reset();
	} else {

	}
}

//reset
function reset() {
goal = getRandomIntInclusive(19, 120);
score = 0;
emerald = 0;
sapphire = 0;
moonstone = 0;
opal = 0;
$("#goal").text(goal);
$("#score").text(score);
}