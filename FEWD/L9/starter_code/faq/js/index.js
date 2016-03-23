$(function() {

$('#answer1').hide();
$('#question1').click(ShowAnswer1);

function ShowAnswer1 () {
	
	$('#answer1').slideToggle();
}

$('#answer2').hide();
$('#question2').click(ShowAnswer2);

function ShowAnswer2 () {
	
	$('#answer2').slideToggle();
}

});