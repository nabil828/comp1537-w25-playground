
function addFunction() {
  x = $("#op1").val() // read
  y = $("#op2").val() //read

  z = calculate(Number(x), "+", Number(y))
  $("#resultParagraph").html(z) // write
}

function calculate(num1, operator, num2) {
  // TODO
  // Step 2: Switch on the operator
  // Step 3: Handle addition
  // Step 4: Handle subtraction
  // Step 5: Handle multiplication
  // Step 6: Handle division
  // Step 7: Handle invalid operator
  if (operator == "+")
    return num1 + num2
}



function setup() {
  
  $("#op1").val(1) // write
  $("#op2").val(2) // write
  $("#resultParagraph").html("<b>THe is the result Para</b>") // write

  $("#addBtn").click(addFunction) // addFunction is a callback
  // callback is a function that is gonna be called in future
  // addFunction is an EventHandler 
}

jQuery(document).ready(setup) 