var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require("mongoose");
var routes = require('./routes/index');

var users = require('./routes/users');
var idea = require('./routes/idea');
var like = require('./routes/like');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Allow CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/', routes);
app.use('/user', users);
app.use('/idea', idea);

// MongoDB configuration
// Database connect options
var options = {
    replset: {
        socketOptions: {
            connectTimeoutMS: 30
        }
    },
    server: {
        poolSize: 3,
        auto_reconnect: true
    }
};

var connectWithRetry = function () {
    return mongoose.connect("mongodb://127.0.0.1:27017/leafzone", options, function (err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
            setTimeout(connectWithRetry, 5000);
        }
    });
};
connectWithRetry();

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + "mongodb://127.0.0.1:27017/leafzone");
    //DBMethods.InitModels();
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.error('Mongoose default connection error', err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.info('Mongoose default connection disconnected');
//  connectWithRetry();
});

// When the connection is reconnected
mongoose.connection.on('reconnected', function () {
    console.info('Mongoose default connection reconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.info('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
