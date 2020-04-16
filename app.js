require('dotenv').config();
const express = require('express');
const signup = require('./routes/signup');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static('public'));

app.use(signup);

app.listen(port, () => console.log(`Listening on port ${port}...`));
