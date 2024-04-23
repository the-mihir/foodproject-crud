const express = require('express');
const app = express();

const router = require('./src/route/api');


const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require ('cookie-parser');
const mongoose = require('mongoose');
const path = require ('path');

app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(hpp())

app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit: "10mb"}))

const limiter = rateLimit({windowMs:15*60*1000, max:1000})
app.use(limiter)




// Database Connection
let URI = "mongodb+srv://<username>:<password>@cluster0.gpzrl3k.mongodb.net/FoodProject";
let OPTION = {user:'mihirkantho',pass:'UBRKpzcZyKxWWXnK', autoIndex:true};

mongoose.connect(URI,OPTION).then((res)=>{
    console.log('Data Base Connected')
}).catch((err)=>{
    console.log(err)
})


app.set('etag', false)

app.use('/api', router)
app.use(express.static('client/dist'));


app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})


module.exports = app









