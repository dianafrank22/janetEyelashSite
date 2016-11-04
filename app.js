const logger  = require('morgan');
const express = require('express');
const path    = require('path');
const app     = express();
const port    = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/public')));

app.use(logger('dev'));

app.listen(port, ()=> console.log('Server is listening on port ', port));

app.use('/',(req,res) =>{
  res.sendFile('index.html')
});
