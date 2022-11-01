// requiring node modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// setting of the playground
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index");
});


app.listen(3001, function() {
    console.log("Server started on port 3001");
});