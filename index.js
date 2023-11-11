const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet')
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost/ihc')
.then(db => console.log('db is connected')).catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);
app.set('json-spaces', 2);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(require('./routes/routes'));

// starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
});


/*
<----NOTAS---->
para entrar a la pagina de registro de usuarios se usa
http://localhost:3000/register

*/