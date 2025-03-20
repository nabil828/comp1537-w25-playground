const express = require("express")
const axios = require("axios");
const cors = require("cors")

const app = express()

app.use(cors())
// enabling CORS
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// a route 
app.get("/weather", async (req, res, next) => {
  const city = req.query.city;


  const responseJSON = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`)

  res.json({
    temperature: responseJSON.data.main.temp,
    description: responseJSON.data.weather[0].description,
    icon: responseJSON.data.weather[0].icon,
  })
})





app.listen(3000, () => {
  console.log("Server is listening to port 3000!");
})