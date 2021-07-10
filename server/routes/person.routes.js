const PersonController = require('../controllers/person.controller');

module.exports = app => {
    app.get("/api/person/all", PersonController.findAllPeople)
    app.post("/api/person/create", PersonController.createOnePerson)
    app.get("/api/person/random", PersonController.findRandomPerson)
    app.get("/api/person/:Personid", PersonController.findAPerson)
    app.put("/api/person/update/:Personid", PersonController.updateAPerson)
    app.delete("/api/person/delete/:Personid", PersonController.deleteOnePerson)
}
