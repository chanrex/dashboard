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
  client.query("select * from author where status='1'", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert Author */
router.post('/insert_author', function (req, res, next) {
  var anthorName = req.body.authorName;

  client.query("insert into author (author_name) values ('" + anthorName + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        anthorName: anthorName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Delete Author */
router.post('/delete_author', function (req, res, next) {
  var anthorName = req.body.authorName;

  client.query("update author set status=0 where author_name='" + anthorName + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        anthorName: anthorName,
        message: "New task has been created successfully."
      });
    }
  );
});


/* GET Book */
router.get("/get_books", function (req, res, next) {
  client.query("select * from books where status='1'", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});


/* GET Publisher */
router.get("/get_publisher", function (req, res, next) {
  client.query("select * from publisher where status='1'", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert Publisher */
router.post('/insert_publisher', function (req, res, next) {
  var publisherName = req.body.publisherName;

  client.query("insert into publisher (company_name) values ('" + publisherName + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        publisherName: publisherName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Delete Publisher */
router.post('/delete_publisher', function (req, res, next) {
  var publisherName = req.body.publisherName;

  client.query("update publisher set status=0 where company_name='" + publisherName + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        publisherName: publisherName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* GET Users */
router.get("/get_users", function (req, res, next) {
  client.query("select * from users where status='1'", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert User */
router.post('/insert_user', function (req, res, next) {
  var userName = req.body.userName;
  var userPassword = req.body.userPassword;
  var email = req.body.email;
  var phone = req.body.phone;
  var address = req.body.address;

  client.query("insert into users (user_name,user_password,user_email,phone,address) values ('" + userName + "," + userPassword + "," + email + "," + phone + "," + address + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        userName: userName,
        userPassword,
        userPassword,
        email: email,
        phone: phone,
        address: address,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Delete User */
router.post('/delete_user', function (req, res, next) {
  var userName = req.body.userName;
  var userPassword = req.body.userPassword;

  client.query("update user set status=0 where user_name='" + userName + "' and user_password='" + userPassword + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        publisherName: publisherName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* GET category */
router.get("/get_category", function (req, res, next) {
  client.query("select * from category where status='1'", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert category */
router.post('/insert_category', function (req, res, next) {
  var categoryName = req.body.categoryName;

  client.query("insert into category (category_name) values ('" + categoryName + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        categoryName: categoryName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Delete category */
router.post('/delete_category', function (req, res, next) {
  var categoryName = req.body.categoryName;

  client.query("update category set status=0 where category_name='" + categoryName + "');",
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        publisherName: publisherName,
        message: "New task has been created successfully."
      });
    }
  );
});

module.exports = router;