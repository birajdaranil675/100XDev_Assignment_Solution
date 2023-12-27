const express = require("express");
const bodyParser = require("body-parser");
port = 3000;
const app = express();
app.use(bodyParser.json());

// app.get('/', (req, res) =>{
//     res.send("Hello World!!!!!!!!");
// });



//Try to get some info from user and add it to the object and show all the entries in object.

let users = [];
let count = 0;

app.post('/addUser', (req, res)=>{
    console.log('Adding user...');
    let tempUser = {
        'name' : req.body.name,
        'id' : req.body.Age
    };
    users.push(tempUser);
    res.send("Added user....");
});

app.get('/getAllUsers', (req, res)=>{
    res.send(users);
});













app.listen(port);