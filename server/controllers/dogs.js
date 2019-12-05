  
// Use console.log so you can know where something goes wrong (if it does).
console.log("dogs.js is running")
const mongoose = require("mongoose");
const Dog = mongoose.model("Dog"); //register model 

class DogController{
    index(req, res) {
        Dog.find({}) // return Promise
            .then(dogs => res.render("index", {dogs})) // when it properly resolves we get .then
            .catch(err =>  res.json(err)); // in case it didn't get resolvea correctly
    };
    
    create(req, res) { // creating new dog
        let dog = new Dog(req.body);
        dog.save()
            .then(() => res.redirect("/"))
            .catch(err => res.json(err));
        console.log(req.body) // console log dog we created
    
    };

    //edit method
    edit(req, res) {
        let _id = req.params._id;
        Dog.findOne({_id})
        .then(dog => res.render("edit", {dog}))
        .catch(err =>res.json(err));

    }

    //update method
    update(req, res){
        let _id = req.params._id;
        Dog.findByIdAndUpdate({_id}, req.body, {runValidators: true})//last part runs validator
            .then( () => res.redirect("/"))
            .catch(err => res.json(err));
    }

    //delete method
    delete(req, res){
        let _id = req.params._id;
        Dog.findByIdAndRemove(req.params._id)
            .exec()
            .then( () => res.redirect("/"))
            .catch(err => res.json(err));
    }


}

module.exports = new DogController();





