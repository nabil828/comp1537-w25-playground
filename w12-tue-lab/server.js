const express = require("express")
const app = express()
let unicorns = require('./data.js')



app.use(express.static("public"))

app.get(`/unicorns`, (req, res) => {
  const namePassedFromClient = req.query.name
  const vaccinatedPassedFromClient = req.query.vaccinated
  const weightPassedFromClient = req.query.weight

  let result = unicorns.filter((aUnicorn) => aUnicorn.name == namePassedFromClient)

  if (weightPassedFromClient)
    result = result.filter((aUnicorn) => aUnicorn.weight == weightPassedFromClient)
  res.json(result)
})

app.post(`unicorns`, (req, res) => {
  // push()
})

app.put(`unicorns`, (req, res) => {
  // map()
})

app.delete(`unicorns`, (req, res) => {
  // splice()
})






app.listen(3000, () => {
  console.log(`all is good`);
})