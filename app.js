var express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Log web traffic to console
app.use(morgan('tiny'));

// bring in static files
app.use(express.static(path.join(__dirname, '/public/')));

// ...
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(3000, () => {
    debug(`Listening on port ${chalk.green('3000')}`);
});