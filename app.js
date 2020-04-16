require('dotenv').config();
const express = require('express');
const authenticate = require('../middleware/authenticate');
const entriesRoute = require('./routes/entries');
const usersRoute = require('./routes/users');
const viewsRoute = require('./routes/views');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

app.use(viewsRoute);
app.use(usersRoute);
app.use(authenticate);
app.use(entriesRoute);

app.listen(port, () => console.log(`Listening on port ${port}...`));
