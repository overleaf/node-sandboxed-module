'use strict';
var fs = require('fs');
var path = require('path');

var modules = Object.keys(process.binding('natives')).filter(function (module) {
  // 'config' appears in the list of natives, but you can't 'require' it
    return module.indexOf('internal/') !== 0 && module.indexOf('config') < 0;
});

fs.writeFileSync(path.resolve(__dirname, '../lib/builtin_modules.json'), JSON.stringify(modules, undefined, 2));
