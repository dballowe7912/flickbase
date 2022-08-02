const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

mongoose.connect(process.env.MONGO_URI);

// Parse
app.use(bodyParser.json);

// Sanitize
app.use(xss());
app.use(mongoSanitize());

const PORT = process.env.PORT || 3001;
app.listen(
    PORT,
    () => {
        console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    }
);