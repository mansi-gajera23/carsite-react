const express = require('express');
const connectDB = require('./db/dbConnect');
const cors = require('cors');
const Session = require('express-session');
const {SignupApi} = require('./apis/signup');
const { LoginApi } = require('./apis/Login');
const { ShowuserApi } = require('./apis/Showuserapi');
const {session} = require('./apis/session');
const { DeleteusrApi } = require('./apis/deleteuser');
const { carphotoUpload } = require('./multer/multerUpload');
const { AddcarApi } = require('./apis/Addcar');
const { ShowcarApi } = require('./apis/Showcarapi');
const { DeletecarApi } = require('./apis/deletecar');
const{UpdateApi}= require('./apis/updatecar');
const {TripApi} = require('./apis/trip');




const PORT = 8000;
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001'],
    credentials:true,
    methods:['GET','POST','PUT','DELETE'],
}));



// configure express-session middlewere
app.use(Session({
     secret:'your-secret-key',
     resave:false,
     saveUninitialized:true
  }));
app.post('/signup',SignupApi);
app.post('/Login',LoginApi);
app.post('/Session',session); //spelliing
app.post('/Userlist',ShowuserApi);
app.post('/deleteuser',DeleteusrApi);
app.post('/addcar',carphotoUpload.single('carphoto'),AddcarApi);
app.post('/carlist',ShowcarApi);
app.post('/deletecar',DeletecarApi);
app.post('/updatecar',carphotoUpload.single('carphoto'),UpdateApi);
app.post('/trip',TripApi);


app.listen(PORT,()=>{
    console.log("Server on port:",PORT);
});


