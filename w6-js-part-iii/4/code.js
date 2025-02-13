
function setup() {
  $.ajax({
    "url": "https://api.thecatapi.com/v1/images/search?limitjksdhfskdfhk=10",
    
    "success": function (response) {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        console.log(response[i].url);
        $("#result").append(
          `
            <img src="${response[i].url}" alt="" />
          `
        )
      }
    },
    
    "error": function () {
      console.log(222);
    }
  })
}



$(document).ready(setup)