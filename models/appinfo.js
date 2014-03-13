var mongoose=require('mongoose');
var Schema=mongoose.Schema
,ObjectId=Schema.ObjectId;

var appinfo=new Schema({

appinfo: {type: String, require: true, trim: true, unique: true},
appdesc: {type: String, require: true, trim: true, unique: true},
homeurl: {type: String, require: true, trim: true, unique: true},
});
module.exports = mongoose.model('appinfo', appinfo);