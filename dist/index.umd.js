!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t||self).http={})}(this,function(t){function n(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,e(t,n)}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function e(t,n){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},e(t,n)}function o(t,n,r){return o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return r&&e(i,r.prototype),i},o.apply(null,arguments)}function i(t){var n="function"==typeof Map?new Map:void 0;return i=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,i)}function i(){return o(t,arguments,r(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e(i,t)},i(t)}var u="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function c(t,n,r){if(!t.s){if(r instanceof f){if(!r.s)return void(r.o=c.bind(null,t,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(c.bind(null,t,n),c.bind(null,t,2));t.s=n,t.v=r;var e=t.o;e&&e(t)}}var f=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(n,r){var e=new t,o=this.s;if(o){var i=1&o?n:r;if(i){try{c(e,1,i(this.v))}catch(t){c(e,2,t)}return e}return this}return this.o=function(t){try{var o=t.v;1&t.s?c(e,1,n?n(o):o):r?c(e,1,r(o)):c(e,2,o)}catch(t){c(e,2,t)}},e},t}();function l(t){return t instanceof f&&1&t.s}var s=/*#__PURE__*/function(t){function r(n){var r;return void 0===n&&(n={}),(r=t.call(this)||this).coreContext=void 0,r.coreContext=n,r}n(r,t);var e=r.prototype;return e.register=function(t){var n=this;(Array.isArray(t)?t:[t]).forEach(function(t){n.add(t),null==t.onRegister||t.onRegister(n.coreContext)})},e.initPluginContext=function(t,n){(Array.isArray(t)?t:[t]).forEach(function(t){null==t.setContext||t.setContext(n)}),this.run("onInit")},e.unregister=function(t){this.delete(t)},e.filters=function(t){return Array.from(this).map(function(n){if(n[t]&&"function"==typeof n[t])return n[t].bind(n)}).filter(Boolean)},e.run=function(t){var n=arguments;this.filters(t).forEach(function(t){t.apply(t,[].slice.call(n,1))})},e.runAsync=function(t){var n=arguments,r=this.filters(t);return Promise.all(r.map(function(t){return t.apply(t,[].slice.call(n,1))}))},e.runSync=function(t){try{var n=arguments,r=function(t,n,r){if("function"==typeof t[u]){var e,o,i,s=t[u]();if(function t(r){try{for(;!(e=s.next()).done;)if((r=n(e.value))&&r.then){if(!l(r))return void r.then(t,i||(i=c.bind(null,o=new f,2)));r=r.v}o?c(o,1,r):o=r}catch(t){c(o||(o=new f),2,t)}}(),s.return){var a=function(t){try{e.done||s.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var p=[],h=0;h<t.length;h++)p.push(t[h]);return function(t,n,r){var e,o,i=-1;return function r(u){try{for(;++i<t.length;)if((u=n(i))&&u.then){if(!l(u))return void u.then(r,o||(o=c.bind(null,e=new f,2)));u=u.v}e?c(e,1,u):e=u}catch(t){c(e||(e=new f),2,t)}}(),e}(p,function(t){return n(p[t])})}(this.filters(t),function(t){return Promise.resolve(t.apply(t,[].slice.call(n,1))).then(function(){})});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},e.runOnion=function(t){var n=arguments;return this.filters(t).reduce(function(t,r){var e;return null!=(e=r.apply(r,[].slice.call(n,1)))?e:t},void 0)},e.runOnionAsync=function(t){return this.filters(t).reduce(function(t,n){try{var r=arguments;return Promise.resolve(t).then(function(t){var e;return null!=(e=n.apply(n,[].slice.call(r,1)))?e:t})}catch(t){return Promise.reject(t)}},Promise.resolve(void 0))},e.getPluginByName=function(t){return Array.from(this).find(function(n){return n.name===t})},r}(/*#__PURE__*/i(Set)),a=/*#__PURE__*/function(t){function r(n){var r;return void 0===n&&(n={}),(r=t.call(this)||this).coreConfig=void 0,r.coreConfig=n,r.mountPlugins(),r}return n(r,t),r.prototype.mountPlugins=function(){var t=this.coreConfig.plugins,n=void 0===t?[]:t;this.register(n),this.initPluginContext(n,this)},r}(s),p=/*#__PURE__*/function(t){function r(){return t.call(this)||this}n(r,t);var e=r.prototype;return e.on=function(t,n){return this.set(t,n),this},e.emit=function(t){var n=this.get(t);return!!n&&(n.apply(this,[].slice.call(arguments,1)),!0)},e.off=function(t){return this.delete(t),this},r}(/*#__PURE__*/i(Map));t.AbstractPlugin=/*#__PURE__*/function(t){function r(){var n;return(n=t.call(this)||this)._context={},n.version=void 0,n}n(r,t);var e=r.prototype;return e.setContext=function(t){this._context=t},e.getContext=function(){return this._context},r}(p),t.Core=a,t.EventEmitter=p,t.PluginEventEmitter=s,t.PluginFactory=function(){}});
//# sourceMappingURL=index.umd.js.map
