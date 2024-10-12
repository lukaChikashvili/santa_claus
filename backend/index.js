 const express = require('express');
 require('dotenv').config();
 const cookieParser = require('cookie-parser');
const { connectDB } = require('./config/db');

 
 const app = express();

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();


app.listen(PORT, () => console.log('server is running'));

