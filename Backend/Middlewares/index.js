const { json } = require('body-parser');
const express = require('express');
const zod = require('zod');

const app = express();
const port = 3000;

app.use(express.json());


/*code without middlewares
app.get('/health-checkup', (req, res)=>{
   const username = req.headers.username;
   const password = req.headers.password; 
   const kidneyId = req.query.kId;

   if(username === 'anil' && password === 'pass')
   {
        if(kidneyId === '1' || kidneyId === '2')
        {
            res.status(200).json({
                'msg' : 'checked kideny'
            });
        }else{
            res.status(400).json({
                'msg' : 'Kideney id is not correct'
            });
        }
   }else{
        res.status(403).json({
            'msg' : 'Enter correct credentials...'
        });
   }
}); */


/* how to use middlewares in the rest call
function userValidation(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password; 
    
 
    if(username === 'anil' && password === 'pass')
    {
         next();
    }else{
         res.status(403).json({
             'msg' : 'Enter correct credentials...'
         });
    }
}


function kidenyIdValidator(req, res, next){
    const kidneyId = req.query.kId;
    if(kidneyId === '1' || kidneyId === '2')
         {
            next();
         }else{
             res.status(400).json({
                 'msg' : 'Kideney id is not correct'
             });
         }
}

app.use(userValidation);
app.use(kidenyIdValidator);
app.get('/health-checkup', (req, res)=>{
    res.status(200).json({
        'msg' : 'Health check up sucessful..........'
    });
 });

*/


/*Global catches - if somethingb went wrong then global catche will be called....
 app.post('/addKideny', (req, res)=>{
    const kideneys = req.body.num;
    const len = kideneys.length;
    //here if user pass the wrong input for kideneys (as it expects array of numbers) then global catch will be invoked
    res.json({
        'msg' : 'Kideney added.'
    });
 });


//Error handling middleware
app.use((err, req, res, next)=>{
    res.json({
        'msg' : 'Something went wrong....'
    });
});

*/



//Input validation


/*normal zod usage
const schema = zod.array(zod.number());


app.post('/addKidenys', (req, res)=>{
    const kideneys = req.body.kideneys;
    const response = schema.safeParse(kideneys);

    res.json({
        response
    });
});
*/

/*Some more validation using Zod

function validateInput(req, res, next){
    const schema = zod.object({
        email : zod.string(),
        password : zod.string().min(5),
        country : zod.literal('IN').or(zod.literal('US')),
        kideneys : zod.number()
    });

    const user = req.body.user;
    const response = schema.safeParse(user);

    if(response.success)
    {
        next();
    }else{
        throw 'Input is invalid';
    }

}

let users = [];


app.get('/getUsers', (req, res)=>{
    res.json({
        users
    });
});


app.use(validateInput);
app.post('/addUser', (req, res)=>{
    const user = req.body.user;
    users.push(user);
    res.json({
        'msg' : 'user added sucessfully...'
    });
});


app.use((err, req, res, next)=>{
    res.json({
        err
    });
});*/


app.listen(port);