System.register(['../custom_modules/@my-scope/my-base-pkg/index.js', '../_virtual/index.js_commonjs-exports'], (function (exports) {
  'use strict';
  var myBasePkg;
  return {
    setters: [function () {}, (function (module) {
      myBasePkg = module.__exports;
    })],
    execute: (function () {

      const base2 = myBasePkg;

      var module$1 = exports('default', {
        base2,
      });

    })
  };
}));
