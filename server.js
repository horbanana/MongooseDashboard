  
// Use console.log so you can know where something goes wrong (if it does).
console.log("server.js is running")

const express = require("express"),
        port = 8000,
    DB_NAME = "dogs", //database name is here
        app = express();

app.use(express.urlencoded({extended: true})); //allowed us to get form data IMPORTANT LINE
app.set('views', __dirname + '/views'); // rendering page
app.set('view engine', 'ejs');// rendering page

require("./server/utils/mongoose")(DB_NAME);
require("./server/models/dog"); //export info from another file. run our schema 
require("./server/utils/routes")(app);//call function and pass app

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
