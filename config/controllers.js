var express = require("express");

var router = express.Router();


var cat = require("../models/burger.js");



router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      burgers: data
    }
    
    

    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  cat.create([
    "burger_name", "devoured"
  ], [
   req.body.name, false
  ], function(result) {

    res.json({ id: result.insertId });
    
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
 

  cat.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
    
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



module.exports = router;