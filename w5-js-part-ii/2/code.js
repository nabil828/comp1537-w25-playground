function main() {

  // console.log($("#item2").html());
  // console.log($("#item2").parent().html());
  // console.log($("#item2").parent().children());
  // console.log($("#item2").siblings());
  // console.log($("#item2").next().html());
  // console.log($("#item2").nextAll());
  // console.log($("#item2").nextUntil("#itemx"));
  console.log($("ul").find("#itemx"));
}


$(document).ready(main)