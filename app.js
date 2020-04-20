require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const authenticate = require('./middleware/authenticate');
const entriesRoute = require('./routes/entries');
const usersRoute = require('./routes/users');
const viewsRoute = require('./routes/views');
const tagController = require('./controllers/tag');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.use(usersRoute);
app.use(authenticate);
app.use(viewsRoute);
app.use(entriesRoute);

app.get('/getTags', tagController.getTagsThatUserUses);

app.listen(port, () => console.log(`Listening on port ${port}...`));
