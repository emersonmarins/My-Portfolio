const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('teste', {title:"A natureza é linda!"});
});

module.exports = router;