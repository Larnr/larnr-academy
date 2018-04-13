var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.set("Cache-Control", "public, max-age=300, s-maxage=600");
    res.render('index', { title: "Index Page" });
});

router.get('/test', (req, res) => {
    res.set("Cache-Control", "public, max-age=300, s-maxage=600");
    res.render('index', {title: "Test Page"});
});

router.get('/data', (req, res) => {
    res.set("Cache-Control", "public, max-age=300, s-maxage=600");
    res.render('data', { title: "Data Page" });
});

module.exports = router;