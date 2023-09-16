const express = require('express');
const app = express();
// const path = require('path');
const mongoose = require('mongoose');

const listsRouter = require('./routes/lists');
const tasksRouter = require('./routes/tasks');

// Set up environmental variables
require('dotenv').config();
const { PORT, DB_CONNECTION } = process.env;

// Set up DB
mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
});

// Middleware
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      )
    next();
});
// Routes

// app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static('public'));

app.use('/lists', listsRouter);
app.use('/tasks', tasksRouter);

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});
