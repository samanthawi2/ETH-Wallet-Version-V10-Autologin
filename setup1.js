require('@babel/register');
require('ts-node').register({ transpileOnly: true });

require('./helpers/setup-helper-1');

window.SVGPathElement = window.SVGPathElement || { prototype: {} };
global.indexedDB = {};
