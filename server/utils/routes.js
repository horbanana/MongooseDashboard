
// Use console.log so you can know where something goes wrong (if it does).
console.log("routes.js is running")
const Dogs = require("../controllers/dogs")


module.exports = function(app){//tell what we want to get back (gives back a function)

    app.get("/", Dogs.index); 
    app.post("/dog",Dogs.create);
    app.get("/dog/:_id", Dogs.edit);
    app.post("/dog/:_id", Dogs.update);
    app.get("/dog/delete/:_id", Dogs.delete);

}

