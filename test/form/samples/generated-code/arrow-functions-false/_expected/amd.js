define(['exports', 'external'], (function (exports, external) { 'use strict';

	exports.a = void 0;

	({a: exports.a} = external.b);
	console.log({a: exports.a} = external.b);

	Object.defineProperty(exports, '__esModule', { value: true });

}));
