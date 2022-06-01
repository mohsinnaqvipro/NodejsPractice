var express = require('express');
var router = express.Router();
const axios = require('axios').default;
// const data = require('../public/data')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users');
  res.send(users.data);
});

// module.exports = router;
module.exports = router;


