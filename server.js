'use strict';

/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const _ = require('lodash');
const co = require('co');
const bodyParser = require('body-parser');

const constants = require('./serverConstant').constants;

const port = process.env.PORT || 3000;
const winston = require('./winstonLogger');
const MobileDetect = require('mobile-detect');
const app = express();


const origIndexFile = fs.readFileSync(
  path.join(__dirname, 'build', 'index.html'),
  'utf8'
);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
