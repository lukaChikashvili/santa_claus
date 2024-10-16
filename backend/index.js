 const express = require('express');
 require('dotenv').config();
 const cookieParser = require('cookie-parser');
const { connectDB } = require('./config/db');
const {routes} = require('./routes/userRoutes')
const path = require('path')
 
 const app = express();

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

app.use('/api', routes );

connectDB();



app.listen(PORT, () => console.log('server is running'));

