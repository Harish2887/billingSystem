const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3000;

var app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Just starting');
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});