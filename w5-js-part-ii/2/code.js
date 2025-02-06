function main() {
  // $("#p1").addClass("blue-background")
  // $("#p1").addClass("bg-cyan-500")
  // $("#p1").addClass("text-slate-300")
  // $("#p1").removeClass("bg-cyan-500")
  // $("#p1").css("background-color", "tomato")
  // $("#p1").addClass("bg-cyan-500 text-slate-300")
  // $("#p1")
  //   .addClass("bg-cyan-500")
  //   .addClass("text-slate-300")

  $("#p1").html(
    `
      <span class="bg-cyan-500"> 
        Some bluish text
      </span>
      other tes 
    `
  )

}


$(document).ready(main)