const express = require("express")
const session = require("express-session")
const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


const users = [
  { "username": "ash", "password": "pikachu" },
  { "username": "misty", "password": "starmie" },
  { "username": "brock", "password": "onix" },
]
app.listen(5000, () => {
  console.log("The server is listening to port 5000");
})

app.get("/", (req, res) => {
  res.send("Welcome!")
})

app.get("/api/pokemon", async (req, res) => {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const resultJSON = await result.json()
    res.json(resultJSON.results)
  } catch (error) {
    console.log(error);
  }
})


// app.get("/index.html", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html")
// })

// app.get("/script.js", (req, res) => {
//   res.sendFile(__dirname + "/public/script.js")
// })


app.use(express.static("public"))


app.use(express.json())
app.post("/api/login", (req, res) => {
  // check if the username nad password are a match in the db 
  const username = req.body.username
  const password = req.body.password

  const userFound = users.find(aUser => (aUser.username == username && aUser.password == password))

  if (!userFound) {
    res.status(401).json({
      "msg": "Invalid Credentials."
    })
    return
  }

  req.session.favorites = []

  res.json({
    "msg": "The login is all good."
  })

})



app.post("/api/favorite", (req, res) => {
  console.log(req.body);
  if (!req.session.favorites.includes(req.body.pokemon))
    req.session.favorites.push(req.body.pokemon)

  res.json({
    "msg": "all good the push is successful",
    "pokemonThatJustGotPush": req.body.pokemon
  })
})

app.get("/api/favorites", (req, res) => {
  res.json(req.session.favorites)
})