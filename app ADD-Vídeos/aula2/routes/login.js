const express = require('express');
const router = express.Router();
const db =  require('../models/insertdb');


/* GET home page. */
router.get('/',async (req, res, next) => {

  const alert = ""
  res.render('login',{alert});
  
});



module.exports = router;