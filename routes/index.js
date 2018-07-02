var express = require("express");
var router = express.Router();

const { Pool, Client } = require("pg");

const client = new Client();
client.connect();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

/* GET Author */
router.get("/get_author", function(req, res, next) {
  client.query("select * from author", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert Author */
router.post("/insert_author", function(req, res, next) {
  var authorName = req.body.authorName;

  client.query(
    "insert into author (author_name) values ('" + authorName + "');",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        authorName: authorName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Delete Author */
router.post("/delete_author", function(req, res, next) {
  var authorName = req.body.authorName;

  client.query(
    "update author set status=0 where author_name='" + authorName + "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        authorName: authorName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Update Author */
router.post("/update_author", function(req, res, next) {
  var authorName = req.body.authorName;
  var ID = req.body.ID;

  client.query(
    "update author set author_name='" +
      authorName +
      "' where author_id='" +
      ID +
      "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        authorName: authorName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* GET Book */
router.get("/get_books", function(req, res, next) {
  client.query("select * from books", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert Book */
router.post("/insert_book", function(req, res, next) {
  var bookName = req.body.bookName;
  var bookTitle = req.body.bookTitle;
  var bookDescription = req.body.bookDescription;
  var bookPublishDate = req.body.bookPublishDate;
  var bookIsbn = req.body.bookIsbn;
  var bookPrice = req.body.bookPrice;
  var authorID = req.body.authorID;
  var publisherID = req.body.publisherID;

  client.query(
    "insert into books (book_name, book_title, book_description, book_publish_date, book_isbn, book_price, author_id, publisher_id) values ('" +
      bookName +
      "','" +
      bookTitle +
      "','" +
      bookDescription +
      "','" +
      bookPublishDate +
      "','" +
      bookIsbn +
      "','" +
      bookPrice +
      "','" +
      authorID +
      "','" +
      publisherID +
      "');",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        bookName: bookName,
        bookTitle: bookTitle,
        bookDescription: bookDescription,
        bookPublishDate: bookPublishDate,
        bookIsbn: bookIsbn,
        bookPrice: bookPrice,
        authorID: authorID,
        publisherID: publisherID,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Update Book */
router.post("/update_book", function(req, res, next) {
  var bookName = req.body.bookName;
  var bookTitle = req.body.bookTitle;
  var bookDescription = req.body.bookDescription;
  var bookPublishDate = req.body.bookPublishDate;
  var bookIsbn = req.body.bookIsbn;
  var bookPrice = req.body.bookPrice;
  var authorID = req.body.authorID;
  var publisherID = req.body.publisherID;
  var ID = req.body.ID;

  client.query(
    "update users set book_name='" +
      bookName +
      "',book_title='" +
      bookTitle +
      "',book_description='" +
      bookDescription +
      "',book_publish_date='" +
      bookPublishDate +
      "',book_isbn='" +
      bookIsbn +
      "',book_price='" +
      bookPrice +
      "',author_id='" +
      authorID +
      "',publisher_id='" +
      publisherID +
      "'where book_id='" +
      ID +
      "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        bookName: bookName,
        bookTitle: bookTitle,
        bookDescription: bookDescription,
        bookPublishDate: bookPublishDate,
        bookIsbn: bookIsbn,
        bookPrice: bookPrice,
        authorID: authorID,
        publisherID: publisherID,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Delete Book */
router.post("/delete_book", function(req, res, next) {
  var bookID = req.body.bookID;
  var bookName = req.body.bookName;

  client.query(
    "update books set state=0 where book_id='" +
      bookID +
      "' and book_name='" +
      bookName +
      "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        bookName: bookName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* GET Publisher */
router.get("/get_publisher", function(req, res, next) {
  client.query("select * from publisher", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert Publisher */
router.post("/insert_publisher", function(req, res, next) {
  var publisherName = req.body.publisherName;

  client.query(
    "insert into publisher (company_name) values ('" + publisherName + "');",
    function(error, results, fields) {
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
router.post("/delete_publisher", function(req, res, next) {
  var publisherName = req.body.publisherName;

  client.query(
    "update publisher set status=0 where company_name='" + publisherName + "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        publisherName: publisherName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Update Publisher */
router.post("/update_publisher", function(req, res, next) {
  var publisherName = req.body.publisherName;
  var ID = req.body.ID;

  client.query(
    "update publisher set company_name='" +
      publisherName +
      "' where publisher_id='" +
      ID +
      "';",
    function(error, results, fields) {
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
router.get("/get_users", function(req, res, next) {
  client.query("select * from users", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert User */
router.post("/insert_user", function(req, res, next) {
  var userName = req.body.userName;
  var userPassword = req.body.userPassword;
  var email = req.body.email;
  var phone = req.body.phone;
  var address = req.body.address;

  client.query(
    "insert into users (user_name,user_password,user_email,phone,address) values ('" +
      userName +
      "','" +
      userPassword +
      "','" +
      email +
      "','" +
      phone +
      "','" +
      address +
      "');",
    function(error, results, fields) {
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
router.post("/delete_user", function(req, res, next) {
  var userName = req.body.userName;
  var userPassword = req.body.userPassword;

  client.query(
    "update users set status=0 where user_name='" +
      userName +
      "' and user_password='" +
      userPassword +
      "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        userName: userName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Update User */
router.post("/update_user", function(req, res, next) {
  var userName = req.body.userName;
  var userPassword = req.body.userPassword;
  var email = req.body.email;
  var phone = req.body.phone;
  var address = req.body.address;
  var ID = req.body.ID;

  client.query(
    "update users set user_name='" +
      userName +
      "',user_password='" +
      userPassword +
      "',user_email='" +
      email +
      "',phone='" +
      phone +
      "',address='" +
      address +
      "'where user_id='" +
      ID +
      "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        uuserName: userName,
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

/* GET category */
router.get("/get_category", function(req, res, next) {
  client.query("select * from category", (err, result) => {
    console.log(result.rows);

    var jsonString = JSON.stringify(result.rows);
    res.send(jsonString);
    //client.end();
  });
});

/* Insert category */
router.post("/insert_category", function(req, res, next) {
  var categoryName = req.body.categoryName;

  client.query(
    "insert into category (category_name) values ('" + categoryName + "');",
    function(error, results, fields) {
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
router.post("/delete_category", function(req, res, next) {
  var categoryName = req.body.categoryName;

  client.query(
    "update category set status=0 where category_name='" + categoryName + "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        categoryName: categoryName,
        message: "New task has been created successfully."
      });
    }
  );
});

/* Update category */
router.post("/update_category", function(req, res, next) {
  var categoryName = req.body.categoryName;
  var ID = req.body.ID;

  client.query(
    "update category set category_name='" +
      categoryName +
      "' where category_id='" +
      ID +
      "';",
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        data: results,
        categoryName: categoryName,
        message: "New task has been created successfully."
      });
    }
  );
});

module.exports = router;
