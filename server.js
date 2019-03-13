var express = require('express');
var myApp1=express();
var mongojs = require('mongojs');
var db=mongojs('todolist',['todolist']);
var bodyParser=require('body-parser');


myApp1.use(express.static(__dirname+"/public"));
myApp1.use(bodyParser.json());

myApp1.get('/todolist',function(req,res){

  db.contactlist.find(function(error,docs) {
        
           res.json(docs);
         });
});

 myApp1.post('/todolist',function (req,res) {
 
       db.contactlist.insert(req.body,function (err,doc) {
        res.json(doc);
      })

});

myApp1.delete('/todolist/:id',function(req,res) {
       var myId=req.params.id;
     
      db.contactlist.remove({_id: mongojs.ObjectId(myId)},function (err,doc) {
                  res.json(doc);
      })
});


myApp1.listen(4000);
console.log('server running at http');
