var express = require('express');
var router = express.Router();

const {
  Pool,
  Client
} = require('pg')

const client = new Client()
client.connect()




/* GET home page. */
router.get('/', function (req, res, next) {
  client.query('select * from author', (err, result) => {
    console.log(result.rows)
    res.json({
      test: 123
    })
    client.end()
  })
  /*res.render('index', {
    title: 'Express'
  });*/
});

module.exports = router;