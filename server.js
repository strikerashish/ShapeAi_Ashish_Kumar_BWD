const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
//res.send("<a href= __dirname+/index.html > click</a>");
res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
	var n1 = Number(req.body.num1);
	var n2 = Number(req.body.num2);
	var op = req.body.sym;
	if (op=='+')
		res.send("The answer is "+String(n1+n2));
	else if (op == '-')
		res.send("The answer is "+String(n1-n2));
	else if(op =='*')
		res.send("The answer is "+String(n1*n2));
	else if( op=='/')
		res.send("The answer is "+String(n1/n2));
	else if( op=='%')
		res.send("The answer is "+String(n1%n2));
	else if( op=='^')
		res.send("The answer is "+String(Math.pow(n1,n2)));
	console.log(req.body);
	//console.log(req.body.num2)
});


app.listen(3000, function(){
console.log("server is started");
});
//console.log("striker")