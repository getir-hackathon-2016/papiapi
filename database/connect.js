var mongoose = require('mongoose');
mongoose.connect("mongodb://atalayhuryasar:atalay1907@ds031587.mongolab.com:31587/atalaydb");

var Schema = mongoose.Schema;

var userSchema = new Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
mobile:{type:Number,required:true}
},{collection:"User"});

var contact=mongoose.model('contact',userSchema);

module.exports=contact;