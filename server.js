var express = require('express');
var static = require('express-static');
var server = express();
server.listen(3456);
server.use(static('www'));

server.get('/sum',(req,res)=>{
	let data = req.query;
	let num = Number(data.num1) + Number(data.num2);
	res.send({"sum":num});
	res.end();
})