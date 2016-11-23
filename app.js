const logger  = require('morgan');
const express = require('express');
const path    = require('path');
const app     = express();
const routes  = require('./routes/routes')
const port    = process.env.PORT || 3000

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use(logger('dev'));
app.use('/', routes);

app.listen(port, ()=> console.log('Server is listening on port ', port));

