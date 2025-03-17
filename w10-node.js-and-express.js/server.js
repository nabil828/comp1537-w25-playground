const express = require("express")
const app = express()

app.listen(3000, () => {
  console.log("The server is successfuly listening to port 3000");
})

const session = require("express-session");

// app.use(
//   session({
//     secret: "mySecretKey",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

var FileStore = require('session-file-store')(session);
var fileStoreOptions = {};
app.use(session({
  store: new FileStore(fileStoreOptions),
  secret: 'keyboard cat'
}));

app.get("/set-session/:id", (req, res) => {
  req.session.username = req.params.id
  req.session.loggedIn = true
  req.session.locale = "en"
  console.log(req.session);
  res.send("Session set!");
});

app.get("/get-session", (req, res) => {
  res.send(`Username: ${req.session.username}`);
});



