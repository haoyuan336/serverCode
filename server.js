/**
 * Created by chuhaoyuan on 16/1/19.
 */
var https=require("https");
var fs=require("fs");
var options=function(){

}
https.createServer(options,function(req,res){
    res.writeHead(200);
    res.end("Hello World\n");

}).listen(8000);
