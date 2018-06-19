var express = require("express");
var router = express.Router();

const {
  Pool,
  Client
} = require("pg");

const client = new Client();
client.connect();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

/* GET Author */
router.get("/get_author", function (req, res, next) {
  client.query("select * from author", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString)
    //client.end();
  });

  /*res.render('index', {
    title: 'Express'
  });*/
});

module.exports = router;