
function setup() {
  // read some operands, process, and produce an output
  $("#btn1").click(
    function () {
      x = $("#input1").val()
      y = $("#input2").val()

      $("#resultPara").text(`The result ${Number(x) + Number(y)}`) // write
    }

  )
}

$(document).ready(setup) // setup is an event handler