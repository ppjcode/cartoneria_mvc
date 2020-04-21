const express = require('express'),
      app = express(),
      path = require('path'),
      pug = require('pug'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection'),
      { database } = require('./keys');

// Setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, database,'single'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/routes.index.js'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen((app.get('port')), () => console.log('Server Running'));

