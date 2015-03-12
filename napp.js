var express = require('express');
var app = express();
var port = process.env.PORT||8080;

//Routes+++++++++++++++++++++++++++++++++
//sample route with an old school route
app.get('/sample', function(req,res){
    res.send('this is a sample!');
});

//routes go here

var router = express.Router();
router.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});
//home page route
router.get('/',function(req,res){
    res.send('I am the home slice baby!');
});

//about page route
router.get('/about',function(req,res){
    res.send('I am the about page!!');
});
app.use('/',router);
//start the server +++++++++++++++++++++
app.listen(port);
console.log('the magic happens on port '+port);