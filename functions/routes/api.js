var express = require('express');
var router = express.Router();
var fb = require('../firebase');
// const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// admin.initializeApp(functions.config().firebase);

var db = fb.database();

function writeUsers(userid, password, name, email, imageUrl){
    db.ref('users/' + userid).set({
        password: password,
        name: name,
        email: email,
        profile_picture: imageUrl
    });
}

function getUsers(refUrl){
    return new Promise((resolve, reject)=>{
        refUrl.on('value', snap=>{
            try{
                resolve(snap.val());
            }catch(err){
                reject(err);
            } 
        });
    });
}

function deleteUser(userid){
    db.ref('users/' + userid).set({});
}


router.get('/', async(req, res, next)=>{
    res.set("Cache-Control", "public, max-age=300, s-maxage=600");

    

    // getUsers().then(data=>{
    //     console.log(data);   
    //     res.json(data);

    // }).catch(err=>{
    //     console.log(err);
    // });

    var users = await getUsers(db.ref().child('users'));

    res.json(users);
    
    //res.json({status:"Active"});
});

router.get('/set', function(req, res, nect){
    writeUsers('admin', 'pass', 'New Admin', 'admin@example.com', 'http://www.shibajidebnath.com/logo.png');
    res.redirect('/api');
});

router.get('/del/:id', function (req, res, nect) {
    deleteUser(req.params.id);
    res.redirect('/api');
});

router.get('/fapi', function (req, res, next) {

});

router.get('/fset', function(req, res, next){
    writeUsers('admin', 'pass', 'New Admin', 'admin@example.com', 'http://www.shibajidebnath.com/logo.png');
    res.redirect('/api');
});

module.exports = router;