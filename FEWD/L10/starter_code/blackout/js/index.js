$(function() {

	var lighton= true;

	$("#light_switch").click(toggle);
	//select element
	//click button
	//change background color
	function toggle() {

		//if lighton is true
		//then change to bg color to black
		//change lightOn to false

		//if lighton is false
		//then change to bg color to white
		//change lightOn to true

		if (lighton === true){
		 	$("body").css("background","black");
		 	lightOn = false;

		} else {

		 	$("body").css("background","white");
		 	lightOn = true;

		}
		
	}

});