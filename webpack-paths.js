"use strict";

const path = require('path');
// We define some paths to be used throughout the webpack config
//we want to export some paths we are using inside the webpack configuration
module.exports = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'public'),
  css: path.join(__dirname, 'public','css')
};
