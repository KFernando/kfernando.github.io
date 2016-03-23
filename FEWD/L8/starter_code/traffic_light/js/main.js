  
$(document).ready(function(){

  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

    function illuminateRed() {
      clearLights();
      $('#stopLight').css('backgroundColor','red');
    }

    function illuminateYellow() {
      clearLights();
      $('#slowLight').css('backgroundColor','yellow');
    }

    function illuminateGreen() {
      clearLights();
      $('#goLight').css('backgroundColor','green');
    }

    function clearLights() {
      $('#stopLight').css('backgroundColor','black');
      $('#slowLight').css('backgroundColor','black');
      $('#goLight').css('backgroundColor','black');
    }

 });


