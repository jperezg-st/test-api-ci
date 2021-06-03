'use strict';

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// mongoose conection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false)

const task_routes = require('./api/routes/routes.js')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to test API deployed with CI test!" });
});

app.use('/', task_routes)

module.exports = app;