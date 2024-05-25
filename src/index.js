const express = require('express');

const apiRoutes= require('./routes/index');
const { PORT }= require('./config/serverConfig');
const bodyParser = require('body-parser');
const app = express();

const db= require('./models/index');

// const{User}= require('./models/index');
// const bcrypt=require('bcrypt');

//const UserRepository= require('./repository/user-repository');
//const UserService= require('./services/user-service');
const prepareAndStartServer=() =>{


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,async() => {
        console.log(`server started on Port: ${PORT}`);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }

       
       
        // const repo= new UserRepository();
        // const response=await repo.getById(1);
        // console.log(response);
        // const incomingpassword='12345';
        // const user=await User.findByPk(2);
        // const response=bcrypt.compareSync(incomingpassword,user.password);
        // console.log(response);
        // const service= new UserService();
        // // const newToken= service.createToken({email:'jassu@gmail.com', id:1});
        // // console.log("new token is",newToken);

        // const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imphc3N1QGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MTY1MzA5NTksImV4cCI6MTcxNjUzMDk4OX0.HVkFQplJPlpBent3lPEryKLXNyqXBA_CCKAnWwMzBI8'
        // const response= service.verifyToken(token);
        // console.log(response);
        })
}

prepareAndStartServer();