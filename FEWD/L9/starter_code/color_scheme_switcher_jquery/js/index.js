$(document).ready(function(){

  $('#grayButton').click(switchGray);
  $('#whiteButton').click(switchWhite);
  $('#greenButton').click(switchGreen);


  function switchGray() {
    // The following code reads as the following:
    // "Select the body tag and add a 'class' attribute with a value of 'gray'"
    $('body').attr('class', 'gray');
  }

  function switchWhite() {

    $('body').attr('class', 'white');
  }

   function switchGreen() {

    $('body').attr('class', 'green');
  }

  // 1) Add the code to accomodate using jQuery
  //    to make the other buttons work as expected

  // 2) There always more then one way to do things,
  //    practice your research skills to look up another
  //    way to add a class to an element using jquery
});
