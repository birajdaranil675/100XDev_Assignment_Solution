const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://birajdaranil675:y3qPqwyFZrhfldSU@cluster0.gw1nk4t.mongodb.net/users'
);

const User = mongoose.model('user', {
    name : String,
    username : String,
    password : String,
});

const user = new User({
    name : 'Anil',
    username : 'abc123',
    password : 'cvhjhn5dd'
});

user.save();