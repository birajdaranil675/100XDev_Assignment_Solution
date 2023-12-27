const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const zod = require('zod');

const jwtPassword = '123456'

const app = express();

app.use(express.json());

const port = 3000;

const corsOptions = {
    origin: 'http://127.0.0.1:5500'
};

app.use(cors(corsOptions));

let users = [
    {
        username : 'Anil',
        password : 'abc@123',
        name : 'Anil Birajdar'
    },
    {
        username : 'Sunil',
        password : 'pqr@569',
        name : 'Sunil Birajdar'
    },
    {
        username : 'Srushti',
        password : 'yut@452',
        name : 'Srushti Birajdar'
    }
];

function userExists(username){
    let userExists = false;
    for(let i=0; i<users.length; i++)
    {
        if(users[i].username === username)
        {
            userExists = true;
            break;
        }
    }

    return userExists;
}

app.post('/signin', (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;

    //check if user exist
    if(userExists(username))
    {
        let token = jwt.sign({username : username}, jwtPassword);

        return res.status(200).json({
            token
        });
    }else{
        return res.status(403).json({
            'msg' : 'You are UnAuthorized'
        });
    }
});

app.get('/users', (req, res)=>{
    let token = req.headers.authorization;

    // try{
    //     const decode = jwt.verify(token, jwtPassword);
    //     const username = decode.username;

    //     let result = users.filter((user)=>{
    //         if(user.username !== username)
    //             return user;
    //     });

    //     res.status(200).json({
    //         result
    //     });
    // }catch(err){
    //     res.status(403).json({
    //         msg : 'Invalid token'
    //     });
    // }

    res.status(200).json({
        users
    });
});


app.listen(port);


