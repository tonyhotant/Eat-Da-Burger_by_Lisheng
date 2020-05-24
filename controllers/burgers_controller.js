let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    let result = {
      burger: data,
    };
    console.log(result);
    res.render("index", result);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function (result) {
    // Send back the ID of the new quote
    // res.json({ id: result.insertId });
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      res.redirect("/");
      // res.status(200).end();
    }
  );
});

module.exports = router;
