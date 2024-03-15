require('@babel/register');
require('ts-node').register({ transpileOnly: false });

require('./helpers/setup-helper-1');

window.SVGPathElement = window.SVGPathElement || { prototype: {} };
global.indexedDB = {};
