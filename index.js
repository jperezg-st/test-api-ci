'use strict';

const app = require('./app');

app.listen(process.env.PORT || 3700, () => {
    console.log('Bullying API is running!');
});