var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.set("Cache-Control", "public, max-age=300, s-maxage=600");
    res.render('super/index', { title: "Academy Page" });
});

module.exports = router;