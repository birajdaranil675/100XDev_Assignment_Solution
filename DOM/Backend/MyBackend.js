const express = require('express');
const app = express();
app.use(express.json());
const port = 8000;


function getResult(principle, no, rate){
    let result = (principle*no*rate)/100;

    return result;
}




app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/calculateInterest', (req, res)=>{
    const principle = parseInt(req.body.principle);
    const no = parseInt(req.body.no);
    const rate = parseInt(req.body.rate);

    let intrest = getResult(principle, no, rate);

    return res.status(200).json({
        intrest
    });
});

app.listen(port);