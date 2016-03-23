$(function(){
  $("#entry").submit(calculate);

  // declare variable that will be used to track 
  // the running total
  var total = 0;

  function calculate(event){
    event.preventDefault();

    // declare variable that will be used to track the 
    // amount entered
    var enteredAmount;

    // get information entered into the text field
    // and convert it to a float
    enteredAmount = parseFloat($("#newEntry").val());

    // set enteredAmount to 0 if the user enters input 
    // that is "not a number"
    if (isNaN(enteredAmount)) {
      enteredAmount = 0;
    }
    // clear the amount entered into the text field
    $("#newEntry").val("")
    
    // calculate new total
    total = total + enteredAmount;

    // display formatted total 
    $("#total").text("$" + total.toFixed(2));

    // append new line item to list of entries
    var lineItem = "<tr><td></td><td>$" + enteredAmount.toFixed(2) + "</td></tr>";
    $("#entries").append(lineItem);
  };
});


