var express = require('express')
var app = express()
var jobModel = require('./models/job')

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//mongoose.connect(process.env.MONGO_URL);
mongoose.connect('mongodb://localhost/myapp');



app.get('/', function (req, res) {
    res.send('{"text": "Hello"}')
})

app.listen(1337, function () {
    console.log('Example app listening on port 1337!')
})


//var job1 = new mongoose.model("job",{ title: 'FrontEnd Dev' });
// job1.save(function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('meow');
//     }
// });