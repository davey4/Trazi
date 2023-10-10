const AppRouter = require('./routes/appRouter');
const express = require('express');
const connection = require('./db');
const PORT = 5555;
const app = express();

// Require Middleware
const logger = require('morgan');
const bodyParser = require('body-parser');

// Initialize Middleware
app.use(logger('dev'));
app.use(bodyParser.text({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Middleware

app.get('/', (req, res) => res.send({ msg: 'Server Working' }));
app.use('/api', AppRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Database Connected');
    console.log(`App listening on port: ${PORT}`);
  } catch (error) {
    throw new Error('Connection Error');
  }
});
