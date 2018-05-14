var express = require("express");

var router = express.Router();

var hbsObject;

var cat = require("../models/burger.js");



router.get("/", function(req, res) {
  cat.all(function(data) {
    hbsObject = {
      burgers: data
    }
    
    

    res.render("index", hbsObject);
  });
});

router.get("/", function(req, res) {
 res.json(hbsObject);
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