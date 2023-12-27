const express = require('express');

const port = 3000;

const app = express();

app.use(express.json());

let user= {
    name : 'Balu',
    kidneys : [
        {healthy : true}
    ]
};

app.get('/', (req, res)=>{
    let kidneyCount = user.kidneys.length;
    let healthy = 0;
    let unHealthy = 0;
    user.kidneys.forEach(h=>{
        h.healthy ? healthy++ : unHealthy++;
    })

    //console.log(kidneyCount+" "+healthy+" "+unHealthy);

    res.json({
        kidneyCount,
        healthy,
        unHealthy
    });
});


app.post('/addkideny', (req, res)=>{
    if(user.kidneys.length == 2)
        res.send('You already have 2 kidenys...');
    else{
        const kType = req.body.hType;

        user.kidneys.push(
            {healthy: kType}
        );
    
        res.json("Kideny added Sucessfully........");
    }
   
});


app.put('/replaceAll', (req, res)=>{

});





app.listen(port);