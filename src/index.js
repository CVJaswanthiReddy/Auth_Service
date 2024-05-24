const express = require('express');

const apiRoutes= require('./routes/index');
const { PORT }= require('./config/serverConfig');
const bodyParser = require('body-parser');
const app = express();
// const{User}= require('./models/index');
// const bcrypt=require('bcrypt');

//const UserRepository= require('./repository/user-repository');
const prepareAndStartServer=() =>{


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,async() => {
        console.log(`server started on Port: ${PORT}`);
        // const repo= new UserRepository();
        // const response=await repo.getById(1);
        // console.log(response);
        // const incomingpassword='12345';
        // const user=await User.findByPk(2);
        // const response=bcrypt.compareSync(incomingpassword,user.password);
        // console.log(response);
    })
}

prepareAndStartServer();