const form = document.querySelector("form")
const weatherDiv = document.getElementById("weatherDiv")



form.addEventListener("submit", async (event) => {
  event.preventDefault();


  const response = await fetch(`https://backend-tues-w25-comp1537.onrender.com/weather?city=${cityInput.value}`)

  const responseJSON = await response.json()

  weatherDiv.innerHTML = `
    <p>Temperature: ${responseJSON.temperature}</p>
    <p>Description: ${responseJSON.Description}</p>
    <img src="http://openweathermap.org/img/w/${responseJSON.icon}.png" alt="" />
  `
})