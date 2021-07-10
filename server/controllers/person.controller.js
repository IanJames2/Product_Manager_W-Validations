const Person = require("../models/Person.model")

module.exports.findAllPeople = (req, res) => {
    Person.find()
        .then(allPeople => {
            console.log("*****FINDING ALL People HAHA*****")
            res.json({results: allPeople})
        })
        .catch(err => res.json(err))}

module.exports.findAPerson = (req, res) =>{
    Person.findOne({_id: req.params.Personid}) //BUILT IN FUNCTION!
    .then(onePerson => res.json({results: onePerson}))
    .catch(err => res.json(err))}

module.exports.createOnePerson = (req, res) => {
    Person.create(req.body)
        .then(newPerson=> res.json({results: newPerson}))
        .catch(err => res.json(err))}

module.exports.updateAPerson = (req, res) =>{
    Person.findOneAndUpdate(
        {_id: req.params.Personid},
        req.body,
        {new:true, runValidators:true})
        .then(updateAPerson => res.json({results: updateAPerson}))
        .catch(err => res.json(err))}

module.exports.deleteOnePerson = (req, res)=>{
    Person.deleteOne({_id: req.params.Personid})
    .then(deletedResult => res.json({results: deletedResult}))
    .catch(err => res.json(err))
}

module.exports.findRandomPerson = (req,res)=>{
    console.log("***********FINDING A RANDOM PERSON**********")
    Person.find()
        .then(allpeople => {
            let maxindex = allpeople.length
            console.log(Math.random(maxindex))
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            let randomNum = getRandomInt(maxindex)
            console.log("RANDOM INDEX IS -->", randomNum)

            res.json({results: allpeople[randomNum]})
        })
        .catch(err => res.json(err))}