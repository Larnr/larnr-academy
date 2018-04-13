var express = require('express');
var router = express.Router();

router.get('/test', (req, res) => {
    res.set("Cache-Control", "public, max-age=300, s-maxage=600");
    res.render('index');
});

router.get('/data', (req, res) => {
    res.set("Cache-Control", "public, max-age=300, s-maxage=600");
    res.render('data');
});

module.exports = router;