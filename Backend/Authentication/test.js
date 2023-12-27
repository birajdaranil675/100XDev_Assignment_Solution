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

console.log(userExists('Anil'));