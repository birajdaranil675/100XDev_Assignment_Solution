const { json } = require('body-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = '123456'

mongoose.connect(
    'mongodb+srv://birajdaranil675:y3qPqwyFZrhfldSU@cluster0.gw1nk4t.mongodb.net/users'
);

const User = mongoose.model('user', {
    name : String,
    username : String,
    password : String,
});

const app = express();

app.use(express.json());

const port = 3000;

async function userExists(username, password){
    return await User.findOne({username : username});
}


app.post('/signin', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
       res.status(403).json({
            msg : "User dose not exists..."
        });
    }else{
        const token = jwt.sign({
            username : username
        }, jwtPassword);
        res.status(200).json({
            token
        });
    }
});

app.post('/signUp', async (req, res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const userExist = await User.findOne({username : username});

    if(userExist){
        res.status(400).json({
            msg : 'User already exists'
        });
    }else{
        const user = new User({
            name : name,
            username : username,
            password : password
        });
        
        user.save();
        res.status(400).json({
            msg : 'User added sucessfully.............'
        });
    }

});

app.get('/getUsers', (req, res)=>{
    const token = req.headers.authorization;

    const isCorrect = jwt.verify(token, jwtPassword);

    res.json({
        msg : 'done...'
    });
});



app.use((err, req, res, next)=>{
    res.status(403).json({
        err
    });
})






app.listen(port);