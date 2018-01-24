var assert = require('assert');
var SandboxedModule = require('../..');

var foo = SandboxedModule.require('../fixture/loads-missing', {
	"requires": {
    "doesNotExist": { fake: true },
    "./alsoDoesNotExist": { cheese: 'gouda' },
    "requiredFromSubModule": { didItWork: 'yes' }
  },
	"ignoreMissing": true
});
assert.ok(foo.doesNotExist.fake);
assert.strictEqual(foo.alsoDoesNotExist.cheese, 'gouda');
assert.strictEqual(foo.subModule.requiredFromSubModule.didItWork, 'yes');
