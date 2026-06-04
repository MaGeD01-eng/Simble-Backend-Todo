
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/Db');
const router = require('./router/routeTask');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
connectDb();

app.use("/" , router);


app.listen(process.env.PORT || 3000 , ()=>{
        console.log("server running...");
});
