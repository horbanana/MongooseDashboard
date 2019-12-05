  
// Use console.log so you can know where something goes wrong (if it does).
console.log("mongoose.js is running");
const mongoose = require("mongoose");

module.exports = function(DB_NAME){
    //connectin to mongo database. DB_NAME is our database name
    mongoose.connect(`mongodb://localhost/${DB_NAME}`);
    require("../models/dog")
}
