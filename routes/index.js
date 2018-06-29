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
    res.send(jsonString);
    //client.end();
  });
});

/* Insert Author */
router.post("/insert_author", function (req, res, next) {
  var anthorName = req.body.authorName;

  mc.query("insert into author (author_name) values ('" + anthorName + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        message: "New task has been created successfully."
      });
    }
  );
  // client.query("select * from author", (err, result) => {
  //   console.log(result.rows);

  //   var jsonString = JSON.stringify(result.rows);
  //   res.send(jsonString);
  //   //client.end();
  // });
});


/* GET Book */
router.get("/get_books", function (req, res, next) {
  client.query("select * from books", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* GET Publisher */
router.get("/get_publisher", function (req, res, next) {
  client.query("select * from publisher", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* GET Users */
router.get("/get_users", function (req, res, next) {
  client.query("select * from users", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* GET category */
router.get("/get_category", function (req, res, next) {
  client.query("select * from category", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

module.exports = router;