const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function (req, res) {
    res.send("Hallo");
    //res.render("index.html");
});



//running server
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Express server is running...");
});