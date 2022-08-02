const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send({message: 'hello there'})
})

app.listen(
    PORT,
    console.log(`Server is running on port ${PORT}`)
)