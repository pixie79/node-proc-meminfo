#!/usr/bin/env node
"use strict";
var Getopt = require('node-getopt'), os = require('os'), fs = require('fs');

var getopt = new Getopt([
  ['d', 'debug'],
  ['h', 'help'],
  ['m', 'metrics'],
  ['s', 'scheme', Getopt.HAS_ARGUMENT, Getopt.SINGLE_ONLY]
]);


var opt = getopt.parse(process.argv.slice(2));

if (opt.options.metrics) {
  var scheme = os.hostname();
  if (opt.options.scheme) {
    scheme = opt.options.scheme;
  }
  var meminfoProc = require('../lib/meminfoProc');
  meminfoProc.doit(scheme, function (callback) {
    console.log(callback.replace(/\,/g, ''));
  });
}
