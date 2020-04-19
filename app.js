require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const authenticate = require('./middleware/authenticate');
const entriesRoute = require('./routes/entries');
const usersRoute = require('./routes/users');
const viewsRoute = require('./routes/views');
const tagController = require('./controllers/tag')
const entryController = require('./controllers/entries')
const path = require('path')
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(cookieParser());
// app.use(viewsRoute);
// app.use(usersRoute);
// app.use(authenticate);
// app.use(entriesRoute);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/home.html'))
})
app.get('/getTags',tagController.getTagsThatUserUses)
app.get('/getEntries',entryController.getAll)
app.get('/edit/:id',function(req,res){
    res.sendFile(path.join(__dirname + '/views/edit.html'))
})
app.post('/edit/:id',entryController.update)
app.get('/remove/:id',entryController.remove)

app.get('/add',function(req,res){
    res.sendFile(path.join(__dirname + '/views/entryForm.html'))
})
app.post('/add',entryController.add)
app.listen(port, () => console.log(`Listening on port ${port}...`));
