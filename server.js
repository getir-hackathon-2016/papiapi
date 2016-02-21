var express=require('express');
var app=express();
var contacts=require('./database/connect.js');
var bodyParser = require('body-parser');

/*var person=new contacts({
name:"sandeep",
email:"sandeep@gmail.com",
mobile:9876876787
});
person.save(function(err){
if(err)
	console.log("unsuccessful");
else
	console.log("successfull");
});
*/
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.get("/contactList",function(req,res){

	contacts.find({},function(err,users){

		res.json(users);
	})
});

app.post('/contactList',function(req,res){

//console.log(req.body);
var x=req.body;
var person=new contacts(x);
person.save(function(err,person){
     if(err)
     	console.log("unsuccessfull");
     else
     {
     	console.log("successfull");
     	res.json(person);
     }
	
});
});

app.delete("/contactList/:id",function(req,res){
var id=req.params.id;
console.log(id);
contacts.findByIdAndRemove(id,function(err,users){
	if(err)
console.log("unsuccessfull");
else
{
	console.log(users);
	res.json(users);
}


});

});

app.get("/contactList/:id",function(req,res){
	var id=req.params.id;
	console.log(id);

	//contacts.findById(id,function(err,user){

	//	console.log(use
});


app.listen(5000);
console.log("server running at port no 5000");