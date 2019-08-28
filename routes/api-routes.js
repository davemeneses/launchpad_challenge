const db = require("../models");

module.exports = function(app) {
  app.get("/api/votes", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Vote.findAll({}).then(function(votes) {
      // We have access to the votes as an argument inside of the callback function
      res.json(votes);
    });
  });
  app.post("/api/vote", function(req, res) {
    // console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Todo.create({
      email: req.body.text,
      framework: req.body.complete
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });
};
