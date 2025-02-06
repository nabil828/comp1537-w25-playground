// // Step 1: Define calculate function
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


function addFunction() {
  x = $("#op1").val()
  y = $("#op2").val()

  z = calculate(Number(x), "+", Number(y))
  $("#result").html(z)
}


function setup() {
  $("#addBtn").click(addFunction)
}

$(document).ready(setup) 