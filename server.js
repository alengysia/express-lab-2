const express = require('express');
const app = express();


app.listen(3000, function(){
console.log('Greetings Earthling');
});

app.get('/greeting/:name', function(req, res){
    res.send('Hello ' + req.params.name + ", It's good to see you.")
});
