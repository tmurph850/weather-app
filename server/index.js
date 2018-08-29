// Main entry point for backend
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


// DB Setup
mongoose.connect('mongodb://localhost/weather-app', { useNewUrlParser: true});


// App Setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

const router = require('./router')(app);



// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on:', port);
