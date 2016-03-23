
$(function(){

	//store input as Celsius
	
	var Celsius;
	var Fahrenheit;
	// Fahrenheit = Celsius * 1.8 + 32

	//calculate temperature when user clicks submit
	$("#submit").click(convert);

	function convert(event){
		event.preventDefault();
		
		//get value from #inputC
		//convert to integer
		Celsius = parseInt($("#InputC").val());

		//do the math
		Fahrenheit = (((Celsius * 9) / 5) + 32);

		//display result in #inputF
		$("#InputF").val(Fahrenheit);

		//change background image

		if (Fahrenheit < 80) {
			//alert("yay");
			$("body").attr("class","cold");
			$("#message").text("It's Cool.");
		}

		else if (Fahrenheit > 80) {

			$("body").attr("class","hot");
			$("#message").text("It's nice and sunny.");
		}


	};

	
});