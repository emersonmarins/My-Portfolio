const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");
const client = new MongoClient(uri);
const dbname = "bank";

const connectToDatabase = async () => {
    try {
      await client.connect();
      console.log(`Connected to the ${dbname} database`);
    } catch (err) {
      console.log(`Error connecting to the database: ${err}`);
    } 
}

const main = async () => {
  try {
    await connectToDatabase();
    const databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }

}

main();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todolistRouter = require('./routes/todolist');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todolist', todolistRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
