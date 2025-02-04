
function setup() {
  // read some operands, process, and produce an output
  $("#btn1").on("click",
    function () {
      x = $("#input1").val()
      y = $("#input2").val()

      $("#resultPara").append(`
          <p class="blue-background">
            The result ${Number(x) + Number(y)}
            <button class="hideBtns">HideMe!</button>
          </p>
      `) // write
    }

  )

  // bind functionally to bind the clicking event to the button
  $("body").on("click", ".hideBtns",
    function () {
      $(this).parent().remove()
    }
  )
}

$(document).ready(setup) // setup is an event handler