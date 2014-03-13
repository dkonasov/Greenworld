
/*
 * GET home page.
 */
var appinfo=require('../models/appinfo.js');
exports.index = function(req, res){
appinfo.find({}, function(err, docs){

if(!err){
console.log(docs);
res.render('index', { title: 'Главная страница', appinfo: docs});
}

});



};