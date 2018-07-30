var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname+"/";

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/hotspot",function(req,res){
  res.sendFile(path + "hotspot.html");
});


router.get("/skull",function(req,res){
  res.sendFile(path + "skull.html");
});

router.get("/camera",function(req,res){
  res.sendFile(path + "camera.html");
});

app.use("/",router);

//app.use("*",function(req,res){
//  res.sendFile(path + "404.html");
//});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
