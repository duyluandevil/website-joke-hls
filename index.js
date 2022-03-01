var express = require('express')
var app = express()

var port = process.env.PORT || 3000; // Create Port for HTTP 

var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cookieParser())

var jokeRouter = require("./router/joke.route") // Use router joke

app.set('view engine', 'pug')
app.set('views', "./views")

app.use("/", jokeRouter)

app.listen(port,() =>{
    console.log("Server is listening on port 3000...")
});

