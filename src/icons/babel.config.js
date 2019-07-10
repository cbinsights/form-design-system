/**
 * Welcome to 2019, when there are a million different parts of the javascript tool chain
 * and none of them resolve config files the same way.
 *
 * This file ensures that when lerna runs the `build` target in this dir, the babel cli
 * can resolve the config at the root of this monorepo.
 */
module.exports = require('../../babel.config.js');
