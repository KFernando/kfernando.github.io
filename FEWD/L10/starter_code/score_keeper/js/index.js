$(function() {

	var score = 0;
	
	$("#add5").click(plusFive);
	$("#add10").click(plusTen);
	$("#sub1").click(minusOne);
	$("#zero").click(reset);

	function plusFive(){
		//get the score, add 5 to the score
		score = score + 5;
		//print new score to the screen
		$("#result").text(score);
	}
	

	function plusTen(){
		//get the score, add 10 to the score
		score = score + 10;
		//print new score to the screen
		$("#result").text(score);
	}


	function minusOne(){
		//get the score, minus 1 to the score
		score = score - 1;
		//print new score to the screen
		$("#result").text(score);
	}


	function reset(){
		score = 0;
		//print new score to the screen
		$("#result").text(score);
	}


});