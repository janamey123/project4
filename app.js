const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function (req, res) {
    res.render("index.html");
});
app.get("/types", function (req, res) {
    res.render("types.html");
});
app.get("/challenges", function (req, res) {
    res.render("challenges.html");
});
app.get("/testing", function (req, res) {
    res.render("testing.html");
});



//running server
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Express server is running...");
});