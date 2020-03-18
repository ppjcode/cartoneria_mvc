const express = require('express'),
      app = express(),
      path = require('path'),
      pug = require('pug'),
      morgan = require('morgan');


// Setting
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');
app.use(express.json());

// Middlewares
app.use(morgan('dev'))

// Routes
app.use(require('./routes/index.js'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Setup server
app.listen((process.env.PORT || app.get('port')), () => console.log('Server Running'));