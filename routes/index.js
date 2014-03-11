
/*
 * GET home page.
 */

exports.index = function(req, res){
  __site=getAppData();
  res.render('index', { title: 'Главная страница'});
};