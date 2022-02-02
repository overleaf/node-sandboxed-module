'use strict';
var fs = require('fs');
var path = require('path');

var modules = Object.keys(process.binding('natives')).filter(function (module) {
    if (module.includes('wasi')) {
        // web assembly interface
        return false
    }
    if (module.includes('config')) {
        // 'config' appears in the list of natives, but you can't 'require' it
        return false
    }
    if (module.includes('internal/')) {
        // ignore internal modules
        return false
    }
    // likely importable
    return true
});

fs.writeFileSync(path.resolve(__dirname, '../lib/builtin_modules.json'), JSON.stringify(modules, undefined, 2));
