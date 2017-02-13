/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myapp').controller('loginCtrl', function ($scope) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    });
}).controller('homeCtrl', function ($http) {
    $http.get("livelist.json").success(function (data) {
        console.log(data);
    });

    //var swiper = new Swiper('.swiper-container', {
    //    onSlideChangeStart: function (swiper) {
    //        var idx = swiper.activeIndex;
    //        $('.Snav').children().eq(idx).addClass('active').siblings().removeClass('active')
    //    }
    //});
    //$('.Snav a').on('click', function () {
    //    $(this).addClass('active').siblings().removeClass('active');
    //    swiper.slideTo($(this).index());
    //});
});
//.controller(function ($scope, $http) {
//    $http.get("livelist.json")
//        .success(function (data) {
//            console.log(data)
//        })
//})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = angular.module("myapp", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider.state("login", {
        url: "/login",
        templateUrl: "dir/login.html",
        controller: 'loginCtrl'
    }).state("home", {
        url: "/home",
        templateUrl: "dir/home.html",
        controller: 'homeCtrl'
    }).state("search", {
        url: "/search",
        templateUrl: "dir/search.html"
    }).state("comaro", {
        url: "/comaro",
        templateUrl: "dir/comaro.html"
    }).state("admin", {
        url: "/admin",
        templateUrl: "dir/admin.html"
    }).state("out", {
        url: "/out",
        templateUrl: "dir/out.html"
    }).state("follow", {
        url: "/follow",
        templateUrl: "dir/follow.html"
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * State-based routing for AngularJS
 * @version v0.3.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
  "use strict";
  function d(a, b) {
    return S(new (S(function () {}, { prototype: a }))(), b);
  }function e(a) {
    return R(arguments, function (b) {
      b !== a && R(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b);
      });
    }), a;
  }function f(a, b) {
    var c = [];for (var d in a.path) {
      if (a.path[d] !== b.path[d]) break;c.push(a.path[d]);
    }return c;
  }function g(a) {
    if (Object.keys) return Object.keys(a);var b = [];return R(a, function (a, c) {
      b.push(c);
    }), b;
  }function h(a, b) {
    if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);var c = a.length >>> 0,
        d = Number(arguments[2]) || 0;for (d = d < 0 ? Math.ceil(d) : Math.floor(d), d < 0 && (d += c); d < c; d++) {
      if (d in a && a[d] === b) return d;
    }return -1;
  }function i(a, b, c, d) {
    var e,
        i = f(c, d),
        j = {},
        k = [];for (var l in i) {
      if (i[l] && i[l].params && (e = g(i[l].params), e.length)) for (var m in e) {
        h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
      }
    }return S({}, j, b);
  }function j(a, b, c) {
    if (!c) {
      c = [];for (var d in a) {
        c.push(d);
      }
    }for (var e = 0; e < c.length; e++) {
      var f = c[e];if (a[f] != b[f]) return !1;
    }return !0;
  }function k(a, b) {
    var c = {};return R(a, function (a) {
      c[a] = b[a];
    }), c;
  }function l(a) {
    var b = {},
        c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));return R(c, function (c) {
      c in a && (b[c] = a[c]);
    }), b;
  }function m(a) {
    var b = {},
        c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));for (var d in a) {
      h(c, d) == -1 && (b[d] = a[d]);
    }return b;
  }function n(a, b) {
    var c = Q(a),
        d = c ? [] : {};return R(a, function (a, e) {
      b(a, e) && (d[c ? d.length : e] = a);
    }), d;
  }function o(a, b) {
    var c = Q(a) ? [] : {};return R(a, function (a, d) {
      c[d] = b(a, d);
    }), c;
  }function p(a) {
    return a.then(c, function () {}) && a;
  }function q(a, b) {
    var d = 1,
        f = 2,
        i = {},
        j = [],
        k = i,
        l = S(a.when(i), { $$promises: i, $$values: i });this.study = function (i) {
      function n(a, c) {
        if (s[c] !== f) {
          if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));if (s[c] = d, O(a)) q.push(c, [function () {
            return b.get(a);
          }], j);else {
            var e = b.annotate(a);R(e, function (a) {
              a !== c && i.hasOwnProperty(a) && n(i[a], a);
            }), q.push(c, a, e);
          }r.pop(), s[c] = f;
        }
      }function o(a) {
        return P(a) && a.then && a.$$promises;
      }if (!P(i)) throw new Error("'invocables' must be an object");var p = g(i || {}),
          q = [],
          r = [],
          s = {};return R(i, n), i = r = s = null, function (d, f, g) {
        function h() {
          --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t));
        }function i(a) {
          r.$$failure = a, n.reject(a);
        }function j(c, e, f) {
          function j(a) {
            l.reject(a), i(a);
          }function k() {
            if (!M(r.$$failure)) try {
              l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                t[c] = a, h();
              }, j);
            } catch (a) {
              j(a);
            }
          }var l = a.defer(),
              m = 0;R(f, function (a) {
            s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
              t[a] = b, --m || k();
            }, j));
          }), m || k(), s[c] = l.promise;
        }if (o(d) && g === c && (g = f, f = d, d = null), d) {
          if (!P(d)) throw new Error("'locals' must be an object");
        } else d = k;if (f) {
          if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
        } else f = l;var n = a.defer(),
            r = n.promise,
            s = r.$$promises = {},
            t = S({}, d),
            u = 1 + q.length / 3,
            v = !1;if (M(f.$$failure)) return i(f.$$failure), r;f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), S(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));for (var w = 0, x = q.length; w < x; w += 3) {
          d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
        }return r;
      };
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d);
    };
  }function r(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return M(a.template) ? this.fromString(a.template, b) : M(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : M(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null;
    }, this.fromString = function (a, b) {
      return N(a) ? a(b) : a;
    }, this.fromUrl = function (c, d) {
      return N(c) && (c = c(d)), null == c ? null : a.get(c, { cache: b, headers: { Accept: "text/html" } }).then(function (a) {
        return a.data;
      });
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || { params: b });
    };
  }function s(a, b, e) {
    function f(b, c, d, e) {
      if (q.push(b), o[b]) return o[b];if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");return p[b] = new V.Param(b, c, d, e), p[b];
    }function g(a, b, c, d) {
      var e = ["", ""],
          f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");if (!b) return f;switch (c) {case !1:
          e = ["(", ")" + (d ? "?" : "")];break;case !0:
          f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];break;default:
          e = ["(" + c + "|", ")?"];}return f + e[0] + b + e[1];
    }function h(e, f) {
      var g, h, i, j, k;return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = V.type(h) || d(V.type("string"), { pattern: new RegExp(h, b.caseInsensitive ? "i" : c) })), { id: g, regexp: h, segment: i, type: j, cfg: k };
    }b = S({ params: {} }, P(b) ? b : {});var i,
        j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        l = "^",
        m = 0,
        n = this.segments = [],
        o = e ? e.params : {},
        p = this.params = e ? e.params.$$new() : new V.ParamSet(),
        q = [];this.source = a;for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) {
      s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
    }t = a.substring(m);var u = t.indexOf("?");if (u >= 0) {
      var v = this.sourceSearch = t.substring(u);if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v);) {
        r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex;
      }
    } else this.sourcePath = a, this.sourceSearch = "";l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q;
  }function t(a) {
    S(this, a);
  }function u() {
    function a(a) {
      return null != a ? a.toString().replace(/(~|\/)/g, function (a) {
        return { "~": "~~", "/": "~2F" }[a];
      }) : a;
    }function e(a) {
      return null != a ? a.toString().replace(/(~~|~2F)/g, function (a) {
        return { "~~": "~", "~2F": "/" }[a];
      }) : a;
    }function f() {
      return { strict: p, caseInsensitive: m };
    }function i(a) {
      return N(a) || Q(a) && N(a[a.length - 1]);
    }function j() {
      for (; w.length;) {
        var a = w.shift();if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name], l.invoke(a.def));
      }
    }function k(a) {
      S(this, a || {});
    }V = this;var l,
        m = !1,
        p = !0,
        q = !1,
        r = {},
        v = !0,
        w = [],
        x = { string: { encode: a, decode: e, is: function is(a) {
          return null == a || !M(a) || "string" == typeof a;
        }, pattern: /[^\/]*/ }, int: { encode: a, decode: function decode(a) {
          return parseInt(a, 10);
        }, is: function is(a) {
          return M(a) && this.decode(a.toString()) === a;
        }, pattern: /\d+/ }, bool: { encode: function encode(a) {
          return a ? 1 : 0;
        }, decode: function decode(a) {
          return 0 !== parseInt(a, 10);
        }, is: function is(a) {
          return a === !0 || a === !1;
        }, pattern: /0|1/ }, date: { encode: function encode(a) {
          return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c;
        }, decode: function decode(a) {
          if (this.is(a)) return a;var b = this.capture.exec(a);return b ? new Date(b[1], b[2] - 1, b[3]) : c;
        }, is: function is(a) {
          return a instanceof Date && !isNaN(a.valueOf());
        }, equals: function equals(a, b) {
          return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
        }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/, capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/ }, json: { encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^\/]*/ }, any: { encode: b.identity, decode: b.identity, equals: b.equals, pattern: /.*/ } };u.$$getDefaultValue = function (a) {
      if (!i(a.value)) return a.value;if (!l) throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value);
    }, this.caseInsensitive = function (a) {
      return M(a) && (m = a), m;
    }, this.strictMode = function (a) {
      return M(a) && (p = a), p;
    }, this.defaultSquashPolicy = function (a) {
      if (!M(a)) return q;if (a !== !0 && a !== !1 && !O(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");return q = a, a;
    }, this.compile = function (a, b) {
      return new s(a, S(f(), b));
    }, this.isMatcher = function (a) {
      if (!P(a)) return !1;var b = !0;return R(s.prototype, function (c, d) {
        N(c) && (b = b && M(a[d]) && N(a[d]));
      }), b;
    }, this.type = function (a, b, c) {
      if (!M(b)) return r[a];if (r.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");return r[a] = new t(S({ name: a }, b)), c && (w.push({ name: a, def: c }), v || j()), this;
    }, R(x, function (a, b) {
      r[b] = new t(S({ name: b }, a));
    }), r = d(r, {}), this.$get = ["$injector", function (a) {
      return l = a, v = !1, j(), R(x, function (a, b) {
        r[b] || (r[b] = new t(a));
      }), this;
    }], this.Param = function (a, d, e, f) {
      function j(a) {
        var b = P(a) ? g(a) : [],
            c = h(b, "value") === -1 && h(b, "type") === -1 && h(b, "squash") === -1 && h(b, "array") === -1;return c && (a = { value: a }), a.$$fn = i(a.value) ? a.value : function () {
          return a.value;
        }, a;
      }function k(c, d, e) {
        if (c.type && d) throw new Error("Param '" + a + "' has two type configurations.");return d ? d : c.type ? b.isString(c.type) ? r[c.type] : c.type instanceof t ? c.type : new t(c.type) : "config" === e ? r.any : r.string;
      }function m() {
        var b = { array: "search" === f && "auto" },
            c = a.match(/\[\]$/) ? { array: !0 } : {};return S(b, c, e).array;
      }function p(a, b) {
        var c = a.squash;if (!b || c === !1) return !1;if (!M(c) || null == c) return q;if (c === !0 || O(c)) return c;throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string");
      }function s(a, b, d, e) {
        var f,
            g,
            i = [{ from: "", to: d || b ? c : "" }, { from: null, to: d || b ? c : "" }];return f = Q(a.replace) ? a.replace : [], O(e) && f.push({ from: e, to: c }), g = o(f, function (a) {
          return a.from;
        }), n(i, function (a) {
          return h(g, a.from) === -1;
        }).concat(f);
      }function u() {
        if (!l) throw new Error("Injectable functions cannot be called at configuration time");var a = l.invoke(e.$$fn);if (null !== a && a !== c && !x.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");return a;
      }function v(a) {
        function b(a) {
          return function (b) {
            return b.from === a;
          };
        }function c(a) {
          var c = o(n(x.replace, b(a)), function (a) {
            return a.to;
          });return c.length ? c[0] : a;
        }return a = c(a), M(a) ? x.type.$normalize(a) : u();
      }function w() {
        return "{Param:" + a + " " + d + " squash: '" + A + "' optional: " + z + "}";
      }var x = this;e = j(e), d = k(e, d, f);var y = m();d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");var z = e.value !== c,
          A = p(e, z),
          B = s(e, y, z, A);S(this, { id: a, type: d, location: f, array: y, squash: A, replace: B, isOptional: z, value: v, dynamic: c, config: e, toString: w });
    }, k.prototype = { $$new: function $$new() {
        return d(this, S(new k(), { $$parent: this }));
      }, $$keys: function $$keys() {
        for (var a = [], b = [], c = this, d = g(k.prototype); c;) {
          b.push(c), c = c.$$parent;
        }return b.reverse(), R(b, function (b) {
          R(g(b), function (b) {
            h(a, b) === -1 && h(d, b) === -1 && a.push(b);
          });
        }), a;
      }, $$values: function $$values(a) {
        var b = {},
            c = this;return R(c.$$keys(), function (d) {
          b[d] = c[d].value(a && a[d]);
        }), b;
      }, $$equals: function $$equals(a, b) {
        var c = !0,
            d = this;return R(d.$$keys(), function (e) {
          var f = a && a[e],
              g = b && b[e];d[e].type.equals(f, g) || (c = !1);
        }), c;
      }, $$validates: function $$validates(a) {
        var d,
            e,
            f,
            g,
            h,
            i = this.$$keys();for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
          if (g = e.type.$normalize(f), !e.type.is(g)) return !1;if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1;
        }return !0;
      }, $$parent: c }, this.ParamSet = k;
  }function v(a, d) {
    function e(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null != b ? b[1].replace(/\\(.)/g, "$1") : "";
    }function f(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b["$" === c ? 0 : Number(c)];
      });
    }function g(a, b, c) {
      if (!c) return !1;var d = a.invoke(b, b, { $match: c });return !M(d) || d;
    }function h(d, e, f, g, h) {
      function m(a, b, c) {
        return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a;
      }function n(a) {
        function b(a) {
          var b = a(f, d);return !!b && (O(b) && d.replace().url(b), !0);
        }if (!a || !a.defaultPrevented) {
          p && d.url() === p;p = c;var e,
              g = j.length;for (e = 0; e < g; e++) {
            if (b(j[e])) return;
          }k && b(k);
        }
      }function o() {
        return i = i || e.$on("$locationChangeSuccess", n);
      }var p,
          q = g.baseHref(),
          r = d.url();return l || o(), { sync: function sync() {
          n();
        }, listen: function listen() {
          return o();
        }, update: function update(a) {
          return a ? void (r = d.url()) : void (d.url() !== r && (d.url(r), d.replace()));
        }, push: function push(a, b, e) {
          var f = a.format(b || {});null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace();
        }, href: function href(c, e, f) {
          if (!c.validates(e)) return null;var g = a.html5Mode();b.isObject(g) && (g = g.enabled), g = g && h.history;var i = c.format(e);if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) return i;var j = !g && i ? "/" : "",
              k = d.port();return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("");
        } };
    }var i,
        j = [],
        k = null,
        l = !1;this.rule = function (a) {
      if (!N(a)) throw new Error("'rule' must be a function");return j.push(a), this;
    }, this.otherwise = function (a) {
      if (O(a)) {
        var b = a;a = function a() {
          return b;
        };
      } else if (!N(a)) throw new Error("'rule' must be a function");return k = a, this;
    }, this.when = function (a, b) {
      var c,
          h = O(b);if (O(a) && (a = d.compile(a)), !h && !N(b) && !Q(b)) throw new Error("invalid 'handler' in when()");var i = { matcher: function matcher(a, b) {
          return h && (c = d.compile(b), b = ["$match", function (a) {
            return c.format(a);
          }]), S(function (c, d) {
            return g(c, b, a.exec(d.path(), d.search()));
          }, { prefix: O(a.prefix) ? a.prefix : "" });
        }, regex: function regex(a, b) {
          if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");return h && (c = b, b = ["$match", function (a) {
            return f(c, a);
          }]), S(function (c, d) {
            return g(c, b, a.exec(d.path()));
          }, { prefix: e(a) });
        } },
          j = { matcher: d.isMatcher(a), regex: a instanceof RegExp };for (var k in j) {
        if (j[k]) return this.rule(i[k](a, b));
      }throw new Error("invalid 'what' in when()");
    }, this.deferIntercept = function (a) {
      a === c && (a = !0), l = a;
    }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"];
  }function w(a, e) {
    function f(a) {
      return 0 === a.indexOf(".") || 0 === a.indexOf("^");
    }function m(a, b) {
      if (!a) return c;var d = O(a),
          e = d ? a : a.name,
          g = f(e);if (g) {
        if (!b) throw new Error("No reference point given for path '" + e + "'");b = m(b);for (var h = e.split("."), i = 0, j = h.length, k = b; i < j; i++) {
          if ("" !== h[i] || 0 !== i) {
            if ("^" !== h[i]) break;if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");k = k.parent;
          } else k = b;
        }h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h;
      }var l = A[e];return !l || !d && (d || l !== a && l.self !== a) ? c : l;
    }function n(a, b) {
      B[a] || (B[a] = []), B[a].push(b);
    }function q(a) {
      for (var b = B[a] || []; b.length;) {
        r(b.shift());
      }
    }function r(b) {
      b = d(b, { self: b, resolve: b.resolve || {}, toString: function toString() {
          return this.name;
        } });var c = b.name;if (!O(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");if (A.hasOwnProperty(c)) throw new Error("State '" + c + "' is already defined");var e = c.indexOf(".") !== -1 ? c.substring(0, c.lastIndexOf(".")) : O(b.parent) ? b.parent : P(b.parent) && O(b.parent.name) ? b.parent.name : "";if (e && !A[e]) return n(e, b.self);for (var f in D) {
        N(D[f]) && (b[f] = D[f](b, D.$delegates[f]));
      }return A[c] = b, !b[C] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
        z.$current.navigable == b && j(a, c) || z.transitionTo(b, a, { inherit: !0, location: !1 });
      }]), q(c), b;
    }function s(a) {
      return a.indexOf("*") > -1;
    }function t(a) {
      for (var b = a.split("."), c = z.$current.name.split("."), d = 0, e = b.length; d < e; d++) {
        "*" === b[d] && (c[d] = "*");
      }return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length == c.length && c.join("") === b.join("");
    }function u(a, b) {
      return O(a) && !M(b) ? D[a] : N(b) && O(a) ? (D[a] && !D.$delegates[a] && (D.$delegates[a] = D[a]), D[a] = b, this) : this;
    }function v(a, b) {
      return P(a) ? b = a : b.name = a, r(b), this;
    }function w(a, e, f, h, l, n, q, r, u) {
      function v(b, c, d, f) {
        var g = a.$broadcast("$stateNotFound", b, c, d);if (g.defaultPrevented) return q.update(), F;if (!g.retry) return null;if (f.$retry) return q.update(), G;var h = z.transition = e.when(g.retry);return h.then(function () {
          return h !== z.transition ? (a.$broadcast("$stateChangeCancel", b.to, b.toParams, c, d), D) : (b.options.$retry = !0, z.transitionTo(b.to, b.toParams, b.options));
        }, function () {
          return F;
        }), q.update(), h;
      }function w(a, c, d, g, i, j) {
        function m() {
          var c = [];return R(a.views, function (d, e) {
            var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};g.$template = [function () {
              return f.load(e, { view: d, locals: i.globals, params: n, notify: j.notify }) || "";
            }], c.push(l.resolve(g, i.globals, i.resolve, a).then(function (c) {
              if (N(d.controllerProvider) || Q(d.controllerProvider)) {
                var f = b.extend({}, g, i.globals);c.$$controller = h.invoke(d.controllerProvider, null, f);
              } else c.$$controller = d.controller;c.$$state = a, c.$$controllerAs = d.controllerAs, c.$$resolveAs = d.resolveAs, i[e] = c;
            }));
          }), e.all(c).then(function () {
            return i.globals;
          });
        }var n = d ? c : k(a.params.$$keys(), c),
            o = { $stateParams: n };i.resolve = l.resolve(a.resolve, o, i.resolve, a);var p = [i.resolve.then(function (a) {
          i.globals = a;
        })];return g && p.push(g), e.all(p).then(m).then(function (a) {
          return i;
        });
      }var B = new Error("transition superseded"),
          D = p(e.reject(B)),
          E = p(e.reject(new Error("transition prevented"))),
          F = p(e.reject(new Error("transition aborted"))),
          G = p(e.reject(new Error("transition failed")));return y.locals = { resolve: null, globals: { $stateParams: {} } }, z = { params: {}, current: y.self, $current: y, transition: null }, z.reload = function (a) {
        return z.transitionTo(z.current, n, { reload: a || !0, inherit: !1, notify: !0 });
      }, z.go = function (a, b, c) {
        return z.transitionTo(a, b, S({ inherit: !0, relative: z.$current }, c));
      }, z.transitionTo = function (b, c, f) {
        c = c || {}, f = S({ location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1 }, f || {});var g,
            j = z.$current,
            l = z.params,
            o = j.path,
            p = m(b, f.relative),
            r = c["#"];if (!M(p)) {
          var s = { to: b, toParams: c, options: f },
              t = v(s, j.self, l, f);if (t) return t;if (b = s.to, c = s.toParams, f = s.options, p = m(b, f.relative), !M(p)) {
            if (!f.relative) throw new Error("No such state '" + b + "'");throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'");
          }
        }if (p[C]) throw new Error("Cannot transition to abstract state '" + b + "'");if (f.inherit && (c = i(n, c || {}, z.$current, p)), !p.params.$$validates(c)) return G;c = p.params.$$values(c), b = p;var u = b.path,
            A = 0,
            F = u[A],
            H = y.locals,
            I = [];if (f.reload) {
          if (O(f.reload) || P(f.reload)) {
            if (P(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");var J = f.reload === !0 ? o[0] : m(f.reload);if (f.reload && !J) throw new Error("No such reload state '" + (O(f.reload) ? f.reload : f.reload.name) + "'");for (; F && F === o[A] && F !== J;) {
              H = I[A] = F.locals, A++, F = u[A];
            }
          }
        } else for (; F && F === o[A] && F.ownParams.$$equals(c, l);) {
          H = I[A] = F.locals, A++, F = u[A];
        }if (x(b, c, j, l, H, f)) return r && (c["#"] = r), z.params = c, T(z.params, n), T(k(b.params.$$keys(), n), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (q.push(b.navigable.url, c, { $$avoidResync: !0, replace: "replace" === f.location }), q.update(!0)), z.transition = null, e.when(z.current);if (c = k(b.params.$$keys(), c || {}), r && (c["#"] = r), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l, f).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), null == z.transition && q.update(), E;for (var K = e.when(H), L = A; L < u.length; L++, F = u[L]) {
          H = I[L] = d(H), K = w(F, c, F === b, K, H, f);
        }var N = z.transition = K.then(function () {
          var d, e, g;if (z.transition !== N) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D;for (d = o.length - 1; d >= A; d--) {
            g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
          }for (d = A; d < u.length; d++) {
            e = u[d], e.locals = I[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
          }return z.transition !== N ? (a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D) : (z.$current = b, z.current = b.self, z.params = c, T(z.params, n), z.transition = null, f.location && b.navigable && q.push(b.navigable.url, b.navigable.locals.globals.$stateParams, { $$avoidResync: !0, replace: "replace" === f.location }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), q.update(!0), z.current);
        }).then(null, function (d) {
          return d === B ? D : z.transition !== N ? (a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), D) : (z.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || q.update(), e.reject(d));
        });return N;
      }, z.is = function (a, b, d) {
        d = S({ relative: z.$current }, d || {});var e = m(a, d.relative);return M(e) ? z.$current === e && (!b || j(e.params.$$values(b), n)) : c;
      }, z.includes = function (a, b, d) {
        if (d = S({ relative: z.$current }, d || {}), O(a) && s(a)) {
          if (!t(a)) return !1;a = z.$current.name;
        }var e = m(a, d.relative);if (!M(e)) return c;if (!M(z.$current.includes[e.name])) return !1;if (!b) return !0;for (var f = g(b), h = 0; h < f.length; h++) {
          var i = f[h],
              j = e.params[i];if (j && !j.type.equals(n[i], b[i])) return !1;
        }return !0;
      }, z.href = function (a, b, d) {
        d = S({ lossy: !0, inherit: !0, absolute: !1, relative: z.$current }, d || {});var e = m(a, d.relative);if (!M(e)) return null;d.inherit && (b = i(n, b || {}, z.$current, e));var f = e && d.lossy ? e.navigable : e;return f && f.url !== c && null !== f.url ? q.href(f.url, k(e.params.$$keys().concat("#"), b || {}), { absolute: d.absolute }) : null;
      }, z.get = function (a, b) {
        if (0 === arguments.length) return o(g(A), function (a) {
          return A[a].self;
        });var c = m(a, b || z.$current);return c && c.self ? c.self : null;
      }, z;
    }function x(a, b, c, d, e, f) {
      function g(a, b, c) {
        function d(b) {
          return "search" != a.params[b].location;
        }var e = a.params.$$keys().filter(d),
            f = l.apply({}, [a.params].concat(e)),
            g = new V.ParamSet(f);return g.$$equals(b, c);
      }if (!f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b))) return !0;
    }var y,
        z,
        A = {},
        B = {},
        C = "abstract",
        D = { parent: function parent(a) {
        if (M(a.parent) && a.parent) return m(a.parent);var b = /^(.+)\.[^.]+$/.exec(a.name);return b ? m(b[1]) : y;
      }, data: function data(a) {
        return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data;
      }, url: function url(a) {
        var b = a.url,
            c = { params: a.params || {} };if (O(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || y).url.concat(b, c);if (!b || e.isMatcher(b)) return b;throw new Error("Invalid url '" + b + "' in state '" + a + "'");
      }, navigable: function navigable(a) {
        return a.url ? a : a.parent ? a.parent.navigable : null;
      }, ownParams: function ownParams(a) {
        var b = a.url && a.url.params || new V.ParamSet();return R(a.params || {}, function (a, c) {
          b[c] || (b[c] = new V.Param(c, null, a, "config"));
        }), b;
      }, params: function params(a) {
        var b = l(a.ownParams, a.ownParams.$$keys());return a.parent && a.parent.params ? S(a.parent.params.$$new(), b) : new V.ParamSet();
      }, views: function views(a) {
        var b = {};return R(M(a.views) ? a.views : { "": a }, function (c, d) {
          d.indexOf("@") < 0 && (d += "@" + a.parent.name), c.resolveAs = c.resolveAs || a.resolveAs || "$resolve", b[d] = c;
        }), b;
      }, path: function path(a) {
        return a.parent ? a.parent.path.concat(a) : [];
      }, includes: function includes(a) {
        var b = a.parent ? S({}, a.parent.includes) : {};return b[a.name] = !0, b;
      }, $delegates: {} };y = r({ name: "", url: "^", views: null, abstract: !0 }), y.navigable = null, this.decorator = u, this.state = v, this.$get = w, w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"];
  }function x() {
    function a(a, b) {
      return { load: function load(a, c) {
          var d,
              e = { template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {} };return c = S(e, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d;
        } };
    }this.$get = a, a.$inject = ["$rootScope", "$templateFactory"];
  }function y() {
    var a = !1;this.useAnchorScroll = function () {
      a = !0;
    }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
      return a ? b : function (a) {
        return c(function () {
          a[0].scrollIntoView();
        }, 0, !1);
      };
    }];
  }function z(a, c, d, e, f) {
    function g() {
      return c.has ? function (a) {
        return c.has(a) ? c.get(a) : null;
      } : function (a) {
        try {
          return c.get(a);
        } catch (a) {
          return null;
        }
      };
    }function h(a, c) {
      var d = function d() {
        return { enter: function enter(a, b, c) {
            b.after(a), c();
          }, leave: function leave(a, b) {
            a.remove(), b();
          } };
      };if (k) return { enter: function enter(a, c, d) {
          b.version.minor > 2 ? k.enter(a, null, c).then(d) : k.enter(a, null, c, d);
        }, leave: function leave(a, c) {
          b.version.minor > 2 ? k.leave(a).then(c) : k.leave(a, c);
        } };if (j) {
        var e = j && j(c, a);return { enter: function enter(a, b, c) {
            e.enter(a, null, b), c();
          }, leave: function leave(a, b) {
            e.leave(a), b();
          } };
      }return d();
    }var i = g(),
        j = i("$animator"),
        k = i("$animate"),
        l = { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function compile(c, g, i) {
        return function (c, g, j) {
          function k() {
            if (m && (m.remove(), m = null), o && (o.$destroy(), o = null), n) {
              var a = n.data("$uiViewAnim");s.leave(n, function () {
                a.$$animLeave.resolve(), m = null;
              }), m = n, n = null;
            }
          }function l(h) {
            var l,
                m = B(c, j, g, e),
                t = m && a.$current && a.$current.locals[m];if (h || t !== p) {
              l = c.$new(), p = a.$current.locals[m], l.$emit("$viewContentLoading", m);var u = i(l, function (a) {
                var e = f.defer(),
                    h = f.defer(),
                    i = { $animEnter: e.promise, $animLeave: h.promise, $$animLeave: h };a.data("$uiViewAnim", i), s.enter(a, g, function () {
                  e.resolve(), o && o.$emit("$viewContentAnimationEnded"), (b.isDefined(r) && !r || c.$eval(r)) && d(a);
                }), k();
              });n = u, o = l, o.$emit("$viewContentLoaded", m), o.$eval(q);
            }
          }var m,
              n,
              o,
              p,
              q = j.onload || "",
              r = j.autoscroll,
              s = h(j, c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess", function () {
            l(!1);
          }), l(!0);
        };
      } };return l;
  }function A(a, c, d, e) {
    return { restrict: "ECA", priority: -400, compile: function compile(f) {
        var g = f.html();return function (f, h, i) {
          var j = d.$current,
              k = B(f, i, h, e),
              l = j && j.locals[k];if (l) {
            h.data("$uiView", { name: k, state: l.$$state }), h.html(l.$template ? l.$template : g);var m = b.extend({}, l);f[l.$$resolveAs] = m;var n = a(h.contents());if (l.$$controller) {
              l.$scope = f, l.$element = h;var o = c(l.$$controller, l);l.$$controllerAs && (f[l.$$controllerAs] = o, f[l.$$controllerAs][l.$$resolveAs] = m), N(o.$onInit) && o.$onInit(), h.data("$ngControllerController", o), h.children().data("$ngControllerController", o);
            }n(f);
          }
        };
      } };
  }function B(a, b, c, d) {
    var e = d(b.uiView || b.name || "")(a),
        f = c.inheritedData("$uiView");return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "");
  }function C(a, b) {
    var c,
        d = a.match(/^\s*({[^}]*})\s*$/);if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");return { state: c[1], paramExpr: c[3] || null };
  }function D(a) {
    var b = a.parent().inheritedData("$uiView");if (b && b.state && b.state.name) return b.state;
  }function E(a) {
    var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")),
        c = "FORM" === a[0].nodeName;return { attr: c ? "action" : b ? "xlink:href" : "href", isAnchor: "A" === a.prop("tagName").toUpperCase(), clickable: !c };
  }function F(a, b, c, d, e) {
    return function (f) {
      var g = f.which || f.button,
          h = e();if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
        var i = c(function () {
          b.go(h.state, h.params, h.options);
        });f.preventDefault();var j = d.isAnchor && !h.href ? 1 : 0;f.preventDefault = function () {
          j-- <= 0 && c.cancel(i);
        };
      }
    };
  }function G(a, b) {
    return { relative: D(a) || b.$current, inherit: !0 };
  }function H(a, c) {
    return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(d, e, f, g) {
        var h,
            i = C(f.uiSref, a.current.name),
            j = { state: i.state, href: null, params: null },
            k = E(e),
            l = g[1] || g[0],
            m = null;j.options = S(G(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});var n = function n(c) {
          c && (j.params = b.copy(c)), j.href = a.href(i.state, j.params, j.options), m && m(), l && (m = l.$$addStateInfo(i.state, j.params)), null !== j.href && f.$set(k.attr, j.href);
        };i.paramExpr && (d.$watch(i.paramExpr, function (a) {
          a !== j.params && n(a);
        }, !0), j.params = b.copy(d.$eval(i.paramExpr))), n(), k.clickable && (h = F(e, a, c, k, function () {
          return j;
        }), e[e.on ? "on" : "bind"]("click", h), d.$on("$destroy", function () {
          e[e.off ? "off" : "unbind"]("click", h);
        }));
      } };
  }function I(a, b) {
    return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(c, d, e, f) {
        function g(b) {
          m.state = b[0], m.params = b[1], m.options = b[2], m.href = a.href(m.state, m.params, m.options), n && n(), j && (n = j.$$addStateInfo(m.state, m.params)), m.href && e.$set(i.attr, m.href);
        }var h,
            i = E(d),
            j = f[1] || f[0],
            k = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null],
            l = "[" + k.map(function (a) {
          return a || "null";
        }).join(", ") + "]",
            m = { state: null, params: null, options: null, href: null },
            n = null;c.$watch(l, g, !0), g(c.$eval(l)), i.clickable && (h = F(d, a, b, i, function () {
          return m;
        }), d[d.on ? "on" : "bind"]("click", h), c.$on("$destroy", function () {
          d[d.off ? "off" : "unbind"]("click", h);
        }));
      } };
  }function J(a, b, c) {
    return { restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (b, d, e, f) {
        function g(b, c, e) {
          var f = a.get(b, D(d)),
              g = h(b, c),
              i = { state: f || { name: b }, params: c, hash: g };return p.push(i), q[g] = e, function () {
            var a = p.indexOf(i);a !== -1 && p.splice(a, 1);
          };
        }function h(a, c) {
          if (!O(a)) throw new Error("state should be a string");return P(c) ? a + U(c) : (c = b.$eval(c), P(c) ? a + U(c) : a);
        }function i() {
          for (var a = 0; a < p.length; a++) {
            l(p[a].state, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), m(p[a].state, p[a].params) ? j(d, n) : k(d, n);
          }
        }function j(a, b) {
          f(function () {
            a.addClass(b);
          });
        }function k(a, b) {
          a.removeClass(b);
        }function l(b, c) {
          return a.includes(b.name, c);
        }function m(b, c) {
          return a.is(b.name, c);
        }var n,
            o,
            p = [],
            q = {};n = c(e.uiSrefActiveEq || "", !1)(b);try {
          o = b.$eval(e.uiSrefActive);
        } catch (a) {}o = o || c(e.uiSrefActive || "", !1)(b), P(o) && R(o, function (c, d) {
          if (O(c)) {
            var e = C(c, a.current.name);g(e.state, b.$eval(e.paramExpr), d);
          }
        }), this.$$addStateInfo = function (a, b) {
          if (!(P(o) && p.length > 0)) {
            var c = g(a, b, o);return i(), c;
          }
        }, b.$on("$stateChangeSuccess", i), i();
      }] };
  }function K(a) {
    var b = function b(_b, c) {
      return a.is(_b, c);
    };return b.$stateful = !0, b;
  }function L(a) {
    var b = function b(_b2, c, d) {
      return a.includes(_b2, c, d);
    };return b.$stateful = !0, b;
  }var M = b.isDefined,
      N = b.isFunction,
      O = b.isString,
      P = b.isObject,
      Q = b.isArray,
      R = b.forEach,
      S = b.extend,
      T = b.copy,
      U = b.toJson;b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), q.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", q), r.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", r);var V;s.prototype.concat = function (a, b) {
    var c = { caseInsensitive: V.caseInsensitive(), strict: V.strictMode(), squash: V.defaultSquashPolicy() };return new s(this.sourcePath + a + this.sourceSearch, S(c, b), this);
  }, s.prototype.toString = function () {
    return this.source;
  }, s.prototype.exec = function (a, b) {
    function c(a) {
      function b(a) {
        return a.split("").reverse().join("");
      }function c(a) {
        return a.replace(/\\-/g, "-");
      }var d = b(a).split(/-(?!\\)/),
          e = o(d, b);return o(e, c).reverse();
    }var d = this.regexp.exec(a);if (!d) return null;b = b || {};var e,
        f,
        g,
        h = this.parameters(),
        i = h.length,
        j = this.segments.length - 1,
        k = {};if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");var l, m;for (e = 0; e < j; e++) {
      for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) {
        l.replace[f].from === m && (m = l.replace[f].to);
      }m && l.array === !0 && (m = c(m)), M(m) && (m = l.type.decode(m)), k[g] = l.value(m);
    }for (; e < i; e++) {
      for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) {
        l.replace[f].from === m && (m = l.replace[f].to);
      }M(m) && (m = l.type.decode(m)), k[g] = l.value(m);
    }return k;
  }, s.prototype.parameters = function (a) {
    return M(a) ? this.params[a] || null : this.$$paramNames;
  }, s.prototype.validates = function (a) {
    return this.params.$$validates(a);
  }, s.prototype.format = function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/-/g, function (a) {
        return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase();
      });
    }a = a || {};var c = this.segments,
        d = this.parameters(),
        e = this.params;if (!this.validates(a)) return null;var f,
        g = !1,
        h = c.length - 1,
        i = d.length,
        j = c[0];for (f = 0; f < i; f++) {
      var k = f < h,
          l = d[f],
          m = e[l],
          n = m.value(a[l]),
          p = m.isOptional && m.type.equals(m.value(), n),
          q = !!p && m.squash,
          r = m.type.encode(n);if (k) {
        var s = c[f + 1],
            t = f + 1 === h;if (q === !1) null != r && (j += Q(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s;else if (q === !0) {
          var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;j += s.match(u)[1];
        } else O(q) && (j += q + s);t && m.squash === !0 && "/" === j.slice(-1) && (j = j.slice(0, -1));
      } else {
        if (null == r || p && q !== !1) continue;if (Q(r) || (r = [r]), 0 === r.length) continue;r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0;
      }
    }return j;
  }, t.prototype.is = function (a, b) {
    return !0;
  }, t.prototype.encode = function (a, b) {
    return a;
  }, t.prototype.decode = function (a, b) {
    return a;
  }, t.prototype.equals = function (a, b) {
    return a == b;
  }, t.prototype.$subPattern = function () {
    var a = this.pattern.toString();return a.substr(1, a.length - 2);
  }, t.prototype.pattern = /.*/, t.prototype.toString = function () {
    return "{Type:" + this.name + "}";
  }, t.prototype.$normalize = function (a) {
    return this.is(a) ? a : this.decode(a);
  }, t.prototype.$asArray = function (a, b) {
    function d(a, b) {
      function d(a, b) {
        return function () {
          return a[b].apply(a, arguments);
        };
      }function e(a) {
        return Q(a) ? a : M(a) ? [a] : [];
      }function f(a) {
        switch (a.length) {case 0:
            return c;case 1:
            return "auto" === b ? a[0] : a;default:
            return a;}
      }function g(a) {
        return !a;
      }function h(a, b) {
        return function (c) {
          if (Q(c) && 0 === c.length) return c;c = e(c);var d = o(c, a);return b === !0 ? 0 === n(d, g).length : f(d);
        };
      }function i(a) {
        return function (b, c) {
          var d = e(b),
              f = e(c);if (d.length !== f.length) return !1;for (var g = 0; g < d.length; g++) {
            if (!a(d[g], f[g])) return !1;
          }return !0;
        };
      }this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b;
    }if (!a) return this;if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");return new d(this, a);
  }, b.module("ui.router.util").provider("$urlMatcherFactory", u), b.module("ui.router.util").run(["$urlMatcherFactory", function (a) {}]), v.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", v), w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function () {
    return {};
  }).constant("$state.runtime", { autoinject: !0 }).provider("$state", w).run(["$injector", function (a) {
    a.get("$state.runtime").autoinject && a.get("$state");
  }]), x.$inject = [], b.module("ui.router.state").provider("$view", x), b.module("ui.router.state").provider("$uiViewScroll", y), z.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], A.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", z), b.module("ui.router.state").directive("uiView", A), H.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$timeout"], J.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", H).directive("uiSrefActive", J).directive("uiSrefActiveEq", J).directive("uiState", I), K.$inject = ["$state"], L.$inject = ["$state"], b.module("ui.router.state").filter("isState", K).filter("includedByState", L);
}(window, window.angular);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (z) {
    'use strict';

    function M(a, b) {
        b = b || Error;
        return function () {
            var d = arguments[0],
                c;
            c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.1/" + (a ? a + "/" : "") + d;
            for (d = 1; d < arguments.length; d++) {
                c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";
                var f = encodeURIComponent,
                    e;
                e = arguments[d];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += f(e);
            }
            return new b(c);
        };
    }

    function ta(a) {
        if (null == a || Wa(a)) return !1;
        if (C(a) || E(a) || D && a instanceof D) return !0;
        var b = "length" in Object(a) && a.length;
        return Y(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item);
    }

    function q(a, b, d) {
        var c, f;
        if (a) if (y(a)) for (c in a) {
            "prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);
        } else if (C(a) || ta(a)) {
            var e = "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a));
            c = 0;
            for (f = a.length; c < f; c++) {
                (e || c in a) && b.call(d, a[c], c, a);
            }
        } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (Dc(a)) for (c in a) {
            b.call(d, a[c], c, a);
        } else if ("function" === typeof a.hasOwnProperty) for (c in a) {
            a.hasOwnProperty(c) && b.call(d, a[c], c, a);
        } else for (c in a) {
            va.call(a, c) && b.call(d, a[c], c, a);
        }return a;
    }

    function Ec(a, b, d) {
        for (var c = Object.keys(a).sort(), f = 0; f < c.length; f++) {
            b.call(d, a[c[f]], c[f]);
        }return c;
    }

    function Fc(a) {
        return function (b, d) {
            a(d, b);
        };
    }

    function ie() {
        return ++rb;
    }

    function Sb(a, b, d) {
        for (var c = a.$$hashKey, f = 0, e = b.length; f < e; ++f) {
            var g = b[f];
            if (F(g) || y(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                var m = h[k],
                    n = g[m];
                d && F(n) ? fa(n) ? a[m] = new Date(n.valueOf()) : Xa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Tb(n) ? a[m] = n.clone() : (F(a[m]) || (a[m] = C(n) ? [] : {}), Sb(a[m], [n], !0)) : a[m] = n;
            }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a;
    }

    function R(a) {
        return Sb(a, wa.call(arguments, 1), !1);
    }

    function je(a) {
        return Sb(a, wa.call(arguments, 1), !0);
    }

    function Z(a) {
        return parseInt(a, 10);
    }

    function Ub(a, b) {
        return R(Object.create(a), b);
    }

    function w() {}

    function Ya(a) {
        return a;
    }

    function ma(a) {
        return function () {
            return a;
        };
    }

    function Vb(a) {
        return y(a.toString) && a.toString !== na;
    }

    function x(a) {
        return "undefined" === typeof a;
    }

    function v(a) {
        return "undefined" !== typeof a;
    }

    function F(a) {
        return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a));
    }

    function Dc(a) {
        return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && !Gc(a);
    }

    function E(a) {
        return "string" === typeof a;
    }

    function Y(a) {
        return "number" === typeof a;
    }

    function fa(a) {
        return "[object Date]" === na.call(a);
    }

    function y(a) {
        return "function" === typeof a;
    }

    function Xa(a) {
        return "[object RegExp]" === na.call(a);
    }

    function Wa(a) {
        return a && a.window === a;
    }

    function Za(a) {
        return a && a.$evalAsync && a.$watch;
    }

    function Ia(a) {
        return "boolean" === typeof a;
    }

    function ke(a) {
        return a && Y(a.length) && le.test(na.call(a));
    }

    function Tb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
    }

    function me(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++) {
            b[a[d]] = !0;
        }return b;
    }

    function xa(a) {
        return P(a.nodeName || a[0] && a[0].nodeName);
    }

    function $a(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d;
    }

    function Fa(a, b) {
        function d(a, b) {
            var d = b.$$hashKey,
                e;
            if (C(a)) {
                e = 0;
                for (var f = a.length; e < f; e++) {
                    b.push(c(a[e]));
                }
            } else if (Dc(a)) for (e in a) {
                b[e] = c(a[e]);
            } else if (a && "function" === typeof a.hasOwnProperty) for (e in a) {
                a.hasOwnProperty(e) && (b[e] = c(a[e]));
            } else for (e in a) {
                va.call(a, e) && (b[e] = c(a[e]));
            }d ? b.$$hashKey = d : delete b.$$hashKey;
            return b;
        }

        function c(a) {
            if (!F(a)) return a;
            var b = e.indexOf(a);
            if (-1 !== b) return g[b];
            if (Wa(a) || Za(a)) throw Ga("cpws");
            var b = !1,
                c = f(a);
            void 0 === c && (c = C(a) ? [] : Object.create(Gc(a)), b = !0);
            e.push(a);
            g.push(c);
            return b ? d(a, c) : c;
        }

        function f(a) {
            switch (na.call(a)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new a.constructor(c(a.buffer), a.byteOffset, a.length);
                case "[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        new Uint8Array(b).set(new Uint8Array(a));
                        return b;
                    }
                    return a.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new a.constructor(a.valueOf());
                case "[object RegExp]":
                    return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;
                case "[object Blob]":
                    return new a.constructor([a], { type: a.type });
            }
            if (y(a.cloneNode)) return a.cloneNode(!0);
        }

        var e = [],
            g = [];
        if (b) {
            if (ke(b) || "[object ArrayBuffer]" === na.call(b)) throw Ga("cpta");
            if (a === b) throw Ga("cpi");
            C(b) ? b.length = 0 : q(b, function (a, d) {
                "$$hashKey" !== d && delete b[d];
            });
            e.push(a);
            g.push(b);
            return d(a, b);
        }
        return c(a);
    }

    function qa(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d = typeof a === "undefined" ? "undefined" : _typeof(a),
            c;
        if (d === (typeof b === "undefined" ? "undefined" : _typeof(b)) && "object" === d) if (C(a)) {
            if (!C(b)) return !1;
            if ((d = a.length) === b.length) {
                for (c = 0; c < d; c++) {
                    if (!qa(a[c], b[c])) return !1;
                }return !0;
            }
        } else {
            if (fa(a)) return fa(b) ? qa(a.getTime(), b.getTime()) : !1;
            if (Xa(a)) return Xa(b) ? a.toString() === b.toString() : !1;
            if (Za(a) || Za(b) || Wa(a) || Wa(b) || C(b) || fa(b) || Xa(b)) return !1;
            d = W();
            for (c in a) {
                if ("$" !== c.charAt(0) && !y(a[c])) {
                    if (!qa(a[c], b[c])) return !1;
                    d[c] = !0;
                }
            }for (c in b) {
                if (!(c in d) && "$" !== c.charAt(0) && v(b[c]) && !y(b[c])) return !1;
            }return !0;
        }
        return !1;
    }

    function ab(a, b, d) {
        return a.concat(wa.call(b, d));
    }

    function bb(a, b) {
        var d = 2 < arguments.length ? wa.call(arguments, 2) : [];
        return !y(b) || b instanceof RegExp ? b : d.length ? function () {
            return arguments.length ? b.apply(a, ab(d, arguments, 0)) : b.apply(a, d);
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }

    function Hc(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Wa(b) ? d = "$WINDOW" : b && z.document === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");
        return d;
    }

    function cb(a, b) {
        if (!x(a)) return Y(b) || (b = b ? 2 : null), JSON.stringify(a, Hc, b);
    }

    function Ic(a) {
        return E(a) ? JSON.parse(a) : a;
    }

    function Jc(a, b) {
        a = a.replace(ne, "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
        return ga(d) ? b : d;
    }

    function Wb(a, b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        b = Jc(b, c);
        d *= b - c;
        a = new Date(a.getTime());
        a.setMinutes(a.getMinutes() + d);
        return a;
    }

    function ya(a) {
        a = D(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var d = D("<div>").append(a).html();
        try {
            return a[0].nodeType === Ja ? P(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
                return "<" + P(b);
            });
        } catch (c) {
            return P(d);
        }
    }

    function Kc(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }

    function Lc(a) {
        var b = {};
        q((a || "").split("&"), function (a) {
            var c, f, e;
            a && (f = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (f = a.substring(0, c), e = a.substring(c + 1)), f = Kc(f), v(f) && (e = v(e) ? Kc(e) : !0, va.call(b, f) ? C(b[f]) ? b[f].push(e) : b[f] = [b[f], e] : b[f] = e));
        });
        return b;
    }

    function Xb(a) {
        var b = [];
        q(a, function (a, c) {
            C(a) ? q(a, function (a) {
                b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)));
            }) : b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)));
        });
        return b.length ? b.join("&") : "";
    }

    function db(a) {
        return ka(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }

    function ka(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
    }

    function oe(a, b) {
        var d,
            c,
            f = Ka.length;
        for (c = 0; c < f; ++c) {
            if (d = Ka[c] + b, E(d = a.getAttribute(d))) return d;
        }return null;
    }

    function pe(a, b) {
        var d,
            c,
            f = {};
        q(Ka, function (b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
        });
        q(Ka, function (b) {
            b += "app";
            var f;
            !d && (f = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = f, c = f.getAttribute(b));
        });
        d && (qe ? (f.strictDi = null !== oe(d, "strict-di"), b(d, c ? [c] : [], f)) : z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
    }

    function Mc(a, b, d) {
        F(d) || (d = {});
        d = R({ strictDi: !1 }, d);
        var c = function c() {
            a = D(a);
            if (a.injector()) {
                var c = a[0] === z.document ? "document" : ya(a);
                throw Ga("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            b = b || [];
            b.unshift(["$provide", function (b) {
                b.value("$rootElement", a);
            }]);
            d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0);
            }]);
            b.unshift("ng");
            c = eb(b, d.strictDi);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, d, c) {
                a.$apply(function () {
                    b.data("$injector", c);
                    d(b)(a);
                });
            }]);
            return c;
        },
            f = /^NG_ENABLE_DEBUG_INFO!/,
            e = /^NG_DEFER_BOOTSTRAP!/;
        z && f.test(z.name) && (d.debugInfoEnabled = !0, z.name = z.name.replace(f, ""));
        if (z && !e.test(z.name)) return c();
        z.name = z.name.replace(e, "");
        $.resumeBootstrap = function (a) {
            q(a, function (a) {
                b.push(a);
            });
            return c();
        };
        y($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap();
    }

    function re() {
        z.name = "NG_ENABLE_DEBUG_INFO!" + z.name;
        z.location.reload();
    }

    function se(a) {
        a = $.element(a).injector();
        if (!a) throw Ga("test");
        return a.get("$$testability");
    }

    function Nc(a, b) {
        b = b || "_";
        return a.replace(te, function (a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }

    function ue() {
        var a;
        if (!Oc) {
            var b = sb();
            (oa = x(b) ? z.jQuery : b ? z[b] : void 0) && oa.fn.on ? (D = oa, R(oa.fn, {
                scope: Oa.scope,
                isolateScope: Oa.isolateScope,
                controller: Oa.controller,
                injector: Oa.injector,
                inheritedData: Oa.inheritedData
            }), a = oa.cleanData, oa.cleanData = function (b) {
                for (var c, f = 0, e; null != (e = b[f]); f++) {
                    (c = oa._data(e, "events")) && c.$destroy && oa(e).triggerHandler("$destroy");
                }a(b);
            }) : D = X;
            $.element = D;
            Oc = !0;
        }
    }

    function fb(a, b, d) {
        if (!a) throw Ga("areq", b || "?", d || "required");
        return a;
    }

    function tb(a, b, d) {
        d && C(a) && (a = a[a.length - 1]);
        fb(y(a), b, "not a function, got " + (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? a.constructor.name || "Object" : typeof a === "undefined" ? "undefined" : _typeof(a)));
        return a;
    }

    function Pa(a, b) {
        if ("hasOwnProperty" === a) throw Ga("badname", b);
    }

    function Pc(a, b, d) {
        if (!b) return a;
        b = b.split(".");
        for (var c, f = a, e = b.length, g = 0; g < e; g++) {
            c = b[g], a && (a = (f = a)[c]);
        }return !d && y(a) ? bb(f, a) : a;
    }

    function ub(a) {
        for (var b = a[0], d = a[a.length - 1], c, f = 1; b !== d && (b = b.nextSibling); f++) {
            if (c || a[f] !== b) c || (c = D(wa.call(a, 0, f))), c.push(b);
        }return c || a;
    }

    function W() {
        return Object.create(null);
    }

    function Yb(a) {
        if (null == a) return "";
        switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {
            case "string":
                break;
            case "number":
                a = "" + a;
                break;
            default:
                a = !Vb(a) || C(a) || fa(a) ? cb(a) : a.toString();
        }
        return a;
    }

    function ve(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c());
        }

        var d = M("$injector"),
            c = M("ng");
        a = b(a, "angular", Object);
        a.$$minErr = a.$$minErr || M;
        return b(a, "module", function () {
            var a = {};
            return function (e, g, h) {
                if ("hasOwnProperty" === e) throw c("badname", "module");
                g && a.hasOwnProperty(e) && (a[e] = null);
                return b(a, e, function () {
                    function a(b, d, e, f) {
                        f || (f = c);
                        return function () {
                            f[e || "push"]([b, d, arguments]);
                            return J;
                        };
                    }

                    function b(a, d, f) {
                        f || (f = c);
                        return function (b, c) {
                            c && y(c) && (c.$$moduleName = e);
                            f.push([a, d, arguments]);
                            return J;
                        };
                    }

                    if (!g) throw d("nomod", e);
                    var c = [],
                        f = [],
                        p = [],
                        r = a("$injector", "invoke", "push", f),
                        J = {
                        _invokeQueue: c,
                        _configBlocks: f,
                        _runBlocks: p,
                        requires: g,
                        name: e,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator", f),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        component: b("$compileProvider", "component"),
                        config: r,
                        run: function run(a) {
                            p.push(a);
                            return this;
                        }
                    };
                    h && r(h);
                    return J;
                });
            };
        });
    }

    function ra(a, b) {
        if (C(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++) {
                b[d] = a[d];
            }
        } else if (F(a)) for (d in b = b || {}, a) {
            if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
        }return b || a;
    }

    function we(a) {
        var b = [];
        return JSON.stringify(a, function (a, c) {
            c = Hc(a, c);
            if (F(c)) {
                if (0 <= b.indexOf(c)) return "...";
                b.push(c);
            }
            return c;
        });
    }

    function xe(a) {
        R(a, {
            bootstrap: Mc,
            copy: Fa,
            extend: R,
            merge: je,
            equals: qa,
            element: D,
            forEach: q,
            injector: eb,
            noop: w,
            bind: bb,
            toJson: cb,
            fromJson: Ic,
            identity: Ya,
            isUndefined: x,
            isDefined: v,
            isString: E,
            isFunction: y,
            isObject: F,
            isNumber: Y,
            isElement: Tb,
            isArray: C,
            version: ye,
            isDate: fa,
            lowercase: P,
            uppercase: vb,
            callbacks: { $$counter: 0 },
            getTestability: se,
            reloadWithDebugInfo: re,
            $$minErr: M,
            $$csp: za,
            $$encodeUriSegment: db,
            $$encodeUriQuery: ka,
            $$stringify: Yb
        });
        Zb = ve(z);
        Zb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({ $$sanitizeUri: ze });
            a.provider("$compile", Qc).directive({
                a: Ae,
                input: Rc,
                textarea: Rc,
                form: Be,
                script: Ce,
                select: De,
                option: Ee,
                ngBind: Fe,
                ngBindHtml: Ge,
                ngBindTemplate: He,
                ngClass: Ie,
                ngClassEven: Je,
                ngClassOdd: Ke,
                ngCloak: Le,
                ngController: Me,
                ngForm: Ne,
                ngHide: Oe,
                ngIf: Pe,
                ngInclude: Qe,
                ngInit: Re,
                ngNonBindable: Se,
                ngPluralize: Te,
                ngRepeat: Ue,
                ngShow: Ve,
                ngStyle: We,
                ngSwitch: Xe,
                ngSwitchWhen: Ye,
                ngSwitchDefault: Ze,
                ngOptions: $e,
                ngTransclude: af,
                ngModel: bf,
                ngList: cf,
                ngChange: df,
                pattern: Sc,
                ngPattern: Sc,
                required: Tc,
                ngRequired: Tc,
                minlength: Uc,
                ngMinlength: Uc,
                maxlength: Vc,
                ngMaxlength: Vc,
                ngValue: ef,
                ngModelOptions: ff
            }).directive({ ngInclude: gf }).directive(wb).directive(Wc);
            a.provider({
                $anchorScroll: hf,
                $animate: jf,
                $animateCss: kf,
                $$animateJs: lf,
                $$animateQueue: mf,
                $$AnimateRunner: nf,
                $$animateAsyncRun: of,
                $browser: pf,
                $cacheFactory: qf,
                $controller: rf,
                $document: sf,
                $$isDocumentHidden: tf,
                $exceptionHandler: uf,
                $filter: Xc,
                $$forceReflow: vf,
                $interpolate: wf,
                $interval: xf,
                $http: yf,
                $httpParamSerializer: zf,
                $httpParamSerializerJQLike: Af,
                $httpBackend: Bf,
                $xhrFactory: Cf,
                $jsonpCallbacks: Df,
                $location: Ef,
                $log: Ff,
                $parse: Gf,
                $rootScope: Hf,
                $q: If,
                $$q: Jf,
                $sce: Kf,
                $sceDelegate: Lf,
                $sniffer: Mf,
                $templateCache: Nf,
                $templateRequest: Of,
                $$testability: Pf,
                $timeout: Qf,
                $window: Rf,
                $$rAF: Sf,
                $$jqLite: Tf,
                $$HashMap: Uf,
                $$cookieReader: Vf
            });
        }]);
    }

    function gb(a, b) {
        return b.toUpperCase();
    }

    function xb(a) {
        return a.replace(Wf, gb);
    }

    function Yc(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a;
    }

    function Zc(a, b) {
        var d,
            c,
            f = b.createDocumentFragment(),
            e = [];
        if ($b.test(a)) {
            d = f.appendChild(b.createElement("div"));
            c = (Xf.exec(a) || ["", ""])[1].toLowerCase();
            c = ha[c] || ha._default;
            d.innerHTML = c[1] + a.replace(Yf, "<$1></$2>") + c[2];
            for (c = c[0]; c--;) {
                d = d.lastChild;
            }e = ab(e, d.childNodes);
            d = f.firstChild;
            d.textContent = "";
        } else e.push(b.createTextNode(a));
        f.textContent = "";
        f.innerHTML = "";
        q(e, function (a) {
            f.appendChild(a);
        });
        return f;
    }

    function X(a) {
        if (a instanceof X) return a;
        var b;
        E(a) && (a = S(a), b = !0);
        if (!(this instanceof X)) {
            if (b && "<" !== a.charAt(0)) throw ac("nosel");
            return new X(a);
        }
        if (b) {
            b = z.document;
            var d;
            a = (d = Zf.exec(a)) ? [b.createElement(d[1])] : (d = Zc(a, b)) ? d.childNodes : [];
            bc(this, a);
        } else y(a) ? $c(a) : bc(this, a);
    }

    function cc(a) {
        return a.cloneNode(!0);
    }

    function yb(a, b) {
        b || hb(a);
        if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, f = d.length; c < f; c++) {
            hb(d[c]);
        }
    }

    function ad(a, b, d, c) {
        if (v(c)) throw ac("offargs");
        var f = (c = zb(a)) && c.events,
            e = c && c.handle;
        if (e) if (b) {
            var g = function g(b) {
                var c = f[b];
                v(d) && $a(c || [], d);
                v(d) && c && 0 < c.length || (a.removeEventListener(b, e), delete f[b]);
            };
            q(b.split(" "), function (a) {
                g(a);
                Ab[a] && g(Ab[a]);
            });
        } else for (b in f) {
            "$destroy" !== b && a.removeEventListener(b, e), delete f[b];
        }
    }

    function hb(a, b) {
        var d = a.ng339,
            c = d && ib[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), ad(a)), delete ib[d], a.ng339 = void 0));
    }

    function zb(a, b) {
        var d = a.ng339,
            d = d && ib[d];
        b && !d && (a.ng339 = d = ++$f, d = ib[d] = { events: {}, data: {}, handle: void 0 });
        return d;
    }

    function dc(a, b, d) {
        if (Yc(a)) {
            var c,
                f = v(d),
                e = !f && b && !F(b),
                g = !b;
            a = (a = zb(a, !e)) && a.data;
            if (f) a[xb(b)] = d;else {
                if (g) return a;
                if (e) return a && a[xb(b)];
                for (c in b) {
                    a[xb(c)] = b[c];
                }
            }
        }
    }

    function Bb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
    }

    function Cb(a, b) {
        b && a.setAttribute && q(b.split(" "), function (b) {
            a.setAttribute("class", S((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + S(b) + " ", " ")));
        });
    }

    function Db(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(b.split(" "), function (a) {
                a = S(a);
                -1 === d.indexOf(" " + a + " ") && (d += a + " ");
            });
            a.setAttribute("class", S(d));
        }
    }

    function bc(a, b) {
        if (b) if (b.nodeType) a[a.length++] = b;else {
            var d = b.length;
            if ("number" === typeof d && b.window !== b) {
                if (d) for (var c = 0; c < d; c++) {
                    a[a.length++] = b[c];
                }
            } else a[a.length++] = b;
        }
    }

    function bd(a, b) {
        return Eb(a, "$" + (b || "ngController") + "Controller");
    }

    function Eb(a, b, d) {
        9 === a.nodeType && (a = a.documentElement);
        for (b = C(b) ? b : [b]; a;) {
            for (var c = 0, f = b.length; c < f; c++) {
                if (v(d = D.data(a, b[c]))) return d;
            }a = a.parentNode || 11 === a.nodeType && a.host;
        }
    }

    function cd(a) {
        for (yb(a, !0); a.firstChild;) {
            a.removeChild(a.firstChild);
        }
    }

    function Fb(a, b) {
        b || yb(a);
        var d = a.parentNode;
        d && d.removeChild(a);
    }

    function ag(a, b) {
        b = b || z;
        if ("complete" === b.document.readyState) b.setTimeout(a);else D(b).on("load", a);
    }

    function $c(a) {
        function b() {
            z.document.removeEventListener("DOMContentLoaded", b);
            z.removeEventListener("load", b);
            a();
        }

        "complete" === z.document.readyState ? z.setTimeout(a) : (z.document.addEventListener("DOMContentLoaded", b), z.addEventListener("load", b));
    }

    function dd(a, b) {
        var d = Gb[b.toLowerCase()];
        return d && ed[xa(a)] && d;
    }

    function bg(a, b) {
        var d = function d(c, _d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented;
            };
            var e = b[_d || c.type],
                g = e ? e.length : 0;
            if (g) {
                if (x(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c);
                    };
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped;
                };
                var k = e.specialHandlerWrapper || cg;
                1 < g && (e = ra(e));
                for (var l = 0; l < g; l++) {
                    c.isImmediatePropagationStopped() || k(a, c, e[l]);
                }
            }
        };
        d.elem = a;
        return d;
    }

    function cg(a, b, d) {
        d.call(a, b);
    }

    function dg(a, b, d) {
        var c = b.relatedTarget;
        c && (c === a || eg.call(a, c)) || d.call(a, b);
    }

    function Tf() {
        this.$get = function () {
            return R(X, {
                hasClass: function hasClass(a, b) {
                    a.attr && (a = a[0]);
                    return Bb(a, b);
                }, addClass: function addClass(a, b) {
                    a.attr && (a = a[0]);
                    return Db(a, b);
                }, removeClass: function removeClass(a, b) {
                    a.attr && (a = a[0]);
                    return Cb(a, b);
                }
            });
        };
    }

    function la(a, b) {
        var d = a && a.$$hashKey;
        if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
        d = typeof a === "undefined" ? "undefined" : _typeof(a);
        return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || ie)() : d + ":" + a;
    }

    function Qa(a, b) {
        if (b) {
            var d = 0;
            this.nextUid = function () {
                return ++d;
            };
        }
        q(a, this.put, this);
    }

    function fd(a) {
        a = (Function.prototype.toString.call(a) + " ").replace(fg, "");
        return a.match(gg) || a.match(hg);
    }

    function ig(a) {
        return (a = fd(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }

    function eb(a, b) {
        function d(a) {
            return function (b, c) {
                if (F(b)) q(b, Fc(a));else return a(b, c);
            };
        }

        function c(a, b) {
            Pa(a, "service");
            if (y(b) || C(b)) b = p.instantiate(b);
            if (!b.$get) throw da("pget", a);
            return n[a + "Provider"] = b;
        }

        function f(a, b) {
            return function () {
                var c = O.invoke(b, this);
                if (x(c)) throw da("undef", a);
                return c;
            };
        }

        function e(a, b, d) {
            return c(a, { $get: !1 !== d ? f(a, b) : b });
        }

        function g(a) {
            fb(x(a) || C(a), "modulesToLoad", "not an array");
            var b = [],
                c;
            q(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b],
                            f = p.get(e[0]);
                        f[e[1]].apply(f, e[2]);
                    }
                }

                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        E(a) ? (c = Zb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : y(a) ? b.push(p.invoke(a)) : C(a) ? b.push(p.invoke(a)) : tb(a, "module");
                    } catch (e) {
                        throw C(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), da("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b;
        }

        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k) throw da("cdep", b + " <- " + l.join(" <- "));
                    return a[b];
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e), a[b];
                } catch (f) {
                    throw a[b] === k && delete a[b], f;
                } finally {
                    l.shift();
                }
            }

            function e(a, c, f) {
                var g = [];
                a = eb.$$annotate(a, b, f);
                for (var h = 0, k = a.length; h < k; h++) {
                    var l = a[h];
                    if ("string" !== typeof l) throw da("itkn", l);
                    g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
                }
                return g;
            }

            return {
                invoke: function invoke(a, b, c, d) {
                    "string" === typeof c && (d = c, c = null);
                    c = e(a, c, d);
                    C(a) && (a = a[a.length - 1]);
                    d = a;
                    if (La || "function" !== typeof d) d = !1;else {
                        var f = d.$$ngIsClass;
                        Ia(f) || (f = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d) + " "));
                        d = f;
                    }
                    return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
                }, instantiate: function instantiate(a, b, c) {
                    var d = C(a) ? a[a.length - 1] : a;
                    a = e(a, b, c);
                    a.unshift(null);
                    return new (Function.prototype.bind.apply(d, a))();
                }, get: d, annotate: eb.$$annotate, has: function has(b) {
                    return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
                }
            };
        }

        b = !0 === b;
        var k = {},
            l = [],
            m = new Qa([], !0),
            n = {
            $provide: {
                provider: d(c), factory: d(e),
                service: d(function (a, b) {
                    return e(a, ["$injector", function (a) {
                        return a.instantiate(b);
                    }]);
                }), value: d(function (a, b) {
                    return e(a, ma(b), !1);
                }), constant: d(function (a, b) {
                    Pa(a, "constant");
                    n[a] = b;
                    r[a] = b;
                }), decorator: function decorator(a, b) {
                    var c = p.get(a + "Provider"),
                        d = c.$get;
                    c.$get = function () {
                        var a = O.invoke(d, c);
                        return O.invoke(b, null, { $delegate: a });
                    };
                }
            }
        },
            p = n.$injector = h(n, function (a, b) {
            $.isString(b) && l.push(b);
            throw da("unpr", l.join(" <- "));
        }),
            r = {},
            J = h(r, function (a, b) {
            var c = p.get(a + "Provider", b);
            return O.invoke(c.$get, c, void 0, a);
        }),
            O = J;
        n.$injectorProvider = { $get: ma(J) };
        var u = g(a),
            O = J.get("$injector");
        O.strictDi = b;
        q(u, function (a) {
            a && O.invoke(a);
        });
        return O;
    }

    function hf() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1;
        };
        this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
            function f(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === xa(a)) return b = a, !0;
                });
                return b;
            }

            function e(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    y(c) ? c = c() : Tb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
                } else b.scrollTo(0, 0);
            }

            function g(a) {
                a = E(a) ? a : Y(a) ? a.toString() : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? e(b) : (b = f(h.getElementsByName(a))) ? e(b) : "top" === a && e(null) : e(null);
            }

            var h = b.document;
            a && c.$watch(function () {
                return d.hash();
            }, function (a, b) {
                a === b && "" === a || ag(function () {
                    c.$evalAsync(g);
                });
            });
            return g;
        }];
    }

    function jb(a, b) {
        if (!a && !b) return "";
        if (!a) return b;
        if (!b) return a;
        C(a) && (a = a.join(" "));
        C(b) && (b = b.join(" "));
        return a + " " + b;
    }

    function jg(a) {
        E(a) && (a = a.split(" "));
        var b = W();
        q(a, function (a) {
            a.length && (b[a] = !0);
        });
        return b;
    }

    function Aa(a) {
        return F(a) ? a : {};
    }

    function kg(a, b, d, c) {
        function f(a) {
            try {
                a.apply(null, wa.call(arguments, 1));
            } finally {
                if (J--, 0 === J) for (; O.length;) {
                    try {
                        O.pop()();
                    } catch (b) {
                        d.error(b);
                    }
                }
            }
        }

        function e() {
            ia = null;
            g();
            h();
        }

        function g() {
            u = A();
            u = x(u) ? null : u;
            qa(u, B) && (u = B);
            B = u;
        }

        function h() {
            if (U !== k.url() || H !== u) U = k.url(), H = u, q(K, function (a) {
                a(k.url(), u);
            });
        }

        var k = this,
            l = a.location,
            m = a.history,
            n = a.setTimeout,
            p = a.clearTimeout,
            r = {};
        k.isMock = !1;
        var J = 0,
            O = [];
        k.$$completeOutstandingRequest = f;
        k.$$incOutstandingRequestCount = function () {
            J++;
        };
        k.notifyWhenNoOutstandingRequests = function (a) {
            0 === J ? a() : O.push(a);
        };
        var u,
            H,
            U = l.href,
            t = b.find("base"),
            ia = null,
            A = c.history ? function () {
            try {
                return m.state;
            } catch (a) {}
        } : w;
        g();
        H = u;
        k.url = function (b, d, e) {
            x(e) && (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = H === e;
                if (U === b && (!c.history || f)) return k;
                var h = U && Ba(U) === Ba(b);
                U = b;
                H = e;
                !c.history || h && f ? (h || (ia = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (ia = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), H = u);
                ia && (ia = b);
                return k;
            }
            return ia || l.href.replace(/%27/g, "'");
        };
        k.state = function () {
            return u;
        };
        var K = [],
            I = !1,
            B = null;
        k.onUrlChange = function (b) {
            if (!I) {
                if (c.history) D(a).on("popstate", e);
                D(a).on("hashchange", e);
                I = !0;
            }
            K.push(b);
            return b;
        };
        k.$$applicationDestroyed = function () {
            D(a).off("hashchange popstate", e);
        };
        k.$$checkUrlChange = h;
        k.baseHref = function () {
            var a = t.attr("href");
            return a ? a.replace(/^(https?:)?\/\/[^/]*/, "") : "";
        };
        k.defer = function (a, b) {
            var c;
            J++;
            c = n(function () {
                delete r[c];
                f(a);
            }, b || 0);
            r[c] = !0;
            return c;
        };
        k.defer.cancel = function (a) {
            return r[a] ? (delete r[a], p(a), f(w), !0) : !1;
        };
    }

    function pf() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
            return new kg(a, c, b, d);
        }];
    }

    function qf() {
        this.$get = function () {
            function a(a, c) {
                function f(a) {
                    a !== n && (p ? p === a && (p = a.n) : p = a, e(a.n, a.p), e(a, n), n = a, n.n = null);
                }

                function e(a, b) {
                    a !== b && (a && (a.p = b), b && (b.n = a));
                }

                if (a in b) throw M("$cacheFactory")("iid", a);
                var g = 0,
                    h = R({}, c, { id: a }),
                    k = W(),
                    l = c && c.capacity || Number.MAX_VALUE,
                    m = W(),
                    n = null,
                    p = null;
                return b[a] = {
                    put: function put(a, b) {
                        if (!x(b)) {
                            if (l < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = { key: a });
                                f(c);
                            }
                            a in k || g++;
                            k[a] = b;
                            g > l && this.remove(p.key);
                            return b;
                        }
                    }, get: function get(a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            f(b);
                        }
                        return k[a];
                    }, remove: function remove(a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b === n && (n = b.p);
                            b === p && (p = b.n);
                            e(b.n, b.p);
                            delete m[a];
                        }
                        a in k && (delete k[a], g--);
                    }, removeAll: function removeAll() {
                        k = W();
                        g = 0;
                        m = W();
                        n = p = null;
                    }, destroy: function destroy() {
                        m = h = k = null;
                        delete b[a];
                    }, info: function info() {
                        return R({}, h, { size: g });
                    }
                };
            }

            var b = {};
            a.info = function () {
                var a = {};
                q(b, function (b, f) {
                    a[f] = b.info();
                });
                return a;
            };
            a.get = function (a) {
                return b[a];
            };
            return a;
        };
    }

    function Nf() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates");
        }];
    }

    function Qc(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
                e = W();
            q(a, function (a, f) {
                if (a in n) e[f] = n[a];else {
                    var g = a.match(d);
                    if (!g) throw ea("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };
                    g[4] && (n[a] = e[f]);
                }
            });
            return e;
        }

        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== P(b)) throw ea("baddir", a);
            if (a !== a.trim()) throw ea("baddir", a);
        }

        function f(a) {
            var b = a.require || a.controller && a.name;
            !C(b) && F(b) && q(b, function (a, c) {
                var d = a.match(l);
                a.substring(d[0].length) || (b[c] = d[0] + c);
            });
            return b;
        }

        var e = {},
            g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
            h = /(([\w-]+)(?::([^;]+))?;?)/,
            k = me("ngSrc,ngSrcset,src,srcset"),
            l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            m = /^(on[a-z]+|formaction)$/,
            n = W();
        this.directive = function U(b, d) {
            fb(b, "name");
            Pa(b, "directive");
            E(b) ? (c(b), fb(d, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
                var d = [];
                q(e[b], function (e, g) {
                    try {
                        var h = a.invoke(e);
                        y(h) ? h = { compile: ma(h) } : !h.compile && h.link && (h.compile = ma(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || b;
                        h.require = f(h);
                        var k = h,
                            l = h.restrict;
                        if (l && (!E(l) || !/[EACM]/.test(l))) throw ea("badrestrict", l, b);
                        k.restrict = l || "EA";
                        h.$$moduleName = e.$$moduleName;
                        d.push(h);
                    } catch (m) {
                        c(m);
                    }
                });
                return d;
            }])), e[b].push(d)) : q(b, Fc(U));
            return this;
        };
        this.component = function (a, b) {
            function c(a) {
                function e(b) {
                    return y(b) || C(b) ? function (c, d) {
                        return a.invoke(b, this, { $element: c, $attrs: d });
                    } : b;
                }

                var f = b.template || b.templateUrl ? b.template : "",
                    g = {
                    controller: d,
                    controllerAs: lg(b.controller) || b.controllerAs || "$ctrl",
                    template: e(f),
                    templateUrl: e(b.templateUrl),
                    transclude: b.transclude,
                    scope: {},
                    bindToController: b.bindings || {},
                    restrict: "E",
                    require: b.require
                };
                q(b, function (a, b) {
                    "$" === b.charAt(0) && (g[b] = a);
                });
                return g;
            }

            var d = b.controller || function () {};
            q(b, function (a, b) {
                "$" === b.charAt(0) && (c[b] = a, y(d) && (d[b] = a));
            });
            c.$inject = ["$injector"];
            return this.directive(a, c);
        };
        this.aHrefSanitizationWhitelist = function (a) {
            return v(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return v(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
        };
        var p = !0;
        this.debugInfoEnabled = function (a) {
            return v(a) ? (p = a, this) : p;
        };
        var r = !1;
        this.preAssignBindingsEnabled = function (a) {
            return v(a) ? (r = a, this) : r;
        };
        var J = 10;
        this.onChangesTtl = function (a) {
            return arguments.length ? (J = a, this) : J;
        };
        var O = !0;
        this.commentDirectivesEnabled = function (a) {
            return arguments.length ? (O = a, this) : O;
        };
        var u = !0;
        this.cssClassDirectivesEnabled = function (a) {
            return arguments.length ? (u = a, this) : u;
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, f, n, I, B, L, N, G) {
            function T() {
                try {
                    if (! --za) throw da = void 0, ea("infchng", J);
                    B.$apply(function () {
                        for (var a = [], b = 0, c = da.length; b < c; ++b) {
                            try {
                                da[b]();
                            } catch (d) {
                                a.push(d);
                            }
                        }da = void 0;
                        if (a.length) throw a;
                    });
                } finally {
                    za++;
                }
            }

            function s(a, b) {
                if (b) {
                    var c = Object.keys(b),
                        d,
                        e,
                        f;
                    d = 0;
                    for (e = c.length; d < e; d++) {
                        f = c[d], this[f] = b[f];
                    }
                } else this.$attr = {};
                this.$$element = a;
            }

            function Q(a, b, c) {
                ua.innerHTML = "<span " + b + ">";
                b = ua.firstChild.attributes;
                var d = b[0];
                b.removeNamedItem(d.name);
                d.value = c;
                a.attributes.setNamedItem(d);
            }

            function Ma(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }

            function ba(a, b, c, d, e) {
                a instanceof D || (a = D(a));
                var f = Na(a, b, a, c, d, e);
                ba.$$addScopeClass(a);
                var g = null;
                return function (b, c, d) {
                    if (!a) throw ea("multilink");
                    fb(b, "scope");
                    e && e.needsNewScope && (b = b.$parent.$new());
                    d = d || {};
                    var h = d.parentBoundTranscludeFn,
                        k = d.transcludeControllers;
                    d = d.futureParentElement;
                    h && h.$$boundTransclude && (h = h.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== xa(d) && na.call(d).match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? D(ha(g, D("<div>").append(a).html())) : c ? Oa.clone.call(a) : a;
                    if (k) for (var l in k) {
                        d.data("$" + l + "Controller", k[l].instance);
                    }ba.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, h);
                    c || (a = f = null);
                    return d;
                };
            }

            function Na(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, m, n, p, r;
                    if (K) for (r = Array(c.length), m = 0; m < h.length; m += 3) {
                        f = h[m], r[f] = c[f];
                    } else r = c;
                    m = 0;
                    for (n = h.length; m < n;) {
                        k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), ba.$$addScopeInfo(D(k), l)) : l = a, p = c.transcludeOnThisElement ? ja(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ja(a, b) : null, c(f, l, k, d, p)) : f && f(a, k.childNodes, void 0, e);
                    }
                }

                for (var h = [], k = C(a) || a instanceof D, l, m, n, p, K, r = 0; r < a.length; r++) {
                    l = new s();
                    11 === La && M(a, r, k);
                    m = fc(a[r], [], l, 0 === r ? d : void 0, e);
                    (f = m.length ? X(m, a[r], l, b, c, null, [], [], f) : null) && f.scope && ba.$$addScopeClass(l.$$element);
                    l = f && f.terminal || !(n = a[r].childNodes) || !n.length ? null : Na(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || l) h.push(r, f, l), p = !0, K = K || f;
                    f = null;
                }
                return p ? g : null;
            }

            function M(a, b, c) {
                var d = a[b],
                    e = d.parentNode,
                    f;
                if (d.nodeType === Ja) for (;;) {
                    f = e ? d.nextSibling : a[b + 1];
                    if (!f || f.nodeType !== Ja) break;
                    d.nodeValue += f.nodeValue;
                    f.parentNode && f.parentNode.removeChild(f);
                    c && f === a[b + 1] && a.splice(b + 1, 1);
                }
            }

            function ja(a, b, c) {
                function d(e, f, g, h, k) {
                    e || (e = a.$new(!1, k), e.$$transcluded = !0);
                    return b(e, f, { parentBoundTranscludeFn: c, transcludeControllers: g, futureParentElement: h });
                }

                var e = d.$$slots = W(),
                    f;
                for (f in b.$$slots) {
                    e[f] = b.$$slots[f] ? ja(a, b.$$slots[f], c) : null;
                }return d;
            }

            function fc(a, b, c, d, e) {
                var f = c.$attr,
                    g;
                switch (a.nodeType) {
                    case 1:
                        g = xa(a);
                        Y(b, Ca(g), "E", d, e);
                        for (var k, l, m, n, p = a.attributes, K = 0, r = p && p.length; K < r; K++) {
                            var A = !1,
                                B = !1;
                            k = p[K];
                            l = k.name;
                            m = k.value;
                            k = Ca(l);
                            (n = Ha.test(k)) && (l = l.replace(gd, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase();
                            }));
                            (k = k.match(Ka)) && Z(k[1]) && (A = l, B = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                            k = Ca(l.toLowerCase());
                            f[k] = l;
                            if (n || !c.hasOwnProperty(k)) c[k] = m, dd(a, k) && (c[k] = !0);
                            ra(a, b, m, k, n);
                            Y(b, k, "A", d, e, A, B);
                        }
                        "input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off");
                        if (!Ga) break;
                        f = a.className;
                        F(f) && (f = f.animVal);
                        if (E(f) && "" !== f) for (; a = h.exec(f);) {
                            k = Ca(a[2]), Y(b, k, "C", d, e) && (c[k] = S(a[3])), f = f.substr(a.index + a[0].length);
                        }break;
                    case Ja:
                        ma(b, a.nodeValue);
                        break;
                    case 8:
                        if (!Fa) break;
                        kb(a, b, c, d, e);
                }
                b.sort(ka);
                return b;
            }

            function kb(a, b, c, d, e) {
                try {
                    var f = g.exec(a.nodeValue);
                    if (f) {
                        var h = Ca(f[1]);
                        Y(b, h, "M", d, e) && (c[h] = S(f[2]));
                    }
                } catch (k) {}
            }

            function hd(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ea("uterdir", b, c);
                        1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling;
                    } while (0 < e);
                } else d.push(a);
                return D(d);
            }

            function id(a, b, c) {
                return function (d, e, f, g, h) {
                    e = hd(e[0], b, c);
                    return a(d, e, f, g, h);
                };
            }

            function gc(a, b, c, d, e, f) {
                var g;
                return a ? ba(b, c, d, e, f) : function () {
                    g || (g = ba(b, c, d, e, f), b = c = f = null);
                    return g.apply(this, arguments);
                };
            }

            function X(a, b, d, e, f, g, h, k, l) {
                function m(a, b, c, d) {
                    if (a) {
                        c && (a = id(a, c, d));
                        a.require = t.require;
                        a.directiveName = L;
                        if (B === t || t.$$isolateScope) a = sa(a, { isolateScope: !0 });
                        h.push(a);
                    }
                    if (b) {
                        c && (b = id(b, c, d));
                        b.require = t.require;
                        b.directiveName = L;
                        if (B === t || t.$$isolateScope) b = sa(b, { isolateScope: !0 });
                        k.push(b);
                    }
                }

                function n(a, e, f, g, l) {
                    function m(a, b, c, d) {
                        var e;
                        Za(a) || (d = c, c = b, b = a, a = void 0);
                        U && (e = N);
                        c || (c = U ? L.parent() : L);
                        if (d) {
                            var f = l.$$slots[d];
                            if (f) return f(a, b, e, c, Q);
                            if (x(f)) throw ea("noslot", d, ya(L));
                        } else return l(a, b, e, c, Q);
                    }

                    var p, t, u, G, J, N, T, L;
                    b === f ? (g = d, L = d.$$element) : (L = D(f), g = new s(L, d));
                    J = e;
                    B ? G = e.$new(!0) : K && (J = e.$parent);
                    l && (T = m, T.$$boundTransclude = l, T.isSlotFilled = function (a) {
                        return !!l.$$slots[a];
                    });
                    A && (N = ca(L, g, T, A, G, e, B));
                    B && (ba.$$addScopeInfo(L, G, !0, !(I && (I === B || I === B.$$originalDirective))), ba.$$addScopeClass(L, !0), G.$$isolateBindings = B.$$isolateBindings, t = oa(e, g, G, G.$$isolateBindings, B), t.removeWatches && G.$on("$destroy", t.removeWatches));
                    for (p in N) {
                        t = A[p];
                        u = N[p];
                        var Hb = t.$$bindings.bindToController;
                        if (r) {
                            u.bindingInfo = Hb ? oa(J, g, u.instance, Hb, t) : {};
                            var O = u();
                            O !== u.instance && (u.instance = O, L.data("$" + t.name + "Controller", O), u.bindingInfo.removeWatches && u.bindingInfo.removeWatches(), u.bindingInfo = oa(J, g, u.instance, Hb, t));
                        } else u.instance = u(), L.data("$" + t.name + "Controller", u.instance), u.bindingInfo = oa(J, g, u.instance, Hb, t);
                    }
                    q(A, function (a, b) {
                        var c = a.require;
                        a.bindToController && !C(c) && F(c) && R(N[b].instance, V(b, c, L, N));
                    });
                    q(N, function (a) {
                        var b = a.instance;
                        if (y(b.$onChanges)) try {
                            b.$onChanges(a.bindingInfo.initialChanges);
                        } catch (d) {
                            c(d);
                        }
                        if (y(b.$onInit)) try {
                            b.$onInit();
                        } catch (e) {
                            c(e);
                        }
                        y(b.$doCheck) && (J.$watch(function () {
                            b.$doCheck();
                        }), b.$doCheck());
                        y(b.$onDestroy) && J.$on("$destroy", function () {
                            b.$onDestroy();
                        });
                    });
                    p = 0;
                    for (t = h.length; p < t; p++) {
                        u = h[p], ta(u, u.isolateScope ? G : e, L, g, u.require && V(u.directiveName, u.require, L, N), T);
                    }var Q = e;
                    B && (B.template || null === B.templateUrl) && (Q = G);
                    a && a(Q, f.childNodes, void 0, l);
                    for (p = k.length - 1; 0 <= p; p--) {
                        u = k[p], ta(u, u.isolateScope ? G : e, L, g, u.require && V(u.directiveName, u.require, L, N), T);
                    }q(N, function (a) {
                        a = a.instance;
                        y(a.$postLink) && a.$postLink();
                    });
                }

                l = l || {};
                for (var p = -Number.MAX_VALUE, K = l.newScopeDirective, A = l.controllerDirectives, B = l.newIsolateScopeDirective, I = l.templateDirective, u = l.nonTlbTranscludeDirective, J = !1, N = !1, U = l.hasElementTranscludeDirective, G = d.$$element = D(b), t, L, T, O = e, Q, v = !1, Ma = !1, w, z = 0, E = a.length; z < E; z++) {
                    t = a[z];
                    var Na = t.$$start,
                        M = t.$$end;
                    Na && (G = hd(b, Na, M));
                    T = void 0;
                    if (p > t.priority) break;
                    if (w = t.scope) t.templateUrl || (F(w) ? ($("new/isolated scope", B || K, t, G), B = t) : $("new/isolated scope", B, t, G)), K = K || t;
                    L = t.name;
                    if (!v && (t.replace && (t.templateUrl || t.template) || t.transclude && !t.$$tlb)) {
                        for (w = z + 1; v = a[w++];) {
                            if (v.transclude && !v.$$tlb || v.replace && (v.templateUrl || v.template)) {
                                Ma = !0;
                                break;
                            }
                        }v = !0;
                    }
                    !t.templateUrl && t.controller && (A = A || W(), $("'" + L + "' controller", A[L], t, G), A[L] = t);
                    if (w = t.transclude) if (J = !0, t.$$tlb || ($("transclusion", u, t, G), u = t), "element" === w) U = !0, p = t.priority, T = G, G = d.$$element = D(ba.$$createComment(L, d[L])), b = G[0], la(f, wa.call(T, 0), b), T[0].$$parentNode = T[0].parentNode, O = gc(Ma, T, e, p, g && g.name, { nonTlbTranscludeDirective: u });else {
                        var ja = W();
                        if (F(w)) {
                            T = [];
                            var P = W(),
                                kb = W();
                            q(w, function (a, b) {
                                var c = "?" === a.charAt(0);
                                a = c ? a.substring(1) : a;
                                P[a] = b;
                                ja[b] = null;
                                kb[b] = c;
                            });
                            q(G.contents(), function (a) {
                                var b = P[Ca(xa(a))];
                                b ? (kb[b] = !0, ja[b] = ja[b] || [], ja[b].push(a)) : T.push(a);
                            });
                            q(kb, function (a, b) {
                                if (!a) throw ea("reqslot", b);
                            });
                            for (var ec in ja) {
                                ja[ec] && (ja[ec] = gc(Ma, ja[ec], e));
                            }
                        } else T = D(cc(b)).contents();
                        G.empty();
                        O = gc(Ma, T, e, void 0, void 0, { needsNewScope: t.$$isolateScope || t.$$newScope });
                        O.$$slots = ja;
                    }
                    if (t.template) if (N = !0, $("template", I, t, G), I = t, w = y(t.template) ? t.template(G, d) : t.template, w = Ea(w), t.replace) {
                        g = t;
                        T = $b.test(w) ? jd(ha(t.templateNamespace, S(w))) : [];
                        b = T[0];
                        if (1 !== T.length || 1 !== b.nodeType) throw ea("tplrt", L, "");
                        la(f, G, b);
                        E = { $attr: {} };
                        w = fc(b, [], E);
                        var Y = a.splice(z + 1, a.length - (z + 1));
                        (B || K) && aa(w, B, K);
                        a = a.concat(w).concat(Y);
                        fa(d, E);
                        E = a.length;
                    } else G.html(w);
                    if (t.templateUrl) N = !0, $("template", I, t, G), I = t, t.replace && (g = t), n = ga(a.splice(z, a.length - z), G, d, f, J && O, h, k, {
                        controllerDirectives: A,
                        newScopeDirective: K !== t && K,
                        newIsolateScopeDirective: B,
                        templateDirective: I,
                        nonTlbTranscludeDirective: u
                    }), E = a.length;else if (t.compile) try {
                        Q = t.compile(G, d, O);
                        var Z = t.$$originalDirective || t;
                        y(Q) ? m(null, bb(Z, Q), Na, M) : Q && m(bb(Z, Q.pre), bb(Z, Q.post), Na, M);
                    } catch (da) {
                        c(da, ya(G));
                    }
                    t.terminal && (n.terminal = !0, p = Math.max(p, t.priority));
                }
                n.scope = K && !0 === K.scope;
                n.transcludeOnThisElement = J;
                n.templateOnThisElement = N;
                n.transclude = O;
                l.hasElementTranscludeDirective = U;
                return n;
            }

            function V(a, b, c, d) {
                var e;
                if (E(b)) {
                    var f = b.match(l);
                    b = b.substring(f[0].length);
                    var g = f[1] || f[3],
                        f = "?" === f[2];
                    "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                    if (!e) {
                        var h = "$" + b + "Controller";
                        e = g ? c.inheritedData(h) : c.data(h);
                    }
                    if (!e && !f) throw ea("ctreq", b, a);
                } else if (C(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
                    e[g] = V(a, b[g], c, d);
                } else F(b) && (e = {}, q(b, function (b, f) {
                    e[f] = V(a, b, c, d);
                }));
                return e || null;
            }

            function ca(a, b, c, d, e, f, g) {
                var h = W(),
                    k;
                for (k in d) {
                    var l = d[k],
                        m = {
                        $scope: l === g || l.$$isolateScope ? e : f,
                        $element: a,
                        $attrs: b,
                        $transclude: c
                    },
                        n = l.controller;
                    "@" === n && (n = b[l.name]);
                    m = I(n, m, !0, l.controllerAs);
                    h[l.name] = m;
                    a.data("$" + l.name + "Controller", m.instance);
                }
                return h;
            }

            function aa(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) {
                    a[d] = Ub(a[d], { $$isolateScope: b, $$newScope: c });
                }
            }

            function Y(b, c, f, g, h, k, l) {
                if (c === h) return null;
                var m = null;
                if (e.hasOwnProperty(c)) {
                    h = a.get(c + "Directive");
                    for (var n = 0, p = h.length; n < p; n++) {
                        if (c = h[n], (x(g) || g > c.priority) && -1 !== c.restrict.indexOf(f)) {
                            k && (c = Ub(c, { $$start: k, $$end: l }));
                            if (!c.$$bindings) {
                                var K = m = c,
                                    r = c.name,
                                    A = { isolateScope: null, bindToController: null };
                                F(K.scope) && (!0 === K.bindToController ? (A.bindToController = d(K.scope, r, !0), A.isolateScope = {}) : A.isolateScope = d(K.scope, r, !1));
                                F(K.bindToController) && (A.bindToController = d(K.bindToController, r, !0));
                                if (A.bindToController && !K.controller) throw ea("noctrl", r);
                                m = m.$$bindings = A;
                                F(m.isolateScope) && (c.$$isolateBindings = m.isolateScope);
                            }
                            b.push(c);
                            m = c;
                        }
                    }
                }
                return m;
            }

            function Z(b) {
                if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) {
                    if (b = c[d], b.multiElement) return !0;
                }return !1;
            }

            function fa(a, b) {
                var c = b.$attr,
                    d = a.$attr;
                q(a, function (d, e) {
                    "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]));
                });
                q(b, function (b, e) {
                    a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
                });
            }

            function ga(a, b, d, e, g, h, k, l) {
                var m = [],
                    n,
                    p,
                    K = b[0],
                    r = a.shift(),
                    u = Ub(r, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: r
                }),
                    t = y(r.templateUrl) ? r.templateUrl(b, d) : r.templateUrl,
                    B = r.templateNamespace;
                b.empty();
                f(t).then(function (c) {
                    var f, A;
                    c = Ea(c);
                    if (r.replace) {
                        c = $b.test(c) ? jd(ha(B, S(c))) : [];
                        f = c[0];
                        if (1 !== c.length || 1 !== f.nodeType) throw ea("tplrt", r.name, t);
                        c = { $attr: {} };
                        la(e, b, f);
                        var I = fc(f, [], c);
                        F(r.scope) && aa(I, !0);
                        a = I.concat(a);
                        fa(d, c);
                    } else f = K, b.html(c);
                    a.unshift(u);
                    n = X(a, f, d, g, b, r, h, k, l);
                    q(e, function (a, c) {
                        a === f && (e[c] = b[0]);
                    });
                    for (p = Na(b[0].childNodes, g); m.length;) {
                        c = m.shift();
                        A = m.shift();
                        var G = m.shift(),
                            J = m.shift(),
                            I = b[0];
                        if (!c.$$destroyed) {
                            if (A !== K) {
                                var N = A.className;
                                l.hasElementTranscludeDirective && r.replace || (I = cc(f));
                                la(G, D(A), I);
                                Ma(D(I), N);
                            }
                            A = n.transcludeOnThisElement ? ja(c, n.transclude, J) : J;
                            n(p, c, I, e, A);
                        }
                    }
                    m = null;
                }).catch(function (a) {
                    a instanceof Error && c(a);
                }).catch(w);
                return function (a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = ja(b, n.transclude, e)), n(p, b, c, d, a)));
                };
            }

            function ka(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }

            function $(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : "";
                }

                if (b) throw ea("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
            }

            function ma(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0, compile: function compile(a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && ba.$$addBindingClass(a);
                        return function (a, c) {
                            var e = c.parent();
                            b || ba.$$addBindingClass(e);
                            ba.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function (a) {
                                c[0].nodeValue = a;
                            });
                        };
                    }
                });
            }

            function ha(a, b) {
                a = P(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = z.document.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b;
                }
            }

            function pa(a, b) {
                if ("srcdoc" === b) return L.HTML;
                var c = xa(a);
                if ("src" === b || "ngSrc" === b) {
                    if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c)) return L.RESOURCE_URL;
                } else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b) return L.RESOURCE_URL;
            }

            function ra(a, c, d, e, f) {
                var g = pa(a, e),
                    h = k[e] || f,
                    l = b(d, !f, g, h);
                if (l) {
                    if ("multiple" === e && "select" === xa(a)) throw ea("selmulti", ya(a));
                    if (m.test(e)) throw ea("nodomevents");
                    c.push({
                        priority: 100, compile: function compile() {
                            return {
                                pre: function pre(a, c, f) {
                                    c = f.$$observers || (f.$$observers = W());
                                    var k = f[e];
                                    k !== d && (l = k && b(k, !0, g, h), d = k);
                                    l && (f[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (f.$$observers && f.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                                        "class" === e && a !== b ? f.$updateClass(a, b) : f.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }

            function la(a, b, c) {
                var d = b[0],
                    e = b.length,
                    f = d.parentNode,
                    g,
                    h;
                if (a) for (g = 0, h = a.length; g < h; g++) {
                    if (a[g] === d) {
                        a[g++] = c;
                        h = g + e - 1;
                        for (var k = a.length; g < k; g++, h++) {
                            h < k ? a[g] = a[h] : delete a[g];
                        }a.length -= e - 1;
                        a.context === d && (a.context = c);
                        break;
                    }
                }f && f.replaceChild(c, d);
                a = z.document.createDocumentFragment();
                for (g = 0; g < e; g++) {
                    a.appendChild(b[g]);
                }D.hasData(d) && (D.data(c, D.data(d)), D(d).off("$destroy"));
                D.cleanData(a.querySelectorAll("*"));
                for (g = 1; g < e; g++) {
                    delete b[g];
                }b[0] = c;
                b.length = 1;
            }

            function sa(a, b) {
                return R(function () {
                    return a.apply(null, arguments);
                }, a, b);
            }

            function ta(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g);
                } catch (h) {
                    c(h, ya(d));
                }
            }

            function oa(a, c, d, e, f) {
                function g(b, c, e) {
                    !y(d.$onChanges) || c === e || c !== c && e !== e || (da || (a.$$postDigest(T), da = []), m || (m = {}, da.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Ib(e, c));
                }

                function h() {
                    d.$onChanges(m);
                    m = void 0;
                }

                var k = [],
                    l = {},
                    m;
                q(e, function (e, h) {
                    var m = e.attrName,
                        p = e.optional,
                        r,
                        A,
                        u,
                        B;
                    switch (e.mode) {
                        case "@":
                            p || va.call(c, m) || (d[h] = c[m] = void 0);
                            p = c.$observe(m, function (a) {
                                if (E(a) || Ia(a)) g(h, a, d[h]), d[h] = a;
                            });
                            c.$$observers[m].$$scope = a;
                            r = c[m];
                            E(r) ? d[h] = b(r)(a) : Ia(r) && (d[h] = r);
                            l[h] = new Ib(hc, d[h]);
                            k.push(p);
                            break;
                        case "=":
                            if (!va.call(c, m)) {
                                if (p) break;
                                c[m] = void 0;
                            }
                            if (p && !c[m]) break;
                            A = n(c[m]);
                            B = A.literal ? qa : function (a, b) {
                                return a === b || a !== a && b !== b;
                            };
                            u = A.assign || function () {
                                r = d[h] = A(a);
                                throw ea("nonassign", c[m], m, f.name);
                            };
                            r = d[h] = A(a);
                            p = function p(b) {
                                B(b, d[h]) || (B(b, r) ? u(a, b = d[h]) : d[h] = b);
                                return r = b;
                            };
                            p.$stateful = !0;
                            p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, A.literal);
                            k.push(p);
                            break;
                        case "<":
                            if (!va.call(c, m)) {
                                if (p) break;
                                c[m] = void 0;
                            }
                            if (p && !c[m]) break;
                            A = n(c[m]);
                            var I = A.literal,
                                G = d[h] = A(a);
                            l[h] = new Ib(hc, d[h]);
                            p = a.$watch(A, function (a, b) {
                                if (b === a) {
                                    if (b === G || I && qa(b, G)) return;
                                    b = G;
                                }
                                g(h, a, b);
                                d[h] = a;
                            }, I);
                            k.push(p);
                            break;
                        case "&":
                            A = c.hasOwnProperty(m) ? n(c[m]) : w;
                            if (A === w && p) break;
                            d[h] = function (b) {
                                return A(a, b);
                            };
                    }
                });
                return {
                    initialChanges: l, removeWatches: k.length && function () {
                        for (var a = 0, b = k.length; a < b; ++a) {
                            k[a]();
                        }
                    }
                };
            }

            var Da = /^\w/,
                ua = z.document.createElement("div"),
                Fa = O,
                Ga = u,
                za = J,
                da;
            s.prototype = {
                $normalize: Ca, $addClass: function $addClass(a) {
                    a && 0 < a.length && N.addClass(this.$$element, a);
                }, $removeClass: function $removeClass(a) {
                    a && 0 < a.length && N.removeClass(this.$$element, a);
                }, $updateClass: function $updateClass(a, b) {
                    var c = kd(a, b);
                    c && c.length && N.addClass(this.$$element, c);
                    (c = kd(b, a)) && c.length && N.removeClass(this.$$element, c);
                }, $set: function $set(a, b, d, e) {
                    var f = dd(this.$$element[0], a),
                        g = ld[a],
                        h = a;
                    f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Nc(a, "-"));
                    f = xa(this.$$element);
                    if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = G(b, "src" === a);else if ("img" === f && "srcset" === a && v(b)) {
                        for (var f = "", g = S(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) {
                            var m = 2 * l,
                                f = f + G(S(g[m]), !0),
                                f = f + (" " + S(g[m + 1]));
                        }g = S(g[2 * l]).split(/\s/);
                        f += G(S(g[0]), !0);
                        2 === g.length && (f += " " + S(g[1]));
                        this[a] = b = f;
                    }
                    !1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : Da.test(e) ? this.$$element.attr(e, b) : Q(this.$$element[0], e, b));
                    (a = this.$$observers) && q(a[h], function (a) {
                        try {
                            a(b);
                        } catch (d) {
                            c(d);
                        }
                    });
                },
                $observe: function $observe(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = W()),
                        e = d[a] || (d[a] = []);
                    e.push(b);
                    B.$evalAsync(function () {
                        e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a]);
                    });
                    return function () {
                        $a(e, b);
                    };
                }
            };
            var Aa = b.startSymbol(),
                Ba = b.endSymbol(),
                Ea = "{{" === Aa && "}}" === Ba ? Ya : function (a) {
                return a.replace(/\{\{/g, Aa).replace(/}}/g, Ba);
            },
                Ha = /^ngAttr[A-Z]/,
                Ka = /^(.+)Start$/;
            ba.$$addBindingInfo = p ? function (a, b) {
                var c = a.data("$binding") || [];
                C(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c);
            } : w;
            ba.$$addBindingClass = p ? function (a) {
                Ma(a, "ng-binding");
            } : w;
            ba.$$addScopeInfo = p ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
            } : w;
            ba.$$addScopeClass = p ? function (a, b) {
                Ma(a, b ? "ng-isolate-scope" : "ng-scope");
            } : w;
            ba.$$createComment = function (a, b) {
                var c = "";
                p && (c = " " + (a || "") + ": ", b && (c += b + " "));
                return z.document.createComment(c);
            };
            return ba;
        }];
    }

    function Ib(a, b) {
        this.previousValue = a;
        this.currentValue = b;
    }

    function Ca(a) {
        return a.replace(gd, "").replace(mg, gb);
    }

    function kd(a, b) {
        var d = "",
            c = a.split(/\s+/),
            f = b.split(/\s+/),
            e = 0;
        a: for (; e < c.length; e++) {
            for (var g = c[e], h = 0; h < f.length; h++) {
                if (g === f[h]) continue a;
            }d += (0 < d.length ? " " : "") + g;
        }
        return d;
    }

    function jd(a) {
        a = D(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) {
            var d = a[b];
            (8 === d.nodeType || d.nodeType === Ja && "" === d.nodeValue.trim()) && ng.call(a, b, 1);
        }
        return a;
    }

    function lg(a, b) {
        if (b && E(b)) return b;
        if (E(a)) {
            var d = md.exec(a);
            if (d) return d[3];
        }
    }

    function rf() {
        var a = {},
            b = !1;
        this.has = function (b) {
            return a.hasOwnProperty(b);
        };
        this.register = function (b, c) {
            Pa(b, "controller");
            F(b) ? R(a, b) : a[b] = c;
        };
        this.allowGlobals = function () {
            b = !0;
        };
        this.$get = ["$injector", "$window", function (d, c) {
            function f(a, b, c, d) {
                if (!a || !F(a.$scope)) throw M("$controller")("noscp", d, b);
                a.$scope[b] = c;
            }

            return function (e, g, h, k) {
                var l, m, n;
                h = !0 === h;
                k && E(k) && (n = k);
                if (E(e)) {
                    k = e.match(md);
                    if (!k) throw nd("ctrlfmt", e);
                    m = k[1];
                    n = n || k[3];
                    e = a.hasOwnProperty(m) ? a[m] : Pc(g.$scope, m, !0) || (b ? Pc(c, m, !0) : void 0);
                    if (!e) throw nd("ctrlreg", m);
                    tb(e, m, !0);
                }
                if (h) return h = (C(e) ? e[e.length - 1] : e).prototype, l = Object.create(h || null), n && f(g, n, l, m || e.name), R(function () {
                    var a = d.invoke(e, l, g, m);
                    a !== l && (F(a) || y(a)) && (l = a, n && f(g, n, l, m || e.name));
                    return l;
                }, { instance: l, identifier: n });
                l = d.instantiate(e, g, m);
                n && f(g, n, l, m || e.name);
                return l;
            };
        }];
    }

    function sf() {
        this.$get = ["$window", function (a) {
            return D(a.document);
        }];
    }

    function tf() {
        this.$get = ["$document", "$rootScope", function (a, b) {
            function d() {
                f = c.hidden;
            }

            var c = a[0],
                f = c && c.hidden;
            a.on("visibilitychange", d);
            b.$on("$destroy", function () {
                a.off("visibilitychange", d);
            });
            return function () {
                return f;
            };
        }];
    }

    function uf() {
        this.$get = ["$log", function (a) {
            return function (b, d) {
                a.error.apply(a, arguments);
            };
        }];
    }

    function ic(a) {
        return F(a) ? fa(a) ? a.toISOString() : cb(a) : a;
    }

    function zf() {
        this.$get = function () {
            return function (a) {
                if (!a) return "";
                var b = [];
                Ec(a, function (a, c) {
                    null === a || x(a) || (C(a) ? q(a, function (a) {
                        b.push(ka(c) + "=" + ka(ic(a)));
                    }) : b.push(ka(c) + "=" + ka(ic(a))));
                });
                return b.join("&");
            };
        };
    }

    function Af() {
        this.$get = function () {
            return function (a) {
                function b(a, f, e) {
                    null === a || x(a) || (C(a) ? q(a, function (a, c) {
                        b(a, f + "[" + (F(a) ? c : "") + "]");
                    }) : F(a) && !fa(a) ? Ec(a, function (a, c) {
                        b(a, f + (e ? "" : "[") + c + (e ? "" : "]"));
                    }) : d.push(ka(f) + "=" + ka(ic(a))));
                }

                if (!a) return "";
                var d = [];
                b(a, "", !0);
                return d.join("&");
            };
        };
    }

    function jc(a, b) {
        if (E(a)) {
            var d = a.replace(og, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(od)) || (c = (c = d.match(pg)) && qg[c[0]].test(d));
                c && (a = Ic(d));
            }
        }
        return a;
    }

    function pd(a) {
        var b = W(),
            d;
        E(a) ? q(a.split("\n"), function (a) {
            d = a.indexOf(":");
            var f = P(S(a.substr(0, d)));
            a = S(a.substr(d + 1));
            f && (b[f] = b[f] ? b[f] + ", " + a : a);
        }) : F(a) && q(a, function (a, d) {
            var e = P(d),
                g = S(a);
            e && (b[e] = b[e] ? b[e] + ", " + g : g);
        });
        return b;
    }

    function qd(a) {
        var b;
        return function (d) {
            b || (b = pd(a));
            return d ? (d = b[P(d)], void 0 === d && (d = null), d) : b;
        };
    }

    function rd(a, b, d, c) {
        if (y(c)) return c(a, b, d);
        q(c, function (c) {
            a = c(a, b, d);
        });
        return a;
    }

    function yf() {
        var a = this.defaults = {
            transformResponse: [jc],
            transformRequest: [function (a) {
                return F(a) && "[object File]" !== na.call(a) && "[object Blob]" !== na.call(a) && "[object FormData]" !== na.call(a) ? cb(a) : a;
            }],
            headers: {
                common: { Accept: "application/json, text/plain, */*" }, post: ra(kc), put: ra(kc),
                patch: ra(kc)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer",
            jsonpCallbackParam: "callback"
        },
            b = !1;
        this.useApplyAsync = function (a) {
            return v(a) ? (b = !!a, this) : b;
        };
        var d = this.interceptors = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (c, f, e, g, h, k, l, m) {
            function n(b) {
                function d(a, b) {
                    for (var c = 0, e = b.length; c < e;) {
                        var f = b[c++],
                            g = b[c++];
                        a = a.then(f, g);
                    }
                    b.length = 0;
                    return a;
                }

                function e(a, b) {
                    var c,
                        d = {};
                    q(a, function (a, e) {
                        y(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
                    });
                    return d;
                }

                function f(a) {
                    var b = R({}, a);
                    b.data = rd(a.data, a.headers, a.status, g.transformResponse);
                    a = a.status;
                    return 200 <= a && 300 > a ? b : k.reject(b);
                }

                if (!F(b)) throw M("$http")("badreq", b);
                if (!E(m.valueOf(b.url))) throw M("$http")("badreq", b.url);
                var g = R({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer,
                    jsonpCallbackParam: a.jsonpCallbackParam
                }, b);
                g.headers = function (b) {
                    var c = a.headers,
                        d = R({}, b.headers),
                        f,
                        g,
                        h,
                        c = R({}, c.common, c[P(b.method)]);
                    a: for (f in c) {
                        g = P(f);
                        for (h in d) {
                            if (P(h) === g) continue a;
                        }d[f] = c[f];
                    }
                    return e(d, ra(b));
                }(b);
                g.method = vb(g.method);
                g.paramSerializer = E(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;
                c.$$incOutstandingRequestCount();
                var h = [],
                    n = [];
                b = k.resolve(g);
                q(u, function (a) {
                    (a.request || a.requestError) && h.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && n.push(a.response, a.responseError);
                });
                b = d(b, h);
                b = b.then(function (b) {
                    var c = b.headers,
                        d = rd(b.data, qd(c), void 0, b.transformRequest);
                    x(d) && q(c, function (a, b) {
                        "content-type" === P(b) && delete c[b];
                    });
                    x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);
                    return p(b, d).then(f, f);
                });
                b = d(b, n);
                return b = b.finally(function () {
                    c.$$completeOutstandingRequest(w);
                });
            }

            function p(c, d) {
                function g(a) {
                    if (a) {
                        var c = {};
                        q(a, function (a, d) {
                            c[d] = function (c) {
                                function d() {
                                    a(c);
                                }

                                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
                            };
                        });
                        return c;
                    }
                }

                function l(a, c, d, e) {
                    function f() {
                        p(c, a, d, e);
                    }

                    N && (200 <= a && 300 > a ? N.put(Q, [a, c, pd(d), e]) : N.remove(Q));
                    b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
                }

                function p(a, b, d, e) {
                    b = -1 <= b ? b : 0;
                    (200 <= b && 300 > b ? B.resolve : B.reject)({
                        data: a,
                        status: b,
                        headers: qd(d),
                        config: c,
                        statusText: e
                    });
                }

                function K(a) {
                    p(a.data, a.status, ra(a.headers()), a.statusText);
                }

                function u() {
                    var a = n.pendingRequests.indexOf(c);
                    -1 !== a && n.pendingRequests.splice(a, 1);
                }

                var B = k.defer(),
                    L = B.promise,
                    N,
                    G,
                    T = c.headers,
                    s = "jsonp" === P(c.method),
                    Q = c.url;
                s ? Q = m.getTrustedResourceUrl(Q) : E(Q) || (Q = m.valueOf(Q));
                Q = r(Q, c.paramSerializer(c.params));
                s && (Q = J(Q, c.jsonpCallbackParam));
                n.pendingRequests.push(c);
                L.then(u, u);
                !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = F(c.cache) ? c.cache : F(a.cache) ? a.cache : O);
                N && (G = N.get(Q), v(G) ? G && y(G.then) ? G.then(K, K) : C(G) ? p(G[1], G[0], ra(G[2]), G[3]) : p(G, 200, {}, "OK") : N.put(Q, L));
                x(G) && ((G = sd(c.url) ? e()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (T[c.xsrfHeaderName || a.xsrfHeaderName] = G), f(c.method, Q, d, l, T, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
                return L;
            }

            function r(a, b) {
                0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);
                return a;
            }

            function J(a, b) {
                if (/[&?][^=]+=JSON_CALLBACK/.test(a)) throw td("badjsonp", a);
                if (new RegExp("[&?]" + b + "=").test(a)) throw td("badjsonp", b, a);
                return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK";
            }

            var O = g("$http");
            a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var u = [];
            q(d, function (a) {
                u.unshift(E(a) ? l.get(a) : l.invoke(a));
            });
            n.pendingRequests = [];
            (function (a) {
                q(arguments, function (a) {
                    n[a] = function (b, c) {
                        return n(R({}, c || {}, { method: a, url: b }));
                    };
                });
            })("get", "delete", "head", "jsonp");
            (function (a) {
                q(arguments, function (a) {
                    n[a] = function (b, c, d) {
                        return n(R({}, d || {}, { method: a, url: b, data: c }));
                    };
                });
            })("post", "put", "patch");
            n.defaults = a;
            return n;
        }];
    }

    function Cf() {
        this.$get = function () {
            return function () {
                return new z.XMLHttpRequest();
            };
        };
    }

    function Bf() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
            return rg(a, c, a.defer, b, d[0]);
        }];
    }

    function rg(a, b, d, c, f) {
        function e(a, b, d) {
            a = a.replace("JSON_CALLBACK", b);
            var e = f.createElement("script"),
                _m = null;
            e.type = "text/javascript";
            e.src = a;
            e.async = !0;
            _m = function m(a) {
                e.removeEventListener("load", _m);
                e.removeEventListener("error", _m);
                f.body.removeChild(e);
                e = null;
                var g = -1,
                    r = "unknown";
                a && ("load" !== a.type || c.wasCalled(b) || (a = { type: "error" }), r = a.type, g = "error" === a.type ? 404 : 200);
                d && d(g, r);
            };
            e.addEventListener("load", _m);
            e.addEventListener("error", _m);
            f.body.appendChild(e);
            return _m;
        }

        return function (f, h, k, l, m, n, p, r, J, O) {
            function u() {
                U && U();
                t && t.abort();
            }

            h = h || a.url();
            if ("jsonp" === P(f)) var H = c.createCallback(h),
                U = e(h, H, function (a, b) {
                var e = 200 === a && c.getResponse(H);
                v(A) && d.cancel(A);
                U = t = null;
                l(a, e, "", b);
                c.removeCallback(H);
            });else {
                var t = b(f, h);
                t.open(f, h, !0);
                q(m, function (a, b) {
                    v(a) && t.setRequestHeader(b, a);
                });
                t.onload = function () {
                    var a = t.statusText || "",
                        b = "response" in t ? t.response : t.responseText,
                        c = 1223 === t.status ? 204 : t.status;
                    0 === c && (c = b ? 200 : "file" === Da(h).protocol ? 404 : 0);
                    var e = t.getAllResponseHeaders();
                    v(A) && d.cancel(A);
                    U = t = null;
                    l(c, b, e, a);
                };
                f = function f() {
                    v(A) && d.cancel(A);
                    U = t = null;
                    l(-1, null, null, "");
                };
                t.onerror = f;
                t.onabort = f;
                t.ontimeout = f;
                q(J, function (a, b) {
                    t.addEventListener(b, a);
                });
                q(O, function (a, b) {
                    t.upload.addEventListener(b, a);
                });
                p && (t.withCredentials = !0);
                if (r) try {
                    t.responseType = r;
                } catch (s) {
                    if ("json" !== r) throw s;
                }
                t.send(x(k) ? null : k);
            }
            if (0 < n) var A = d(u, n);else n && y(n.then) && n.then(u);
        };
    }

    function wf() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a;
        };
        this.endSymbol = function (a) {
            return a ? (b = a, this) : b;
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, f) {
            function e(a) {
                return "\\\\\\" + a;
            }

            function g(c) {
                return c.replace(n, a).replace(p, b);
            }

            function h(a, b, c, d) {
                var e = a.$watch(function (a) {
                    e();
                    return d(a);
                }, b, c);
                return e;
            }

            function k(e, k, n, p) {
                function H(a) {
                    try {
                        var b = a;
                        a = n ? f.getTrusted(n, b) : f.valueOf(b);
                        return p && !v(a) ? a : Yb(a);
                    } catch (d) {
                        c(Ea.interr(e, d));
                    }
                }

                if (!e.length || -1 === e.indexOf(a)) {
                    var q;
                    k || (k = g(e), q = ma(k), q.exp = e, q.expressions = [], q.$$watchDelegate = h);
                    return q;
                }
                p = !!p;
                var t,
                    s,
                    A = 0,
                    K = [],
                    I = [];
                q = e.length;
                for (var B = [], L = []; A < q;) {
                    if (-1 !== (t = e.indexOf(a, A)) && -1 !== (s = e.indexOf(b, t + l))) A !== t && B.push(g(e.substring(A, t))), A = e.substring(t + l, s), K.push(A), I.push(d(A, H)), A = s + m, L.push(B.length), B.push("");else {
                        A !== q && B.push(g(e.substring(A)));
                        break;
                    }
                }n && 1 < B.length && Ea.throwNoconcat(e);
                if (!k || K.length) {
                    var N = function N(a) {
                        for (var b = 0, c = K.length; b < c; b++) {
                            if (p && x(a[b])) return;
                            B[L[b]] = a[b];
                        }
                        return B.join("");
                    };
                    return R(function (a) {
                        var b = 0,
                            d = K.length,
                            f = Array(d);
                        try {
                            for (; b < d; b++) {
                                f[b] = I[b](a);
                            }return N(f);
                        } catch (g) {
                            c(Ea.interr(e, g));
                        }
                    }, {
                        exp: e, expressions: K, $$watchDelegate: function $$watchDelegate(a, b) {
                            var c;
                            return a.$watchGroup(I, function (d, e) {
                                var f = N(d);
                                y(b) && b.call(this, f, d !== e ? c : f, a);
                                c = f;
                            });
                        }
                    });
                }
            }

            var l = a.length,
                m = b.length,
                n = new RegExp(a.replace(/./g, e), "g"),
                p = new RegExp(b.replace(/./g, e), "g");
            k.startSymbol = function () {
                return a;
            };
            k.endSymbol = function () {
                return b;
            };
            return k;
        }];
    }

    function xf() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, f) {
            function e(e, k, l, m) {
                function n() {
                    p ? e.apply(null, r) : e(u);
                }

                var p = 4 < arguments.length,
                    r = p ? wa.call(arguments, 4) : [],
                    J = b.setInterval,
                    q = b.clearInterval,
                    u = 0,
                    H = v(m) && !m,
                    U = (H ? c : d).defer(),
                    t = U.promise;
                l = v(l) ? l : 0;
                t.$$intervalId = J(function () {
                    H ? f.defer(n) : a.$evalAsync(n);
                    U.notify(u++);
                    0 < l && u >= l && (U.resolve(u), q(t.$$intervalId), delete g[t.$$intervalId]);
                    H || a.$apply();
                }, k);
                g[t.$$intervalId] = U;
                return t;
            }

            var g = {};
            e.cancel = function (a) {
                return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.catch(w), g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
            };
            return e;
        }];
    }

    function lc(a) {
        a = a.split("/");
        for (var b = a.length; b--;) {
            a[b] = db(a[b]);
        }return a.join("/");
    }

    function ud(a, b) {
        var d = Da(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = Z(d.port) || sg[d.protocol] || null;
    }

    function vd(a, b) {
        if (tg.test(a)) throw lb("badpath", a);
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = Da(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = Lc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }

    function mc(a, b) {
        return a.slice(0, b.length) === b;
    }

    function sa(a, b) {
        if (mc(b, a)) return b.substr(a.length);
    }

    function Ba(a) {
        var b = a.indexOf("#");
        return -1 === b ? a : a.substr(0, b);
    }

    function mb(a) {
        return a.replace(/(#.+)|#$/, "$1");
    }

    function nc(a, b, d) {
        this.$$html5 = !0;
        d = d || "";
        ud(a, this);
        this.$$parse = function (a) {
            var d = sa(b, a);
            if (!E(d)) throw lb("ipthprfx", a, b);
            vd(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose();
        };
        this.$$compose = function () {
            var a = Xb(this.$$search),
                d = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (a ? "?" + a : "") + d;
            this.$$absUrl = b + this.$$url.substr(1);
        };
        this.$$parseLinkUrl = function (c, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var e, g;
            v(e = sa(a, c)) ? (g = e, g = d && v(e = sa(d, e)) ? b + (sa("/", e) || e) : a + g) : v(e = sa(b, c)) ? g = b + e : b === c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g;
        };
    }

    function oc(a, b, d) {
        ud(a, this);
        this.$$parse = function (c) {
            var f = sa(a, c) || sa(b, c),
                e;
            x(f) || "#" !== f.charAt(0) ? this.$$html5 ? e = f : (e = "", x(f) && (a = c, this.replace())) : (e = sa(d, f), x(e) && (e = f));
            vd(e, this);
            c = this.$$path;
            var f = a,
                g = /^\/[A-Z]:(\/.*)/;
            mc(e, f) && (e = e.replace(f, ""));
            g.exec(e) || (c = (e = g.exec(c)) ? e[1] : c);
            this.$$path = c;
            this.$$compose();
        };
        this.$$compose = function () {
            var b = Xb(this.$$search),
                f = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
        };
        this.$$parseLinkUrl = function (b, d) {
            return Ba(a) === Ba(b) ? (this.$$parse(b), !0) : !1;
        };
    }

    function wd(a, b, d) {
        this.$$html5 = !0;
        oc.apply(this, arguments);
        this.$$parseLinkUrl = function (c, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var e, g;
            a === Ba(c) ? e = c : (g = sa(b, c)) ? e = a + d + g : b === c + "/" && (e = b);
            e && this.$$parse(e);
            return !!e;
        };
        this.$$compose = function () {
            var b = Xb(this.$$search),
                f = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f;
            this.$$absUrl = a + d + this.$$url;
        };
    }

    function Jb(a) {
        return function () {
            return this[a];
        };
    }

    function xd(a, b) {
        return function (d) {
            if (x(d)) return this[a];
            this[a] = b(d);
            this.$$compose();
            return this;
        };
    }

    function Ef() {
        var a = "!",
            b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
        this.hashPrefix = function (b) {
            return v(b) ? (a = b, this) : a;
        };
        this.html5Mode = function (a) {
            if (Ia(a)) return b.enabled = a, this;
            if (F(a)) {
                Ia(a.enabled) && (b.enabled = a.enabled);
                Ia(a.requireBase) && (b.requireBase = a.requireBase);
                if (Ia(a.rewriteLinks) || E(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;
                return this;
            }
            return b;
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, f, e, g) {
            function h(a, b, d) {
                var e = l.url(),
                    f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state();
                } catch (g) {
                    throw l.url(e), l.$$state = f, g;
                }
            }

            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
            }

            var l, m;
            m = c.baseHref();
            var n = c.url(),
                p;
            if (b.enabled) {
                if (!m && b.requireBase) throw lb("nobase");
                p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
                m = f.history ? nc : wd;
            } else p = Ba(n), m = oc;
            var r = p.substr(0, Ba(p).lastIndexOf("/") + 1);
            l = new m(p, r, "#" + a);
            l.$$parseLinkUrl(n, n);
            l.$$state = c.state();
            var J = /^\s*(javascript|mailto):/i;
            e.on("click", function (a) {
                var f = b.rewriteLinks;
                if (f && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
                    for (var h = D(a.target); "a" !== xa(h[0]);) {
                        if (h[0] === e[0] || !(h = h.parent())[0]) return;
                    }if (!E(f) || !x(h.attr(f))) {
                        var f = h.prop("href"),
                            k = h.attr("href") || h.attr("xlink:href");
                        F(f) && "[object SVGAnimatedString]" === f.toString() && (f = Da(f.animVal).href);
                        J.test(f) || !f || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(f, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                    }
                }
            });
            mb(l.absUrl()) !== mb(n) && c.url(l.absUrl(), !0);
            var q = !0;
            c.onUrlChange(function (a, b) {
                mc(a, r) ? (d.$evalAsync(function () {
                    var c = l.absUrl(),
                        e = l.$$state,
                        f;
                    a = mb(a);
                    l.$$parse(a);
                    l.$$state = b;
                    f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (q = !1, k(c, e)));
                }), d.$$phase || d.$digest()) : g.location.href = a;
            });
            d.$watch(function () {
                var a = mb(c.url()),
                    b = mb(l.absUrl()),
                    e = c.state(),
                    g = l.$$replace,
                    m = a !== b || l.$$html5 && f.history && e !== l.$$state;
                if (q || m) q = !1, d.$evalAsync(function () {
                    var b = l.absUrl(),
                        c = d.$broadcast("$locationChangeStart", b, a, l.$$state, e).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = e) : (m && h(b, g, e === l.$$state ? null : l.$$state), k(a, e)));
                });
                l.$$replace = !1;
            });
            return l;
        }];
    }

    function Ff() {
        var a = !0,
            b = this;
        this.debugEnabled = function (b) {
            return v(b) ? (a = b, this) : a;
        };
        this.$get = ["$window", function (d) {
            function c(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a;
            }

            function f(a) {
                var b = d.console || {},
                    f = b[a] || b.log || w;
                a = !1;
                try {
                    a = !!f.apply;
                } catch (k) {}
                return a ? function () {
                    var a = [];
                    q(arguments, function (b) {
                        a.push(c(b));
                    });
                    return f.apply(b, a);
                } : function (a, b) {
                    f(a, null == b ? "" : b);
                };
            }

            return {
                log: f("log"), info: f("info"), warn: f("warn"), error: f("error"), debug: function () {
                    var c = f("debug");
                    return function () {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        }];
    }

    function ug(a) {
        return a + "";
    }

    function vg(a, b) {
        return "undefined" !== typeof a ? a : b;
    }

    function yd(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
    }

    function V(a, b) {
        var d, c, f;
        switch (a.type) {
            case s.Program:
                d = !0;
                q(a.body, function (a) {
                    V(a.expression, b);
                    d = d && a.expression.constant;
                });
                a.constant = d;
                break;
            case s.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case s.UnaryExpression:
                V(a.argument, b);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case s.BinaryExpression:
                V(a.left, b);
                V(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case s.LogicalExpression:
                V(a.left, b);
                V(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case s.ConditionalExpression:
                V(a.test, b);
                V(a.alternate, b);
                V(a.consequent, b);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case s.Identifier:
                a.constant = !1;
                a.toWatch = [a];
                break;
            case s.MemberExpression:
                V(a.object, b);
                a.computed && V(a.property, b);
                a.constant = a.object.constant && (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case s.CallExpression:
                d = f = a.filter ? !b(a.callee.name).$stateful : !1;
                c = [];
                q(a.arguments, function (a) {
                    V(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch);
                });
                a.constant = d;
                a.toWatch = f ? c : [a];
                break;
            case s.AssignmentExpression:
                V(a.left, b);
                V(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case s.ArrayExpression:
                d = !0;
                c = [];
                q(a.elements, function (a) {
                    V(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch);
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case s.ObjectExpression:
                d = !0;
                c = [];
                q(a.properties, function (a) {
                    V(a.value, b);
                    d = d && a.value.constant && !a.computed;
                    a.value.constant || c.push.apply(c, a.value.toWatch);
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case s.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case s.LocalsExpression:
                a.constant = !1, a.toWatch = [];
        }
    }

    function zd(a) {
        if (1 === a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : void 0;
        }
    }

    function Ad(a) {
        return a.type === s.Identifier || a.type === s.MemberExpression;
    }

    function Bd(a) {
        if (1 === a.body.length && Ad(a.body[0].expression)) return {
            type: s.AssignmentExpression,
            left: a.body[0].expression,
            right: { type: s.NGValueParameter },
            operator: "="
        };
    }

    function Cd(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
    }

    function Dd(a, b) {
        this.astBuilder = a;
        this.$filter = b;
    }

    function Ed(a, b) {
        this.astBuilder = a;
        this.$filter = b;
    }

    function pc(a) {
        return y(a.valueOf) ? a.valueOf() : wg.call(a);
    }

    function Gf() {
        var a = W(),
            b = { "true": !0, "false": !1, "null": null, undefined: void 0 },
            d,
            c;
        this.addLiteral = function (a, c) {
            b[a] = c;
        };
        this.setIdentifierFns = function (a, b) {
            d = a;
            c = b;
            return this;
        };
        this.$get = ["$filter", function (f) {
            function e(a, b) {
                return null == a || null == b ? a === b : "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (a = pc(a), "object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) ? !1 : a === b || a !== a && b !== b;
            }

            function g(a, b, c, d, f) {
                var g = d.inputs,
                    h;
                if (1 === g.length) {
                    var k = e,
                        g = g[0];
                    return a.$watch(function (a) {
                        var b = g(a);
                        e(b, k) || (h = d(a, void 0, void 0, [b]), k = b && pc(b));
                        return h;
                    }, b, c, f);
                }
                for (var l = [], m = [], n = 0, I = g.length; n < I; n++) {
                    l[n] = e, m[n] = null;
                }return a.$watch(function (a) {
                    for (var b = !1, c = 0, f = g.length; c < f; c++) {
                        var k = g[c](a);
                        if (b || (b = !e(k, l[c]))) m[c] = k, l[c] = k && pc(k);
                    }
                    b && (h = d(a, void 0, void 0, m));
                    return h;
                }, b, c, f);
            }

            function h(a, b, c, d, e) {
                function f(a) {
                    return d(a);
                }

                function h(a, c, d) {
                    l = a;
                    y(b) && b(a, c, d);
                    v(a) && d.$$postDigest(function () {
                        v(l) && k();
                    });
                }

                var k, l;
                return k = d.inputs ? g(a, h, c, d, e) : a.$watch(f, h, c);
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    q(a, function (a) {
                        v(a) || (b = !1);
                    });
                    return b;
                }

                var f, g;
                return f = a.$watch(function (a) {
                    return d(a);
                }, function (a, c, d) {
                    g = a;
                    y(b) && b(a, c, d);
                    e(a) && d.$$postDigest(function () {
                        e(g) && f();
                    });
                }, c);
            }

            function l(a, b, c, d) {
                var e = a.$watch(function (a) {
                    e();
                    return d(a);
                }, b, c);
                return e;
            }

            function m(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    d = !1,
                    c = c !== k && c !== h ? function (c, e, f, g) {
                    f = d && g ? g[0] : a(c, e, f, g);
                    return b(f, c, e);
                } : function (c, d, e, f) {
                    e = a(c, d, e, f);
                    c = b(e, c, d);
                    return v(e) ? c : e;
                },
                    d = !a.inputs;
                a.$$watchDelegate && a.$$watchDelegate !== g ? (c.$$watchDelegate = a.$$watchDelegate, c.inputs = a.inputs) : b.$stateful || (c.$$watchDelegate = g, c.inputs = a.inputs ? a.inputs : [a]);
                return c;
            }

            var n = {
                csp: za().noUnsafeEval,
                literals: Fa(b),
                isIdentifierStart: y(d) && d,
                isIdentifierContinue: y(c) && c
            };
            return function (b, c) {
                var d, e, u;
                switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {
                    case "string":
                        return u = b = b.trim(), d = a[u], d || (":" === b.charAt(0) && ":" === b.charAt(1) && (e = !0, b = b.substring(2)), d = new qc(n), d = new rc(d, f, n).parse(b), d.constant ? d.$$watchDelegate = l : e ? d.$$watchDelegate = d.literal ? k : h : d.inputs && (d.$$watchDelegate = g), a[u] = d), m(d, c);
                    case "function":
                        return m(b, c);
                    default:
                        return m(w, c);
                }
            };
        }];
    }

    function If() {
        var a = !0;
        this.$get = ["$rootScope", "$exceptionHandler", function (b, d) {
            return Fd(function (a) {
                b.$evalAsync(a);
            }, d, a);
        }];
        this.errorOnUnhandledRejections = function (b) {
            return v(b) ? (a = b, this) : a;
        };
    }

    function Jf() {
        var a = !0;
        this.$get = ["$browser", "$exceptionHandler", function (b, d) {
            return Fd(function (a) {
                b.defer(a);
            }, d, a);
        }];
        this.errorOnUnhandledRejections = function (b) {
            return v(b) ? (a = b, this) : a;
        };
    }

    function Fd(a, b, d) {
        function c() {
            return new f();
        }

        function f() {
            var a = this.promise = new e();
            this.resolve = function (b) {
                k(a, b);
            };
            this.reject = function (b) {
                m(a, b);
            };
            this.notify = function (b) {
                p(a, b);
            };
        }

        function e() {
            this.$$state = { status: 0 };
        }

        function g() {
            for (; !v && t.length;) {
                var a = t.shift();
                if (!a.pur) {
                    a.pur = !0;
                    var c = a.value,
                        c = "Possibly unhandled rejection: " + ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : x(c) ? "undefined" : "string" !== typeof c ? we(c) : c);
                    a.value instanceof Error ? b(a.value, c) : b(c);
                }
            }
        }

        function h(b) {
            !d || b.pending || 2 !== b.status || b.pur || (0 === v && 0 === t.length && a(g), t.push(b));
            !b.processScheduled && b.pending && (b.processScheduled = !0, ++v, a(function () {
                var c, e, f;
                f = b.pending;
                b.processScheduled = !1;
                b.pending = void 0;
                try {
                    for (var h = 0, l = f.length; h < l; ++h) {
                        b.pur = !0;
                        e = f[h][0];
                        c = f[h][b.status];
                        try {
                            y(c) ? k(e, c(b.value)) : 1 === b.status ? k(e, b.value) : m(e, b.value);
                        } catch (n) {
                            m(e, n);
                        }
                    }
                } finally {
                    --v, d && 0 === v && a(g);
                }
            }));
        }

        function k(a, b) {
            a.$$state.status || (b === a ? n(a, H("qcycle", b)) : l(a, b));
        }

        function l(a, b) {
            function c(b) {
                g || (g = !0, l(a, b));
            }

            function d(b) {
                g || (g = !0, n(a, b));
            }

            function e(b) {
                p(a, b);
            }

            var f,
                g = !1;
            try {
                if (F(b) || y(b)) f = b.then;
                y(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, h(a.$$state));
            } catch (k) {
                d(k);
            }
        }

        function m(a, b) {
            a.$$state.status || n(a, b);
        }

        function n(a, b) {
            a.$$state.value = b;
            a.$$state.status = 2;
            h(a.$$state);
        }

        function p(c, d) {
            var e = c.$$state.pending;
            0 >= c.$$state.status && e && e.length && a(function () {
                for (var a, c, f = 0, g = e.length; f < g; f++) {
                    c = e[f][0];
                    a = e[f][3];
                    try {
                        p(c, y(a) ? a(d) : d);
                    } catch (h) {
                        b(h);
                    }
                }
            });
        }

        function r(a) {
            var b = new e();
            m(b, a);
            return b;
        }

        function J(a, b, c) {
            var d = null;
            try {
                y(c) && (d = c());
            } catch (e) {
                return r(e);
            }
            return d && y(d.then) ? d.then(function () {
                return b(a);
            }, r) : b(a);
        }

        function s(a, b, c, d) {
            var f = new e();
            k(f, a);
            return f.then(b, c, d);
        }

        function u(a) {
            if (!y(a)) throw H("norslvr", a);
            var b = new e();
            a(function (a) {
                k(b, a);
            }, function (a) {
                m(b, a);
            });
            return b;
        }

        var H = M("$q", TypeError),
            v = 0,
            t = [];
        R(e.prototype, {
            then: function then(a, b, c) {
                if (x(a) && x(b) && x(c)) return this;
                var d = new e();
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && h(this.$$state);
                return d;
            }, "catch": function _catch(a) {
                return this.then(null, a);
            }, "finally": function _finally(a, b) {
                return this.then(function (b) {
                    return J(b, w, a);
                }, function (b) {
                    return J(b, r, a);
                }, b);
            }
        });
        var w = s;
        u.prototype = e.prototype;
        u.defer = c;
        u.reject = r;
        u.when = s;
        u.resolve = w;
        u.all = function (a) {
            var b = new e(),
                c = 0,
                d = C(a) ? [] : {};
            q(a, function (a, e) {
                c++;
                s(a).then(function (a) {
                    d[e] = a;
                    --c || k(b, d);
                }, function (a) {
                    m(b, a);
                });
            });
            0 === c && k(b, d);
            return b;
        };
        u.race = function (a) {
            var b = c();
            q(a, function (a) {
                s(a).then(b.resolve, b.reject);
            });
            return b.promise;
        };
        return u;
    }

    function Sf() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                f = !!d,
                e = f ? function (a) {
                var b = d(a);
                return function () {
                    c(b);
                };
            } : function (a) {
                var c = b(a, 16.66, !1);
                return function () {
                    b.cancel(c);
                };
            };
            e.supported = f;
            return e;
        }];
    }

    function Hf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++rb;
                this.$$ChildScope = null;
            }

            b.prototype = a;
            return b;
        }

        var b = 10,
            d = M("$rootScope"),
            c = null,
            f = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b;
        };
        this.$get = ["$exceptionHandler", "$parse", "$browser", function (e, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0;
            }

            function l(a) {
                9 === La && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
            }

            function m() {
                this.$id = ++rb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null;
            }

            function n(a) {
                if (H.$$phase) throw d("inprog", H.$$phase);
                H.$$phase = a;
            }

            function p(a, b) {
                do {
                    a.$$watchersCount += b;
                } while (a = a.$parent);
            }

            function r(a, b, c) {
                do {
                    a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                } while (a = a.$parent);
            }

            function J() {}

            function s() {
                for (; ia.length;) {
                    try {
                        ia.shift()();
                    } catch (a) {
                        e(a);
                    }
                }f = null;
            }

            function u() {
                null === f && (f = h.defer(function () {
                    H.$apply(s);
                }));
            }

            m.prototype = {
                constructor: m, $new: function $new(b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (b || c !== this) && d.$on("$destroy", k);
                    return d;
                }, $watch: function $watch(a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
                    var h = this,
                        k = h.$$watchers,
                        l = { fn: b, last: J, get: f, exp: e || a, eq: !!d };
                    c = null;
                    y(b) || (l.fn = w);
                    k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);
                    k.unshift(l);
                    k.$$digestWatchIndex++;
                    p(this, 1);
                    return function () {
                        var a = $a(k, l);
                        0 <= a && (p(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);
                        c = null;
                    };
                }, $watchGroup: function $watchGroup(a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1, b(e, e, g)) : b(e, d, g);
                    }

                    var d = Array(a.length),
                        e = Array(a.length),
                        f = [],
                        g = this,
                        h = !1,
                        k = !0;
                    if (!a.length) {
                        var l = !0;
                        g.$evalAsync(function () {
                            l && b(e, e, g);
                        });
                        return function () {
                            l = !1;
                        };
                    }
                    if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f);
                    });
                    q(a, function (a, b) {
                        var k = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c));
                        });
                        f.push(k);
                    });
                    return function () {
                        for (; f.length;) {
                            f.shift()();
                        }
                    };
                },
                $watchCollection: function $watchCollection(a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!x(e)) {
                            if (F(e)) {
                                if (ta(e)) for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) {
                                    h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                                } else {
                                    f !== p && (f = p = {}, u = 0, l++);
                                    a = 0;
                                    for (b in e) {
                                        va.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                                    }if (u > a) for (b in l++, f) {
                                        va.call(e, b) || (u--, delete f[b]);
                                    }
                                }
                            } else f !== e && (f = e, l++);
                            return l;
                        }
                    }

                    c.$stateful = !0;
                    var d = this,
                        e,
                        f,
                        h,
                        k = 1 < b.length,
                        l = 0,
                        m = g(a, c),
                        n = [],
                        p = {},
                        r = !0,
                        u = 0;
                    return this.$watch(m, function () {
                        r ? (r = !1, b(e, e, d)) : b(e, h, d);
                        if (k) if (F(e)) {
                            if (ta(e)) {
                                h = Array(e.length);
                                for (var a = 0; a < e.length; a++) {
                                    h[a] = e[a];
                                }
                            } else for (a in h = {}, e) {
                                va.call(e, a) && (h[a] = e[a]);
                            }
                        } else h = e;
                    });
                }, $digest: function $digest() {
                    var a,
                        g,
                        k,
                        l,
                        m,
                        p,
                        r,
                        u = b,
                        q,
                        w = [],
                        x,
                        ia;
                    n("$digest");
                    h.$$checkUrlChange();
                    this === H && null !== f && (h.defer.cancel(f), s());
                    c = null;
                    do {
                        r = !1;
                        q = this;
                        for (p = 0; p < v.length; p++) {
                            try {
                                ia = v[p], ia.scope.$eval(ia.expression, ia.locals);
                            } catch (z) {
                                e(z);
                            }
                            c = null;
                        }
                        v.length = 0;
                        a: do {
                            if (p = q.$$watchers) for (p.$$digestWatchIndex = p.length; p.$$digestWatchIndex--;) {
                                try {
                                    if (a = p[p.$$digestWatchIndex]) if (m = a.get, (g = m(q)) !== (k = a.last) && !(a.eq ? qa(g, k) : ga(g) && ga(k))) r = !0, c = a, a.last = a.eq ? Fa(g, null) : g, l = a.fn, l(g, k === J ? g : k, q), 5 > u && (x = 4 - u, w[x] || (w[x] = []), w[x].push({
                                        msg: y(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                        newVal: g,
                                        oldVal: k
                                    }));else if (a === c) {
                                        r = !1;
                                        break a;
                                    }
                                } catch (D) {
                                    e(D);
                                }
                            }if (!(p = q.$$watchersCount && q.$$childHead || q !== this && q.$$nextSibling)) for (; q !== this && !(p = q.$$nextSibling);) {
                                q = q.$parent;
                            }
                        } while (q = p);
                        if ((r || v.length) && !u--) throw H.$$phase = null, d("infdig", b, w);
                    } while (r || v.length);
                    for (H.$$phase = null; A < t.length;) {
                        try {
                            t[A++]();
                        } catch (E) {
                            e(E);
                        }
                    }t.length = A = 0;
                }, $destroy: function $destroy() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === H && h.$$applicationDestroyed();
                        p(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) {
                            r(this, this.$$listenerCount[b], b);
                        }a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
                        a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = w;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return w;
                        };
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        l(this);
                    }
                }, $eval: function $eval(a, b) {
                    return g(a)(this, b);
                }, $evalAsync: function $evalAsync(a, b) {
                    H.$$phase || v.length || h.defer(function () {
                        v.length && H.$digest();
                    });
                    v.push({ scope: this, expression: g(a), locals: b });
                }, $$postDigest: function $$postDigest(a) {
                    t.push(a);
                }, $apply: function $apply(a) {
                    try {
                        n("$apply");
                        try {
                            return this.$eval(a);
                        } finally {
                            H.$$phase = null;
                        }
                    } catch (b) {
                        e(b);
                    } finally {
                        try {
                            H.$digest();
                        } catch (c) {
                            throw e(c), c;
                        }
                    }
                }, $applyAsync: function $applyAsync(a) {
                    function b() {
                        c.$eval(a);
                    }

                    var c = this;
                    a && ia.push(b);
                    a = g(a);
                    u();
                }, $on: function $on(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do {
                        d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
                    } while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, r(e, 1, a));
                    };
                }, $emit: function $emit(a, b) {
                    var c = [],
                        d,
                        f = this,
                        g = !1,
                        h = {
                        name: a, targetScope: f, stopPropagation: function stopPropagation() {
                            g = !0;
                        }, preventDefault: function preventDefault() {
                            h.defaultPrevented = !0;
                        }, defaultPrevented: !1
                    },
                        k = ab([h], arguments, 1),
                        l,
                        m;
                    do {
                        d = f.$$listeners[a] || c;
                        h.currentScope = f;
                        l = 0;
                        for (m = d.length; l < m; l++) {
                            if (d[l]) try {
                                d[l].apply(null, k);
                            } catch (n) {
                                e(n);
                            } else d.splice(l, 1), l--, m--;
                        }if (g) return h.currentScope = null, h;
                        f = f.$parent;
                    } while (f);
                    h.currentScope = null;
                    return h;
                }, $broadcast: function $broadcast(a, b) {
                    var c = this,
                        d = this,
                        f = {
                        name: a, targetScope: this, preventDefault: function preventDefault() {
                            f.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a]) return f;
                    for (var g = ab([f], arguments, 1), h, k; c = d;) {
                        f.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++) {
                            if (d[h]) try {
                                d[h].apply(null, g);
                            } catch (l) {
                                e(l);
                            } else d.splice(h, 1), h--, k--;
                        }if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
                            c = c.$parent;
                        }
                    }
                    f.currentScope = null;
                    return f;
                }
            };
            var H = new m(),
                v = H.$$asyncQueue = [],
                t = H.$$postDigestQueue = [],
                ia = H.$$applyAsyncQueue = [],
                A = 0;
            return H;
        }];
    }

    function ze() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return v(b) ? (a = b, this) : a;
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return v(a) ? (b = a, this) : b;
        };
        this.$get = function () {
            return function (d, c) {
                var f = c ? b : a,
                    e;
                e = Da(d).href;
                return "" === e || e.match(f) ? d : "unsafe:" + e;
            };
        };
    }

    function xg(a) {
        if ("self" === a) return a;
        if (E(a)) {
            if (-1 < a.indexOf("***")) throw ua("iwcard", a);
            a = Gd(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");
            return new RegExp("^" + a + "$");
        }
        if (Xa(a)) return new RegExp("^" + a.source + "$");
        throw ua("imatcher");
    }

    function Hd(a) {
        var b = [];
        v(a) && q(a, function (a) {
            b.push(xg(a));
        });
        return b;
    }

    function Lf() {
        this.SCE_CONTEXTS = pa;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function (b) {
            arguments.length && (a = Hd(b));
            return a;
        };
        this.resourceUrlBlacklist = function (a) {
            arguments.length && (b = Hd(a));
            return b;
        };
        this.$get = ["$injector", function (d) {
            function c(a, b) {
                return "self" === a ? sd(b) : !!a.exec(b.href);
            }

            function f(a) {
                var b = function b(a) {
                    this.$$unwrapTrustedValue = function () {
                        return a;
                    };
                };
                a && (b.prototype = new a());
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue();
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString();
                };
                return b;
            }

            var e = function e(a) {
                throw ua("unsafe");
            };
            d.has("$sanitize") && (e = d.get("$sanitize"));
            var g = f(),
                h = {};
            h[pa.HTML] = f(g);
            h[pa.CSS] = f(g);
            h[pa.URL] = f(g);
            h[pa.JS] = f(g);
            h[pa.RESOURCE_URL] = f(h[pa.URL]);
            return {
                trustAs: function trustAs(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw ua("icontext", a, b);
                    if (null === b || x(b) || "" === b) return b;
                    if ("string" !== typeof b) throw ua("itype", a);
                    return new c(b);
                }, getTrusted: function getTrusted(d, f) {
                    if (null === f || x(f) || "" === f) return f;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && f instanceof g) return f.$$unwrapTrustedValue();
                    if (d === pa.RESOURCE_URL) {
                        var g = Da(f.toString()),
                            n,
                            p,
                            r = !1;
                        n = 0;
                        for (p = a.length; n < p; n++) {
                            if (c(a[n], g)) {
                                r = !0;
                                break;
                            }
                        }if (r) for (n = 0, p = b.length; n < p; n++) {
                            if (c(b[n], g)) {
                                r = !1;
                                break;
                            }
                        }if (r) return f;
                        throw ua("insecurl", f.toString());
                    }
                    if (d === pa.HTML) return e(f);
                    throw ua("unsafe");
                }, valueOf: function valueOf(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a;
                }
            };
        }];
    }

    function Kf() {
        var a = !0;
        this.enabled = function (b) {
            arguments.length && (a = !!b);
            return a;
        };
        this.$get = ["$parse", "$sceDelegate", function (b, d) {
            if (a && 8 > La) throw ua("iequirks");
            var c = ra(pa);
            c.isEnabled = function () {
                return a;
            };
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs = c.getTrusted = function (a, b) {
                return b;
            }, c.valueOf = Ya);
            c.parseAs = function (a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function (b) {
                    return c.getTrusted(a, b);
                });
            };
            var f = c.parseAs,
                e = c.getTrusted,
                g = c.trustAs;
            q(pa, function (a, b) {
                var d = P(b);
                c[("parse_as_" + d).replace(sc, gb)] = function (b) {
                    return f(a, b);
                };
                c[("get_trusted_" + d).replace(sc, gb)] = function (b) {
                    return e(a, b);
                };
                c[("trust_as_" + d).replace(sc, gb)] = function (b) {
                    return g(a, b);
                };
            });
            return c;
        }];
    }

    function Mf() {
        this.$get = ["$window", "$document", function (a, b) {
            var d = {},
                c = !(a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
                f = Z((/android (\d+)/.exec(P((a.navigator || {}).userAgent)) || [])[1]),
                e = /Boxee/i.test((a.navigator || {}).userAgent),
                g = b[0] || {},
                h = g.body && g.body.style,
                k = !1,
                l = !1;
            h && (k = !!("transition" in h || "webkitTransition" in h), l = !!("animation" in h || "webkitAnimation" in h));
            return {
                history: !(!c || 4 > f || e), hasEvent: function hasEvent(a) {
                    if ("input" === a && La) return !1;
                    if (x(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b;
                    }
                    return d[a];
                }, csp: za(), transitions: k, animations: l, android: f
            };
        }];
    }

    function Of() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b, this) : a;
        };
        this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (b, d, c, f, e) {
            function g(h, k) {
                g.totalPendingRequests++;
                if (!E(h) || x(d.get(h))) h = e.getTrustedResourceUrl(h);
                var l = c.defaults && c.defaults.transformResponse;
                C(l) ? l = l.filter(function (a) {
                    return a !== jc;
                }) : l === jc && (l = null);
                return c.get(h, R({ cache: d, transformResponse: l }, a)).finally(function () {
                    g.totalPendingRequests--;
                }).then(function (a) {
                    d.put(h, a.data);
                    return a.data;
                }, function (a) {
                    k || (a = yg("tpload", h, a.status, a.statusText), b(a));
                    return f.reject(a);
                });
            }

            g.totalPendingRequests = 0;
            return g;
        }];
    }

    function Pf() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
            return {
                findBindings: function findBindings(a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    q(a, function (a) {
                        var c = $.element(a).data("$binding");
                        c && q(c, function (c) {
                            d ? new RegExp("(^|\\s)" + Gd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a);
                        });
                    });
                    return g;
                }, findModels: function findModels(a, b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length) return k;
                    }
                }, getLocation: function getLocation() {
                    return d.url();
                }, setLocation: function setLocation(b) {
                    b !== d.url() && (d.url(b), a.$digest());
                }, whenStable: function whenStable(a) {
                    b.notifyWhenNoOutstandingRequests(a);
                }
            };
        }];
    }

    function Qf() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, f) {
            function e(e, k, l) {
                y(e) || (l = k, k = e, e = w);
                var m = wa.call(arguments, 3),
                    n = v(l) && !l,
                    p = (n ? c : d).defer(),
                    r = p.promise,
                    q;
                q = b.defer(function () {
                    try {
                        p.resolve(e.apply(null, m));
                    } catch (b) {
                        p.reject(b), f(b);
                    } finally {
                        delete g[r.$$timeoutId];
                    }
                    n || a.$apply();
                }, k);
                r.$$timeoutId = q;
                g[q] = p;
                return r;
            }

            var g = {};
            e.cancel = function (a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.catch(w), g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
            };
            return e;
        }];
    }

    function Da(a) {
        La && (ca.setAttribute("href", a), a = ca.href);
        ca.setAttribute("href", a);
        return {
            href: ca.href,
            protocol: ca.protocol ? ca.protocol.replace(/:$/, "") : "",
            host: ca.host,
            search: ca.search ? ca.search.replace(/^\?/, "") : "",
            hash: ca.hash ? ca.hash.replace(/^#/, "") : "",
            hostname: ca.hostname,
            port: ca.port,
            pathname: "/" === ca.pathname.charAt(0) ? ca.pathname : "/" + ca.pathname
        };
    }

    function sd(a) {
        a = E(a) ? Da(a) : a;
        return a.protocol === Id.protocol && a.host === Id.host;
    }

    function Rf() {
        this.$get = ma(z);
    }

    function Jd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
                return a;
            }
        }

        var d = a[0] || {},
            c = {},
            f = "";
        return function () {
            var a, g, h, k, l;
            try {
                a = d.cookie || "";
            } catch (m) {
                a = "";
            }
            if (a !== f) for (f = a, a = f.split("; "), c = {}, h = 0; h < a.length; h++) {
                g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), x(c[l]) && (c[l] = b(g.substring(k + 1))));
            }return c;
        };
    }

    function Vf() {
        this.$get = Jd;
    }

    function Xc(a) {
        function b(d, c) {
            if (F(d)) {
                var f = {};
                q(d, function (a, c) {
                    f[c] = b(c, a);
                });
                return f;
            }
            return a.factory(d + "Filter", c);
        }

        this.register = b;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter");
            };
        }];
        b("currency", Kd);
        b("date", Ld);
        b("filter", zg);
        b("json", Ag);
        b("limitTo", Bg);
        b("lowercase", Cg);
        b("number", Md);
        b("orderBy", Nd);
        b("uppercase", Dg);
    }

    function zg() {
        return function (a, b, d, c) {
            if (!ta(a)) {
                if (null == a) return a;
                throw M("filter")("notarray", a);
            }
            c = c || "$";
            var f;
            switch (tc(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    f = !0;
                case "object":
                    b = Eg(b, d, c, f);
                    break;
                default:
                    return a;
            }
            return Array.prototype.filter.call(a, b);
        };
    }

    function Eg(a, b, d, c) {
        var f = F(a) && d in a;
        !0 === b ? b = qa : y(b) || (b = function b(a, _b) {
            if (x(a)) return !1;
            if (null === a || null === _b) return a === _b;
            if (F(_b) || F(a) && !Vb(a)) return !1;
            a = P("" + a);
            _b = P("" + _b);
            return -1 !== a.indexOf(_b);
        });
        return function (e) {
            return f && !F(e) ? Ha(e, a[d], b, d, !1) : Ha(e, a, b, d, c);
        };
    }

    function Ha(a, b, d, c, f, e) {
        var g = tc(a),
            h = tc(b);
        if ("string" === h && "!" === b.charAt(0)) return !Ha(a, b.substring(1), d, c, f);
        if (C(a)) return a.some(function (a) {
            return Ha(a, b, d, c, f);
        });
        switch (g) {
            case "object":
                var k;
                if (f) {
                    for (k in a) {
                        if ("$" !== k.charAt(0) && Ha(a[k], b, d, c, !0)) return !0;
                    }return e ? !1 : Ha(a, b, d, c, !1);
                }
                if ("object" === h) {
                    for (k in b) {
                        if (e = b[k], !y(e) && !x(e) && (g = k === c, !Ha(g ? a : a[k], e, d, c, g, g))) return !1;
                    }return !0;
                }
                return d(a, b);
            case "function":
                return !1;
            default:
                return d(a, b);
        }
    }

    function tc(a) {
        return null === a ? "null" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }

    function Kd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, f) {
            x(c) && (c = b.CURRENCY_SYM);
            x(f) && (f = b.PATTERNS[1].maxFrac);
            return null == a ? a : Od(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, f).replace(/\u00A4/g, c);
        };
    }

    function Md(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Od(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }

    function Fg(a) {
        var b = 0,
            d,
            c,
            f,
            e,
            g;
        -1 < (c = a.indexOf(Pd)) && (a = a.replace(Pd, ""));
        0 < (f = a.search(/e/i)) ? (0 > c && (c = f), c += +a.slice(f + 1), a = a.substring(0, f)) : 0 > c && (c = a.length);
        for (f = 0; a.charAt(f) === uc; f++) {}
        if (f === (g = a.length)) d = [0], c = 1;else {
            for (g--; a.charAt(g) === uc;) {
                g--;
            }c -= f;
            d = [];
            for (e = 0; f <= g; f++, e++) {
                d[e] = +a.charAt(f);
            }
        }
        c > Qd && (d = d.splice(0, Qd - 1), b = c - 1, c = 1);
        return { d: d, e: b, i: c };
    }

    function Gg(a, b, d, c) {
        var f = a.d,
            e = f.length - a.i;
        b = x(b) ? Math.min(Math.max(d, e), c) : +b;
        d = b + a.i;
        c = f[d];
        if (0 < d) {
            f.splice(Math.max(a.i, d));
            for (var g = d; g < f.length; g++) {
                f[g] = 0;
            }
        } else for (e = Math.max(0, e), a.i = 1, f.length = Math.max(1, d = b + 1), f[0] = 0, g = 1; g < d; g++) {
            f[g] = 0;
        }if (5 <= c) if (0 > d - 1) {
            for (c = 0; c > d; c--) {
                f.unshift(0), a.i++;
            }f.unshift(1);
            a.i++;
        } else f[d - 1]++;
        for (; e < Math.max(0, b); e++) {
            f.push(0);
        }if (b = f.reduceRight(function (a, b, c, d) {
            b += a;
            d[c] = b % 10;
            return Math.floor(b / 10);
        }, 0)) f.unshift(b), a.i++;
    }

    function Od(a, b, d, c, f) {
        if (!E(a) && !Y(a) || isNaN(a)) return "";
        var e = !isFinite(a),
            g = !1,
            h = Math.abs(a) + "",
            k = "";
        if (e) k = "\u221E";else {
            g = Fg(h);
            Gg(g, f, b.minFrac, b.maxFrac);
            k = g.d;
            h = g.i;
            f = g.e;
            e = [];
            for (g = k.reduce(function (a, b) {
                return a && !b;
            }, !0); 0 > h;) {
                k.unshift(0), h++;
            }0 < h ? e = k.splice(h, k.length) : (e = k, k = [0]);
            h = [];
            for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) {
                h.unshift(k.splice(-b.gSize, k.length).join(""));
            }k.length && h.unshift(k.join(""));
            k = h.join(d);
            e.length && (k += c + e.join(""));
            f && (k += "e+" + f);
        }
        return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
    }

    function Kb(a, b, d, c) {
        var f = "";
        if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, f = "-");
        for (a = "" + a; a.length < b;) {
            a = uc + a;
        }d && (a = a.substr(a.length - b));
        return f + a;
    }

    function aa(a, b, d, c, f) {
        d = d || 0;
        return function (e) {
            e = e["get" + a]();
            if (0 < d || e > -d) e += d;
            0 === e && -12 === d && (e = 12);
            return Kb(e, b, c, f);
        };
    }

    function nb(a, b, d) {
        return function (c, f) {
            var e = c["get" + a](),
                g = vb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
            return f[g][e];
        };
    }

    function Rd(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b);
    }

    function Sd(a) {
        return function (b) {
            var d = Rd(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
            b = 1 + Math.round(b / 6048E5);
            return Kb(b, a);
        };
    }

    function vc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
    }

    function Ld(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var e = 0,
                    g = 0,
                    h = b[8] ? a.setUTCFullYear : a.setFullYear,
                    k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (e = Z(b[9] + b[10]), g = Z(b[9] + b[11]));
                h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));
                e = Z(b[4] || 0) - e;
                g = Z(b[5] || 0) - g;
                h = Z(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, e, g, h, b);
            }
            return a;
        }

        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, e) {
            var g = "",
                h = [],
                k,
                l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            E(c) && (c = Hg.test(c) ? Z(c) : b(c));
            Y(c) && (c = new Date(c));
            if (!fa(c) || !isFinite(c.getTime())) return c;
            for (; d;) {
                (l = Ig.exec(d)) ? (h = ab(h, l, 1), d = h.pop()) : (h.push(d), d = null);
            }var m = c.getTimezoneOffset();
            e && (m = Jc(e, m), c = Wb(c, e, !0));
            q(h, function (b) {
                k = Jg[b];
                g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return g;
        };
    }

    function Ag() {
        return function (a, b) {
            x(b) && (b = 2);
            return cb(a, b);
        };
    }

    function Bg() {
        return function (a, b, d) {
            b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);
            if (ga(b)) return a;
            Y(a) && (a = a.toString());
            if (!ta(a)) return a;
            d = !d || isNaN(d) ? 0 : Z(d);
            d = 0 > d ? Math.max(0, a.length + d) : d;
            return 0 <= b ? wc(a, d, d + b) : 0 === d ? wc(a, b, a.length) : wc(a, Math.max(0, d + b), d);
        };
    }

    function wc(a, b, d) {
        return E(a) ? a.slice(b, d) : wa.call(a, b, d);
    }

    function Nd(a) {
        function b(b) {
            return b.map(function (b) {
                var c = 1,
                    d = Ya;
                if (y(b)) d = b;else if (E(b)) {
                    if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);
                    if ("" !== b && (d = a(b), d.constant)) var f = d(),
                        d = function d(a) {
                        return a[f];
                    };
                }
                return { get: d, descending: c };
            });
        }

        function d(a) {
            switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1;
            }
        }

        function c(a, b) {
            var c = 0,
                d = a.type,
                k = b.type;
            if (d === k) {
                var k = a.value,
                    l = b.value;
                "string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (F(k) && (k = a.index), F(l) && (l = b.index));
                k !== l && (c = k < l ? -1 : 1);
            } else c = d < k ? -1 : 1;
            return c;
        }

        return function (a, e, g, h) {
            if (null == a) return a;
            if (!ta(a)) throw M("orderBy")("notarray", a);
            C(e) || (e = [e]);
            0 === e.length && (e = ["+"]);
            var k = b(e),
                l = g ? -1 : 1,
                m = y(h) ? h : c;
            a = Array.prototype.map.call(a, function (a, b) {
                return {
                    value: a, tieBreaker: { value: b, type: "number", index: b }, predicateValues: k.map(function (c) {
                        var e = c.get(a);
                        c = typeof e === "undefined" ? "undefined" : _typeof(e);
                        if (null === e) c = "string", e = "null";else if ("object" === c) a: {
                            if (y(e.valueOf) && (e = e.valueOf(), d(e))) break a;
                            Vb(e) && (e = e.toString(), d(e));
                        }
                        return { value: e, type: c, index: b };
                    })
                };
            });
            a.sort(function (a, b) {
                for (var c = 0, d = k.length; c < d; c++) {
                    var e = m(a.predicateValues[c], b.predicateValues[c]);
                    if (e) return e * k[c].descending * l;
                }
                return m(a.tieBreaker, b.tieBreaker) * l;
            });
            return a = a.map(function (a) {
                return a.value;
            });
        };
    }

    function Ra(a) {
        y(a) && (a = { link: a });
        a.restrict = a.restrict || "AC";
        return ma(a);
    }

    function Lb(a, b, d, c, f) {
        this.$$controls = [];
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = f(b.name || b.ngForm || "")(d);
        this.$dirty = !1;
        this.$valid = this.$pristine = !0;
        this.$submitted = this.$invalid = !1;
        this.$$parentForm = Mb;
        this.$$element = a;
        this.$$animate = c;
        Td(this);
    }

    function Td(a) {
        a.$$classCache = {};
        a.$$classCache[Ud] = !(a.$$classCache[ob] = a.$$element.hasClass(ob));
    }

    function Vd(a) {
        function b(a, b, c) {
            c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1);
        }

        function d(a, c, d) {
            c = c ? "-" + Nc(c, "-") : "";
            b(a, ob + c, !0 === d);
            b(a, Ud + c, !1 === d);
        }

        var c = a.set,
            f = a.unset;
        a.clazz.prototype.$setValidity = function (a, g, h) {
            x(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, h)) : (this.$pending && f(this.$pending, a, h), Wd(this.$pending) && (this.$pending = void 0));
            Ia(g) ? g ? (f(this.$error, a, h), c(this.$$success, a, h)) : (c(this.$error, a, h), f(this.$$success, a, h)) : (f(this.$error, a, h), f(this.$$success, a, h));
            this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = Wd(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));
            g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;
            d(this, a, g);
            this.$$parentForm.$setValidity(a, g, this);
        };
    }

    function Wd(a) {
        if (a) for (var b in a) {
            if (a.hasOwnProperty(b)) return !1;
        }return !0;
    }

    function xc(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString();
        });
    }

    function Sa(a, b, d, c, f, e) {
        var g = P(b[0].type);
        if (!f.android) {
            var h = !1;
            b.on("compositionstart", function () {
                h = !0;
            });
            b.on("compositionend", function () {
                h = !1;
                l();
            });
        }
        var k,
            l = function l(a) {
            k && (e.defer.cancel(k), k = null);
            if (!h) {
                var f = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim || (f = S(f));
                (c.$viewValue !== f || "" === f && c.$$hasNativeValidators) && c.$setViewValue(f, a);
            }
        };
        if (f.hasEvent("input")) b.on("input", l);else {
            var m = function m(a, b, c) {
                k || (k = e.defer(function () {
                    k = null;
                    b && b.value === c || l(a);
                }));
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
            });
            if (f.hasEvent("paste")) b.on("paste cut", m);
        }
        b.on("change", l);
        if (Xd[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
            if (!k) {
                var b = this.validity,
                    c = b.badInput,
                    d = b.typeMismatch;
                k = e.defer(function () {
                    k = null;
                    b.badInput === c && b.typeMismatch === d || l(a);
                });
            }
        });
        c.$render = function () {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a);
        };
    }

    function Nb(a, b) {
        return function (d, c) {
            var f, e;
            if (fa(d)) return d;
            if (E(d)) {
                '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (Kg.test(d)) return new Date(d);
                a.lastIndex = 0;
                if (f = a.exec(d)) return f.shift(), e = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1E3
                } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(f, function (a, c) {
                    c < b.length && (e[b[c]] = +a);
                }), new Date(e.yyyy, e.MM - 1, e.dd, e.HH, e.mm, e.ss || 0, 1E3 * e.sss || 0);
            }
            return NaN;
        };
    }

    function pb(a, b, d, c) {
        return function (f, e, g, h, k, l, m) {
            function n(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime());
            }

            function p(a) {
                return v(a) && !fa(a) ? d(a) || void 0 : a;
            }

            yc(f, e, g, h);
            Sa(f, e, g, h, k, l);
            var r = h && h.$options.getOption("timezone"),
                q;
            h.$$parserName = a;
            h.$parsers.push(function (a) {
                if (h.$isEmpty(a)) return null;
                if (b.test(a)) return a = d(a, q), r && (a = Wb(a, r)), a;
            });
            h.$formatters.push(function (a) {
                if (a && !fa(a)) throw qb("datefmt", a);
                if (n(a)) return (q = a) && r && (q = Wb(q, r, !0)), m("date")(a, c, r);
                q = null;
                return "";
            });
            if (v(g.min) || g.ngMin) {
                var s;
                h.$validators.min = function (a) {
                    return !n(a) || x(s) || d(a) >= s;
                };
                g.$observe("min", function (a) {
                    s = p(a);
                    h.$validate();
                });
            }
            if (v(g.max) || g.ngMax) {
                var u;
                h.$validators.max = function (a) {
                    return !n(a) || x(u) || d(a) <= u;
                };
                g.$observe("max", function (a) {
                    u = p(a);
                    h.$validate();
                });
            }
        };
    }

    function yc(a, b, d, c) {
        (c.$$hasNativeValidators = F(b[0].validity)) && c.$parsers.push(function (a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? void 0 : a;
        });
    }

    function Yd(a) {
        a.$$parserName = "number";
        a.$parsers.push(function (b) {
            if (a.$isEmpty(b)) return null;
            if (Lg.test(b)) return parseFloat(b);
        });
        a.$formatters.push(function (b) {
            if (!a.$isEmpty(b)) {
                if (!Y(b)) throw qb("numfmt", b);
                b = b.toString();
            }
            return b;
        });
    }

    function Ta(a) {
        v(a) && !Y(a) && (a = parseFloat(a));
        return ga(a) ? void 0 : a;
    }

    function zc(a) {
        var b = a.toString(),
            d = b.indexOf(".");
        return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1;
    }

    function Zd(a, b, d) {
        a = Number(a);
        if ((a | 0) !== a || (b | 0) !== b || (d | 0) !== d) {
            var c = Math.max(zc(a), zc(b), zc(d)),
                c = Math.pow(10, c);
            a *= c;
            b *= c;
            d *= c;
        }
        return 0 === (a - b) % d;
    }

    function $d(a, b, d, c, f) {
        if (v(c)) {
            a = a(c);
            if (!a.constant) throw qb("constexpr", d, c);
            return a(b);
        }
        return f;
    }

    function Ac(a, b) {
        function d(a, b) {
            if (!a || !a.length) return [];
            if (!b || !b.length) return a;
            var c = [],
                d = 0;
            a: for (; d < a.length; d++) {
                for (var e = a[d], f = 0; f < b.length; f++) {
                    if (e === b[f]) continue a;
                }c.push(e);
            }
            return c;
        }

        function c(a) {
            var b = a;
            C(a) ? b = a.map(c).join(" ") : F(a) && (b = Object.keys(a).filter(function (b) {
                return a[b];
            }).join(" "));
            return b;
        }

        function f(a) {
            var b = a;
            if (C(a)) b = a.map(f);else if (F(a)) {
                var c = !1,
                    b = Object.keys(a).filter(function (b) {
                    b = a[b];
                    !c && x(b) && (c = !0);
                    return b;
                });
                c && b.push(void 0);
            }
            return b;
        }

        a = "ngClass" + a;
        var e;
        return ["$parse", function (g) {
            return {
                restrict: "AC", link: function link(h, k, l) {
                    function m(a, b) {
                        var c = [];
                        q(a, function (a) {
                            if (0 < b || H[a]) H[a] = (H[a] || 0) + b, H[a] === +(0 < b) && c.push(a);
                        });
                        return c.join(" ");
                    }

                    function n(a) {
                        if (a === b) {
                            var c = t,
                                c = m(c && c.split(" "), 1);
                            l.$addClass(c);
                        } else c = t, c = m(c && c.split(" "), -1), l.$removeClass(c);
                        w = a;
                    }

                    function p(a) {
                        a = c(a);
                        a !== t && r(a);
                    }

                    function r(a) {
                        if (w === b) {
                            var c = t && t.split(" "),
                                e = a && a.split(" "),
                                f = d(c, e),
                                c = d(e, c),
                                f = m(f, -1),
                                c = m(c, 1);
                            l.$addClass(c);
                            l.$removeClass(f);
                        }
                        t = a;
                    }

                    var s = l[a].trim(),
                        v = ":" === s.charAt(0) && ":" === s.charAt(1),
                        s = g(s, v ? f : c),
                        u = v ? p : r,
                        H = k.data("$classCounts"),
                        w = !0,
                        t;
                    H || (H = W(), k.data("$classCounts", H));
                    "ngClass" !== a && (e || (e = g("$index", function (a) {
                        return a & 1;
                    })), h.$watch(e, n));
                    h.$watch(s, u, v);
                }
            };
        }];
    }

    function Ob(a, b, d, c, f, e, g, h, k) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = void 0;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = k(d.name || "", !1)(a);
        this.$$parentForm = Mb;
        this.$options = Pb;
        this.$$parsedNgModel = f(d.ngModel);
        this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
        this.$$ngModelGet = this.$$parsedNgModel;
        this.$$ngModelSet = this.$$parsedNgModelAssign;
        this.$$pendingDebounce = null;
        this.$$parserValid = void 0;
        this.$$currentValidationRunId = 0;
        this.$$scope = a;
        this.$$attr = d;
        this.$$element = c;
        this.$$animate = e;
        this.$$timeout = g;
        this.$$parse = f;
        this.$$q = h;
        this.$$exceptionHandler = b;
        Td(this);
        Mg(this);
    }

    function Mg(a) {
        a.$$scope.$watch(function () {
            var b = a.$$ngModelGet(a.$$scope);
            if (b !== a.$modelValue && (a.$modelValue === a.$modelValue || b === b)) {
                a.$modelValue = a.$$rawModelValue = b;
                a.$$parserValid = void 0;
                for (var d = a.$formatters, c = d.length, f = b; c--;) {
                    f = d[c](f);
                }a.$viewValue !== f && (a.$$updateEmptyClasses(f), a.$viewValue = a.$$lastCommittedViewValue = f, a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, w));
            }
            return b;
        });
    }

    function Bc(a) {
        this.$$options = a;
    }

    function ae(a, b) {
        q(b, function (b, c) {
            v(a[c]) || (a[c] = b);
        });
    }

    var Ng = /^\/(.+)\/([a-z]*)$/,
        va = Object.prototype.hasOwnProperty,
        P = function P(a) {
        return E(a) ? a.toLowerCase() : a;
    },
        vb = function vb(a) {
        return E(a) ? a.toUpperCase() : a;
    },
        La,
        D,
        oa,
        wa = [].slice,
        ng = [].splice,
        Og = [].push,
        na = Object.prototype.toString,
        Gc = Object.getPrototypeOf,
        Ga = M("ng"),
        $ = z.angular || (z.angular = {}),
        Zb,
        rb = 0;
    La = z.document.documentMode;
    var ga = Number.isNaN || function (a) {
        return a !== a;
    };
    w.$inject = [];
    Ya.$inject = [];
    var C = Array.isArray,
        le = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
        S = function S(a) {
        return E(a) ? a.trim() : a;
    },
        Gd = function Gd(a) {
        return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    },
        za = function za() {
        if (!v(za.rules)) {
            var a = z.document.querySelector("[ng-csp]") || z.document.querySelector("[data-ng-csp]");
            if (a) {
                var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                za.rules = {
                    noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                    noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                };
            } else {
                a = za;
                try {
                    new Function(""), b = !1;
                } catch (d) {
                    b = !0;
                }
                a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
            }
        }
        return za.rules;
    },
        sb = function sb() {
        if (v(sb.name_)) return sb.name_;
        var a,
            b,
            d = Ka.length,
            c,
            f;
        for (b = 0; b < d; ++b) {
            if (c = Ka[b], a = z.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
                f = a.getAttribute(c + "jq");
                break;
            }
        }return sb.name_ = f;
    },
        ne = /:/g,
        Ka = ["ng-", "data-ng-", "ng:", "x-ng-"],
        qe = function (a) {
        if (!a.currentScript) return !0;
        var b = a.currentScript.getAttribute("src"),
            d = a.createElement("a");
        d.href = b;
        if (a.location.origin === d.origin) return !0;
        switch (d.protocol) {
            case "http:":
            case "https:":
            case "ftp:":
            case "blob:":
            case "file:":
            case "data:":
                return !0;
            default:
                return !1;
        }
    }(z.document),
        te = /[A-Z]/g,
        Oc = !1,
        Ja = 3,
        ye = { full: "1.6.1", major: 1, minor: 6, dot: 1, codeName: "promise-rectification" };
    X.expando = "ng339";
    var ib = X.cache = {},
        $f = 1;
    X._data = function (a) {
        return this.cache[a[this.expando]] || {};
    };
    var Wf = /-([a-z])/g,
        Pg = /^-ms-/,
        Ab = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    },
        ac = M("jqLite"),
        Zf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        $b = /<|&#?\w+;/,
        Xf = /<([\w:-]+)/,
        Yf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ha = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ha.optgroup = ha.option;
    ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;
    ha.th = ha.td;
    var eg = z.Node.prototype.contains || function (a) {
        return !!(this.compareDocumentPosition(a) & 16);
    },
        Oa = X.prototype = {
        ready: $c, toString: function toString() {
            var a = [];
            q(this, function (b) {
                a.push("" + b);
            });
            return "[" + a.join(", ") + "]";
        }, eq: function eq(a) {
            return 0 <= a ? D(this[a]) : D(this[this.length + a]);
        }, length: 0, push: Og, sort: [].sort, splice: [].splice
    },
        Gb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
        Gb[P(a)] = a;
    });
    var ed = {};
    q("input select option textarea button form details".split(" "), function (a) {
        ed[a] = !0;
    });
    var ld = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
    };
    q({
        data: dc, removeData: hb, hasData: function hasData(a) {
            for (var b in ib[a.ng339]) {
                return !0;
            }return !1;
        }, cleanData: function cleanData(a) {
            for (var b = 0, d = a.length; b < d; b++) {
                hb(a[b]);
            }
        }
    }, function (a, b) {
        X[b] = a;
    });
    q({
        data: dc, inheritedData: Eb, scope: function scope(a) {
            return D.data(a, "$scope") || Eb(a.parentNode || a, ["$isolateScope", "$scope"]);
        }, isolateScope: function isolateScope(a) {
            return D.data(a, "$isolateScope") || D.data(a, "$isolateScopeNoTemplate");
        }, controller: bd, injector: function injector(a) {
            return Eb(a, "$injector");
        }, removeAttr: function removeAttr(a, b) {
            a.removeAttribute(b);
        }, hasClass: Bb, css: function css(a, b, d) {
            b = xb(b.replace(Pg, "ms-"));
            if (v(d)) a.style[b] = d;else return a.style[b];
        }, attr: function attr(a, b, d) {
            var c = a.nodeType;
            if (c !== Ja && 2 !== c && 8 !== c && a.getAttribute) {
                var c = P(b),
                    f = Gb[c];
                if (v(d)) null === d || !1 === d && f ? a.removeAttribute(b) : a.setAttribute(b, f ? c : d);else return a = a.getAttribute(b), f && null !== a && (a = c), null === a ? void 0 : a;
            }
        }, prop: function prop(a, b, d) {
            if (v(d)) a[b] = d;else return a[b];
        }, text: function () {
            function a(a, d) {
                if (x(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Ja ? a.textContent : "";
                }
                a.textContent = d;
            }

            a.$dv = "";
            return a;
        }(), val: function val(a, b) {
            if (x(b)) {
                if (a.multiple && "select" === xa(a)) {
                    var d = [];
                    q(a.options, function (a) {
                        a.selected && d.push(a.value || a.text);
                    });
                    return d;
                }
                return a.value;
            }
            a.value = b;
        }, html: function html(a, b) {
            if (x(b)) return a.innerHTML;
            yb(a, !0);
            a.innerHTML = b;
        }, empty: cd
    }, function (a, b) {
        X.prototype[b] = function (b, c) {
            var f,
                e,
                g = this.length;
            if (a !== cd && x(2 === a.length && a !== Bb && a !== bd ? b : c)) {
                if (F(b)) {
                    for (f = 0; f < g; f++) {
                        if (a === dc) a(this[f], b);else for (e in b) {
                            a(this[f], e, b[e]);
                        }
                    }return this;
                }
                f = a.$dv;
                g = x(f) ? Math.min(g, 1) : g;
                for (e = 0; e < g; e++) {
                    var h = a(this[e], b, c);
                    f = f ? f + h : h;
                }
                return f;
            }
            for (f = 0; f < g; f++) {
                a(this[f], b, c);
            }return this;
        };
    });
    q({
        removeData: hb, on: function on(a, b, d, c) {
            if (v(c)) throw ac("onargs");
            if (Yc(a)) {
                c = zb(a, !0);
                var f = c.events,
                    e = c.handle;
                e || (e = c.handle = bg(a, f));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, h = function h(b, c, g) {
                    var h = f[b];
                    h || (h = f[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, e));
                    h.push(d);
                }; g--;) {
                    b = c[g], Ab[b] ? (h(Ab[b], dg), h(b, void 0, !0)) : h(b);
                }
            }
        }, off: ad, one: function one(a, b, d) {
            a = D(a);
            a.on(b, function f() {
                a.off(b, d);
                a.off(b, f);
            });
            a.on(b, d);
        }, replaceWith: function replaceWith(a, b) {
            var d,
                c = a.parentNode;
            yb(a);
            q(new X(b), function (b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b;
            });
        }, children: function children(a) {
            var b = [];
            q(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a);
            });
            return b;
        }, contents: function contents(a) {
            return a.contentDocument || a.childNodes || [];
        }, append: function append(a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new X(b);
                for (var d = 0, c = b.length; d < c; d++) {
                    a.appendChild(b[d]);
                }
            }
        }, prepend: function prepend(a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                q(new X(b), function (b) {
                    a.insertBefore(b, d);
                });
            }
        }, wrap: function wrap(a, b) {
            var d = D(b).eq(0).clone()[0],
                c = a.parentNode;
            c && c.replaceChild(d, a);
            d.appendChild(a);
        }, remove: Fb, detach: function detach(a) {
            Fb(a, !0);
        }, after: function after(a, b) {
            var d = a,
                c = a.parentNode;
            if (c) {
                b = new X(b);
                for (var f = 0, e = b.length; f < e; f++) {
                    var g = b[f];
                    c.insertBefore(g, d.nextSibling);
                    d = g;
                }
            }
        }, addClass: Db, removeClass: Cb, toggleClass: function toggleClass(a, b, d) {
            b && q(b.split(" "), function (b) {
                var f = d;
                x(f) && (f = !Bb(a, b));
                (f ? Db : Cb)(a, b);
            });
        }, parent: function parent(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        }, next: function next(a) {
            return a.nextElementSibling;
        }, find: function find(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        }, clone: cc, triggerHandler: function triggerHandler(a, b, d) {
            var c,
                f,
                e = b.type || b,
                g = zb(a);
            if (g = (g = g && g.events) && g[e]) c = {
                preventDefault: function preventDefault() {
                    this.defaultPrevented = !0;
                }, isDefaultPrevented: function isDefaultPrevented() {
                    return !0 === this.defaultPrevented;
                }, stopImmediatePropagation: function stopImmediatePropagation() {
                    this.immediatePropagationStopped = !0;
                }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
                    return !0 === this.immediatePropagationStopped;
                }, stopPropagation: w, type: e, target: a
            }, b.type && (c = R(c, b)), b = ra(g), f = d ? [c].concat(d) : [c], q(b, function (b) {
                c.isImmediatePropagationStopped() || b.apply(a, f);
            });
        }
    }, function (a, b) {
        X.prototype[b] = function (b, c, f) {
            for (var e, g = 0, h = this.length; g < h; g++) {
                x(e) ? (e = a(this[g], b, c, f), v(e) && (e = D(e))) : bc(e, a(this[g], b, c, f));
            }return v(e) ? e : this;
        };
    });
    X.prototype.bind = X.prototype.on;
    X.prototype.unbind = X.prototype.off;
    Qa.prototype = {
        put: function put(a, b) {
            this[la(a, this.nextUid)] = b;
        }, get: function get(a) {
            return this[la(a, this.nextUid)];
        }, remove: function remove(a) {
            var b = this[a = la(a, this.nextUid)];
            delete this[a];
            return b;
        }
    };
    var Uf = [function () {
        this.$get = [function () {
            return Qa;
        }];
    }],
        gg = /^([^(]+?)=>/,
        hg = /^[^(]*\(\s*([^)]*)\)/m,
        Qg = /,/,
        Rg = /^\s*(_?)(\S+?)\1\s*$/,
        fg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        da = M("$injector");
    eb.$$annotate = function (a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b) throw E(d) && d || (d = a.name || ig(a)), da("strictdi", d);
                    b = fd(a);
                    q(b[1].split(Qg), function (a) {
                        a.replace(Rg, function (a, b, d) {
                            c.push(d);
                        });
                    });
                }
                a.$inject = c;
            }
        } else C(a) ? (b = a.length - 1, tb(a[b], "fn"), c = a.slice(0, b)) : tb(a, "fn", !0);
        return c;
    };
    var be = M("$animate"),
        lf = function lf() {
        this.$get = w;
    },
        mf = function mf() {
        var a = new Qa(),
            b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
            function f(a, b, c) {
                var d = !1;
                b && (b = E(b) ? b.split(" ") : C(b) ? b : [], q(b, function (b) {
                    b && (d = !0, a[b] = c);
                }));
                return d;
            }

            function e() {
                q(b, function (b) {
                    var c = a.get(b);
                    if (c) {
                        var d = jg(b.attr("class")),
                            e = "",
                            f = "";
                        q(c, function (a, b) {
                            a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
                        });
                        q(b, function (a) {
                            e && Db(a, e);
                            f && Cb(a, f);
                        });
                        a.remove(b);
                    }
                });
                b.length = 0;
            }

            return {
                enabled: w, on: w, off: w, pin: w, push: function push(g, h, k, l) {
                    l && l();
                    k = k || {};
                    k.from && g.css(k.from);
                    k.to && g.css(k.to);
                    if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = f(k, h, !0), l = f(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(e);
                    g = new d();
                    g.complete();
                    return g;
                }
            };
        }];
    },
        jf = ["$provide", function (a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null);
        this.register = function (d, c) {
            if (d && "." !== d.charAt(0)) throw be("notcsel", d);
            var f = d + "-animation";
            b.$$registeredAnimations[d.substr(1)] = f;
            a.factory(f, c);
        };
        this.classNameFilter = function (a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw be("nongcls", "ng-animate");
            return this.$$classNameFilter;
        };
        this.$get = ["$$animateQueue", function (a) {
            function b(a, c, d) {
                if (d) {
                    var h;
                    a: {
                        for (h = 0; h < d.length; h++) {
                            var k = d[h];
                            if (1 === k.nodeType) {
                                h = k;
                                break a;
                            }
                        }
                        h = void 0;
                    }
                    !h || h.parentNode || h.previousElementSibling || (d = null);
                }
                d ? d.after(a) : c.prepend(a);
            }

            return {
                on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
                    a.end && a.end();
                },
                enter: function enter(f, e, g, h) {
                    e = e && D(e);
                    g = g && D(g);
                    e = e || g.parent();
                    b(f, e, g);
                    return a.push(f, "enter", Aa(h));
                }, move: function move(f, e, g, h) {
                    e = e && D(e);
                    g = g && D(g);
                    e = e || g.parent();
                    b(f, e, g);
                    return a.push(f, "move", Aa(h));
                }, leave: function leave(b, c) {
                    return a.push(b, "leave", Aa(c), function () {
                        b.remove();
                    });
                }, addClass: function addClass(b, c, g) {
                    g = Aa(g);
                    g.addClass = jb(g.addclass, c);
                    return a.push(b, "addClass", g);
                }, removeClass: function removeClass(b, c, g) {
                    g = Aa(g);
                    g.removeClass = jb(g.removeClass, c);
                    return a.push(b, "removeClass", g);
                }, setClass: function setClass(b, c, g, h) {
                    h = Aa(h);
                    h.addClass = jb(h.addClass, c);
                    h.removeClass = jb(h.removeClass, g);
                    return a.push(b, "setClass", h);
                }, animate: function animate(b, c, g, h, k) {
                    k = Aa(k);
                    k.from = k.from ? R(k.from, c) : c;
                    k.to = k.to ? R(k.to, g) : g;
                    k.tempClasses = jb(k.tempClasses, h || "ng-inline-animate");
                    return a.push(b, "animate", k);
                }
            };
        }];
    }],
        of = function of() {
        this.$get = ["$$rAF", function (a) {
            function b(b) {
                d.push(b);
                1 < d.length || a(function () {
                    for (var a = 0; a < d.length; a++) {
                        d[a]();
                    }d = [];
                });
            }

            var d = [];
            return function () {
                var a = !1;
                b(function () {
                    a = !0;
                });
                return function (d) {
                    a ? d() : b(d);
                };
            };
        }];
    },
        nf = function nf() {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (a, b, d, c, f) {
            function e(a) {
                this.setHost(a);
                var b = d();
                this._doneCallbacks = [];
                this._tick = function (a) {
                    c() ? f(a, 0, !1) : b(a);
                };
                this._state = 0;
            }

            e.chain = function (a, b) {
                function c() {
                    if (d === a.length) b(!0);else a[d](function (a) {
                        !1 === a ? b(!1) : (d++, c());
                    });
                }

                var d = 0;
                c();
            };
            e.all = function (a, b) {
                function c(f) {
                    e = e && f;
                    ++d === a.length && b(e);
                }

                var d = 0,
                    e = !0;
                q(a, function (a) {
                    a.done(c);
                });
            };
            e.prototype = {
                setHost: function setHost(a) {
                    this.host = a || {};
                }, done: function done(a) {
                    2 === this._state ? a() : this._doneCallbacks.push(a);
                }, progress: w, getPromise: function getPromise() {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function (a, c) {
                            b.done(function (b) {
                                !1 === b ? c() : a();
                            });
                        });
                    }
                    return this.promise;
                }, then: function then(a, b) {
                    return this.getPromise().then(a, b);
                }, "catch": function _catch(a) {
                    return this.getPromise()["catch"](a);
                }, "finally": function _finally(a) {
                    return this.getPromise()["finally"](a);
                }, pause: function pause() {
                    this.host.pause && this.host.pause();
                }, resume: function resume() {
                    this.host.resume && this.host.resume();
                }, end: function end() {
                    this.host.end && this.host.end();
                    this._resolve(!0);
                }, cancel: function cancel() {
                    this.host.cancel && this.host.cancel();
                    this._resolve(!1);
                }, complete: function complete(a) {
                    var b = this;
                    0 === b._state && (b._state = 1, b._tick(function () {
                        b._resolve(a);
                    }));
                }, _resolve: function _resolve(a) {
                    2 !== this._state && (q(this._doneCallbacks, function (b) {
                        b(a);
                    }), this._doneCallbacks.length = 0, this._state = 2);
                }
            };
            return e;
        }];
    },
        kf = function kf() {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
            return function (b, f) {
                function e() {
                    a(function () {
                        g.addClass && (b.addClass(g.addClass), g.addClass = null);
                        g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                        g.to && (b.css(g.to), g.to = null);
                        h || k.complete();
                        h = !0;
                    });
                    return k;
                }

                var g = f || {};
                g.$$prepared || (g = Fa(g));
                g.cleanupStyles && (g.from = g.to = null);
                g.from && (b.css(g.from), g.from = null);
                var h,
                    k = new d();
                return { start: e, end: e };
            };
        }];
    },
        ea = M("$compile"),
        hc = new function () {}();
    Qc.$inject = ["$provide", "$$sanitizeUriProvider"];
    Ib.prototype.isFirstChange = function () {
        return this.previousValue === hc;
    };
    var gd = /^((?:x|data)[:\-_])/i,
        mg = /[:\-_]+(.)/g,
        nd = M("$controller"),
        md = /^(\S+)(\s+as\s+([\w$]+))?$/,
        vf = function vf() {
        this.$get = ["$document", function (a) {
            return function (b) {
                b ? !b.nodeType && b instanceof D && (b = b[0]) : b = a[0].body;
                return b.offsetWidth + 1;
            };
        }];
    },
        od = "application/json",
        kc = { "Content-Type": od + ";charset=utf-8" },
        pg = /^\[|^\{(?!\{)/,
        qg = {
        "[": /]$/,
        "{": /}$/
    },
        og = /^\)]\}',?\n/,
        td = M("$http"),
        Ea = $.$interpolateMinErr = M("$interpolate");
    Ea.throwNoconcat = function (a) {
        throw Ea("noconcat", a);
    };
    Ea.interr = function (a, b) {
        return Ea("interr", a, b.toString());
    };
    var Df = function Df() {
        this.$get = ["$window", function (a) {
            function b(a) {
                var b = function b(a) {
                    b.data = a;
                    b.called = !0;
                };
                b.id = a;
                return b;
            }

            var d = a.angular.callbacks,
                c = {};
            return {
                createCallback: function createCallback(a) {
                    a = "_" + (d.$$counter++).toString(36);
                    var e = "angular.callbacks." + a,
                        g = b(a);
                    c[e] = d[a] = g;
                    return e;
                }, wasCalled: function wasCalled(a) {
                    return c[a].called;
                }, getResponse: function getResponse(a) {
                    return c[a].data;
                }, removeCallback: function removeCallback(a) {
                    delete d[c[a].id];
                    delete c[a];
                }
            };
        }];
    },
        Sg = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
        sg = {
        http: 80,
        https: 443,
        ftp: 21
    },
        lb = M("$location"),
        tg = /^\s*[\\/]{2,}/,
        Tg = {
        $$absUrl: "",
        $$html5: !1, $$replace: !1, absUrl: Jb("$$absUrl"), url: function url(a) {
            if (x(a)) return this.$$url;
            var b = Sg.exec(a);
            (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
            (b[2] || b[1] || "" === a) && this.search(b[3] || "");
            this.hash(b[5] || "");
            return this;
        }, protocol: Jb("$$protocol"), host: Jb("$$host"), port: Jb("$$port"), path: xd("$$path", function (a) {
            a = null !== a ? a.toString() : "";
            return "/" === a.charAt(0) ? a : "/" + a;
        }), search: function search(a, b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (E(a) || Y(a)) a = a.toString(), this.$$search = Lc(a);else if (F(a)) a = Fa(a, {}), q(a, function (b, c) {
                        null == b && delete a[c];
                    }), this.$$search = a;else throw lb("isrcharg");
                    break;
                default:
                    x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            this.$$compose();
            return this;
        }, hash: xd("$$hash", function (a) {
            return null !== a ? a.toString() : "";
        }), replace: function replace() {
            this.$$replace = !0;
            return this;
        }
    };
    q([wd, oc, nc], function (a) {
        a.prototype = Object.create(Tg);
        a.prototype.state = function (b) {
            if (!arguments.length) return this.$$state;
            if (a !== nc || !this.$$html5) throw lb("nostate");
            this.$$state = x(b) ? null : b;
            return this;
        };
    });
    var Ua = M("$parse"),
        wg = {}.constructor.prototype.valueOf,
        Qb = W();
    q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Qb[a] = !0;
    });
    var Ug = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
        qc = function qc(a) {
        this.options = a;
    };
    qc.prototype = {
        constructor: qc, lex: function lex(a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;) {
                if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: a
                }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
                    var b = a + this.peek(),
                        d = b + this.peek(2),
                        c = Qb[b],
                        f = Qb[d];
                    Qb[a] || c || f ? (a = f ? d : c ? b : a, this.tokens.push({
                        index: this.index,
                        text: a,
                        operator: !0
                    }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
            }return this.tokens;
        }, is: function is(a, b) {
            return -1 !== b.indexOf(a);
        }, peek: function peek(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        }, isNumber: function isNumber(a) {
            return "0" <= a && "9" >= a && "string" === typeof a;
        }, isWhitespace: function isWhitespace(a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
        }, isIdentifierStart: function isIdentifierStart(a) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
        }, isValidIdentifierStart: function isValidIdentifierStart(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
        }, isIdentifierContinue: function isIdentifierContinue(a) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
        }, isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
            return this.isValidIdentifierStart(a, b) || this.isNumber(a);
        }, codePointAt: function codePointAt(a) {
            return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
        }, peekMultichar: function peekMultichar() {
            var a = this.text.charAt(this.index),
                b = this.peek();
            if (!b) return a;
            var d = a.charCodeAt(0),
                c = b.charCodeAt(0);
            return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
        }, isExpOperator: function isExpOperator(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        }, throwError: function throwError(a, b, d) {
            d = d || this.index;
            b = v(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
            throw Ua("lexerr", a, b, this.text);
        }, readNumber: function readNumber() {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = P(this.text.charAt(this.index));
                if ("." === d || this.isNumber(d)) a += d;else {
                    var c = this.peek();
                    if ("e" === d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
                }
                this.index++;
            }
            this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
        }, readIdent: function readIdent() {
            var a = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var b = this.peekMultichar();
                if (!this.isIdentifierContinue(b)) break;
                this.index += b.length;
            }
            this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
        }, readString: function readString(a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, f = !1; this.index < this.text.length;) {
                var e = this.text.charAt(this.index),
                    c = c + e;
                if (f) "u" === e ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Ug[e] || e, f = !1;else if ("\\" === e) f = !0;else {
                    if (e === a) {
                        this.index++;
                        this.tokens.push({ index: b, text: c, constant: !0, value: d });
                        return;
                    }
                    d += e;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var s = function s(a, b) {
        this.lexer = a;
        this.options = b;
    };
    s.Program = "Program";
    s.ExpressionStatement = "ExpressionStatement";
    s.AssignmentExpression = "AssignmentExpression";
    s.ConditionalExpression = "ConditionalExpression";
    s.LogicalExpression = "LogicalExpression";
    s.BinaryExpression = "BinaryExpression";
    s.UnaryExpression = "UnaryExpression";
    s.CallExpression = "CallExpression";
    s.MemberExpression = "MemberExpression";
    s.Identifier = "Identifier";
    s.Literal = "Literal";
    s.ArrayExpression = "ArrayExpression";
    s.Property = "Property";
    s.ObjectExpression = "ObjectExpression";
    s.ThisExpression = "ThisExpression";
    s.LocalsExpression = "LocalsExpression";
    s.NGValueParameter = "NGValueParameter";
    s.prototype = {
        ast: function ast(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a;
        }, program: function program() {
            for (var a = [];;) {
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                    type: s.Program,
                    body: a
                };
            }
        }, expressionStatement: function expressionStatement() {
            return {
                type: s.ExpressionStatement,
                expression: this.filterChain()
            };
        }, filterChain: function filterChain() {
            for (var a = this.expression(); this.expect("|");) {
                a = this.filter(a);
            }return a;
        }, expression: function expression() {
            return this.assignment();
        }, assignment: function assignment() {
            var a = this.ternary();
            if (this.expect("=")) {
                if (!Ad(a)) throw Ua("lval");
                a = { type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "=" };
            }
            return a;
        }, ternary: function ternary() {
            var a = this.logicalOR(),
                b,
                d;
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: s.ConditionalExpression,
                test: a, alternate: b, consequent: d
            }) : a;
        }, logicalOR: function logicalOR() {
            for (var a = this.logicalAND(); this.expect("||");) {
                a = {
                    type: s.LogicalExpression,
                    operator: "||",
                    left: a,
                    right: this.logicalAND()
                };
            }return a;
        }, logicalAND: function logicalAND() {
            for (var a = this.equality(); this.expect("&&");) {
                a = {
                    type: s.LogicalExpression,
                    operator: "&&",
                    left: a,
                    right: this.equality()
                };
            }return a;
        }, equality: function equality() {
            for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
                a = {
                    type: s.BinaryExpression,
                    operator: b.text,
                    left: a,
                    right: this.relational()
                };
            }return a;
        }, relational: function relational() {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
                a = {
                    type: s.BinaryExpression,
                    operator: b.text,
                    left: a,
                    right: this.additive()
                };
            }return a;
        }, additive: function additive() {
            for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
                a = {
                    type: s.BinaryExpression,
                    operator: b.text,
                    left: a,
                    right: this.multiplicative()
                };
            }return a;
        }, multiplicative: function multiplicative() {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
                a = {
                    type: s.BinaryExpression,
                    operator: b.text,
                    left: a,
                    right: this.unary()
                };
            }return a;
        },
        unary: function unary() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: s.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary();
        }, primary: function primary() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = Fa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                type: s.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");) {
                "(" === b.text ? (a = {
                    type: s.CallExpression,
                    callee: a,
                    arguments: this.parseArguments()
                }, this.consume(")")) : "[" === b.text ? (a = {
                    type: s.MemberExpression,
                    object: a,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === b.text ? a = {
                    type: s.MemberExpression,
                    object: a,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
            }return a;
        }, filter: function filter(a) {
            a = [a];
            for (var b = {
                type: s.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":");) {
                a.push(this.expression());
            }return b;
        }, parseArguments: function parseArguments() {
            var a = [];
            if (")" !== this.peekToken().text) {
                do {
                    a.push(this.filterChain());
                } while (this.expect(","));
            }
            return a;
        }, identifier: function identifier() {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier", a);
            return { type: s.Identifier, name: a.text };
        }, constant: function constant() {
            return { type: s.Literal, value: this.consume().value };
        },
        arrayDeclaration: function arrayDeclaration() {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression());
                } while (this.expect(","));
            }
            this.consume("]");
            return { type: s.ArrayExpression, elements: a };
        }, object: function object() {
            var a = [],
                b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    b = { type: s.Property, kind: "init" };
                    this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());
                    a.push(b);
                } while (this.expect(","));
            }
            this.consume("}");
            return { type: s.ObjectExpression, properties: a };
        }, throwError: function throwError(a, b) {
            throw Ua("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        }, consume: function consume(a) {
            if (0 === this.tokens.length) throw Ua("ueoe", this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return b;
        }, peekToken: function peekToken() {
            if (0 === this.tokens.length) throw Ua("ueoe", this.text);
            return this.tokens[0];
        }, peek: function peek(a, b, d, c) {
            return this.peekAhead(0, a, b, d, c);
        }, peekAhead: function peekAhead(a, b, d, c, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var e = a.text;
                if (e === b || e === d || e === c || e === f || !(b || d || c || f)) return a;
            }
            return !1;
        }, expect: function expect(a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
        }, selfReferential: {
            "this": { type: s.ThisExpression },
            $locals: { type: s.LocalsExpression }
        }
    };
    Dd.prototype = {
        compile: function compile(a) {
            var b = this;
            a = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                fn: { vars: [], body: [], own: {} },
                assign: { vars: [], body: [], own: {} },
                inputs: []
            };
            V(a, b.$filter);
            var d = "",
                c;
            this.stage = "assign";
            if (c = Bd(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            c = zd(a.body);
            b.stage = "inputs";
            q(c, function (a, c) {
                var d = "fn" + c;
                b.state[d] = { vars: [], body: [], own: {} };
                b.state.computing = d;
                var h = b.nextId();
                b.recurse(a, h);
                b.return_(h);
                b.state.inputs.push(d);
                a.watchId = c;
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(a);
            d = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;";
            d = new Function("$filter", "getStringValue", "ifDefined", "plus", d)(this.$filter, ug, vg, yd);
            this.state = this.stage = void 0;
            d.literal = Cd(a);
            d.constant = a.constant;
            return d;
        }, USE: "use", STRICT: "strict", watchFns: function watchFns() {
            var a = [],
                b = this.state.inputs,
                d = this;
            q(b, function (b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"));
            });
            b.length && a.push("fn.inputs=[" + b.join(",") + "];");
            return a.join("");
        }, generateFunction: function generateFunction(a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
        }, filterPrefix: function filterPrefix() {
            var a = [],
                b = this;
            q(this.state.filters, function (d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")");
            });
            return a.length ? "var " + a.join(",") + ";" : "";
        }, varsPrefix: function varsPrefix(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
        }, body: function body(a) {
            return this.state[a].body.join("");
        }, recurse: function recurse(a, b, d, c, f, e) {
            var g,
                h,
                k = this,
                l,
                m,
                n;
            c = c || w;
            if (!e && v(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, f, !0));else switch (a.type) {
                case s.Program:
                    q(a.body, function (b, c) {
                        k.recurse(b.expression, void 0, void 0, function (a) {
                            h = a;
                        });
                        c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
                    });
                    break;
                case s.Literal:
                    m = this.escape(a.value);
                    this.assign(b, m);
                    c(b || m);
                    break;
                case s.UnaryExpression:
                    this.recurse(a.argument, void 0, void 0, function (a) {
                        h = a;
                    });
                    m = a.operator + "(" + this.ifDefined(h, 0) + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.BinaryExpression:
                    this.recurse(a.left, void 0, void 0, function (a) {
                        g = a;
                    });
                    this.recurse(a.right, void 0, void 0, function (a) {
                        h = a;
                    });
                    m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.LogicalExpression:
                    b = b || this.nextId();
                    k.recurse(a.left, b);
                    k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                    c(b);
                    break;
                case s.ConditionalExpression:
                    b = b || this.nextId();
                    k.recurse(a.test, b);
                    k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                    c(b);
                    break;
                case s.Identifier:
                    b = b || this.nextId();
                    d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
                    k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                        k.if_("inputs" === k.stage || "s", function () {
                            f && 1 !== f && k.if_(k.isNull(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                            k.assign(b, k.nonComputedMember("s", a.name));
                        });
                    }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
                    c(b);
                    break;
                case s.MemberExpression:
                    g = d && (d.context = this.nextId()) || this.nextId();
                    b = b || this.nextId();
                    k.recurse(a.object, g, void 0, function () {
                        k.if_(k.notNull(g), function () {
                            a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), f && 1 !== f && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.computedMember(g, h), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (f && 1 !== f && k.if_(k.isNull(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}")), m = k.nonComputedMember(g, a.property.name), k.assign(b, m), d && (d.computed = !1, d.name = a.property.name));
                        }, function () {
                            k.assign(b, "undefined");
                        });
                        c(b);
                    }, !!f);
                    break;
                case s.CallExpression:
                    b = b || this.nextId();
                    a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
                        var b = k.nextId();
                        k.recurse(a, b);
                        l.push(b);
                    }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
                        k.if_(k.notNull(h), function () {
                            q(a.arguments, function (b) {
                                k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                                    l.push(a);
                                });
                            });
                            m = g.name ? k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : h + "(" + l.join(",") + ")";
                            k.assign(b, m);
                        }, function () {
                            k.assign(b, "undefined");
                        });
                        c(b);
                    }));
                    break;
                case s.AssignmentExpression:
                    h = this.nextId();
                    g = {};
                    this.recurse(a.left, void 0, g, function () {
                        k.if_(k.notNull(g.context), function () {
                            k.recurse(a.right, h);
                            m = k.member(g.context, g.name, g.computed) + a.operator + h;
                            k.assign(b, m);
                            c(b || m);
                        });
                    }, 1);
                    break;
                case s.ArrayExpression:
                    l = [];
                    q(a.elements, function (b) {
                        k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                            l.push(a);
                        });
                    });
                    m = "[" + l.join(",") + "]";
                    this.assign(b, m);
                    c(b || m);
                    break;
                case s.ObjectExpression:
                    l = [];
                    n = !1;
                    q(a.properties, function (a) {
                        a.computed && (n = !0);
                    });
                    n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
                        a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;
                        h = k.nextId();
                        k.recurse(a.value, h);
                        k.assign(k.member(b, g, a.computed), h);
                    })) : (q(a.properties, function (b) {
                        k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                            l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
                        });
                    }), m = "{" + l.join(",") + "}", this.assign(b, m));
                    c(b || m);
                    break;
                case s.ThisExpression:
                    this.assign(b, "s");
                    c(b || "s");
                    break;
                case s.LocalsExpression:
                    this.assign(b, "l");
                    c(b || "l");
                    break;
                case s.NGValueParameter:
                    this.assign(b, "v"), c(b || "v");
            }
        }, getHasOwnProperty: function getHasOwnProperty(a, b) {
            var d = a + "." + b,
                c = this.current().own;
            c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
            return c[d];
        }, assign: function assign(a, b) {
            if (a) return this.current().body.push(a, "=", b, ";"), a;
        }, filter: function filter(a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
            return this.state.filters[a];
        }, ifDefined: function ifDefined(a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")";
        }, plus: function plus(a, b) {
            return "plus(" + a + "," + b + ")";
        }, return_: function return_(a) {
            this.current().body.push("return ", a, ";");
        }, if_: function if_(a, b, d) {
            if (!0 === a) b();else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"), d(), c.push("}"));
            }
        }, not: function not(a) {
            return "!(" + a + ")";
        }, isNull: function isNull(a) {
            return a + "==null";
        }, notNull: function notNull(a) {
            return a + "!=null";
        }, nonComputedMember: function nonComputedMember(a, b) {
            var d = /[^$_a-zA-Z0-9]/g;
            return (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
            );
        }, computedMember: function computedMember(a, b) {
            return a + "[" + b + "]";
        }, member: function member(a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
        }, getStringValue: function getStringValue(a) {
            this.assign(a, "getStringValue(" + a + ")");
        }, lazyRecurse: function lazyRecurse(a, b, d, c, f, e) {
            var g = this;
            return function () {
                g.recurse(a, b, d, c, f, e);
            };
        }, lazyAssign: function lazyAssign(a, b) {
            var d = this;
            return function () {
                d.assign(a, b);
            };
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }, escape: function escape(a) {
            if (E(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (Y(a)) return a.toString();
            if (!0 === a) return "true";
            if (!1 === a) return "false";
            if (null === a) return "null";
            if ("undefined" === typeof a) return "undefined";
            throw Ua("esc");
        }, nextId: function nextId(a, b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d;
        }, current: function current() {
            return this.state[this.state.computing];
        }
    };
    Ed.prototype = {
        compile: function compile(a) {
            var b = this;
            a = this.astBuilder.ast(a);
            V(a, b.$filter);
            var d, c;
            if (d = Bd(a)) c = this.recurse(d);
            d = zd(a.body);
            var f;
            d && (f = [], q(d, function (a, c) {
                var d = b.recurse(a);
                a.input = d;
                f.push(d);
                a.watchId = c;
            }));
            var e = [];
            q(a.body, function (a) {
                e.push(b.recurse(a.expression));
            });
            d = 0 === a.body.length ? w : 1 === a.body.length ? e[0] : function (a, b) {
                var c;
                q(e, function (d) {
                    c = d(a, b);
                });
                return c;
            };
            c && (d.assign = function (a, b, d) {
                return c(a, d, b);
            });
            f && (d.inputs = f);
            d.literal = Cd(a);
            d.constant = a.constant;
            return d;
        }, recurse: function recurse(a, b, d) {
            var c,
                f,
                e = this,
                g;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case s.Literal:
                    return this.value(a.value, b);
                case s.UnaryExpression:
                    return f = this.recurse(a.argument), this["unary" + a.operator](f, b);
                case s.BinaryExpression:
                    return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);
                case s.LogicalExpression:
                    return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);
                case s.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case s.Identifier:
                    return e.identifier(a.name, b, d);
                case s.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(c, f, b, d) : this.nonComputedMember(c, f, b, d);
                case s.CallExpression:
                    return g = [], q(a.arguments, function (a) {
                        g.push(e.recurse(a));
                    }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, e) {
                        for (var n = [], p = 0; p < g.length; ++p) {
                            n.push(g[p](a, c, d, e));
                        }a = f.apply(void 0, n, e);
                        return b ? { context: void 0, name: void 0, value: a } : a;
                    } : function (a, c, d, e) {
                        var n = f(a, c, d, e),
                            p;
                        if (null != n.value) {
                            p = [];
                            for (var r = 0; r < g.length; ++r) {
                                p.push(g[r](a, c, d, e));
                            }p = n.value.apply(n.context, p);
                        }
                        return b ? { value: p } : p;
                    };
                case s.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function (a, d, e, g) {
                        var n = c(a, d, e, g);
                        a = f(a, d, e, g);
                        n.context[n.name] = a;
                        return b ? { value: a } : a;
                    };
                case s.ArrayExpression:
                    return g = [], q(a.elements, function (a) {
                        g.push(e.recurse(a));
                    }), function (a, c, d, e) {
                        for (var f = [], p = 0; p < g.length; ++p) {
                            f.push(g[p](a, c, d, e));
                        }return b ? { value: f } : f;
                    };
                case s.ObjectExpression:
                    return g = [], q(a.properties, function (a) {
                        a.computed ? g.push({
                            key: e.recurse(a.key),
                            computed: !0,
                            value: e.recurse(a.value)
                        }) : g.push({
                            key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
                            computed: !1,
                            value: e.recurse(a.value)
                        });
                    }), function (a, c, d, e) {
                        for (var f = {}, p = 0; p < g.length; ++p) {
                            g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
                        }return b ? { value: f } : f;
                    };
                case s.ThisExpression:
                    return function (a) {
                        return b ? { value: a } : a;
                    };
                case s.LocalsExpression:
                    return function (a, c) {
                        return b ? { value: c } : c;
                    };
                case s.NGValueParameter:
                    return function (a, c, d) {
                        return b ? { value: d } : d;
                    };
            }
        }, "unary+": function unary(a, b) {
            return function (d, c, f, e) {
                d = a(d, c, f, e);
                d = v(d) ? +d : 0;
                return b ? { value: d } : d;
            };
        }, "unary-": function unary(a, b) {
            return function (d, c, f, e) {
                d = a(d, c, f, e);
                d = v(d) ? -d : -0;
                return b ? { value: d } : d;
            };
        }, "unary!": function unary(a, b) {
            return function (d, c, f, e) {
                d = !a(d, c, f, e);
                return b ? { value: d } : d;
            };
        }, "binary+": function binary(a, b, d) {
            return function (c, f, e, g) {
                var h = a(c, f, e, g);
                c = b(c, f, e, g);
                h = yd(h, c);
                return d ? { value: h } : h;
            };
        }, "binary-": function binary(a, b, d) {
            return function (c, f, e, g) {
                var h = a(c, f, e, g);
                c = b(c, f, e, g);
                h = (v(h) ? h : 0) - (v(c) ? c : 0);
                return d ? { value: h } : h;
            };
        }, "binary*": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) * b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary/": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) / b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary%": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) % b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary===": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) === b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary!==": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) !== b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary==": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) == b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary!=": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) != b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary<": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) < b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary>": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) > b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary<=": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) <= b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary>=": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) >= b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary&&": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) && b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "binary||": function binary(a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) || b(c, f, e, g);
                return d ? { value: c } : c;
            };
        }, "ternary?:": function ternary(a, b, d, c) {
            return function (f, e, g, h) {
                f = a(f, e, g, h) ? b(f, e, g, h) : d(f, e, g, h);
                return c ? { value: f } : f;
            };
        }, value: function value(a, b) {
            return function () {
                return b ? {
                    context: void 0,
                    name: void 0, value: a
                } : a;
            };
        }, identifier: function identifier(a, b, d) {
            return function (c, f, e, g) {
                c = f && a in f ? f : c;
                d && 1 !== d && c && null == c[a] && (c[a] = {});
                f = c ? c[a] : void 0;
                return b ? { context: c, name: a, value: f } : f;
            };
        }, computedMember: function computedMember(a, b, d, c) {
            return function (f, e, g, h) {
                var k = a(f, e, g, h),
                    l,
                    m;
                null != k && (l = b(f, e, g, h), l += "", c && 1 !== c && k && !k[l] && (k[l] = {}), m = k[l]);
                return d ? { context: k, name: l, value: m } : m;
            };
        }, nonComputedMember: function nonComputedMember(a, b, d, c) {
            return function (f, e, g, h) {
                f = a(f, e, g, h);
                c && 1 !== c && f && null == f[b] && (f[b] = {});
                e = null != f ? f[b] : void 0;
                return d ? { context: f, name: b, value: e } : e;
            };
        }, inputs: function inputs(a, b) {
            return function (d, c, f, e) {
                return e ? e[b] : a(d, c, f);
            };
        }
    };
    var rc = function rc(a, b, d) {
        this.lexer = a;
        this.$filter = b;
        this.options = d;
        this.ast = new s(a, d);
        this.astCompiler = d.csp ? new Ed(this.ast, b) : new Dd(this.ast, b);
    };
    rc.prototype = {
        constructor: rc, parse: function parse(a) {
            return this.astCompiler.compile(a);
        }
    };
    var ua = M("$sce"),
        pa = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    },
        sc = /_([a-z])/g,
        yg = M("$compile"),
        ca = z.document.createElement("a"),
        Id = Da(z.location.href);
    Jd.$inject = ["$document"];
    Xc.$inject = ["$provide"];
    var Qd = 22,
        Pd = ".",
        uc = "0";
    Kd.$inject = ["$locale"];
    Md.$inject = ["$locale"];
    var Jg = {
        yyyy: aa("FullYear", 4, 0, !1, !0),
        yy: aa("FullYear", 2, 0, !0, !0),
        y: aa("FullYear", 1, 0, !1, !0),
        MMMM: nb("Month"),
        MMM: nb("Month", !0),
        MM: aa("Month", 2, 1),
        M: aa("Month", 1, 1),
        LLLL: nb("Month", !1, !0),
        dd: aa("Date", 2),
        d: aa("Date", 1),
        HH: aa("Hours", 2),
        H: aa("Hours", 1),
        hh: aa("Hours", 2, -12),
        h: aa("Hours", 1, -12),
        mm: aa("Minutes", 2),
        m: aa("Minutes", 1),
        ss: aa("Seconds", 2),
        s: aa("Seconds", 1),
        sss: aa("Milliseconds", 3),
        EEEE: nb("Day"),
        EEE: nb("Day", !0),
        a: function a(_a, b) {
            return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
        },
        Z: function Z(a, b, d) {
            a = -1 * d;
            return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
        },
        ww: Sd(2),
        w: Sd(1),
        G: vc,
        GG: vc,
        GGG: vc,
        GGGG: function GGGG(a, b) {
            return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
        }
    },
        Ig = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Hg = /^-?\d+$/;
    Ld.$inject = ["$locale"];
    var Cg = ma(P),
        Dg = ma(vb);
    Nd.$inject = ["$parse"];
    var Ae = ma({
        restrict: "E", compile: function compile(a, b) {
            if (!b.href && !b.xlinkHref) return function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var f = "[object SVGAnimatedString]" === na.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(f) || a.preventDefault();
                    });
                }
            };
        }
    }),
        wb = {};
    q(Gb, function (a, b) {
        function d(a, d, f) {
            a.$watch(f[c], function (a) {
                f.$set(b, !!a);
            });
        }

        if ("multiple" !== a) {
            var c = Ca("ng-" + b),
                f = d;
            "checked" === a && (f = function f(a, b, _f) {
                _f.ngModel !== _f[c] && d(a, b, _f);
            });
            wb[c] = function () {
                return {
                    restrict: "A",
                    priority: 100, link: f
                };
            };
        }
    });
    q(ld, function (a, b) {
        wb[b] = function () {
            return {
                priority: 100, link: function link(a, c, f) {
                    if ("ngPattern" === b && "/" === f.ngPattern.charAt(0) && (c = f.ngPattern.match(Ng))) {
                        f.$set("ngPattern", new RegExp(c[1], c[2]));
                        return;
                    }
                    a.$watch(f[b], function (a) {
                        f.$set(b, a);
                    });
                }
            };
        };
    });
    q(["src", "srcset", "href"], function (a) {
        var b = Ca("ng-" + a);
        wb[b] = function () {
            return {
                priority: 99, link: function link(d, c, f) {
                    var e = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === na.call(c.prop("href")) && (g = "xlinkHref", f.$attr[g] = "xlink:href", e = null);
                    f.$observe(b, function (b) {
                        b ? (f.$set(g, b), La && e && c.prop(e, f[g])) : "href" === a && f.$set(g, null);
                    });
                }
            };
        };
    });
    var Mb = {
        $addControl: w, $$renameControl: function $$renameControl(a, b) {
            a.$name = b;
        }, $removeControl: w, $setValidity: w, $setDirty: w, $setPristine: w, $setSubmitted: w
    };
    Lb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    Lb.prototype = {
        $rollbackViewValue: function $rollbackViewValue() {
            q(this.$$controls, function (a) {
                a.$rollbackViewValue();
            });
        }, $commitViewValue: function $commitViewValue() {
            q(this.$$controls, function (a) {
                a.$commitViewValue();
            });
        }, $addControl: function $addControl(a) {
            Pa(a.$name, "input");
            this.$$controls.push(a);
            a.$name && (this[a.$name] = a);
            a.$$parentForm = this;
        }, $$renameControl: function $$renameControl(a, b) {
            var d = a.$name;
            this[d] === a && delete this[d];
            this[b] = a;
            a.$name = b;
        }, $removeControl: function $removeControl(a) {
            a.$name && this[a.$name] === a && delete this[a.$name];
            q(this.$pending, function (b, d) {
                this.$setValidity(d, null, a);
            }, this);
            q(this.$error, function (b, d) {
                this.$setValidity(d, null, a);
            }, this);
            q(this.$$success, function (b, d) {
                this.$setValidity(d, null, a);
            }, this);
            $a(this.$$controls, a);
            a.$$parentForm = Mb;
        }, $setDirty: function $setDirty() {
            this.$$animate.removeClass(this.$$element, Va);
            this.$$animate.addClass(this.$$element, Rb);
            this.$dirty = !0;
            this.$pristine = !1;
            this.$$parentForm.$setDirty();
        }, $setPristine: function $setPristine() {
            this.$$animate.setClass(this.$$element, Va, Rb + " ng-submitted");
            this.$dirty = !1;
            this.$pristine = !0;
            this.$submitted = !1;
            q(this.$$controls, function (a) {
                a.$setPristine();
            });
        }, $setUntouched: function $setUntouched() {
            q(this.$$controls, function (a) {
                a.$setUntouched();
            });
        }, $setSubmitted: function $setSubmitted() {
            this.$$animate.addClass(this.$$element, "ng-submitted");
            this.$submitted = !0;
            this.$$parentForm.$setSubmitted();
        }
    };
    Vd({
        clazz: Lb, set: function set(a, b, d) {
            var c = a[b];
            c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d];
        }, unset: function unset(a, b, d) {
            var c = a[b];
            c && ($a(c, d), 0 === c.length && delete a[b]);
        }
    });
    var ce = function ce(a) {
        return ["$timeout", "$parse", function (b, d) {
            function c(a) {
                return "" === a ? d('this[""]').assign : d(a).assign || w;
            }

            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                require: ["form", "^^?form"],
                controller: Lb,
                compile: function compile(d, e) {
                    d.addClass(Va).addClass(ob);
                    var g = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
                    return {
                        pre: function pre(a, d, e, f) {
                            var n = f[0];
                            if (!("action" in e)) {
                                var p = function p(b) {
                                    a.$apply(function () {
                                        n.$commitViewValue();
                                        n.$setSubmitted();
                                    });
                                    b.preventDefault();
                                };
                                d[0].addEventListener("submit", p);
                                d.on("$destroy", function () {
                                    b(function () {
                                        d[0].removeEventListener("submit", p);
                                    }, 0, !1);
                                });
                            }
                            (f[1] || n.$$parentForm).$addControl(n);
                            var r = g ? c(n.$name) : w;
                            g && (r(a, n), e.$observe(g, function (b) {
                                n.$name !== b && (r(a, void 0), n.$$parentForm.$$renameControl(n, b), r = c(n.$name), r(a, n));
                            }));
                            d.on("$destroy", function () {
                                n.$$parentForm.$removeControl(n);
                                r(a, void 0);
                                R(n, Mb);
                            });
                        }
                    };
                }
            };
        }];
    },
        Be = ce(),
        Ne = ce(!0),
        Kg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        Vg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Wg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Lg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        de = /^(\d{4,})-(\d{2})-(\d{2})$/,
        ee = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Cc = /^(\d{4,})-W(\d\d)$/,
        fe = /^(\d{4,})-(\d\d)$/,
        ge = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Xd = W();
    q(["date", "datetime-local", "month", "time", "week"], function (a) {
        Xd[a] = !0;
    });
    var he = {
        text: function text(a, b, d, c, f, e) {
            Sa(a, b, d, c, f, e);
            xc(c);
        },
        date: pb("date", de, Nb(de, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": pb("datetimelocal", ee, Nb(ee, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: pb("time", ge, Nb(ge, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: pb("week", Cc, function (a, b) {
            if (fa(a)) return a;
            if (E(a)) {
                Cc.lastIndex = 0;
                var d = Cc.exec(a);
                if (d) {
                    var c = +d[1],
                        f = +d[2],
                        e = d = 0,
                        g = 0,
                        h = 0,
                        k = Rd(c),
                        f = 7 * (f - 1);
                    b && (d = b.getHours(), e = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
                    return new Date(c, 0, k.getDate() + f, d, e, g, h);
                }
            }
            return NaN;
        }, "yyyy-Www"),
        month: pb("month", fe, Nb(fe, ["yyyy", "MM"]), "yyyy-MM"),
        number: function number(a, b, d, c, f, e) {
            yc(a, b, d, c);
            Yd(c);
            Sa(a, b, d, c, f, e);
            var g, h;
            if (v(d.min) || d.ngMin) c.$validators.min = function (a) {
                return c.$isEmpty(a) || x(g) || a >= g;
            }, d.$observe("min", function (a) {
                g = Ta(a);
                c.$validate();
            });
            if (v(d.max) || d.ngMax) c.$validators.max = function (a) {
                return c.$isEmpty(a) || x(h) || a <= h;
            }, d.$observe("max", function (a) {
                h = Ta(a);
                c.$validate();
            });
            if (v(d.step) || d.ngStep) {
                var k;
                c.$validators.step = function (a, b) {
                    return c.$isEmpty(b) || x(k) || Zd(b, g || 0, k);
                };
                d.$observe("step", function (a) {
                    k = Ta(a);
                    c.$validate();
                });
            }
        },
        url: function url(a, b, d, c, f, e) {
            Sa(a, b, d, c, f, e);
            xc(c);
            c.$$parserName = "url";
            c.$validators.url = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Vg.test(d);
            };
        },
        email: function email(a, b, d, c, f, e) {
            Sa(a, b, d, c, f, e);
            xc(c);
            c.$$parserName = "email";
            c.$validators.email = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Wg.test(d);
            };
        },
        radio: function radio(a, b, d, c) {
            var f = !d.ngTrim || "false" !== S(d.ngTrim);
            x(d.name) && b.attr("name", ++rb);
            b.on("click", function (a) {
                var g;
                b[0].checked && (g = d.value, f && (g = S(g)), c.$setViewValue(g, a && a.type));
            });
            c.$render = function () {
                var a = d.value;
                f && (a = S(a));
                b[0].checked = a === c.$viewValue;
            };
            d.$observe("value", c.$render);
        },
        range: function range(a, b, d, c, f, e) {
            function g(a, c) {
                b.attr(a, d[a]);
                d.$observe(a, c);
            }

            function h(a) {
                n = Ta(a);
                ga(c.$modelValue) || (m ? (a = b.val(), n > a && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate());
            }

            function k(a) {
                p = Ta(a);
                ga(c.$modelValue) || (m ? (a = b.val(), p < a && (b.val(p), a = p < n ? n : p), c.$setViewValue(a)) : c.$validate());
            }

            function l(a) {
                r = Ta(a);
                ga(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate());
            }

            yc(a, b, d, c);
            Yd(c);
            Sa(a, b, d, c, f, e);
            var m = c.$$hasNativeValidators && "range" === b[0].type,
                n = m ? 0 : void 0,
                p = m ? 100 : void 0,
                r = m ? 1 : void 0,
                q = b[0].validity;
            a = v(d.min);
            f = v(d.max);
            e = v(d.step);
            var s = c.$render;
            c.$render = m && v(q.rangeUnderflow) && v(q.rangeOverflow) ? function () {
                s();
                c.$setViewValue(b.val());
            } : s;
            a && (c.$validators.min = m ? function () {
                return !0;
            } : function (a, b) {
                return c.$isEmpty(b) || x(n) || b >= n;
            }, g("min", h));
            f && (c.$validators.max = m ? function () {
                return !0;
            } : function (a, b) {
                return c.$isEmpty(b) || x(p) || b <= p;
            }, g("max", k));
            e && (c.$validators.step = m ? function () {
                return !q.stepMismatch;
            } : function (a, b) {
                return c.$isEmpty(b) || x(r) || Zd(b, n || 0, r);
            }, g("step", l));
        },
        checkbox: function checkbox(a, b, d, c, f, e, g, h) {
            var k = $d(h, a, "ngTrueValue", d.ngTrueValue, !0),
                l = $d(h, a, "ngFalseValue", d.ngFalseValue, !1);
            b.on("click", function (a) {
                c.$setViewValue(b[0].checked, a && a.type);
            });
            c.$render = function () {
                b[0].checked = c.$viewValue;
            };
            c.$isEmpty = function (a) {
                return !1 === a;
            };
            c.$formatters.push(function (a) {
                return qa(a, k);
            });
            c.$parsers.push(function (a) {
                return a ? k : l;
            });
        },
        hidden: w,
        button: w,
        submit: w,
        reset: w,
        file: w
    },
        Rc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function pre(f, e, g, h) {
                    h[0] && (he[P(g.type)] || he.text)(f, e, g, h[0], b, a, d, c);
                }
            }
        };
    }],
        Xg = /^(true|false|\d+)$/,
        ef = function ef() {
        return {
            restrict: "A", priority: 100, compile: function compile(a, b) {
                return Xg.test(b.ngValue) ? function (a, b, f) {
                    a = a.$eval(f.ngValue);
                    b.prop("value", a);
                    f.$set("value", a);
                } : function (a, b, f) {
                    a.$watch(f.ngValue, function (a) {
                        b.prop("value", a);
                        f.$set("value", a);
                    });
                };
            }
        };
    },
        Fe = ["$compile", function (a) {
        return {
            restrict: "AC", compile: function compile(b) {
                a.$$addBindingClass(b);
                return function (b, c, f) {
                    a.$$addBindingInfo(c, f.ngBind);
                    c = c[0];
                    b.$watch(f.ngBind, function (a) {
                        c.textContent = Yb(a);
                    });
                };
            }
        };
    }],
        He = ["$interpolate", "$compile", function (a, b) {
        return {
            compile: function compile(d) {
                b.$$addBindingClass(d);
                return function (c, d, e) {
                    c = a(d.attr(e.$attr.ngBindTemplate));
                    b.$$addBindingInfo(d, c.expressions);
                    d = d[0];
                    e.$observe("ngBindTemplate", function (a) {
                        d.textContent = x(a) ? "" : a;
                    });
                };
            }
        };
    }],
        Ge = ["$sce", "$parse", "$compile", function (a, b, d) {
        return {
            restrict: "A", compile: function compile(c, f) {
                var e = b(f.ngBindHtml),
                    g = b(f.ngBindHtml, function (b) {
                    return a.valueOf(b);
                });
                d.$$addBindingClass(c);
                return function (b, c, f) {
                    d.$$addBindingInfo(c, f.ngBindHtml);
                    b.$watch(g, function () {
                        var d = e(b);
                        c.html(a.getTrustedHtml(d) || "");
                    });
                };
            }
        };
    }],
        df = ma({
        restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
            c.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange);
            });
        }
    }),
        Ie = Ac("", !0),
        Ke = Ac("Odd", 0),
        Je = Ac("Even", 1),
        Le = Ra({
        compile: function compile(a, b) {
            b.$set("ngCloak", void 0);
            a.removeClass("ng-cloak");
        }
    }),
        Me = [function () {
        return { restrict: "A", scope: !0, controller: "@", priority: 500 };
    }],
        Wc = {},
        Yg = { blur: !0, focus: !0 };
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = Ca("ng-" + a);
        Wc[b] = ["$parse", "$rootScope", function (d, c) {
            return {
                restrict: "A", compile: function compile(f, e) {
                    var g = d(e[b], null, !0);
                    return function (b, d) {
                        d.on(a, function (d) {
                            var e = function e() {
                                g(b, { $event: d });
                            };
                            Yg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
                        });
                    };
                }
            };
        }];
    });
    var Pe = ["$animate", "$compile", function (a, b) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function link(d, c, f, e, g) {
                var h, k, l;
                d.$watch(f.ngIf, function (d) {
                    d ? k || g(function (d, e) {
                        k = e;
                        d[d.length++] = b.$$createComment("end ngIf", f.ngIf);
                        h = { clone: d };
                        a.enter(d, c.parent(), c);
                    }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = ub(h.clone), a.leave(l).done(function (a) {
                        !1 !== a && (l = null);
                    }), h = null));
                });
            }
        };
    }],
        Qe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: $.noop,
            compile: function compile(c, f) {
                var e = f.ngInclude || f.src,
                    g = f.onload || "",
                    h = f.autoscroll;
                return function (c, f, m, n, p) {
                    var q = 0,
                        s,
                        w,
                        u,
                        H = function H() {
                        w && (w.remove(), w = null);
                        s && (s.$destroy(), s = null);
                        u && (d.leave(u).done(function (a) {
                            !1 !== a && (w = null);
                        }), w = u, u = null);
                    };
                    c.$watch(e, function (e) {
                        var m = function m(a) {
                            !1 === a || !v(h) || h && !c.$eval(h) || b();
                        },
                            w = ++q;
                        e ? (a(e, !0).then(function (a) {
                            if (!c.$$destroyed && w === q) {
                                var b = c.$new();
                                n.template = a;
                                a = p(b, function (a) {
                                    H();
                                    d.enter(a, null, f).done(m);
                                });
                                s = b;
                                u = a;
                                s.$emit("$includeContentLoaded", e);
                                c.$eval(g);
                            }
                        }, function () {
                            c.$$destroyed || w !== q || (H(), c.$emit("$includeContentError", e));
                        }), c.$emit("$includeContentRequested", e)) : (H(), n.template = null);
                    });
                };
            }
        };
    }],
        gf = ["$compile", function (a) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function link(b, d, c, f) {
                na.call(d[0]).match(/SVG/) ? (d.empty(), a(Zc(f.template, z.document).childNodes)(b, function (a) {
                    d.append(a);
                }, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(b));
            }
        };
    }],
        Re = Ra({
        priority: 450, compile: function compile() {
            return {
                pre: function pre(a, b, d) {
                    a.$eval(d.ngInit);
                }
            };
        }
    }),
        cf = function cf() {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
                var f = d.ngList || ", ",
                    e = "false" !== d.ngTrim,
                    g = e ? S(f) : f;
                c.$parsers.push(function (a) {
                    if (!x(a)) {
                        var b = [];
                        a && q(a.split(g), function (a) {
                            a && b.push(e ? S(a) : a);
                        });
                        return b;
                    }
                });
                c.$formatters.push(function (a) {
                    if (C(a)) return a.join(f);
                });
                c.$isEmpty = function (a) {
                    return !a || !a.length;
                };
            }
        };
    },
        ob = "ng-valid",
        Ud = "ng-invalid",
        Va = "ng-pristine",
        Rb = "ng-dirty",
        qb = M("ngModel");
    Ob.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
    Ob.prototype = {
        $$initGetterSetters: function $$initGetterSetters() {
            if (this.$options.getOption("getterSetter")) {
                var a = this.$$parse(this.$$attr.ngModel + "()"),
                    b = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function (b) {
                    var c = this.$$parsedNgModel(b);
                    y(c) && (c = a(b));
                    return c;
                };
                this.$$ngModelSet = function (a, c) {
                    y(this.$$parsedNgModel(a)) ? b(a, { $$$p: c }) : this.$$parsedNgModelAssign(a, c);
                };
            } else if (!this.$$parsedNgModel.assign) throw qb("nonassign", this.$$attr.ngModel, ya(this.$$element));
        }, $render: w, $isEmpty: function $isEmpty(a) {
            return x(a) || "" === a || null === a || a !== a;
        }, $$updateEmptyClasses: function $$updateEmptyClasses(a) {
            this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"));
        }, $setPristine: function $setPristine() {
            this.$dirty = !1;
            this.$pristine = !0;
            this.$$animate.removeClass(this.$$element, Rb);
            this.$$animate.addClass(this.$$element, Va);
        }, $setDirty: function $setDirty() {
            this.$dirty = !0;
            this.$pristine = !1;
            this.$$animate.removeClass(this.$$element, Va);
            this.$$animate.addClass(this.$$element, Rb);
            this.$$parentForm.$setDirty();
        },
        $setUntouched: function $setUntouched() {
            this.$touched = !1;
            this.$untouched = !0;
            this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
        }, $setTouched: function $setTouched() {
            this.$touched = !0;
            this.$untouched = !1;
            this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
        }, $rollbackViewValue: function $rollbackViewValue() {
            this.$$timeout.cancel(this.$$pendingDebounce);
            this.$viewValue = this.$$lastCommittedViewValue;
            this.$render();
        }, $validate: function $validate() {
            if (!ga(this.$modelValue)) {
                var a = this.$$lastCommittedViewValue,
                    b = this.$$rawModelValue,
                    d = this.$valid,
                    c = this.$modelValue,
                    f = this.$options.getOption("allowInvalid"),
                    e = this;
                this.$$runValidators(b, a, function (a) {
                    f || d === a || (e.$modelValue = a ? b : void 0, e.$modelValue !== c && e.$$writeModelToScope());
                });
            }
        }, $$runValidators: function $$runValidators(a, b, d) {
            function c() {
                var c = !0;
                q(k.$validators, function (d, f) {
                    var g = Boolean(d(a, b));
                    c = c && g;
                    e(f, g);
                });
                return c ? !0 : (q(k.$asyncValidators, function (a, b) {
                    e(b, null);
                }), !1);
            }

            function f() {
                var c = [],
                    d = !0;
                q(k.$asyncValidators, function (f, g) {
                    var h = f(a, b);
                    if (!h || !y(h.then)) throw qb("nopromise", h);
                    e(g, void 0);
                    c.push(h.then(function () {
                        e(g, !0);
                    }, function () {
                        d = !1;
                        e(g, !1);
                    }));
                });
                c.length ? k.$$q.all(c).then(function () {
                    g(d);
                }, w) : g(!0);
            }

            function e(a, b) {
                h === k.$$currentValidationRunId && k.$setValidity(a, b);
            }

            function g(a) {
                h === k.$$currentValidationRunId && d(a);
            }

            this.$$currentValidationRunId++;
            var h = this.$$currentValidationRunId,
                k = this;
            (function () {
                var a = k.$$parserName || "parse";
                if (x(k.$$parserValid)) e(a, null);else return k.$$parserValid || (q(k.$validators, function (a, b) {
                    e(b, null);
                }), q(k.$asyncValidators, function (a, b) {
                    e(b, null);
                })), e(a, k.$$parserValid), k.$$parserValid;
                return !0;
            })() ? c() ? f() : g(!1) : g(!1);
        }, $commitViewValue: function $commitViewValue() {
            var a = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce);
            if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate();
        }, $$parseAndValidate: function $$parseAndValidate() {
            var a = this.$$lastCommittedViewValue,
                b = this;
            if (this.$$parserValid = x(a) ? void 0 : !0) for (var d = 0; d < this.$parsers.length; d++) {
                if (a = this.$parsers[d](a), x(a)) {
                    this.$$parserValid = !1;
                    break;
                }
            }ga(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var c = this.$modelValue,
                f = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = a;
            f && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());
            this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
                f || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope());
            });
        }, $$writeModelToScope: function $$writeModelToScope() {
            this.$$ngModelSet(this.$$scope, this.$modelValue);
            q(this.$viewChangeListeners, function (a) {
                try {
                    a();
                } catch (b) {
                    this.$$exceptionHandler(b);
                }
            }, this);
        }, $setViewValue: function $setViewValue(a, b) {
            this.$viewValue = a;
            this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b);
        }, $$debounceViewValueCommit: function $$debounceViewValueCommit(a) {
            var b = this.$options.getOption("debounce");
            Y(b[a]) ? b = b[a] : Y(b["default"]) && (b = b["default"]);
            this.$$timeout.cancel(this.$$pendingDebounce);
            var d = this;
            0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
                d.$commitViewValue();
            }, b) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
                d.$commitViewValue();
            });
        }
    };
    Vd({
        clazz: Ob, set: function set(a, b) {
            a[b] = !0;
        }, unset: function unset(a, b) {
            delete a[b];
        }
    });
    var bf = ["$rootScope", function (a) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: Ob,
            priority: 1,
            compile: function compile(b) {
                b.addClass(Va).addClass("ng-untouched").addClass(ob);
                return {
                    pre: function pre(a, b, f, e) {
                        var g = e[0];
                        b = e[1] || g.$$parentForm;
                        if (e = e[2]) g.$options = e.$options;
                        g.$$initGetterSetters();
                        b.$addControl(g);
                        f.$observe("name", function (a) {
                            g.$name !== a && g.$$parentForm.$$renameControl(g, a);
                        });
                        a.$on("$destroy", function () {
                            g.$$parentForm.$removeControl(g);
                        });
                    }, post: function post(b, c, f, e) {
                        function g() {
                            h.$setTouched();
                        }

                        var h = e[0];
                        if (h.$options.getOption("updateOn")) c.on(h.$options.getOption("updateOn"), function (a) {
                            h.$$debounceViewValueCommit(a && a.type);
                        });
                        c.on("blur", function () {
                            h.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g));
                        });
                    }
                };
            }
        };
    }],
        Pb,
        Zg = /(\s+|^)default(\s+|$)/;
    Bc.prototype = {
        getOption: function getOption(a) {
            return this.$$options[a];
        }, createChild: function createChild(a) {
            var b = !1;
            a = R({}, a);
            q(a, function (d, c) {
                "$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = S(d.replace(Zg, function () {
                    a.updateOnDefault = !0;
                    return " ";
                })));
            }, this);
            b && (delete a["*"], ae(a, this.$$options));
            ae(a, Pb.$$options);
            return new Bc(a);
        }
    };
    Pb = new Bc({ updateOn: "", updateOnDefault: !0, debounce: 0, getterSetter: !1, allowInvalid: !1, timezone: null });
    var ff = function ff() {
        function a(a, d) {
            this.$$attrs = a;
            this.$$scope = d;
        }

        a.$inject = ["$attrs", "$scope"];
        a.prototype = {
            $onInit: function $onInit() {
                var a = this.parentCtrl ? this.parentCtrl.$options : Pb,
                    d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                this.$options = a.createChild(d);
            }
        };
        return {
            restrict: "A",
            priority: 10,
            require: { parentCtrl: "?^^ngModelOptions" },
            bindToController: !0,
            controller: a
        };
    },
        Se = Ra({
        terminal: !0,
        priority: 1E3
    }),
        $g = M("ngOptions"),
        ah = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        $e = ["$compile", "$document", "$parse", function (a, b, d) {
        function c(a, b, c) {
            function e(a, b, c, d, f) {
                this.selectValue = a;
                this.viewValue = b;
                this.label = c;
                this.group = d;
                this.disabled = f;
            }

            function f(a) {
                var b;
                if (!q && ta(a)) b = a;else {
                    b = [];
                    for (var c in a) {
                        a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
                    }
                }
                return b;
            }

            var n = a.match(ah);
            if (!n) throw $g("iexp", a, ya(b));
            var p = n[5] || n[7],
                q = n[6];
            a = / as /.test(n[0]) && n[1];
            var s = n[9];
            b = d(n[2] ? n[1] : p);
            var v = a && d(a) || b,
                u = s && d(s),
                w = s ? function (a, b) {
                return u(c, b);
            } : function (a) {
                return la(a);
            },
                x = function x(a, b) {
                return w(a, B(a, b));
            },
                t = d(n[2] || n[1]),
                z = d(n[3] || ""),
                A = d(n[4] || ""),
                K = d(n[8]),
                I = {},
                B = q ? function (a, b) {
                I[q] = b;
                I[p] = a;
                return I;
            } : function (a) {
                I[p] = a;
                return I;
            };
            return {
                trackBy: s, getTrackByValue: x, getWatchables: d(K, function (a) {
                    var b = [];
                    a = a || [];
                    for (var d = f(a), e = d.length, g = 0; g < e; g++) {
                        var h = a === d ? g : d[g],
                            l = a[h],
                            h = B(l, h),
                            l = w(l, h);
                        b.push(l);
                        if (n[2] || n[1]) l = t(c, h), b.push(l);
                        n[4] && (h = A(c, h), b.push(h));
                    }
                    return b;
                }), getOptions: function getOptions() {
                    for (var a = [], b = {}, d = K(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
                        var p = d === g ? n : g[n],
                            q = B(d[p], p),
                            r = v(c, q),
                            p = w(r, q),
                            u = t(c, q),
                            I = z(c, q),
                            q = A(c, q),
                            r = new e(p, r, u, I, q);
                        a.push(r);
                        b[p] = r;
                    }
                    return {
                        items: a, selectValueMap: b, getOptionFromViewValue: function getOptionFromViewValue(a) {
                            return b[x(a)];
                        }, getViewValueFromOption: function getViewValueFromOption(a) {
                            return s ? Fa(a.viewValue) : a.viewValue;
                        }
                    };
                }
            };
        }

        var f = z.document.createElement("option"),
            e = z.document.createElement("optgroup");
        return {
            restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                pre: function pre(a, b, c, d) {
                    d[0].registerOption = w;
                }, post: function post(d, h, k, l) {
                    function m(a) {
                        var b = (a = t.getOptionFromViewValue(a)) && a.element;
                        b && !b.selected && (b.selected = !0);
                        return a;
                    }

                    function n(a, b) {
                        a.element = b;
                        b.disabled = a.disabled;
                        a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                        b.value = a.selectValue;
                    }

                    function p() {
                        var a = t && r.readValue();
                        if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
                            var c = t.items[b];
                            v(c.group) ? Fb(c.element.parentNode) : Fb(c.element);
                        }
                        t = y.getOptions();
                        var d = {};
                        z && h.prepend(r.emptyOption);
                        t.items.forEach(function (a) {
                            var b;
                            if (v(a.group)) {
                                b = d[a.group];
                                b || (b = e.cloneNode(!1), A.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);
                                var c = f.cloneNode(!1);
                            } else b = A, c = f.cloneNode(!1);
                            b.appendChild(c);
                            n(a, c);
                        });
                        h[0].appendChild(A);
                        s.$render();
                        s.$isEmpty(a) || (b = r.readValue(), (y.trackBy || w ? qa(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
                    }

                    var r = l[0],
                        s = l[1],
                        w = k.multiple;
                    l = 0;
                    for (var u = h.children(), x = u.length; l < x; l++) {
                        if ("" === u[l].value) {
                            r.hasEmptyOption = !0;
                            r.emptyOption = u.eq(l);
                            break;
                        }
                    }var z = !!r.emptyOption;
                    D(f.cloneNode(!1)).val("?");
                    var t,
                        y = c(k.ngOptions, h, d),
                        A = b[0].createDocumentFragment();
                    r.generateUnknownOptionValue = function (a) {
                        return "?";
                    };
                    w ? (r.writeValue = function (a) {
                        var b = a && a.map(m) || [];
                        t.items.forEach(function (a) {
                            a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1);
                        });
                    }, r.readValue = function () {
                        var a = h.val() || [],
                            b = [];
                        q(a, function (a) {
                            (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
                        });
                        return b;
                    }, y.trackBy && d.$watchCollection(function () {
                        if (C(s.$viewValue)) return s.$viewValue.map(function (a) {
                            return y.getTrackByValue(a);
                        });
                    }, function () {
                        s.$render();
                    })) : (r.writeValue = function (a) {
                        var b = t.selectValueMap[h.val()],
                            c = t.getOptionFromViewValue(a);
                        b && b.element.removeAttribute("selected");
                        c ? (h[0].value !== c.selectValue && (r.removeUnknownOption(), r.unselectEmptyOption(), h[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : z ? r.selectEmptyOption() : r.unknownOption.parent().length ? r.updateUnknownOption(a) : r.renderUnknownOption(a);
                    }, r.readValue = function () {
                        var a = t.selectValueMap[h.val()];
                        return a && !a.disabled ? (r.unselectEmptyOption(), r.removeUnknownOption(), t.getViewValueFromOption(a)) : null;
                    }, y.trackBy && d.$watch(function () {
                        return y.getTrackByValue(s.$viewValue);
                    }, function () {
                        s.$render();
                    }));
                    z && (r.emptyOption.remove(), a(r.emptyOption)(d), 8 === r.emptyOption[0].nodeType ? (r.hasEmptyOption = !1, r.registerOption = function (a, b) {
                        "" === b.val() && (r.hasEmptyOption = !0, r.emptyOption = b, r.emptyOption.removeClass("ng-scope"), s.$render(), b.on("$destroy", function () {
                            r.hasEmptyOption = !1;
                            r.emptyOption = void 0;
                        }));
                    }) : r.emptyOption.removeClass("ng-scope"));
                    h.empty();
                    p();
                    d.$watchCollection(y.getWatchables, p);
                }
            }
        };
    }],
        Te = ["$locale", "$interpolate", "$log", function (a, b, d) {
        var c = /{}/g,
            f = /^when(Minus)?(.+)$/;
        return {
            link: function link(e, g, h) {
                function k(a) {
                    g.text(a || "");
                }

                var l = h.count,
                    m = h.$attr.when && g.attr(h.$attr.when),
                    n = h.offset || 0,
                    p = e.$eval(m) || {},
                    r = {},
                    s = b.startSymbol(),
                    v = b.endSymbol(),
                    u = s + l + "-" + n + v,
                    H = $.noop,
                    y;
                q(h, function (a, b) {
                    var c = f.exec(b);
                    c && (c = (c[1] ? "-" : "") + P(c[2]), p[c] = g.attr(h.$attr[b]));
                });
                q(p, function (a, d) {
                    r[d] = b(a.replace(c, u));
                });
                e.$watch(l, function (b) {
                    var c = parseFloat(b),
                        f = ga(c);
                    f || c in p || (c = a.pluralCat(c - n));
                    c === y || f && ga(y) || (H(), f = r[c], x(f) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), H = w, k()) : H = e.$watch(f, k), y = c);
                });
            }
        };
    }],
        Ue = ["$parse", "$animate", "$compile", function (a, b, d) {
        var c = M("ngRepeat"),
            f = function f(a, b, c, d, _f2, m, n) {
            a[c] = d;
            _f2 && (a[_f2] = m);
            a.$index = b;
            a.$first = 0 === b;
            a.$last = b === n - 1;
            a.$middle = !(a.$first || a.$last);
            a.$odd = !(a.$even = 0 === (b & 1));
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1E3,
            terminal: !0,
            $$tlb: !0,
            compile: function compile(e, g) {
                var h = g.ngRepeat,
                    k = d.$$createComment("end ngRepeat", h),
                    l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!l) throw c("iexp", h);
                var m = l[1],
                    n = l[2],
                    p = l[3],
                    r = l[4],
                    l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
                if (!l) throw c("iidexp", m);
                var s = l[3] || l[1],
                    v = l[2];
                if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);
                var u,
                    w,
                    x,
                    t,
                    y = { $id: la };
                r ? u = a(r) : (x = function x(a, b) {
                    return la(b);
                }, t = function t(a) {
                    return a;
                });
                return function (a, d, e, g, l) {
                    u && (w = function w(b, c, d) {
                        v && (y[v] = b);
                        y[s] = c;
                        y.$index = d;
                        return u(a, y);
                    });
                    var m = W();
                    a.$watchCollection(n, function (e) {
                        var g,
                            n,
                            r = d[0],
                            u,
                            y = W(),
                            z,
                            D,
                            E,
                            B,
                            F,
                            C,
                            I;
                        p && (a[p] = e);
                        if (ta(e)) F = e, n = w || x;else for (I in n = w || t, F = [], e) {
                            va.call(e, I) && "$" !== I.charAt(0) && F.push(I);
                        }z = F.length;
                        I = Array(z);
                        for (g = 0; g < z; g++) {
                            if (D = e === F ? g : F[g], E = e[D], B = n(D, E, g), m[B]) C = m[B], delete m[B], y[B] = C, I[g] = C;else {
                                if (y[B]) throw q(I, function (a) {
                                    a && a.scope && (m[a.id] = a);
                                }), c("dupes", h, B, E);
                                I[g] = {
                                    id: B,
                                    scope: void 0, clone: void 0
                                };
                                y[B] = !0;
                            }
                        }for (u in m) {
                            C = m[u];
                            B = ub(C.clone);
                            b.leave(B);
                            if (B[0].parentNode) for (g = 0, n = B.length; g < n; g++) {
                                B[g].$$NG_REMOVED = !0;
                            }C.scope.$destroy();
                        }
                        for (g = 0; g < z; g++) {
                            if (D = e === F ? g : F[g], E = e[D], C = I[g], C.scope) {
                                u = r;
                                do {
                                    u = u.nextSibling;
                                } while (u && u.$$NG_REMOVED);
                                C.clone[0] !== u && b.move(ub(C.clone), null, r);
                                r = C.clone[C.clone.length - 1];
                                f(C.scope, g, s, E, v, D, z);
                            } else l(function (a, c) {
                                C.scope = c;
                                var d = k.cloneNode(!1);
                                a[a.length++] = d;
                                b.enter(a, null, r);
                                r = d;
                                C.clone = a;
                                y[C.id] = C;
                                f(C.scope, g, s, E, v, D, z);
                            });
                        }m = y;
                    });
                };
            }
        };
    }],
        Ve = ["$animate", function (a) {
        return {
            restrict: "A", multiElement: !0, link: function link(b, d, c) {
                b.$watch(c.ngShow, function (b) {
                    a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
                });
            }
        };
    }],
        Oe = ["$animate", function (a) {
        return {
            restrict: "A", multiElement: !0, link: function link(b, d, c) {
                b.$watch(c.ngHide, function (b) {
                    a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
                });
            }
        };
    }],
        We = Ra(function (a, b, d) {
        a.$watch(d.ngStyle, function (a, d) {
            d && a !== d && q(d, function (a, c) {
                b.css(c, "");
            });
            a && b.css(a);
        }, !0);
    }),
        Xe = ["$animate", "$compile", function (a, b) {
        return {
            require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {};
            }], link: function link(d, c, f, e) {
                var g = [],
                    h = [],
                    k = [],
                    l = [],
                    m = function m(a, b) {
                    return function (c) {
                        !1 !== c && a.splice(b, 1);
                    };
                };
                d.$watch(f.ngSwitch || f.on, function (c) {
                    for (var d, f; k.length;) {
                        a.cancel(k.pop());
                    }d = 0;
                    for (f = l.length; d < f; ++d) {
                        var s = ub(h[d].clone);
                        l[d].$destroy();
                        (k[d] = a.leave(s)).done(m(k, d));
                    }
                    h.length = 0;
                    l.length = 0;
                    (g = e.cases["!" + c] || e.cases["?"]) && q(g, function (c) {
                        c.transclude(function (d, e) {
                            l.push(e);
                            var f = c.element;
                            d[d.length++] = b.$$createComment("end ngSwitchWhen");
                            h.push({ clone: d });
                            a.enter(d, f.parent(), f);
                        });
                    });
                });
            }
        };
    }],
        Ye = Ra({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function link(a, b, d, c, f) {
            a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
                return c[b - 1] !== a;
            });
            q(a, function (a) {
                c.cases["!" + a] = c.cases["!" + a] || [];
                c.cases["!" + a].push({ transclude: f, element: b });
            });
        }
    }),
        Ze = Ra({
        transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, f) {
            c.cases["?"] = c.cases["?"] || [];
            c.cases["?"].push({ transclude: f, element: b });
        }
    }),
        bh = M("ngTransclude"),
        af = ["$compile", function (a) {
        return {
            restrict: "EAC", terminal: !0, compile: function compile(b) {
                var d = a(b.contents());
                b.empty();
                return function (a, b, e, g, h) {
                    function k() {
                        d(a, function (a) {
                            b.append(a);
                        });
                    }

                    if (!h) throw bh("orphan", ya(b));
                    e.ngTransclude === e.$attr.ngTransclude && (e.ngTransclude = "");
                    e = e.ngTransclude || e.ngTranscludeSlot;
                    h(function (a, c) {
                        var d;
                        if (d = a.length) a: {
                            d = 0;
                            for (var e = a.length; d < e; d++) {
                                var g = a[d];
                                if (g.nodeType !== Ja || g.nodeValue.trim()) {
                                    d = !0;
                                    break a;
                                }
                            }
                            d = void 0;
                        }
                        d ? b.append(a) : (k(), c.$destroy());
                    }, null, e);
                    e && !h.isSlotFilled(e) && k();
                };
            }
        };
    }],
        Ce = ["$templateCache", function (a) {
        return {
            restrict: "E", terminal: !0, compile: function compile(b, d) {
                "text/ng-template" === d.type && a.put(d.id, b[0].text);
            }
        };
    }],
        ch = { $setViewValue: w, $render: w },
        dh = ["$element", "$scope", function (a, b) {
        function d() {
            h || (h = !0, b.$$postDigest(function () {
                h = !1;
                e.ngModelCtrl.$render();
            }));
        }

        function c(a) {
            k || (k = !0, b.$$postDigest(function () {
                b.$$destroyed || (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render());
            }));
        }

        function f(a) {
            a.prop("selected", !0);
            a.attr("selected", !0);
        }

        var e = this,
            g = new Qa();
        e.selectValueMap = {};
        e.ngModelCtrl = ch;
        e.multiple = !1;
        e.unknownOption = D(z.document.createElement("option"));
        e.hasEmptyOption = !1;
        e.emptyOption = void 0;
        e.renderUnknownOption = function (b) {
            b = e.generateUnknownOptionValue(b);
            e.unknownOption.val(b);
            a.prepend(e.unknownOption);
            f(e.unknownOption);
            a.val(b);
        };
        e.updateUnknownOption = function (b) {
            b = e.generateUnknownOptionValue(b);
            e.unknownOption.val(b);
            f(e.unknownOption);
            a.val(b);
        };
        e.generateUnknownOptionValue = function (a) {
            return "? " + la(a) + " ?";
        };
        e.removeUnknownOption = function () {
            e.unknownOption.parent() && e.unknownOption.remove();
        };
        e.selectEmptyOption = function () {
            e.emptyOption && (a.val(""), f(e.emptyOption));
        };
        e.unselectEmptyOption = function () {
            e.hasEmptyOption && e.emptyOption.removeAttr("selected");
        };
        b.$on("$destroy", function () {
            e.renderUnknownOption = w;
        });
        e.readValue = function () {
            var b = a.val(),
                b = b in e.selectValueMap ? e.selectValueMap[b] : b;
            return e.hasOption(b) ? b : null;
        };
        e.writeValue = function (b) {
            var c = a[0].options[a[0].selectedIndex];
            c && c.removeAttribute("selected");
            e.hasOption(b) ? (e.removeUnknownOption(), c = la(b), a.val(c in e.selectValueMap ? c : b), f(D(a[0].options[a[0].selectedIndex]))) : null == b && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(b) : e.renderUnknownOption(b);
        };
        e.addOption = function (a, b) {
            if (8 !== b[0].nodeType) {
                Pa(a, '"option value"');
                "" === a && (e.hasEmptyOption = !0, e.emptyOption = b);
                var c = g.get(a) || 0;
                g.put(a, c + 1);
                d();
            }
        };
        e.removeOption = function (a) {
            var b = g.get(a);
            b && (1 === b ? (g.remove(a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : g.put(a, b - 1));
        };
        e.hasOption = function (a) {
            return !!g.get(a);
        };
        var h = !1,
            k = !1;
        e.registerOption = function (a, b, d, f, g) {
            if (d.$attr.ngValue) {
                var h,
                    k = NaN;
                d.$observe("value", function (a) {
                    var d,
                        f = b.prop("selected");
                    v(k) && (e.removeOption(h), delete e.selectValueMap[k], d = !0);
                    k = la(a);
                    h = a;
                    e.selectValueMap[k] = a;
                    e.addOption(a, b);
                    b.attr("value", k);
                    d && f && c();
                });
            } else f ? d.$observe("value", function (a) {
                e.readValue();
                var d,
                    f = b.prop("selected");
                v(h) && (e.removeOption(h), d = !0);
                h = a;
                e.addOption(a, b);
                d && f && c();
            }) : g ? a.$watch(g, function (a, f) {
                d.$set("value", a);
                var g = b.prop("selected");
                f !== a && e.removeOption(f);
                e.addOption(a, b);
                f && g && c();
            }) : e.addOption(d.value, b);
            d.$observe("disabled", function (a) {
                if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render());
            });
            b.on("$destroy", function () {
                var a = e.readValue(),
                    b = d.value;
                e.removeOption(b);
                e.ngModelCtrl.$render();
                (e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0);
            });
        };
    }],
        De = function De() {
        return {
            restrict: "E", require: ["select", "?ngModel"], controller: dh, priority: 1, link: {
                pre: function pre(a, b, d, c) {
                    var f = c[0],
                        e = c[1];
                    if (e) {
                        if (f.ngModelCtrl = e, b.on("change", function () {
                            f.removeUnknownOption();
                            a.$apply(function () {
                                e.$setViewValue(f.readValue());
                            });
                        }), d.multiple) {
                            f.multiple = !0;
                            f.readValue = function () {
                                var a = [];
                                q(b.find("option"), function (b) {
                                    b.selected && !b.disabled && (b = b.value, a.push(b in f.selectValueMap ? f.selectValueMap[b] : b));
                                });
                                return a;
                            };
                            f.writeValue = function (a) {
                                var c = new Qa(a);
                                q(b.find("option"), function (a) {
                                    a.selected = v(c.get(a.value)) || v(c.get(f.selectValueMap[a.value]));
                                });
                            };
                            var g,
                                h = NaN;
                            a.$watch(function () {
                                h !== e.$viewValue || qa(g, e.$viewValue) || (g = ra(e.$viewValue), e.$render());
                                h = e.$viewValue;
                            });
                            e.$isEmpty = function (a) {
                                return !a || 0 === a.length;
                            };
                        }
                    } else f.registerOption = w;
                }, post: function post(a, b, d, c) {
                    var f = c[1];
                    if (f) {
                        var e = c[0];
                        f.$render = function () {
                            e.writeValue(f.$viewValue);
                        };
                    }
                }
            }
        };
    },
        Ee = ["$interpolate", function (a) {
        return {
            restrict: "E", priority: 100, compile: function compile(b, d) {
                var c, f;
                v(d.ngValue) || (v(d.value) ? c = a(d.value, !0) : (f = a(b.text(), !0)) || d.$set("value", b.text()));
                return function (a, b, d) {
                    var k = b.parent();
                    (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, f);
                };
            }
        };
    }],
        Tc = function Tc() {
        return {
            restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
                c && (d.required = !0, c.$validators.required = function (a, b) {
                    return !d.required || !c.$isEmpty(b);
                }, d.$observe("required", function () {
                    c.$validate();
                }));
            }
        };
    },
        Sc = function Sc() {
        return {
            restrict: "A", require: "?ngModel",
            link: function link(a, b, d, c) {
                if (c) {
                    var f,
                        e = d.ngPattern || d.pattern;
                    d.$observe("pattern", function (a) {
                        E(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                        if (a && !a.test) throw M("ngPattern")("noregexp", e, a, ya(b));
                        f = a || void 0;
                        c.$validate();
                    });
                    c.$validators.pattern = function (a, b) {
                        return c.$isEmpty(b) || x(f) || f.test(b);
                    };
                }
            }
        };
    },
        Vc = function Vc() {
        return {
            restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
                if (c) {
                    var f = -1;
                    d.$observe("maxlength", function (a) {
                        a = Z(a);
                        f = ga(a) ? -1 : a;
                        c.$validate();
                    });
                    c.$validators.maxlength = function (a, b) {
                        return 0 > f || c.$isEmpty(b) || b.length <= f;
                    };
                }
            }
        };
    },
        Uc = function Uc() {
        return {
            restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
                if (c) {
                    var f = 0;
                    d.$observe("minlength", function (a) {
                        f = Z(a) || 0;
                        c.$validate();
                    });
                    c.$validators.minlength = function (a, b) {
                        return c.$isEmpty(b) || b.length >= f;
                    };
                }
            }
        };
    };
    z.angular.bootstrap ? z.console && console.log("WARNING: Tried to load angular more than once.") : (ue(), xe($), $.module("ngLocale", [], ["$provide", function (a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1;
        }

        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-\xA4",
                    negSuf: "",
                    posPre: "\xA4",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function pluralCat(a, c) {
                var f = a | 0,
                    e = c;
                void 0 === e && (e = Math.min(b(a), 3));
                Math.pow(10, e);
                return 1 == f && 0 == e ? "one" : "other";
            }
        });
    }]), D(function () {
        pe(z.document, Mc);
    }));
})(window);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
	var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};

	var utils = function () {
		var me = {};

		var _elementStyle = document.createElement('div').style;
		var _vendor = function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			    transform,
			    i = 0,
			    l = vendors.length;

			for (; i < l; i++) {
				transform = vendors[i] + 'ransform';
				if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
			}

			return false;
		}();

		function _prefixStyle(style) {
			if (_vendor === false) return false;
			if (_vendor === '') return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}

		me.getTime = Date.now || function getTime() {
			return new Date().getTime();
		};

		me.extend = function (target, obj) {
			for (var i in obj) {
				target[i] = obj[i];
			}
		};

		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};

		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};

		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent;
		};

		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
			    speed = Math.abs(distance) / time,
			    destination,
			    duration;

			deceleration = deceleration === undefined ? 0.0006 : deceleration;

			destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
			duration = speed / deceleration;

			if (destination < lowerMargin) {
				destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if (destination > 0) {
				destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}

			return {
				destination: Math.round(destination),
				duration: duration
			};
		};

		var _transform = _prefixStyle('transform');

		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});

		// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion);

		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});

		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};

		me.addClass = function (e, c) {
			if (me.hasClass(e, c)) {
				return;
			}

			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};

		me.removeClass = function (e, c) {
			if (!me.hasClass(e, c)) {
				return;
			}

			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};

		me.offset = function (el) {
			var left = -el.offsetLeft,
			    top = -el.offsetTop;

			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084

			return {
				left: left,
				top: top
			};
		};

		me.preventDefaultException = function (el, exceptions) {
			for (var i in exceptions) {
				if (exceptions[i].test(el[i])) {
					return true;
				}
			}

			return false;
		};

		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,

			mousedown: 2,
			mousemove: 2,
			mouseup: 2,

			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,

			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});

		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function fn(k) {
					return k * (2 - k);
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function fn(k) {
					return Math.sqrt(1 - --k * k);
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function fn(k) {
					var b = 4;
					return (k = k - 1) * k * ((b + 1) * k + b) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function fn(k) {
					if ((k /= 1) < 1 / 2.75) {
						return 7.5625 * k * k;
					} else if (k < 2 / 2.75) {
						return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
					} else if (k < 2.5 / 2.75) {
						return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
					} else {
						return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function fn(k) {
					var f = 0.22,
					    e = 0.4;

					if (k === 0) {
						return 0;
					}
					if (k == 1) {
						return 1;
					}

					return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
				}
			}
		});

		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};

		me.click = function (e) {
			var target = e.target,
			    ev;

			if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);

				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};

		return me;
	}();
	/******************************
 *************************
 *************************
 *************************
 *************************
 *************************
 *******************************************/
	function IScroll(el, options) {
		//el这个参数可以是CSS选择器，也可以是一个DOM对象
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style; // cache style for better performance

		this.options = {

			resizeScrollbars: true,

			mouseWheelSpeed: 20,

			snapThreshold: 0.334,

			// INSERT POINT: OPTIONS 

			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,

			bounce: true,
			bounceTime: 600,
			bounceEasing: '',

			preventDefault: false,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ },

			HWCompositing: true,
			useTransition: true,
			useTransform: true
		};

		for (var i in options) {
			this.options[i] = options[i];
		}

		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;

		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

		if (this.options.tap === true) {
			this.options.tap = 'tap';
		}

		if (this.options.shrinkScrollbars == 'scale') {
			this.options.useTransition = false;
		}

		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

		// INSERT POINT: NORMALIZATION

		// Some defaults	
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};

		// INSERT POINT: DEFAULTS

		this._init();
		this.refresh();

		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}

	IScroll.prototype = {
		version: '5.1.3',

		_init: function _init() {
			this._initEvents();

			if (this.options.scrollbars || this.options.indicators) {
				this._initIndicators();
			}

			if (this.options.mouseWheel) {
				this._initWheel();
			}

			if (this.options.snap) {
				this._initSnap();
			}

			if (this.options.keyBindings) {
				this._initKeys();
			}

			// INSERT POINT: _init
		},

		destroy: function destroy() {
			this._initEvents(true);

			this._execEvent('destroy');
		},

		_transitionEnd: function _transitionEnd(e) {
			if (e.target != this.scroller || !this.isInTransition) {
				return;
			}

			this._transitionTime();
			if (!this.resetPosition(this.options.bounceTime)) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},

		_start: function _start(e) {
			// React to left mouse button only
			if (utils.eventType[e.type] != 1) {
				if (e.button !== 0) {
					return;
				}
			}

			if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
				return;
			}

			if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
			    pos;

			this.initiated = utils.eventType[e.type];
			this.moved = false;
			this.distX = 0;
			this.distY = 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;

			this._transitionTime();

			this.startTime = utils.getTime();

			if (this.options.useTransition && this.isInTransition) {
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if (!this.options.useTransition && this.isAnimating) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}

			this.startX = this.x;
			this.startY = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX = point.pageX;
			this.pointY = point.pageY;

			this._execEvent('beforeScrollStart');
		},

		_move: function _move(e) {
			if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
				return;
			}

			if (this.options.preventDefault) {
				// increases performance on Android? TODO: check!
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
			    deltaX = point.pageX - this.pointX,
			    deltaY = point.pageY - this.pointY,
			    timestamp = utils.getTime(),
			    newX,
			    newY,
			    absDistX,
			    absDistY;

			this.pointX = point.pageX;
			this.pointY = point.pageY;

			this.distX += deltaX;
			this.distY += deltaY;
			absDistX = Math.abs(this.distX);
			absDistY = Math.abs(this.distY);

			// We need to move at least 10 pixels for the scrolling to initiate
			if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
				return;
			}

			// If you are scrolling in one direction lock the other
			if (!this.directionLocked && !this.options.freeScroll) {
				if (absDistX > absDistY + this.options.directionLockThreshold) {
					this.directionLocked = 'h'; // lock horizontally
				} else if (absDistY >= absDistX + this.options.directionLockThreshold) {
					this.directionLocked = 'v'; // lock vertically
				} else {
					this.directionLocked = 'n'; // no lock
				}
			}

			if (this.directionLocked == 'h') {
				if (this.options.eventPassthrough == 'vertical') {
					e.preventDefault();
				} else if (this.options.eventPassthrough == 'horizontal') {
					this.initiated = false;
					return;
				}

				deltaY = 0;
			} else if (this.directionLocked == 'v') {
				if (this.options.eventPassthrough == 'horizontal') {
					e.preventDefault();
				} else if (this.options.eventPassthrough == 'vertical') {
					this.initiated = false;
					return;
				}

				deltaX = 0;
			}

			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			// Slow down if outside of the boundaries
			if (newX > 0 || newX < this.maxScrollX) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if (newY > 0 || newY < this.maxScrollY) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}

			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

			if (!this.moved) {
				this._execEvent('scrollStart');
			}

			this.moved = true;

			this._translate(newX, newY);

			/* REPLACE START: _move */

			if (timestamp - this.startTime > 300) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}

			/* REPLACE END: _move */
		},

		_end: function _end(e) {
			if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
				return;
			}

			if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault();
			}

			var point = e.changedTouches ? e.changedTouches[0] : e,
			    momentumX,
			    momentumY,
			    duration = utils.getTime() - this.startTime,
			    newX = Math.round(this.x),
			    newY = Math.round(this.y),
			    distanceX = Math.abs(newX - this.startX),
			    distanceY = Math.abs(newY - this.startY),
			    time = 0,
			    easing = '';

			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();

			// reset if we are outside of the boundaries
			if (this.resetPosition(this.options.bounceTime)) {
				return;
			}

			this.scrollTo(newX, newY); // ensures that the last position is rounded

			// we scrolled less than 10 pixels
			if (!this.moved) {
				if (this.options.tap) {
					utils.tap(e, this.options.tap);
				}

				if (this.options.click) {
					utils.click(e);
				}

				this._execEvent('scrollCancel');
				return;
			}

			if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
				this._execEvent('flick');
				return;
			}

			// start momentum animation if needed
			if (this.options.momentum && duration < 300) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}

			if (this.options.snap) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
				newX = snap.x;
				newY = snap.y;

				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}

			// INSERT POINT: _end

			if (newX != this.x || newY != this.y) {
				// change easing function when scroller goes out of the boundaries
				if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
					easing = utils.ease.quadratic;
				}

				this.scrollTo(newX, newY, time, easing);
				return;
			}

			this._execEvent('scrollEnd');
		},

		_resize: function _resize() {
			var that = this;

			clearTimeout(this.resizeTimeout);

			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},

		resetPosition: function resetPosition(time) {
			var x = this.x,
			    y = this.y;

			time = time || 0;

			if (!this.hasHorizontalScroll || this.x > 0) {
				x = 0;
			} else if (this.x < this.maxScrollX) {
				x = this.maxScrollX;
			}

			if (!this.hasVerticalScroll || this.y > 0) {
				y = 0;
			} else if (this.y < this.maxScrollY) {
				y = this.maxScrollY;
			}

			if (x == this.x && y == this.y) {
				return false;
			}

			this.scrollTo(x, y, time, this.options.bounceEasing);

			return true;
		},

		disable: function disable() {
			this.enabled = false;
		},

		enable: function enable() {
			this.enabled = true;
		},

		refresh: function refresh() {
			var rf = this.wrapper.offsetHeight; // Force reflow

			this.wrapperWidth = this.wrapper.clientWidth;
			this.wrapperHeight = this.wrapper.clientHeight;

			/* REPLACE START: refresh */

			this.scrollerWidth = this.scroller.offsetWidth;
			this.scrollerHeight = this.scroller.offsetHeight;

			this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

			/* REPLACE END: refresh */

			this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

			if (!this.hasHorizontalScroll) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}

			if (!this.hasVerticalScroll) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}

			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;

			this.wrapperOffset = utils.offset(this.wrapper);

			this._execEvent('refresh');

			this.resetPosition();

			// INSERT POINT: _refresh
		},

		on: function on(type, fn) {
			if (!this._events[type]) {
				this._events[type] = [];
			}

			this._events[type].push(fn);
		},

		off: function off(type, fn) {
			if (!this._events[type]) {
				return;
			}

			var index = this._events[type].indexOf(fn);

			if (index > -1) {
				this._events[type].splice(index, 1);
			}
		},

		_execEvent: function _execEvent(type) {
			if (!this._events[type]) {
				return;
			}

			var i = 0,
			    l = this._events[type].length;

			if (!l) {
				return;
			}

			for (; i < l; i++) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},

		scrollBy: function scrollBy(x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;

			this.scrollTo(x, y, time, easing);
		},

		scrollTo: function scrollTo(x, y, time, easing) {
			easing = easing || utils.ease.circular;

			this.isInTransition = this.options.useTransition && time > 0;

			if (!time || this.options.useTransition && easing.style) {
				this._transitionTimingFunction(easing.style);
				this._transitionTime(time);
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},

		scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);

			if (!el) {
				return;
			}

			var pos = utils.offset(el);

			pos.left -= this.wrapperOffset.left;
			pos.top -= this.wrapperOffset.top;

			// if offsetX/Y are true we center the element to the screen
			if (offsetX === true) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if (offsetY === true) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}

			pos.left -= offsetX || 0;
			pos.top -= offsetY || 0;

			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

			this.scrollTo(pos.left, pos.top, time, easing);
		},

		_transitionTime: function _transitionTime(time) {
			time = time || 0;

			this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

			if (!time && utils.isBadAndroid) {
				this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
			}

			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].transitionTime(time);
				}
			}

			// INSERT POINT: _transitionTime
		},

		_transitionTimingFunction: function _transitionTimingFunction(easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}

			// INSERT POINT: _transitionTimingFunction
		},

		_translate: function _translate(x, y) {
			if (this.options.useTransform) {

				/* REPLACE START: _translate */

				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

				/* REPLACE END: _translate */
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}

			this.x = x;
			this.y = y;

			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].updatePosition();
				}
			}

			// INSERT POINT: _translate
		},

		_initEvents: function _initEvents(remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
			    target = this.options.bindToWrapper ? this.wrapper : window;

			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);

			if (this.options.click) {
				eventType(this.wrapper, 'click', this, true);
			}

			if (!this.options.disableMouse) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}

			if (utils.hasPointer && !this.options.disablePointer) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}

			if (utils.hasTouch && !this.options.disableTouch) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}

			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},

		getComputedPosition: function getComputedPosition() {
			var matrix = window.getComputedStyle(this.scroller, null),
			    x,
			    y;

			if (this.options.useTransform) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}

			return { x: x, y: y };
		},

		_initIndicators: function _initIndicators() {
			var interactive = this.options.interactiveScrollbars,
			    customStyle = typeof this.options.scrollbars != 'string',
			    indicators = [],
			    indicator;

			var that = this;

			this.indicators = [];

			if (this.options.scrollbars) {
				// Vertical scrollbar
				if (this.options.scrollY) {
					indicator = {
						el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}

				// Horizontal scrollbar
				if (this.options.scrollX) {
					indicator = {
						el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
			}

			if (this.options.indicators) {
				// TODO: check concat compatibility
				indicators = indicators.concat(this.options.indicators);
			}

			for (var i = indicators.length; i--;) {
				this.indicators.push(new Indicator(this, indicators[i]));
			}

			// TODO: check if we can use array.map (wide compatibility and performance issues)
			function _indicatorsMap(fn) {
				for (var i = that.indicators.length; i--;) {
					fn.call(that.indicators[i]);
				}
			}

			if (this.options.fadeScrollbars) {
				this.on('scrollEnd', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on('scrollCancel', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on('scrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1);
					});
				});

				this.on('beforeScrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1, true);
					});
				});
			}

			this.on('refresh', function () {
				_indicatorsMap(function () {
					this.refresh();
				});
			});

			this.on('destroy', function () {
				_indicatorsMap(function () {
					this.destroy();
				});

				delete this.indicators;
			});
		},

		_initWheel: function _initWheel() {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

			this.on('destroy', function () {
				utils.removeEvent(this.wrapper, 'wheel', this);
				utils.removeEvent(this.wrapper, 'mousewheel', this);
				utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
			});
		},

		_wheel: function _wheel(e) {
			if (!this.enabled) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

			var wheelDeltaX,
			    wheelDeltaY,
			    newX,
			    newY,
			    that = this;

			if (this.wheelTimeout === undefined) {
				that._execEvent('scrollStart');
			}

			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				that._execEvent('scrollEnd');
				that.wheelTimeout = undefined;
			}, 400);

			if ('deltaX' in e) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ('wheelDeltaX' in e) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
			} else if ('wheelDelta' in e) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
			} else if ('detail' in e) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
			} else {
				return;
			}

			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;

			if (!this.hasVerticalScroll) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}

			if (this.options.snap) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;

				if (wheelDeltaX > 0) {
					newX--;
				} else if (wheelDeltaX < 0) {
					newX++;
				}

				if (wheelDeltaY > 0) {
					newY--;
				} else if (wheelDeltaY < 0) {
					newY++;
				}

				this.goToPage(newX, newY);

				return;
			}

			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

			if (newX > 0) {
				newX = 0;
			} else if (newX < this.maxScrollX) {
				newX = this.maxScrollX;
			}

			if (newY > 0) {
				newY = 0;
			} else if (newY < this.maxScrollY) {
				newY = this.maxScrollY;
			}

			this.scrollTo(newX, newY, 0);

			// INSERT POINT: _wheel
		},

		_initSnap: function _initSnap() {
			this.currentPage = {};

			if (typeof this.options.snap == 'string') {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}

			this.on('refresh', function () {
				var i = 0,
				    l,
				    m = 0,
				    n,
				    cx,
				    cy,
				    x = 0,
				    y,
				    stepX = this.options.snapStepX || this.wrapperWidth,
				    stepY = this.options.snapStepY || this.wrapperHeight,
				    el;

				this.pages = [];

				if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
					return;
				}

				if (this.options.snap === true) {
					cx = Math.round(stepX / 2);
					cy = Math.round(stepY / 2);

					while (x > -this.scrollerWidth) {
						this.pages[i] = [];
						l = 0;
						y = 0;

						while (y > -this.scrollerHeight) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};

							y -= stepY;
							l++;
						}

						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;

					for (; i < l; i++) {
						if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
							m = 0;
							n++;
						}

						if (!this.pages[m]) {
							this.pages[m] = [];
						}

						x = Math.max(-el[i].offsetLeft, this.maxScrollX);
						y = Math.max(-el[i].offsetTop, this.maxScrollY);
						cx = x - Math.round(el[i].offsetWidth / 2);
						cy = y - Math.round(el[i].offsetHeight / 2);

						this.pages[m][n] = {
							x: x,
							y: y,
							width: el[i].offsetWidth,
							height: el[i].offsetHeight,
							cx: cx,
							cy: cy
						};

						if (x > this.maxScrollX) {
							m++;
						}
					}
				}

				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

				// Update snap threshold if needed
				if (this.options.snapThreshold % 1 === 0) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});

			this.on('flick', function () {
				var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);

				this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
			});
		},

		_nearestSnap: function _nearestSnap(x, y) {
			if (!this.pages.length) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}

			var i = 0,
			    l = this.pages.length,
			    m = 0;

			// Check if we exceeded the snap threshold
			if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
				return this.currentPage;
			}

			if (x > 0) {
				x = 0;
			} else if (x < this.maxScrollX) {
				x = this.maxScrollX;
			}

			if (y > 0) {
				y = 0;
			} else if (y < this.maxScrollY) {
				y = this.maxScrollY;
			}

			for (; i < l; i++) {
				if (x >= this.pages[i][0].cx) {
					x = this.pages[i][0].x;
					break;
				}
			}

			l = this.pages[i].length;

			for (; m < l; m++) {
				if (y >= this.pages[0][m].cy) {
					y = this.pages[0][m].y;
					break;
				}
			}

			if (i == this.currentPage.pageX) {
				i += this.directionX;

				if (i < 0) {
					i = 0;
				} else if (i >= this.pages.length) {
					i = this.pages.length - 1;
				}

				x = this.pages[i][0].x;
			}

			if (m == this.currentPage.pageY) {
				m += this.directionY;

				if (m < 0) {
					m = 0;
				} else if (m >= this.pages[0].length) {
					m = this.pages[0].length - 1;
				}

				y = this.pages[0][m].y;
			}

			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			};
		},

		goToPage: function goToPage(x, y, time, easing) {
			easing = easing || this.options.bounceEasing;

			if (x >= this.pages.length) {
				x = this.pages.length - 1;
			} else if (x < 0) {
				x = 0;
			}

			if (y >= this.pages[x].length) {
				y = this.pages[x].length - 1;
			} else if (y < 0) {
				y = 0;
			}

			var posX = this.pages[x][y].x,
			    posY = this.pages[x][y].y;

			time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};

			this.scrollTo(posX, posY, time, easing);
		},

		next: function next(time, easing) {
			var x = this.currentPage.pageX,
			    y = this.currentPage.pageY;

			x++;

			if (x >= this.pages.length && this.hasVerticalScroll) {
				x = 0;
				y++;
			}

			this.goToPage(x, y, time, easing);
		},

		prev: function prev(time, easing) {
			var x = this.currentPage.pageX,
			    y = this.currentPage.pageY;

			x--;

			if (x < 0 && this.hasVerticalScroll) {
				x = 0;
				y--;
			}

			this.goToPage(x, y, time, easing);
		},

		_initKeys: function _initKeys(e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;

			// if you give me characters I give you keycode
			if (_typeof(this.options.keyBindings) == 'object') {
				for (i in this.options.keyBindings) {
					if (typeof this.options.keyBindings[i] == 'string') {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}

			for (i in keys) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}

			utils.addEvent(window, 'keydown', this);

			this.on('destroy', function () {
				utils.removeEvent(window, 'keydown', this);
			});
		},

		_key: function _key(e) {
			if (!this.enabled) {
				return;
			}

			var snap = this.options.snap,
			    // we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			    newY = snap ? this.currentPage.pageY : this.y,
			    now = utils.getTime(),
			    prevTime = this.keyTime || 0,
			    acceleration = 0.250,
			    pos;

			if (this.options.useTransition && this.isInTransition) {
				pos = this.getComputedPosition();

				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}

			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

			switch (e.keyCode) {
				case this.options.keyBindings.pageUp:
					if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length - 1 : this.maxScrollX;
					newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
					break;
				default:
					return;
			}

			if (snap) {
				this.goToPage(newX, newY);
				return;
			}

			if (newX > 0) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if (newX < this.maxScrollX) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}

			if (newY > 0) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if (newY < this.maxScrollY) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}

			this.scrollTo(newX, newY, 0);

			this.keyTime = now;
		},

		_animate: function _animate(destX, destY, duration, easingFn) {
			var that = this,
			    startX = this.x,
			    startY = this.y,
			    startTime = utils.getTime(),
			    destTime = startTime + duration;

			function step() {
				var now = utils.getTime(),
				    newX,
				    newY,
				    easing;

				if (now >= destTime) {
					that.isAnimating = false;
					that._translate(destX, destY);

					if (!that.resetPosition(that.options.bounceTime)) {
						that._execEvent('scrollEnd');
					}

					return;
				}

				now = (now - startTime) / duration;
				easing = easingFn(now);
				newX = (destX - startX) * easing + startX;
				newY = (destY - startY) * easing + startY;
				that._translate(newX, newY);

				if (that.isAnimating) {
					rAF(step);
				}
			}

			this.isAnimating = true;
			step();
		},
		handleEvent: function handleEvent(e) {
			switch (e.type) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if (!e._constructed) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	function createDefaultScrollbar(direction, interactive, type) {
		var scrollbar = document.createElement('div'),
		    indicator = document.createElement('div');

		if (type === true) {
			scrollbar.style.cssText = 'position:absolute;z-index:9999';
			indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
		}

		indicator.className = 'iScrollIndicator';

		if (direction == 'h') {
			if (type === true) {
				scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
				indicator.style.height = '100%';
			}
			scrollbar.className = 'iScrollHorizontalScrollbar';
		} else {
			if (type === true) {
				scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
				indicator.style.width = '100%';
			}
			scrollbar.className = 'iScrollVerticalScrollbar';
		}

		scrollbar.style.cssText += ';overflow:hidden';

		if (!interactive) {
			scrollbar.style.pointerEvents = 'none';
		}

		scrollbar.appendChild(indicator);

		return scrollbar;
	}

	function Indicator(scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;

		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};

		for (var i in options) {
			this.options[i] = options[i];
		}

		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;

		if (this.options.interactive) {
			if (!this.options.disableTouch) {
				utils.addEvent(this.indicator, 'touchstart', this);
				utils.addEvent(window, 'touchend', this);
			}
			if (!this.options.disablePointer) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
			}
			if (!this.options.disableMouse) {
				utils.addEvent(this.indicator, 'mousedown', this);
				utils.addEvent(window, 'mouseup', this);
			}
		}

		if (this.options.fade) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
			this.wrapperStyle.opacity = '0';
		}
	}

	Indicator.prototype = {
		handleEvent: function handleEvent(e) {
			switch (e.type) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
			}
		},

		destroy: function destroy() {
			if (this.options.interactive) {
				utils.removeEvent(this.indicator, 'touchstart', this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.removeEvent(this.indicator, 'mousedown', this);

				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);

				utils.removeEvent(window, 'touchend', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
				utils.removeEvent(window, 'mouseup', this);
			}

			if (this.options.defaultScrollbars) {
				this.wrapper.parentNode.removeChild(this.wrapper);
			}
		},

		_start: function _start(e) {
			var point = e.touches ? e.touches[0] : e;

			e.preventDefault();
			e.stopPropagation();

			this.transitionTime();

			this.initiated = true;
			this.moved = false;
			this.lastPointX = point.pageX;
			this.lastPointY = point.pageY;

			this.startTime = utils.getTime();

			if (!this.options.disableTouch) {
				utils.addEvent(window, 'touchmove', this);
			}
			if (!this.options.disablePointer) {
				utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
			}
			if (!this.options.disableMouse) {
				utils.addEvent(window, 'mousemove', this);
			}

			this.scroller._execEvent('beforeScrollStart');
		},

		_move: function _move(e) {
			var point = e.touches ? e.touches[0] : e,
			    deltaX,
			    deltaY,
			    newX,
			    newY,
			    timestamp = utils.getTime();

			if (!this.moved) {
				this.scroller._execEvent('scrollStart');
			}

			this.moved = true;

			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;

			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			this._pos(newX, newY);

			// INSERT POINT: indicator._move

			e.preventDefault();
			e.stopPropagation();
		},

		_end: function _end(e) {
			if (!this.initiated) {
				return;
			}

			this.initiated = false;

			e.preventDefault();
			e.stopPropagation();

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			if (this.scroller.options.snap) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

				var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

				if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
				}
			}

			if (this.moved) {
				this.scroller._execEvent('scrollEnd');
			}
		},

		transitionTime: function transitionTime(time) {
			time = time || 0;
			this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

			if (!time && utils.isBadAndroid) {
				this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
			}
		},

		transitionTimingFunction: function transitionTimingFunction(easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
		},

		refresh: function refresh() {
			this.transitionTime();

			if (this.options.listenX && !this.options.listenY) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
			} else if (this.options.listenY && !this.options.listenX) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
			}

			if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
				utils.addClass(this.wrapper, 'iScrollBothScrollbars');
				utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

				if (this.options.defaultScrollbars && this.options.customStyle) {
					if (this.options.listenX) {
						this.wrapper.style.right = '8px';
					} else {
						this.wrapper.style.bottom = '8px';
					}
				}
			} else {
				utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
				utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

				if (this.options.defaultScrollbars && this.options.customStyle) {
					if (this.options.listenX) {
						this.wrapper.style.right = '2px';
					} else {
						this.wrapper.style.bottom = '2px';
					}
				}
			}

			var r = this.wrapper.offsetHeight; // force refresh

			if (this.options.listenX) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if (this.options.resize) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + 'px';
				} else {
					this.indicatorWidth = this.indicator.clientWidth;
				}

				this.maxPosX = this.wrapperWidth - this.indicatorWidth;

				if (this.options.shrink == 'clip') {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8;
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX;
				}

				this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
			}

			if (this.options.listenY) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if (this.options.resize) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + 'px';
				} else {
					this.indicatorHeight = this.indicator.clientHeight;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;

				if (this.options.shrink == 'clip') {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8;
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
			}

			this.updatePosition();
		},

		updatePosition: function updatePosition() {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			    y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

			if (!this.options.ignoreBoundaries) {
				if (x < this.minBoundaryX) {
					if (this.options.shrink == 'scale') {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + 'px';
					}
					x = this.minBoundaryX;
				} else if (x > this.maxBoundaryX) {
					if (this.options.shrink == 'scale') {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + 'px';
						x = this.maxPosX + this.indicatorWidth - this.width;
					} else {
						x = this.maxBoundaryX;
					}
				} else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + 'px';
				}

				if (y < this.minBoundaryY) {
					if (this.options.shrink == 'scale') {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
					}
					y = this.minBoundaryY;
				} else if (y > this.maxBoundaryY) {
					if (this.options.shrink == 'scale') {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
						y = this.maxPosY + this.indicatorHeight - this.height;
					} else {
						y = this.maxBoundaryY;
					}
				} else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + 'px';
				}
			}

			this.x = x;
			this.y = y;

			if (this.scroller.options.useTransform) {
				this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
			} else {
				this.indicatorStyle.left = x + 'px';
				this.indicatorStyle.top = y + 'px';
			}
		},

		_pos: function _pos(x, y) {
			if (x < 0) {
				x = 0;
			} else if (x > this.maxPosX) {
				x = this.maxPosX;
			}

			if (y < 0) {
				y = 0;
			} else if (y > this.maxPosY) {
				y = this.maxPosY;
			}

			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

			this.scroller.scrollTo(x, y);
		},

		fade: function fade(val, hold) {
			if (hold && !this.visible) {
				return;
			}

			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;

			var time = val ? 250 : 500,
			    delay = val ? 0 : 300;

			val = val ? '1' : '0';

			this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

			this.fadeTimeout = setTimeout(function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val;
			}.bind(this, val), delay);
		}
	};

	IScroll.utils = utils;

	if (typeof module != 'undefined' && module.exports) {
		module.exports = IScroll;
	} else {
		window.IScroll = IScroll;
	}
})(window, document, Math);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Swiper 3.4.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: October 16, 2016
 */
!function () {
  "use strict";
  function e(e) {
    e.fn.swiper = function (a) {
      var s;return e(this).each(function () {
        var e = new t(this, a);s || (s = e);
      }), s;
    };
  }var a,
      t = function t(e, i) {
    function n(e) {
      return Math.floor(e);
    }function o() {
      var e = S.params.autoplay,
          a = S.slides.eq(S.activeIndex);a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || S.params.autoplay), S.autoplayTimeoutId = setTimeout(function () {
        S.params.loop ? (S.fixLoop(), S._slideNext(), S.emit("onAutoplay", S)) : S.isEnd ? i.autoplayStopOnLast ? S.stopAutoplay() : (S._slideTo(0), S.emit("onAutoplay", S)) : (S._slideNext(), S.emit("onAutoplay", S));
      }, e);
    }function l(e, t) {
      var s = a(e.target);if (!s.is(t)) if ("string" == typeof t) s = s.parents(t);else if (t.nodeType) {
        var i;return s.parents().each(function (e, a) {
          a === t && (i = t);
        }), i ? t : void 0;
      }if (0 !== s.length) return s[0];
    }function p(e, a) {
      a = a || {};var t = window.MutationObserver || window.WebkitMutationObserver,
          s = new t(function (e) {
        e.forEach(function (e) {
          S.onResize(!0), S.emit("onObserverUpdate", S, e);
        });
      });s.observe(e, { attributes: "undefined" == typeof a.attributes || a.attributes, childList: "undefined" == typeof a.childList || a.childList, characterData: "undefined" == typeof a.characterData || a.characterData }), S.observers.push(s);
    }function d(e) {
      e.originalEvent && (e = e.originalEvent);var a = e.keyCode || e.charCode;if (!S.params.allowSwipeToNext && (S.isHorizontal() && 39 === a || !S.isHorizontal() && 40 === a)) return !1;if (!S.params.allowSwipeToPrev && (S.isHorizontal() && 37 === a || !S.isHorizontal() && 38 === a)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
        if (37 === a || 39 === a || 38 === a || 40 === a) {
          var t = !1;if (S.container.parents("." + S.params.slideClass).length > 0 && 0 === S.container.parents("." + S.params.slideActiveClass).length) return;var s = { left: window.pageXOffset, top: window.pageYOffset },
              i = window.innerWidth,
              r = window.innerHeight,
              n = S.container.offset();S.rtl && (n.left = n.left - S.container[0].scrollLeft);for (var o = [[n.left, n.top], [n.left + S.width, n.top], [n.left, n.top + S.height], [n.left + S.width, n.top + S.height]], l = 0; l < o.length; l++) {
            var p = o[l];p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0);
          }if (!t) return;
        }S.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !S.rtl || 37 === a && S.rtl) && S.slideNext(), (37 === a && !S.rtl || 39 === a && S.rtl) && S.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && S.slideNext(), 38 === a && S.slidePrev());
      }
    }function u() {
      var e = "onwheel",
          a = e in document;if (!a) {
        var t = document.createElement("div");t.setAttribute(e, "return;"), a = "function" == typeof t[e];
      }return !a && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
    }function c(e) {
      e.originalEvent && (e = e.originalEvent);var a = 0,
          t = S.rtl ? -1 : 1,
          s = m(e);if (S.params.mousewheelForceToAxis) {
        if (S.isHorizontal()) {
          if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;a = s.pixelX * t;
        } else {
          if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;a = s.pixelY;
        }
      } else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;if (0 !== a) {
        if (S.params.mousewheelInvert && (a = -a), S.params.freeMode) {
          var i = S.getWrapperTranslate() + a * S.params.mousewheelSensitivity,
              r = S.isBeginning,
              n = S.isEnd;if (i >= S.minTranslate() && (i = S.minTranslate()), i <= S.maxTranslate() && (i = S.maxTranslate()), S.setWrapperTransition(0), S.setWrapperTranslate(i), S.updateProgress(), S.updateActiveIndex(), (!r && S.isBeginning || !n && S.isEnd) && S.updateClasses(), S.params.freeModeSticky ? (clearTimeout(S.mousewheel.timeout), S.mousewheel.timeout = setTimeout(function () {
            S.slideReset();
          }, 300)) : S.params.lazyLoading && S.lazy && S.lazy.load(), S.emit("onScroll", S, e), S.params.autoplay && S.params.autoplayDisableOnInteraction && S.stopAutoplay(), 0 === i || i === S.maxTranslate()) return;
        } else {
          if (new window.Date().getTime() - S.mousewheel.lastScrollTime > 60) if (a < 0) {
            if (S.isEnd && !S.params.loop || S.animating) {
              if (S.params.mousewheelReleaseOnEdges) return !0;
            } else S.slideNext(), S.emit("onScroll", S, e);
          } else if (S.isBeginning && !S.params.loop || S.animating) {
            if (S.params.mousewheelReleaseOnEdges) return !0;
          } else S.slidePrev(), S.emit("onScroll", S, e);S.mousewheel.lastScrollTime = new window.Date().getTime();
        }return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
      }
    }function m(e) {
      var a = 10,
          t = 40,
          s = 800,
          i = 0,
          r = 0,
          n = 0,
          o = 0;return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (i = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (i = r, r = 0), n = i * a, o = r * a, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= t, o *= t) : (n *= s, o *= s)), n && !i && (i = n < 1 ? -1 : 1), o && !r && (r = o < 1 ? -1 : 1), { spinX: i, spinY: r, pixelX: n, pixelY: o };
    }function h(e, t) {
      e = a(e);var s,
          i,
          r,
          n = S.rtl ? -1 : 1;s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), r = e.attr("data-swiper-parallax-y"), i || r ? (i = i || "0", r = r || "0") : S.isHorizontal() ? (i = s, r = "0") : (r = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px", e.transform("translate3d(" + i + ", " + r + ",0px)");
    }function g(e) {
      return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
    }if (!(this instanceof t)) return new t(e, i);var f = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, zoom: !1, zoomMax: 3, zoomMin: 1, zoomToggle: !0, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, mousewheelEventsTarged: "container", hashnav: !1, hashnavWatchState: !1, history: !1, replaceState: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", normalizeSlideIndex: !0, allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", paginationClickableClass: "swiper-pagination-clickable", paginationModifierClass: "swiper-pagination-", lazyLoadingClass: "swiper-lazy", lazyStatusLoadingClass: "swiper-lazy-loading", lazyStatusLoadedClass: "swiper-lazy-loaded", lazyPreloaderClass: "swiper-lazy-preloader", notificationClass: "swiper-notification", preloaderClass: "preloader", zoomContainerClass: "swiper-zoom-container", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
        v = i && i.virtualTranslate;i = i || {};var w = {};for (var y in i) {
      if ("object" != _typeof(i[y]) || null === i[y] || i[y].nodeType || i[y] === window || i[y] === document || "undefined" != typeof s && i[y] instanceof s || "undefined" != typeof jQuery && i[y] instanceof jQuery) w[y] = i[y];else {
        w[y] = {};for (var x in i[y]) {
          w[y][x] = i[y][x];
        }
      }
    }for (var T in f) {
      if ("undefined" == typeof i[T]) i[T] = f[T];else if ("object" == _typeof(i[T])) for (var b in f[T]) {
        "undefined" == typeof i[T][b] && (i[T][b] = f[T][b]);
      }
    }var S = this;if (S.params = i, S.originalParams = w, S.classNames = [], "undefined" != typeof a && "undefined" != typeof s && (a = s), ("undefined" != typeof a || (a = "undefined" == typeof s ? window.Dom7 || window.Zepto || window.jQuery : s)) && (S.$ = a, S.currentBreakpoint = void 0, S.getActiveBreakpoint = function () {
      if (!S.params.breakpoints) return !1;var e,
          a = !1,
          t = [];for (e in S.params.breakpoints) {
        S.params.breakpoints.hasOwnProperty(e) && t.push(e);
      }t.sort(function (e, a) {
        return parseInt(e, 10) > parseInt(a, 10);
      });for (var s = 0; s < t.length; s++) {
        e = t[s], e >= window.innerWidth && !a && (a = e);
      }return a || "max";
    }, S.setBreakpoint = function () {
      var e = S.getActiveBreakpoint();if (e && S.currentBreakpoint !== e) {
        var a = e in S.params.breakpoints ? S.params.breakpoints[e] : S.originalParams,
            t = S.params.loop && a.slidesPerView !== S.params.slidesPerView;for (var s in a) {
          S.params[s] = a[s];
        }S.currentBreakpoint = e, t && S.destroyLoop && S.reLoop(!0);
      }
    }, S.params.breakpoints && S.setBreakpoint(), S.container = a(e), 0 !== S.container.length)) {
      if (S.container.length > 1) {
        var C = [];return S.container.each(function () {
          C.push(new t(this, i));
        }), C;
      }S.container[0].swiper = S, S.container.data("swiper", S), S.classNames.push(S.params.containerModifierClass + S.params.direction), S.params.freeMode && S.classNames.push(S.params.containerModifierClass + "free-mode"), S.support.flexbox || (S.classNames.push(S.params.containerModifierClass + "no-flexbox"), S.params.slidesPerColumn = 1), S.params.autoHeight && S.classNames.push(S.params.containerModifierClass + "autoheight"), (S.params.parallax || S.params.watchSlidesVisibility) && (S.params.watchSlidesProgress = !0), S.params.touchReleaseOnEdges && (S.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(S.params.effect) >= 0 && (S.support.transforms3d ? (S.params.watchSlidesProgress = !0, S.classNames.push(S.params.containerModifierClass + "3d")) : S.params.effect = "slide"), "slide" !== S.params.effect && S.classNames.push(S.params.containerModifierClass + S.params.effect), "cube" === S.params.effect && (S.params.resistanceRatio = 0, S.params.slidesPerView = 1, S.params.slidesPerColumn = 1, S.params.slidesPerGroup = 1, S.params.centeredSlides = !1, S.params.spaceBetween = 0, S.params.virtualTranslate = !0, S.params.setWrapperSize = !1), "fade" !== S.params.effect && "flip" !== S.params.effect || (S.params.slidesPerView = 1, S.params.slidesPerColumn = 1, S.params.slidesPerGroup = 1, S.params.watchSlidesProgress = !0, S.params.spaceBetween = 0, S.params.setWrapperSize = !1, "undefined" == typeof v && (S.params.virtualTranslate = !0)), S.params.grabCursor && S.support.touch && (S.params.grabCursor = !1), S.wrapper = S.container.children("." + S.params.wrapperClass), S.params.pagination && (S.paginationContainer = a(S.params.pagination), S.params.uniqueNavElements && "string" == typeof S.params.pagination && S.paginationContainer.length > 1 && 1 === S.container.find(S.params.pagination).length && (S.paginationContainer = S.container.find(S.params.pagination)), "bullets" === S.params.paginationType && S.params.paginationClickable ? S.paginationContainer.addClass(S.params.paginationModifierClass + "clickable") : S.params.paginationClickable = !1, S.paginationContainer.addClass(S.params.paginationModifierClass + S.params.paginationType)), (S.params.nextButton || S.params.prevButton) && (S.params.nextButton && (S.nextButton = a(S.params.nextButton), S.params.uniqueNavElements && "string" == typeof S.params.nextButton && S.nextButton.length > 1 && 1 === S.container.find(S.params.nextButton).length && (S.nextButton = S.container.find(S.params.nextButton))), S.params.prevButton && (S.prevButton = a(S.params.prevButton), S.params.uniqueNavElements && "string" == typeof S.params.prevButton && S.prevButton.length > 1 && 1 === S.container.find(S.params.prevButton).length && (S.prevButton = S.container.find(S.params.prevButton)))), S.isHorizontal = function () {
        return "horizontal" === S.params.direction;
      }, S.rtl = S.isHorizontal() && ("rtl" === S.container[0].dir.toLowerCase() || "rtl" === S.container.css("direction")), S.rtl && S.classNames.push(S.params.containerModifierClass + "rtl"), S.rtl && (S.wrongRTL = "-webkit-box" === S.wrapper.css("display")), S.params.slidesPerColumn > 1 && S.classNames.push(S.params.containerModifierClass + "multirow"), S.device.android && S.classNames.push(S.params.containerModifierClass + "android"), S.container.addClass(S.classNames.join(" ")), S.translate = 0, S.progress = 0, S.velocity = 0, S.lockSwipeToNext = function () {
        S.params.allowSwipeToNext = !1, S.params.allowSwipeToPrev === !1 && S.params.grabCursor && S.unsetGrabCursor();
      }, S.lockSwipeToPrev = function () {
        S.params.allowSwipeToPrev = !1, S.params.allowSwipeToNext === !1 && S.params.grabCursor && S.unsetGrabCursor();
      }, S.lockSwipes = function () {
        S.params.allowSwipeToNext = S.params.allowSwipeToPrev = !1, S.params.grabCursor && S.unsetGrabCursor();
      }, S.unlockSwipeToNext = function () {
        S.params.allowSwipeToNext = !0, S.params.allowSwipeToPrev === !0 && S.params.grabCursor && S.setGrabCursor();
      }, S.unlockSwipeToPrev = function () {
        S.params.allowSwipeToPrev = !0, S.params.allowSwipeToNext === !0 && S.params.grabCursor && S.setGrabCursor();
      }, S.unlockSwipes = function () {
        S.params.allowSwipeToNext = S.params.allowSwipeToPrev = !0, S.params.grabCursor && S.setGrabCursor();
      }, S.setGrabCursor = function (e) {
        S.container[0].style.cursor = "move", S.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", S.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", S.container[0].style.cursor = e ? "grabbing" : "grab";
      }, S.unsetGrabCursor = function () {
        S.container[0].style.cursor = "";
      }, S.params.grabCursor && S.setGrabCursor(), S.imagesToLoad = [], S.imagesLoaded = 0, S.loadImage = function (e, a, t, s, i, r) {
        function n() {
          r && r();
        }var o;e.complete && i ? n() : a ? (o = new window.Image(), o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a)) : n();
      }, S.preloadImages = function () {
        function e() {
          "undefined" != typeof S && null !== S && (void 0 !== S.imagesLoaded && S.imagesLoaded++, S.imagesLoaded === S.imagesToLoad.length && (S.params.updateOnImagesReady && S.update(), S.emit("onImagesReady", S)));
        }S.imagesToLoad = S.container.find("img");for (var a = 0; a < S.imagesToLoad.length; a++) {
          S.loadImage(S.imagesToLoad[a], S.imagesToLoad[a].currentSrc || S.imagesToLoad[a].getAttribute("src"), S.imagesToLoad[a].srcset || S.imagesToLoad[a].getAttribute("srcset"), S.imagesToLoad[a].sizes || S.imagesToLoad[a].getAttribute("sizes"), !0, e);
        }
      }, S.autoplayTimeoutId = void 0, S.autoplaying = !1, S.autoplayPaused = !1, S.startAutoplay = function () {
        return "undefined" == typeof S.autoplayTimeoutId && !!S.params.autoplay && !S.autoplaying && (S.autoplaying = !0, S.emit("onAutoplayStart", S), void o());
      }, S.stopAutoplay = function (e) {
        S.autoplayTimeoutId && (S.autoplayTimeoutId && clearTimeout(S.autoplayTimeoutId), S.autoplaying = !1, S.autoplayTimeoutId = void 0, S.emit("onAutoplayStop", S));
      }, S.pauseAutoplay = function (e) {
        S.autoplayPaused || (S.autoplayTimeoutId && clearTimeout(S.autoplayTimeoutId), S.autoplayPaused = !0, 0 === e ? (S.autoplayPaused = !1, o()) : S.wrapper.transitionEnd(function () {
          S && (S.autoplayPaused = !1, S.autoplaying ? o() : S.stopAutoplay());
        }));
      }, S.minTranslate = function () {
        return -S.snapGrid[0];
      }, S.maxTranslate = function () {
        return -S.snapGrid[S.snapGrid.length - 1];
      }, S.updateAutoHeight = function () {
        var e = [],
            a = 0;if ("auto" !== S.params.slidesPerView && S.params.slidesPerView > 1) for (r = 0; r < Math.ceil(S.params.slidesPerView); r++) {
          var t = S.activeIndex + r;if (t > S.slides.length) break;e.push(S.slides.eq(t)[0]);
        } else e.push(S.slides.eq(S.activeIndex)[0]);for (r = 0; r < e.length; r++) {
          if ("undefined" != typeof e[r]) {
            var s = e[r].offsetHeight;a = s > a ? s : a;
          }
        }a && S.wrapper.css("height", a + "px");
      }, S.updateContainerSize = function () {
        var e, a;e = "undefined" != typeof S.params.width ? S.params.width : S.container[0].clientWidth, a = "undefined" != typeof S.params.height ? S.params.height : S.container[0].clientHeight, 0 === e && S.isHorizontal() || 0 === a && !S.isHorizontal() || (e = e - parseInt(S.container.css("padding-left"), 10) - parseInt(S.container.css("padding-right"), 10), a = a - parseInt(S.container.css("padding-top"), 10) - parseInt(S.container.css("padding-bottom"), 10), S.width = e, S.height = a, S.size = S.isHorizontal() ? S.width : S.height);
      }, S.updateSlidesSize = function () {
        S.slides = S.wrapper.children("." + S.params.slideClass), S.snapGrid = [], S.slidesGrid = [], S.slidesSizesGrid = [];var e,
            a = S.params.spaceBetween,
            t = -S.params.slidesOffsetBefore,
            s = 0,
            i = 0;if ("undefined" != typeof S.size) {
          "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * S.size), S.virtualSize = -a, S.rtl ? S.slides.css({ marginLeft: "", marginTop: "" }) : S.slides.css({ marginRight: "", marginBottom: "" });var r;S.params.slidesPerColumn > 1 && (r = Math.floor(S.slides.length / S.params.slidesPerColumn) === S.slides.length / S.params.slidesPerColumn ? S.slides.length : Math.ceil(S.slides.length / S.params.slidesPerColumn) * S.params.slidesPerColumn, "auto" !== S.params.slidesPerView && "row" === S.params.slidesPerColumnFill && (r = Math.max(r, S.params.slidesPerView * S.params.slidesPerColumn)));var o,
              l = S.params.slidesPerColumn,
              p = r / l,
              d = p - (S.params.slidesPerColumn * p - S.slides.length);for (e = 0; e < S.slides.length; e++) {
            o = 0;var u = S.slides.eq(e);if (S.params.slidesPerColumn > 1) {
              var c, m, h;"column" === S.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * r / l, u.css({ "-webkit-box-ordinal-group": c, "-moz-box-ordinal-group": c, "-ms-flex-order": c, "-webkit-order": c, order: c })) : (h = Math.floor(e / p), m = e - h * p), u.css("margin-" + (S.isHorizontal() ? "top" : "left"), 0 !== h && S.params.spaceBetween && S.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h);
            }"none" !== u.css("display") && ("auto" === S.params.slidesPerView ? (o = S.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), S.params.roundLengths && (o = n(o))) : (o = (S.size - (S.params.slidesPerView - 1) * a) / S.params.slidesPerView, S.params.roundLengths && (o = n(o)), S.isHorizontal() ? S.slides[e].style.width = o + "px" : S.slides[e].style.height = o + "px"), S.slides[e].swiperSlideSize = o, S.slidesSizesGrid.push(o), S.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === e && (t = t - S.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % S.params.slidesPerGroup === 0 && S.snapGrid.push(t), S.slidesGrid.push(t)) : (i % S.params.slidesPerGroup === 0 && S.snapGrid.push(t), S.slidesGrid.push(t), t = t + o + a), S.virtualSize += o + a, s = o, i++);
          }S.virtualSize = Math.max(S.virtualSize, S.size) + S.params.slidesOffsetAfter;var g;if (S.rtl && S.wrongRTL && ("slide" === S.params.effect || "coverflow" === S.params.effect) && S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }), S.support.flexbox && !S.params.setWrapperSize || (S.isHorizontal() ? S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }) : S.wrapper.css({ height: S.virtualSize + S.params.spaceBetween + "px" })), S.params.slidesPerColumn > 1 && (S.virtualSize = (o + S.params.spaceBetween) * r, S.virtualSize = Math.ceil(S.virtualSize / S.params.slidesPerColumn) - S.params.spaceBetween, S.isHorizontal() ? S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }) : S.wrapper.css({ height: S.virtualSize + S.params.spaceBetween + "px" }), S.params.centeredSlides)) {
            for (g = [], e = 0; e < S.snapGrid.length; e++) {
              S.snapGrid[e] < S.virtualSize + S.snapGrid[0] && g.push(S.snapGrid[e]);
            }S.snapGrid = g;
          }if (!S.params.centeredSlides) {
            for (g = [], e = 0; e < S.snapGrid.length; e++) {
              S.snapGrid[e] <= S.virtualSize - S.size && g.push(S.snapGrid[e]);
            }S.snapGrid = g, Math.floor(S.virtualSize - S.size) - Math.floor(S.snapGrid[S.snapGrid.length - 1]) > 1 && S.snapGrid.push(S.virtualSize - S.size);
          }0 === S.snapGrid.length && (S.snapGrid = [0]), 0 !== S.params.spaceBetween && (S.isHorizontal() ? S.rtl ? S.slides.css({ marginLeft: a + "px" }) : S.slides.css({ marginRight: a + "px" }) : S.slides.css({ marginBottom: a + "px" })), S.params.watchSlidesProgress && S.updateSlidesOffset();
        }
      }, S.updateSlidesOffset = function () {
        for (var e = 0; e < S.slides.length; e++) {
          S.slides[e].swiperSlideOffset = S.isHorizontal() ? S.slides[e].offsetLeft : S.slides[e].offsetTop;
        }
      }, S.updateSlidesProgress = function (e) {
        if ("undefined" == typeof e && (e = S.translate || 0), 0 !== S.slides.length) {
          "undefined" == typeof S.slides[0].swiperSlideOffset && S.updateSlidesOffset();var a = -e;S.rtl && (a = e), S.slides.removeClass(S.params.slideVisibleClass);for (var t = 0; t < S.slides.length; t++) {
            var s = S.slides[t],
                i = (a + (S.params.centeredSlides ? S.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + S.params.spaceBetween);if (S.params.watchSlidesVisibility) {
              var r = -(a - s.swiperSlideOffset),
                  n = r + S.slidesSizesGrid[t],
                  o = r >= 0 && r < S.size || n > 0 && n <= S.size || r <= 0 && n >= S.size;o && S.slides.eq(t).addClass(S.params.slideVisibleClass);
            }s.progress = S.rtl ? -i : i;
          }
        }
      }, S.updateProgress = function (e) {
        "undefined" == typeof e && (e = S.translate || 0);var a = S.maxTranslate() - S.minTranslate(),
            t = S.isBeginning,
            s = S.isEnd;0 === a ? (S.progress = 0, S.isBeginning = S.isEnd = !0) : (S.progress = (e - S.minTranslate()) / a, S.isBeginning = S.progress <= 0, S.isEnd = S.progress >= 1), S.isBeginning && !t && S.emit("onReachBeginning", S), S.isEnd && !s && S.emit("onReachEnd", S), S.params.watchSlidesProgress && S.updateSlidesProgress(e), S.emit("onProgress", S, S.progress);
      }, S.updateActiveIndex = function () {
        var e,
            a,
            t,
            s = S.rtl ? S.translate : -S.translate;for (a = 0; a < S.slidesGrid.length; a++) {
          "undefined" != typeof S.slidesGrid[a + 1] ? s >= S.slidesGrid[a] && s < S.slidesGrid[a + 1] - (S.slidesGrid[a + 1] - S.slidesGrid[a]) / 2 ? e = a : s >= S.slidesGrid[a] && s < S.slidesGrid[a + 1] && (e = a + 1) : s >= S.slidesGrid[a] && (e = a);
        }S.params.normalizeSlideIndex && (e < 0 || "undefined" == typeof e) && (e = 0), t = Math.floor(e / S.params.slidesPerGroup), t >= S.snapGrid.length && (t = S.snapGrid.length - 1), e !== S.activeIndex && (S.snapIndex = t, S.previousIndex = S.activeIndex, S.activeIndex = e, S.updateClasses(), S.updateRealIndex());
      }, S.updateRealIndex = function () {
        S.realIndex = S.slides.eq(S.activeIndex).attr("data-swiper-slide-index") || S.activeIndex;
      }, S.updateClasses = function () {
        S.slides.removeClass(S.params.slideActiveClass + " " + S.params.slideNextClass + " " + S.params.slidePrevClass + " " + S.params.slideDuplicateActiveClass + " " + S.params.slideDuplicateNextClass + " " + S.params.slideDuplicatePrevClass);var e = S.slides.eq(S.activeIndex);e.addClass(S.params.slideActiveClass), i.loop && (e.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + S.realIndex + '"]').addClass(S.params.slideDuplicateActiveClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + S.realIndex + '"]').addClass(S.params.slideDuplicateActiveClass));var t = e.next("." + S.params.slideClass).addClass(S.params.slideNextClass);S.params.loop && 0 === t.length && (t = S.slides.eq(0), t.addClass(S.params.slideNextClass));var s = e.prev("." + S.params.slideClass).addClass(S.params.slidePrevClass);if (S.params.loop && 0 === s.length && (s = S.slides.eq(-1), s.addClass(S.params.slidePrevClass)), i.loop && (t.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicateNextClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicateNextClass), s.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicatePrevClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicatePrevClass)), S.paginationContainer && S.paginationContainer.length > 0) {
          var r,
              n = S.params.loop ? Math.ceil((S.slides.length - 2 * S.loopedSlides) / S.params.slidesPerGroup) : S.snapGrid.length;if (S.params.loop ? (r = Math.ceil((S.activeIndex - S.loopedSlides) / S.params.slidesPerGroup), r > S.slides.length - 1 - 2 * S.loopedSlides && (r -= S.slides.length - 2 * S.loopedSlides), r > n - 1 && (r -= n), r < 0 && "bullets" !== S.params.paginationType && (r = n + r)) : r = "undefined" != typeof S.snapIndex ? S.snapIndex : S.activeIndex || 0, "bullets" === S.params.paginationType && S.bullets && S.bullets.length > 0 && (S.bullets.removeClass(S.params.bulletActiveClass), S.paginationContainer.length > 1 ? S.bullets.each(function () {
            a(this).index() === r && a(this).addClass(S.params.bulletActiveClass);
          }) : S.bullets.eq(r).addClass(S.params.bulletActiveClass)), "fraction" === S.params.paginationType && (S.paginationContainer.find("." + S.params.paginationCurrentClass).text(r + 1), S.paginationContainer.find("." + S.params.paginationTotalClass).text(n)), "progress" === S.params.paginationType) {
            var o = (r + 1) / n,
                l = o,
                p = 1;S.isHorizontal() || (p = o, l = 1), S.paginationContainer.find("." + S.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(S.params.speed);
          }"custom" === S.params.paginationType && S.params.paginationCustomRender && (S.paginationContainer.html(S.params.paginationCustomRender(S, r + 1, n)), S.emit("onPaginationRendered", S, S.paginationContainer[0]));
        }S.params.loop || (S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.isBeginning ? (S.prevButton.addClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.disable(S.prevButton)) : (S.prevButton.removeClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.enable(S.prevButton))), S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.isEnd ? (S.nextButton.addClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.disable(S.nextButton)) : (S.nextButton.removeClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.enable(S.nextButton))));
      }, S.updatePagination = function () {
        if (S.params.pagination && S.paginationContainer && S.paginationContainer.length > 0) {
          var e = "";if ("bullets" === S.params.paginationType) {
            for (var a = S.params.loop ? Math.ceil((S.slides.length - 2 * S.loopedSlides) / S.params.slidesPerGroup) : S.snapGrid.length, t = 0; t < a; t++) {
              e += S.params.paginationBulletRender ? S.params.paginationBulletRender(S, t, S.params.bulletClass) : "<" + S.params.paginationElement + ' class="' + S.params.bulletClass + '"></' + S.params.paginationElement + ">";
            }S.paginationContainer.html(e), S.bullets = S.paginationContainer.find("." + S.params.bulletClass), S.params.paginationClickable && S.params.a11y && S.a11y && S.a11y.initPagination();
          }"fraction" === S.params.paginationType && (e = S.params.paginationFractionRender ? S.params.paginationFractionRender(S, S.params.paginationCurrentClass, S.params.paginationTotalClass) : '<span class="' + S.params.paginationCurrentClass + '"></span> / <span class="' + S.params.paginationTotalClass + '"></span>', S.paginationContainer.html(e)), "progress" === S.params.paginationType && (e = S.params.paginationProgressRender ? S.params.paginationProgressRender(S, S.params.paginationProgressbarClass) : '<span class="' + S.params.paginationProgressbarClass + '"></span>', S.paginationContainer.html(e)), "custom" !== S.params.paginationType && S.emit("onPaginationRendered", S, S.paginationContainer[0]);
        }
      }, S.update = function (e) {
        function a() {
          S.rtl ? -S.translate : S.translate;s = Math.min(Math.max(S.translate, S.maxTranslate()), S.minTranslate()), S.setWrapperTranslate(s), S.updateActiveIndex(), S.updateClasses();
        }if (S.updateContainerSize(), S.updateSlidesSize(), S.updateProgress(), S.updatePagination(), S.updateClasses(), S.params.scrollbar && S.scrollbar && S.scrollbar.set(), e) {
          var t, s;S.controller && S.controller.spline && (S.controller.spline = void 0), S.params.freeMode ? (a(), S.params.autoHeight && S.updateAutoHeight()) : (t = ("auto" === S.params.slidesPerView || S.params.slidesPerView > 1) && S.isEnd && !S.params.centeredSlides ? S.slideTo(S.slides.length - 1, 0, !1, !0) : S.slideTo(S.activeIndex, 0, !1, !0), t || a());
        } else S.params.autoHeight && S.updateAutoHeight();
      }, S.onResize = function (e) {
        S.params.breakpoints && S.setBreakpoint();var a = S.params.allowSwipeToPrev,
            t = S.params.allowSwipeToNext;S.params.allowSwipeToPrev = S.params.allowSwipeToNext = !0, S.updateContainerSize(), S.updateSlidesSize(), ("auto" === S.params.slidesPerView || S.params.freeMode || e) && S.updatePagination(), S.params.scrollbar && S.scrollbar && S.scrollbar.set(), S.controller && S.controller.spline && (S.controller.spline = void 0);var s = !1;if (S.params.freeMode) {
          var i = Math.min(Math.max(S.translate, S.maxTranslate()), S.minTranslate());S.setWrapperTranslate(i), S.updateActiveIndex(), S.updateClasses(), S.params.autoHeight && S.updateAutoHeight();
        } else S.updateClasses(), s = ("auto" === S.params.slidesPerView || S.params.slidesPerView > 1) && S.isEnd && !S.params.centeredSlides ? S.slideTo(S.slides.length - 1, 0, !1, !0) : S.slideTo(S.activeIndex, 0, !1, !0);S.params.lazyLoading && !s && S.lazy && S.lazy.load(), S.params.allowSwipeToPrev = a, S.params.allowSwipeToNext = t;
      }, S.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }, window.navigator.pointerEnabled ? S.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled && (S.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }), S.touchEvents = { start: S.support.touch || !S.params.simulateTouch ? "touchstart" : S.touchEventsDesktop.start, move: S.support.touch || !S.params.simulateTouch ? "touchmove" : S.touchEventsDesktop.move, end: S.support.touch || !S.params.simulateTouch ? "touchend" : S.touchEventsDesktop.end }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === S.params.touchEventsTarget ? S.container : S.wrapper).addClass("swiper-wp8-" + S.params.direction), S.initEvents = function (e) {
        var a = e ? "off" : "on",
            t = e ? "removeEventListener" : "addEventListener",
            s = "container" === S.params.touchEventsTarget ? S.container[0] : S.wrapper[0],
            r = S.support.touch ? s : document,
            n = !!S.params.nested;if (S.browser.ie) s[t](S.touchEvents.start, S.onTouchStart, !1), r[t](S.touchEvents.move, S.onTouchMove, n), r[t](S.touchEvents.end, S.onTouchEnd, !1);else {
          if (S.support.touch) {
            var o = !("touchstart" !== S.touchEvents.start || !S.support.passiveListener || !S.params.passiveListeners) && { passive: !0, capture: !1 };s[t](S.touchEvents.start, S.onTouchStart, o), s[t](S.touchEvents.move, S.onTouchMove, n), s[t](S.touchEvents.end, S.onTouchEnd, o);
          }(i.simulateTouch && !S.device.ios && !S.device.android || i.simulateTouch && !S.support.touch && S.device.ios) && (s[t]("mousedown", S.onTouchStart, !1), document[t]("mousemove", S.onTouchMove, n), document[t]("mouseup", S.onTouchEnd, !1));
        }window[t]("resize", S.onResize), S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.nextButton[a]("click", S.onClickNext), S.params.a11y && S.a11y && S.nextButton[a]("keydown", S.a11y.onEnterKey)), S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.prevButton[a]("click", S.onClickPrev), S.params.a11y && S.a11y && S.prevButton[a]("keydown", S.a11y.onEnterKey)), S.params.pagination && S.params.paginationClickable && (S.paginationContainer[a]("click", "." + S.params.bulletClass, S.onClickIndex), S.params.a11y && S.a11y && S.paginationContainer[a]("keydown", "." + S.params.bulletClass, S.a11y.onEnterKey)), (S.params.preventClicks || S.params.preventClicksPropagation) && s[t]("click", S.preventClicks, !0);
      }, S.attachEvents = function () {
        S.initEvents();
      }, S.detachEvents = function () {
        S.initEvents(!0);
      }, S.allowClick = !0, S.preventClicks = function (e) {
        S.allowClick || (S.params.preventClicks && e.preventDefault(), S.params.preventClicksPropagation && S.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }, S.onClickNext = function (e) {
        e.preventDefault(), S.isEnd && !S.params.loop || S.slideNext();
      }, S.onClickPrev = function (e) {
        e.preventDefault(), S.isBeginning && !S.params.loop || S.slidePrev();
      }, S.onClickIndex = function (e) {
        e.preventDefault();var t = a(this).index() * S.params.slidesPerGroup;S.params.loop && (t += S.loopedSlides), S.slideTo(t);
      }, S.updateClickedSlide = function (e) {
        var t = l(e, "." + S.params.slideClass),
            s = !1;if (t) for (var i = 0; i < S.slides.length; i++) {
          S.slides[i] === t && (s = !0);
        }if (!t || !s) return S.clickedSlide = void 0, void (S.clickedIndex = void 0);if (S.clickedSlide = t, S.clickedIndex = a(t).index(), S.params.slideToClickedSlide && void 0 !== S.clickedIndex && S.clickedIndex !== S.activeIndex) {
          var r,
              n = S.clickedIndex;if (S.params.loop) {
            if (S.animating) return;r = a(S.clickedSlide).attr("data-swiper-slide-index"), S.params.centeredSlides ? n < S.loopedSlides - S.params.slidesPerView / 2 || n > S.slides.length - S.loopedSlides + S.params.slidesPerView / 2 ? (S.fixLoop(), n = S.wrapper.children("." + S.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + S.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              S.slideTo(n);
            }, 0)) : S.slideTo(n) : n > S.slides.length - S.params.slidesPerView ? (S.fixLoop(), n = S.wrapper.children("." + S.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + S.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              S.slideTo(n);
            }, 0)) : S.slideTo(n);
          } else S.slideTo(n);
        }
      };var z,
          M,
          E,
          P,
          I,
          k,
          L,
          D,
          B,
          H,
          G = "input, select, textarea, button, video",
          X = Date.now(),
          Y = [];S.animating = !1, S.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var A, O;S.onTouchStart = function (e) {
        if (e.originalEvent && (e = e.originalEvent), A = "touchstart" === e.type, A || !("which" in e) || 3 !== e.which) {
          if (S.params.noSwiping && l(e, "." + S.params.noSwipingClass)) return void (S.allowClick = !0);if (!S.params.swipeHandler || l(e, S.params.swipeHandler)) {
            var t = S.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                s = S.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;if (!(S.device.ios && S.params.iOSEdgeSwipeDetection && t <= S.params.iOSEdgeSwipeThreshold)) {
              if (z = !0, M = !1, E = !0, I = void 0, O = void 0, S.touches.startX = t, S.touches.startY = s, P = Date.now(), S.allowClick = !0, S.updateContainerSize(), S.swipeDirection = void 0, S.params.threshold > 0 && (D = !1), "touchstart" !== e.type) {
                var i = !0;a(e.target).is(G) && (i = !1), document.activeElement && a(document.activeElement).is(G) && document.activeElement.blur(), i && e.preventDefault();
              }S.emit("onTouchStart", S, e);
            }
          }
        }
      }, S.onTouchMove = function (e) {
        if (e.originalEvent && (e = e.originalEvent), !A || "mousemove" !== e.type) {
          if (e.preventedByNestedSwiper) return S.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void (S.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);if (S.params.onlyExternal) return S.allowClick = !1, void (z && (S.touches.startX = S.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, S.touches.startY = S.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, P = Date.now()));if (A && S.params.touchReleaseOnEdges && !S.params.loop) if (S.isHorizontal()) {
            if (S.touches.currentX < S.touches.startX && S.translate <= S.maxTranslate() || S.touches.currentX > S.touches.startX && S.translate >= S.minTranslate()) return;
          } else if (S.touches.currentY < S.touches.startY && S.translate <= S.maxTranslate() || S.touches.currentY > S.touches.startY && S.translate >= S.minTranslate()) return;if (A && document.activeElement && e.target === document.activeElement && a(e.target).is(G)) return M = !0, void (S.allowClick = !1);if (E && S.emit("onTouchMove", S, e), !(e.targetTouches && e.targetTouches.length > 1)) {
            if (S.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, S.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof I) {
              var t;S.isHorizontal() && S.touches.currentY === S.touches.startY || !S.isHorizontal() && S.touches.currentX !== S.touches.startX ? I = !1 : (t = 180 * Math.atan2(Math.abs(S.touches.currentY - S.touches.startY), Math.abs(S.touches.currentX - S.touches.startX)) / Math.PI, I = S.isHorizontal() ? t > S.params.touchAngle : 90 - t > S.params.touchAngle);
            }if (I && S.emit("onTouchMoveOpposite", S, e), "undefined" == typeof O && S.browser.ieTouch && (S.touches.currentX === S.touches.startX && S.touches.currentY === S.touches.startY || (O = !0)), z) {
              if (I) return void (z = !1);if (O || !S.browser.ieTouch) {
                S.allowClick = !1, S.emit("onSliderMove", S, e), e.preventDefault(), S.params.touchMoveStopPropagation && !S.params.nested && e.stopPropagation(), M || (i.loop && S.fixLoop(), L = S.getWrapperTranslate(), S.setWrapperTransition(0), S.animating && S.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), S.params.autoplay && S.autoplaying && (S.params.autoplayDisableOnInteraction ? S.stopAutoplay() : S.pauseAutoplay()), H = !1, !S.params.grabCursor || S.params.allowSwipeToNext !== !0 && S.params.allowSwipeToPrev !== !0 || S.setGrabCursor(!0)), M = !0;var s = S.touches.diff = S.isHorizontal() ? S.touches.currentX - S.touches.startX : S.touches.currentY - S.touches.startY;s *= S.params.touchRatio, S.rtl && (s = -s), S.swipeDirection = s > 0 ? "prev" : "next", k = s + L;var r = !0;if (s > 0 && k > S.minTranslate() ? (r = !1, S.params.resistance && (k = S.minTranslate() - 1 + Math.pow(-S.minTranslate() + L + s, S.params.resistanceRatio))) : s < 0 && k < S.maxTranslate() && (r = !1, S.params.resistance && (k = S.maxTranslate() + 1 - Math.pow(S.maxTranslate() - L - s, S.params.resistanceRatio))), r && (e.preventedByNestedSwiper = !0), !S.params.allowSwipeToNext && "next" === S.swipeDirection && k < L && (k = L), !S.params.allowSwipeToPrev && "prev" === S.swipeDirection && k > L && (k = L), S.params.threshold > 0) {
                  if (!(Math.abs(s) > S.params.threshold || D)) return void (k = L);if (!D) return D = !0, S.touches.startX = S.touches.currentX, S.touches.startY = S.touches.currentY, k = L, void (S.touches.diff = S.isHorizontal() ? S.touches.currentX - S.touches.startX : S.touches.currentY - S.touches.startY);
                }S.params.followFinger && ((S.params.freeMode || S.params.watchSlidesProgress) && S.updateActiveIndex(), S.params.freeMode && (0 === Y.length && Y.push({ position: S.touches[S.isHorizontal() ? "startX" : "startY"], time: P }), Y.push({ position: S.touches[S.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), S.updateProgress(k), S.setWrapperTranslate(k));
              }
            }
          }
        }
      }, S.onTouchEnd = function (e) {
        if (e.originalEvent && (e = e.originalEvent), E && S.emit("onTouchEnd", S, e), E = !1, z) {
          S.params.grabCursor && M && z && (S.params.allowSwipeToNext === !0 || S.params.allowSwipeToPrev === !0) && S.setGrabCursor(!1);var t = Date.now(),
              s = t - P;if (S.allowClick && (S.updateClickedSlide(e), S.emit("onTap", S, e), s < 300 && t - X > 300 && (B && clearTimeout(B), B = setTimeout(function () {
            S && (S.params.paginationHide && S.paginationContainer.length > 0 && !a(e.target).hasClass(S.params.bulletClass) && S.paginationContainer.toggleClass(S.params.paginationHiddenClass), S.emit("onClick", S, e));
          }, 300)), s < 300 && t - X < 300 && (B && clearTimeout(B), S.emit("onDoubleTap", S, e))), X = Date.now(), setTimeout(function () {
            S && (S.allowClick = !0);
          }, 0), !z || !M || !S.swipeDirection || 0 === S.touches.diff || k === L) return void (z = M = !1);z = M = !1;var i;if (i = S.params.followFinger ? S.rtl ? S.translate : -S.translate : -k, S.params.freeMode) {
            if (i < -S.minTranslate()) return void S.slideTo(S.activeIndex);if (i > -S.maxTranslate()) return void (S.slides.length < S.snapGrid.length ? S.slideTo(S.snapGrid.length - 1) : S.slideTo(S.slides.length - 1));if (S.params.freeModeMomentum) {
              if (Y.length > 1) {
                var r = Y.pop(),
                    n = Y.pop(),
                    o = r.position - n.position,
                    l = r.time - n.time;S.velocity = o / l, S.velocity = S.velocity / 2, Math.abs(S.velocity) < S.params.freeModeMinimumVelocity && (S.velocity = 0), (l > 150 || new window.Date().getTime() - r.time > 300) && (S.velocity = 0);
              } else S.velocity = 0;S.velocity = S.velocity * S.params.freeModeMomentumVelocityRatio, Y.length = 0;var p = 1e3 * S.params.freeModeMomentumRatio,
                  d = S.velocity * p,
                  u = S.translate + d;S.rtl && (u = -u);var c,
                  m = !1,
                  h = 20 * Math.abs(S.velocity) * S.params.freeModeMomentumBounceRatio;if (u < S.maxTranslate()) S.params.freeModeMomentumBounce ? (u + S.maxTranslate() < -h && (u = S.maxTranslate() - h), c = S.maxTranslate(), m = !0, H = !0) : u = S.maxTranslate();else if (u > S.minTranslate()) S.params.freeModeMomentumBounce ? (u - S.minTranslate() > h && (u = S.minTranslate() + h), c = S.minTranslate(), m = !0, H = !0) : u = S.minTranslate();else if (S.params.freeModeSticky) {
                var g,
                    f = 0;for (f = 0; f < S.snapGrid.length; f += 1) {
                  if (S.snapGrid[f] > -u) {
                    g = f;break;
                  }
                }u = Math.abs(S.snapGrid[g] - u) < Math.abs(S.snapGrid[g - 1] - u) || "next" === S.swipeDirection ? S.snapGrid[g] : S.snapGrid[g - 1], S.rtl || (u = -u);
              }if (0 !== S.velocity) p = S.rtl ? Math.abs((-u - S.translate) / S.velocity) : Math.abs((u - S.translate) / S.velocity);else if (S.params.freeModeSticky) return void S.slideReset();S.params.freeModeMomentumBounce && m ? (S.updateProgress(c), S.setWrapperTransition(p), S.setWrapperTranslate(u), S.onTransitionStart(), S.animating = !0, S.wrapper.transitionEnd(function () {
                S && H && (S.emit("onMomentumBounce", S), S.setWrapperTransition(S.params.speed), S.setWrapperTranslate(c), S.wrapper.transitionEnd(function () {
                  S && S.onTransitionEnd();
                }));
              })) : S.velocity ? (S.updateProgress(u), S.setWrapperTransition(p), S.setWrapperTranslate(u), S.onTransitionStart(), S.animating || (S.animating = !0, S.wrapper.transitionEnd(function () {
                S && S.onTransitionEnd();
              }))) : S.updateProgress(u), S.updateActiveIndex();
            }return void ((!S.params.freeModeMomentum || s >= S.params.longSwipesMs) && (S.updateProgress(), S.updateActiveIndex()));
          }var v,
              w = 0,
              y = S.slidesSizesGrid[0];for (v = 0; v < S.slidesGrid.length; v += S.params.slidesPerGroup) {
            "undefined" != typeof S.slidesGrid[v + S.params.slidesPerGroup] ? i >= S.slidesGrid[v] && i < S.slidesGrid[v + S.params.slidesPerGroup] && (w = v, y = S.slidesGrid[v + S.params.slidesPerGroup] - S.slidesGrid[v]) : i >= S.slidesGrid[v] && (w = v, y = S.slidesGrid[S.slidesGrid.length - 1] - S.slidesGrid[S.slidesGrid.length - 2]);
          }var x = (i - S.slidesGrid[w]) / y;if (s > S.params.longSwipesMs) {
            if (!S.params.longSwipes) return void S.slideTo(S.activeIndex);"next" === S.swipeDirection && (x >= S.params.longSwipesRatio ? S.slideTo(w + S.params.slidesPerGroup) : S.slideTo(w)), "prev" === S.swipeDirection && (x > 1 - S.params.longSwipesRatio ? S.slideTo(w + S.params.slidesPerGroup) : S.slideTo(w));
          } else {
            if (!S.params.shortSwipes) return void S.slideTo(S.activeIndex);"next" === S.swipeDirection && S.slideTo(w + S.params.slidesPerGroup), "prev" === S.swipeDirection && S.slideTo(w);
          }
        }
      }, S._slideTo = function (e, a) {
        return S.slideTo(e, a, !0, !0);
      }, S.slideTo = function (e, a, t, s) {
        "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), e < 0 && (e = 0), S.snapIndex = Math.floor(e / S.params.slidesPerGroup), S.snapIndex >= S.snapGrid.length && (S.snapIndex = S.snapGrid.length - 1);var i = -S.snapGrid[S.snapIndex];if (S.params.autoplay && S.autoplaying && (s || !S.params.autoplayDisableOnInteraction ? S.pauseAutoplay(a) : S.stopAutoplay()), S.updateProgress(i), S.params.normalizeSlideIndex) for (var r = 0; r < S.slidesGrid.length; r++) {
          -Math.floor(100 * i) >= Math.floor(100 * S.slidesGrid[r]) && (e = r);
        }return !(!S.params.allowSwipeToNext && i < S.translate && i < S.minTranslate()) && !(!S.params.allowSwipeToPrev && i > S.translate && i > S.maxTranslate() && (S.activeIndex || 0) !== e) && ("undefined" == typeof a && (a = S.params.speed), S.previousIndex = S.activeIndex || 0, S.activeIndex = e, S.updateRealIndex(), S.rtl && -i === S.translate || !S.rtl && i === S.translate ? (S.params.autoHeight && S.updateAutoHeight(), S.updateClasses(), "slide" !== S.params.effect && S.setWrapperTranslate(i), !1) : (S.updateClasses(), S.onTransitionStart(t), 0 === a || S.browser.lteIE9 ? (S.setWrapperTranslate(i), S.setWrapperTransition(0), S.onTransitionEnd(t)) : (S.setWrapperTranslate(i), S.setWrapperTransition(a), S.animating || (S.animating = !0, S.wrapper.transitionEnd(function () {
          S && S.onTransitionEnd(t);
        }))), !0));
      }, S.onTransitionStart = function (e) {
        "undefined" == typeof e && (e = !0), S.params.autoHeight && S.updateAutoHeight(), S.lazy && S.lazy.onTransitionStart(), e && (S.emit("onTransitionStart", S), S.activeIndex !== S.previousIndex && (S.emit("onSlideChangeStart", S), S.activeIndex > S.previousIndex ? S.emit("onSlideNextStart", S) : S.emit("onSlidePrevStart", S)));
      }, S.onTransitionEnd = function (e) {
        S.animating = !1, S.setWrapperTransition(0), "undefined" == typeof e && (e = !0), S.lazy && S.lazy.onTransitionEnd(), e && (S.emit("onTransitionEnd", S), S.activeIndex !== S.previousIndex && (S.emit("onSlideChangeEnd", S), S.activeIndex > S.previousIndex ? S.emit("onSlideNextEnd", S) : S.emit("onSlidePrevEnd", S))), S.params.history && S.history && S.history.setHistory(S.params.history, S.activeIndex), S.params.hashnav && S.hashnav && S.hashnav.setHash();
      }, S.slideNext = function (e, a, t) {
        if (S.params.loop) {
          if (S.animating) return !1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex + S.params.slidesPerGroup, a, e, t);
        }return S.slideTo(S.activeIndex + S.params.slidesPerGroup, a, e, t);
      }, S._slideNext = function (e) {
        return S.slideNext(!0, e, !0);
      }, S.slidePrev = function (e, a, t) {
        if (S.params.loop) {
          if (S.animating) return !1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex - 1, a, e, t);
        }return S.slideTo(S.activeIndex - 1, a, e, t);
      }, S._slidePrev = function (e) {
        return S.slidePrev(!0, e, !0);
      }, S.slideReset = function (e, a, t) {
        return S.slideTo(S.activeIndex, a, e);
      }, S.disableTouchControl = function () {
        return S.params.onlyExternal = !0, !0;
      }, S.enableTouchControl = function () {
        return S.params.onlyExternal = !1, !0;
      }, S.setWrapperTransition = function (e, a) {
        S.wrapper.transition(e), "slide" !== S.params.effect && S.effects[S.params.effect] && S.effects[S.params.effect].setTransition(e), S.params.parallax && S.parallax && S.parallax.setTransition(e), S.params.scrollbar && S.scrollbar && S.scrollbar.setTransition(e), S.params.control && S.controller && S.controller.setTransition(e, a), S.emit("onSetTransition", S, e);
      }, S.setWrapperTranslate = function (e, a, t) {
        var s = 0,
            i = 0,
            r = 0;S.isHorizontal() ? s = S.rtl ? -e : e : i = e, S.params.roundLengths && (s = n(s), i = n(i)), S.params.virtualTranslate || (S.support.transforms3d ? S.wrapper.transform("translate3d(" + s + "px, " + i + "px, " + r + "px)") : S.wrapper.transform("translate(" + s + "px, " + i + "px)")), S.translate = S.isHorizontal() ? s : i;var o,
            l = S.maxTranslate() - S.minTranslate();o = 0 === l ? 0 : (e - S.minTranslate()) / l, o !== S.progress && S.updateProgress(e), a && S.updateActiveIndex(), "slide" !== S.params.effect && S.effects[S.params.effect] && S.effects[S.params.effect].setTranslate(S.translate), S.params.parallax && S.parallax && S.parallax.setTranslate(S.translate), S.params.scrollbar && S.scrollbar && S.scrollbar.setTranslate(S.translate), S.params.control && S.controller && S.controller.setTranslate(S.translate, t), S.emit("onSetTranslate", S, S.translate);
      }, S.getTranslate = function (e, a) {
        var t, s, i, r;return "undefined" == typeof a && (a = "x"), S.params.virtualTranslate ? S.rtl ? -S.translate : S.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = r.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), S.rtl && s && (s = -s), s || 0);
      }, S.getWrapperTranslate = function (e) {
        return "undefined" == typeof e && (e = S.isHorizontal() ? "x" : "y"), S.getTranslate(S.wrapper[0], e);
      }, S.observers = [], S.initObservers = function () {
        if (S.params.observeParents) for (var e = S.container.parents(), a = 0; a < e.length; a++) {
          p(e[a]);
        }p(S.container[0], { childList: !1 }), p(S.wrapper[0], { attributes: !1 });
      }, S.disconnectObservers = function () {
        for (var e = 0; e < S.observers.length; e++) {
          S.observers[e].disconnect();
        }S.observers = [];
      }, S.createLoop = function () {
        S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass).remove();var e = S.wrapper.children("." + S.params.slideClass);"auto" !== S.params.slidesPerView || S.params.loopedSlides || (S.params.loopedSlides = e.length), S.loopedSlides = parseInt(S.params.loopedSlides || S.params.slidesPerView, 10), S.loopedSlides = S.loopedSlides + S.params.loopAdditionalSlides, S.loopedSlides > e.length && (S.loopedSlides = e.length);var t,
            s = [],
            i = [];for (e.each(function (t, r) {
          var n = a(this);t < S.loopedSlides && i.push(r), t < e.length && t >= e.length - S.loopedSlides && s.push(r), n.attr("data-swiper-slide-index", t);
        }), t = 0; t < i.length; t++) {
          S.wrapper.append(a(i[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));
        }for (t = s.length - 1; t >= 0; t--) {
          S.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));
        }
      }, S.destroyLoop = function () {
        S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass).remove(), S.slides.removeAttr("data-swiper-slide-index");
      }, S.reLoop = function (e) {
        var a = S.activeIndex - S.loopedSlides;S.destroyLoop(), S.createLoop(), S.updateSlidesSize(), e && S.slideTo(a + S.loopedSlides, 0, !1);
      }, S.fixLoop = function () {
        var e;S.activeIndex < S.loopedSlides ? (e = S.slides.length - 3 * S.loopedSlides + S.activeIndex, e += S.loopedSlides, S.slideTo(e, 0, !1, !0)) : ("auto" === S.params.slidesPerView && S.activeIndex >= 2 * S.loopedSlides || S.activeIndex > S.slides.length - 2 * S.params.slidesPerView) && (e = -S.slides.length + S.activeIndex + S.loopedSlides, e += S.loopedSlides, S.slideTo(e, 0, !1, !0));
      }, S.appendSlide = function (e) {
        if (S.params.loop && S.destroyLoop(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) for (var a = 0; a < e.length; a++) {
          e[a] && S.wrapper.append(e[a]);
        } else S.wrapper.append(e);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0);
      }, S.prependSlide = function (e) {
        S.params.loop && S.destroyLoop();var a = S.activeIndex + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
          for (var t = 0; t < e.length; t++) {
            e[t] && S.wrapper.prepend(e[t]);
          }a = S.activeIndex + e.length;
        } else S.wrapper.prepend(e);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0), S.slideTo(a, 0, !1);
      }, S.removeSlide = function (e) {
        S.params.loop && (S.destroyLoop(), S.slides = S.wrapper.children("." + S.params.slideClass));var a,
            t = S.activeIndex;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
          for (var s = 0; s < e.length; s++) {
            a = e[s], S.slides[a] && S.slides.eq(a).remove(), a < t && t--;
          }t = Math.max(t, 0);
        } else a = e, S.slides[a] && S.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0), S.params.loop ? S.slideTo(t + S.loopedSlides, 0, !1) : S.slideTo(t, 0, !1);
      }, S.removeAllSlides = function () {
        for (var e = [], a = 0; a < S.slides.length; a++) {
          e.push(a);
        }S.removeSlide(e);
      }, S.effects = { fade: { setTranslate: function setTranslate() {
            for (var e = 0; e < S.slides.length; e++) {
              var a = S.slides.eq(e),
                  t = a[0].swiperSlideOffset,
                  s = -t;S.params.virtualTranslate || (s -= S.translate);var i = 0;S.isHorizontal() || (i = s, s = 0);var r = S.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);a.css({ opacity: r }).transform("translate3d(" + s + "px, " + i + "px, 0px)");
            }
          }, setTransition: function setTransition(e) {
            if (S.slides.transition(e), S.params.virtualTranslate && 0 !== e) {
              var a = !1;S.slides.transitionEnd(function () {
                if (!a && S) {
                  a = !0, S.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) {
                    S.wrapper.trigger(e[t]);
                  }
                }
              });
            }
          } }, flip: { setTranslate: function setTranslate() {
            for (var e = 0; e < S.slides.length; e++) {
              var t = S.slides.eq(e),
                  s = t[0].progress;S.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));var i = t[0].swiperSlideOffset,
                  r = -180 * s,
                  n = r,
                  o = 0,
                  l = -i,
                  p = 0;if (S.isHorizontal() ? S.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + S.slides.length, S.params.flip.slideShadows) {
                var d = S.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                    u = S.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0));
              }t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
            }
          }, setTransition: function setTransition(e) {
            if (S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), S.params.virtualTranslate && 0 !== e) {
              var t = !1;S.slides.eq(S.activeIndex).transitionEnd(function () {
                if (!t && S && a(this).hasClass(S.params.slideActiveClass)) {
                  t = !0, S.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < e.length; s++) {
                    S.wrapper.trigger(e[s]);
                  }
                }
              });
            }
          } }, cube: { setTranslate: function setTranslate() {
            var e,
                t = 0;S.params.cube.shadow && (S.isHorizontal() ? (e = S.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), S.wrapper.append(e)), e.css({ height: S.width + "px" })) : (e = S.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), S.container.append(e))));for (var s = 0; s < S.slides.length; s++) {
              var i = S.slides.eq(s),
                  r = 90 * s,
                  n = Math.floor(r / 360);S.rtl && (r = -r, n = Math.floor(-r / 360));var o = Math.max(Math.min(i[0].progress, 1), -1),
                  l = 0,
                  p = 0,
                  d = 0;s % 4 === 0 ? (l = 4 * -n * S.size, d = 0) : (s - 1) % 4 === 0 ? (l = 0, d = 4 * -n * S.size) : (s - 2) % 4 === 0 ? (l = S.size + 4 * n * S.size, d = S.size) : (s - 3) % 4 === 0 && (l = -S.size, d = 3 * S.size + 4 * S.size * n), S.rtl && (l = -l), S.isHorizontal() || (p = l, l = 0);var u = "rotateX(" + (S.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (S.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";if (o <= 1 && o > -1 && (t = 90 * s + 90 * o, S.rtl && (t = 90 * -s - 90 * o)), i.transform(u), S.params.cube.slideShadows) {
                var c = S.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                    m = S.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0));
              }
            }if (S.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + S.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + S.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + S.size / 2 + "px", "transform-origin": "50% 50% -" + S.size / 2 + "px" }), S.params.cube.shadow) if (S.isHorizontal()) e.transform("translate3d(0px, " + (S.width / 2 + S.params.cube.shadowOffset) + "px, " + -S.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + S.params.cube.shadowScale + ")");else {
              var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                  g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                  f = S.params.cube.shadowScale,
                  v = S.params.cube.shadowScale / g,
                  w = S.params.cube.shadowOffset;e.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (S.height / 2 + w) + "px, " + -S.height / 2 / v + "px) rotateX(-90deg)");
            }var y = S.isSafari || S.isUiWebView ? -S.size / 2 : 0;S.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (S.isHorizontal() ? 0 : t) + "deg) rotateY(" + (S.isHorizontal() ? -t : 0) + "deg)");
          }, setTransition: function setTransition(e) {
            S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), S.params.cube.shadow && !S.isHorizontal() && S.container.find(".swiper-cube-shadow").transition(e);
          } }, coverflow: { setTranslate: function setTranslate() {
            for (var e = S.translate, t = S.isHorizontal() ? -e + S.width / 2 : -e + S.height / 2, s = S.isHorizontal() ? S.params.coverflow.rotate : -S.params.coverflow.rotate, i = S.params.coverflow.depth, r = 0, n = S.slides.length; r < n; r++) {
              var o = S.slides.eq(r),
                  l = S.slidesSizesGrid[r],
                  p = o[0].swiperSlideOffset,
                  d = (t - p - l / 2) / l * S.params.coverflow.modifier,
                  u = S.isHorizontal() ? s * d : 0,
                  c = S.isHorizontal() ? 0 : s * d,
                  m = -i * Math.abs(d),
                  h = S.isHorizontal() ? 0 : S.params.coverflow.stretch * d,
                  g = S.isHorizontal() ? S.params.coverflow.stretch * d : 0;Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";if (o.transform(f), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, S.params.coverflow.slideShadows) {
                var v = S.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                    w = S.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
              }
            }if (S.browser.ie) {
              var y = S.wrapper[0].style;y.perspectiveOrigin = t + "px 50%";
            }
          }, setTransition: function setTransition(e) {
            S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
          } } }, S.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(e, t) {
          if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== S.slides.length)) {
            var s = S.slides.eq(e),
                i = s.find("." + S.params.lazyLoadingClass + ":not(." + S.params.lazyStatusLoadedClass + "):not(." + S.params.lazyStatusLoadingClass + ")");!s.hasClass(S.params.lazyLoadingClass) || s.hasClass(S.params.lazyStatusLoadedClass) || s.hasClass(S.params.lazyStatusLoadingClass) || (i = i.add(s[0])), 0 !== i.length && i.each(function () {
              var e = a(this);e.addClass(S.params.lazyStatusLoadingClass);var i = e.attr("data-background"),
                  r = e.attr("data-src"),
                  n = e.attr("data-srcset"),
                  o = e.attr("data-sizes");S.loadImage(e[0], r || i, n, o, !1, function () {
                if (i ? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), o && (e.attr("sizes", o), e.removeAttr("data-sizes")), r && (e.attr("src", r), e.removeAttr("data-src"))), e.addClass(S.params.lazyStatusLoadedClass).removeClass(S.params.lazyStatusLoadingClass), s.find("." + S.params.lazyPreloaderClass + ", ." + S.params.preloaderClass).remove(), S.params.loop && t) {
                  var a = s.attr("data-swiper-slide-index");if (s.hasClass(S.params.slideDuplicateClass)) {
                    var l = S.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + S.params.slideDuplicateClass + ")");S.lazy.loadImageInSlide(l.index(), !1);
                  } else {
                    var p = S.wrapper.children("." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');S.lazy.loadImageInSlide(p.index(), !1);
                  }
                }S.emit("onLazyImageReady", S, s[0], e[0]);
              }), S.emit("onLazyImageLoad", S, s[0], e[0]);
            });
          }
        }, load: function load() {
          var e,
              t = S.params.slidesPerView;if ("auto" === t && (t = 0), S.lazy.initialImageLoaded || (S.lazy.initialImageLoaded = !0), S.params.watchSlidesVisibility) S.wrapper.children("." + S.params.slideVisibleClass).each(function () {
            S.lazy.loadImageInSlide(a(this).index());
          });else if (t > 1) for (e = S.activeIndex; e < S.activeIndex + t; e++) {
            S.slides[e] && S.lazy.loadImageInSlide(e);
          } else S.lazy.loadImageInSlide(S.activeIndex);if (S.params.lazyLoadingInPrevNext) if (t > 1 || S.params.lazyLoadingInPrevNextAmount && S.params.lazyLoadingInPrevNextAmount > 1) {
            var s = S.params.lazyLoadingInPrevNextAmount,
                i = t,
                r = Math.min(S.activeIndex + i + Math.max(s, i), S.slides.length),
                n = Math.max(S.activeIndex - Math.max(i, s), 0);for (e = S.activeIndex + t; e < r; e++) {
              S.slides[e] && S.lazy.loadImageInSlide(e);
            }for (e = n; e < S.activeIndex; e++) {
              S.slides[e] && S.lazy.loadImageInSlide(e);
            }
          } else {
            var o = S.wrapper.children("." + S.params.slideNextClass);o.length > 0 && S.lazy.loadImageInSlide(o.index());var l = S.wrapper.children("." + S.params.slidePrevClass);l.length > 0 && S.lazy.loadImageInSlide(l.index());
          }
        }, onTransitionStart: function onTransitionStart() {
          S.params.lazyLoading && (S.params.lazyLoadingOnTransitionStart || !S.params.lazyLoadingOnTransitionStart && !S.lazy.initialImageLoaded) && S.lazy.load();
        }, onTransitionEnd: function onTransitionEnd() {
          S.params.lazyLoading && !S.params.lazyLoadingOnTransitionStart && S.lazy.load();
        } }, S.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(e) {
          var a = S.scrollbar,
              t = S.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
              s = t - a.track.offset()[S.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
              i = -S.minTranslate() * a.moveDivider,
              r = -S.maxTranslate() * a.moveDivider;s < i ? s = i : s > r && (s = r), s = -s / a.moveDivider, S.updateProgress(s), S.setWrapperTranslate(s, !0);
        }, dragStart: function dragStart(e) {
          var a = S.scrollbar;a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), S.params.scrollbarHide && a.track.css("opacity", 1), S.wrapper.transition(100), a.drag.transition(100), S.emit("onScrollbarDragStart", S);
        }, dragMove: function dragMove(e) {
          var a = S.scrollbar;a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), S.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), S.emit("onScrollbarDragMove", S));
        }, dragEnd: function dragEnd(e) {
          var a = S.scrollbar;a.isTouched && (a.isTouched = !1, S.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
            a.track.css("opacity", 0), a.track.transition(400);
          }, 1e3)), S.emit("onScrollbarDragEnd", S), S.params.scrollbarSnapOnRelease && S.slideReset());
        }, draggableEvents: function () {
          return S.params.simulateTouch !== !1 || S.support.touch ? S.touchEvents : S.touchEventsDesktop;
        }(), enableDraggable: function enableDraggable() {
          var e = S.scrollbar,
              t = S.support.touch ? e.track : document;a(e.track).on(e.draggableEvents.start, e.dragStart), a(t).on(e.draggableEvents.move, e.dragMove), a(t).on(e.draggableEvents.end, e.dragEnd);
        }, disableDraggable: function disableDraggable() {
          var e = S.scrollbar,
              t = S.support.touch ? e.track : document;a(e.track).off(S.draggableEvents.start, e.dragStart), a(t).off(S.draggableEvents.move, e.dragMove), a(t).off(S.draggableEvents.end, e.dragEnd);
        }, set: function set() {
          if (S.params.scrollbar) {
            var e = S.scrollbar;e.track = a(S.params.scrollbar), S.params.uniqueNavElements && "string" == typeof S.params.scrollbar && e.track.length > 1 && 1 === S.container.find(S.params.scrollbar).length && (e.track = S.container.find(S.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = S.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = S.size / S.virtualSize, e.moveDivider = e.divider * (e.trackSize / S.size), e.dragSize = e.trackSize * e.divider, S.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", S.params.scrollbarHide && (e.track[0].style.opacity = 0);
          }
        }, setTranslate: function setTranslate() {
          if (S.params.scrollbar) {
            var e,
                a = S.scrollbar,
                t = (S.translate || 0, a.dragSize);e = (a.trackSize - a.dragSize) * S.progress, S.rtl && S.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), S.isHorizontal() ? (S.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (S.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), S.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
              a.track[0].style.opacity = 0, a.track.transition(400);
            }, 1e3));
          }
        }, setTransition: function setTransition(e) {
          S.params.scrollbar && S.scrollbar.drag.transition(e);
        } }, S.controller = { LinearSpline: function LinearSpline(e, a) {
          this.x = e, this.y = a, this.lastIndex = e.length - 1;var t, s;this.x.length;this.interpolate = function (e) {
            return e ? (s = i(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0;
          };var i = function () {
            var e, a, t;return function (s, i) {
              for (a = -1, e = s.length; e - a > 1;) {
                s[t = e + a >> 1] <= i ? a = t : e = t;
              }return e;
            };
          }();
        }, getInterpolateFunction: function getInterpolateFunction(e) {
          S.controller.spline || (S.controller.spline = S.params.loop ? new S.controller.LinearSpline(S.slidesGrid, e.slidesGrid) : new S.controller.LinearSpline(S.snapGrid, e.snapGrid));
        }, setTranslate: function setTranslate(e, a) {
          function s(a) {
            e = a.rtl && "horizontal" === a.params.direction ? -S.translate : S.translate, "slide" === S.params.controlBy && (S.controller.getInterpolateFunction(a), r = -S.controller.spline.interpolate(-e)), r && "container" !== S.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (S.maxTranslate() - S.minTranslate()), r = (e - S.minTranslate()) * i + a.minTranslate()), S.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, S), a.updateActiveIndex();
          }var i,
              r,
              n = S.params.control;if (S.isArray(n)) for (var o = 0; o < n.length; o++) {
            n[o] !== a && n[o] instanceof t && s(n[o]);
          } else n instanceof t && a !== n && s(n);
        }, setTransition: function setTransition(e, a) {
          function s(a) {
            a.setWrapperTransition(e, S), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
              r && (a.params.loop && "slide" === S.params.controlBy && a.fixLoop(), a.onTransitionEnd());
            }));
          }var i,
              r = S.params.control;if (S.isArray(r)) for (i = 0; i < r.length; i++) {
            r[i] !== a && r[i] instanceof t && s(r[i]);
          } else r instanceof t && a !== r && s(r);
        } }, S.hashnav = { onHashCange: function onHashCange(e, a) {
          var t = document.location.hash.replace("#", ""),
              s = S.slides.eq(S.activeIndex).attr("data-hash");t !== s && S.slideTo(S.wrapper.children("." + S.params.slideClass + '[data-hash="' + t + '"]').index());
        }, attachEvents: function attachEvents(e) {
          var t = e ? "off" : "on";a(window)[t]("hashchange", S.hashnav.onHashCange);
        }, setHash: function setHash() {
          if (S.hashnav.initialized && S.params.hashnav) if (S.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + S.slides.eq(S.activeIndex).attr("data-hash") || "");else {
            var e = S.slides.eq(S.activeIndex),
                a = e.attr("data-hash") || e.attr("data-history");document.location.hash = a || "";
          }
        }, init: function init() {
          if (S.params.hashnav && !S.params.history) {
            S.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) {
              for (var a = 0, t = 0, s = S.slides.length; t < s; t++) {
                var i = S.slides.eq(t),
                    r = i.attr("data-hash") || i.attr("data-history");if (r === e && !i.hasClass(S.params.slideDuplicateClass)) {
                  var n = i.index();S.slideTo(n, a, S.params.runCallbacksOnInit, !0);
                }
              }S.params.hashnavWatchState && S.hashnav.attachEvents();
            }
          }
        }, destroy: function destroy() {
          S.params.hashnavWatchState && S.hashnav.attachEvents(!0);
        } }, S.history = { init: function init() {
          if (S.params.history) {
            if (!window.history || !window.history.pushState) return S.params.history = !1, void (S.params.hashnav = !0);S.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, S.params.runCallbacksOnInit), S.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
          }
        }, setHistoryPopState: function setHistoryPopState() {
          S.history.paths = S.history.getPathValues(), S.history.scrollToSlide(S.params.speed, S.history.paths.value, !1);
        }, getPathValues: function getPathValues() {
          var e = window.location.pathname.slice(1).split("/"),
              a = e.length,
              t = e[a - 2],
              s = e[a - 1];return { key: t, value: s };
        }, setHistory: function setHistory(e, a) {
          if (S.history.initialized && S.params.history) {
            var t = S.slides.eq(a),
                s = this.slugify(t.attr("data-history"));window.location.pathname.includes(e) || (s = e + "/" + s), S.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s);
          }
        }, slugify: function slugify(e) {
          return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        }, scrollToSlide: function scrollToSlide(e, a, t) {
          if (a) for (var s = 0, i = S.slides.length; s < i; s++) {
            var r = S.slides.eq(s),
                n = this.slugify(r.attr("data-history"));if (n === a && !r.hasClass(S.params.slideDuplicateClass)) {
              var o = r.index();S.slideTo(o, e, t);
            }
          } else S.slideTo(0, e, t);
        } }, S.disableKeyboardControl = function () {
        S.params.keyboardControl = !1, a(document).off("keydown", d);
      }, S.enableKeyboardControl = function () {
        S.params.keyboardControl = !0, a(document).on("keydown", d);
      }, S.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, S.params.mousewheelControl && (S.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : u() ? "wheel" : "mousewheel"), S.disableMousewheelControl = function () {
        if (!S.mousewheel.event) return !1;var e = S.container;return "container" !== S.params.mousewheelEventsTarged && (e = a(S.params.mousewheelEventsTarged)), e.off(S.mousewheel.event, c), !0;
      }, S.enableMousewheelControl = function () {
        if (!S.mousewheel.event) return !1;var e = S.container;return "container" !== S.params.mousewheelEventsTarged && (e = a(S.params.mousewheelEventsTarged)), e.on(S.mousewheel.event, c), !0;
      }, S.parallax = { setTranslate: function setTranslate() {
          S.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            h(this, S.progress);
          }), S.slides.each(function () {
            var e = a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var a = Math.min(Math.max(e[0].progress, -1), 1);h(this, a);
            });
          });
        }, setTransition: function setTransition(e) {
          "undefined" == typeof e && (e = S.params.speed), S.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            var t = a(this),
                s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (s = 0), t.transition(s);
          });
        } }, S.zoom = { scale: 1, currentScale: 1, isScaling: !1, gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: S.params.zoomMax }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) return 1;var a = e.targetTouches[0].pageX,
              t = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              i = e.targetTouches[1].pageY,
              r = Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2));return r;
        }, onGestureStart: function onGestureStart(e) {
          var t = S.zoom;if (!S.support.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;t.gesture.scaleStart = t.getDistanceBetweenTouches(e);
          }return t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = a(this), 0 === t.gesture.slide.length && (t.gesture.slide = S.slides.eq(S.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + S.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || S.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), void (t.isScaling = !0)) : void (t.gesture.image = void 0);
        }, onGestureChange: function onGestureChange(e) {
          var a = S.zoom;if (!S.support.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
          }a.gesture.image && 0 !== a.gesture.image.length && (S.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < S.params.zoomMin && (a.scale = S.params.zoomMin + 1 - Math.pow(S.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
        }, onGestureEnd: function onGestureEnd(e) {
          var a = S.zoom;!S.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), S.params.zoomMin), a.gesture.image.transition(S.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0));
        }, onTouchStart: function onTouchStart(e, a) {
          var t = e.zoom;t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY));
        }, onTouchMove: function onTouchMove(e) {
          var a = S.zoom;if (a.gesture.image && 0 !== a.gesture.image.length && (S.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = S.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = S.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0));var t = a.image.width * a.scale,
                s = a.image.height * a.scale;if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
              if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                if (S.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void (a.image.isTouched = !1);if (!S.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void (a.image.isTouched = !1);
              }e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)");
            }
          }
        }, onTouchEnd: function onTouchEnd(e, a) {
          var t = e.zoom;if (t.gesture.image && 0 !== t.gesture.image.length) {
            if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void (t.image.isMoved = !1);t.image.isTouched = !1, t.image.isMoved = !1;var s = 300,
                i = 300,
                r = t.velocity.x * s,
                n = t.image.currentX + r,
                o = t.velocity.y * i,
                l = t.image.currentY + o;0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));var p = Math.max(s, i);t.image.currentX = n, t.image.currentY = l;var d = t.image.width * t.scale,
                u = t.image.height * t.scale;t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
          }
        }, onTransitionEnd: function onTransitionEnd(e) {
          var a = e.zoom;a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1);
        }, toggleZoom: function toggleZoom(e, t) {
          var s = e.zoom;if (s.gesture.slide || (s.gesture.slide = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex), s.gesture.image = s.gesture.slide.find("img, svg, canvas"), s.gesture.imageWrap = s.gesture.image.parent("." + e.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
            var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;"undefined" == typeof s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x, r = s.image.touchesStart.y), s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, t ? (x = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + x / 2 - i, p = o + T / 2 - r, c = s.gesture.image[0].offsetWidth, m = s.gesture.image[0].offsetHeight, h = c * s.scale, g = m * s.scale, f = Math.min(x / 2 - h / 2, 0), v = Math.min(T / 2 - g / 2, 0), w = -f, y = -v, d = l * s.scale, u = p * s.scale, d < f && (d = f), d > w && (d = w), u < v && (u = v), u > y && (u = y)) : (d = 0, u = 0), s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"));
          }
        }, attachEvents: function attachEvents(e) {
          var t = e ? "off" : "on";if (S.params.zoom) {
            var s = (S.slides, !("touchstart" !== S.touchEvents.start || !S.support.passiveListener || !S.params.passiveListeners) && { passive: !0, capture: !1 });S.support.gestures ? (S.slides[t]("gesturestart", S.zoom.onGestureStart, s), S.slides[t]("gesturechange", S.zoom.onGestureChange, s), S.slides[t]("gestureend", S.zoom.onGestureEnd, s)) : "touchstart" === S.touchEvents.start && (S.slides[t](S.touchEvents.start, S.zoom.onGestureStart, s), S.slides[t](S.touchEvents.move, S.zoom.onGestureChange, s), S.slides[t](S.touchEvents.end, S.zoom.onGestureEnd, s)), S[t]("touchStart", S.zoom.onTouchStart), S.slides.each(function (e, s) {
              a(s).find("." + S.params.zoomContainerClass).length > 0 && a(s)[t](S.touchEvents.move, S.zoom.onTouchMove);
            }), S[t]("touchEnd", S.zoom.onTouchEnd), S[t]("transitionEnd", S.zoom.onTransitionEnd), S.params.zoomToggle && S.on("doubleTap", S.zoom.toggleZoom);
          }
        }, init: function init() {
          S.zoom.attachEvents();
        }, destroy: function destroy() {
          S.zoom.attachEvents(!0);
        } }, S._plugins = [];for (var N in S.plugins) {
        var W = S.plugins[N](S, S.params[N]);W && S._plugins.push(W);
      }return S.callPlugins = function (e) {
        for (var a = 0; a < S._plugins.length; a++) {
          e in S._plugins[a] && S._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      }, S.emitterEventListeners = {}, S.emit = function (e) {
        S.params[e] && S.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var a;if (S.emitterEventListeners[e]) for (a = 0; a < S.emitterEventListeners[e].length; a++) {
          S.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }S.callPlugins && S.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }, S.on = function (e, a) {
        return e = g(e), S.emitterEventListeners[e] || (S.emitterEventListeners[e] = []), S.emitterEventListeners[e].push(a), S;
      }, S.off = function (e, a) {
        var t;if (e = g(e), "undefined" == typeof a) return S.emitterEventListeners[e] = [], S;if (S.emitterEventListeners[e] && 0 !== S.emitterEventListeners[e].length) {
          for (t = 0; t < S.emitterEventListeners[e].length; t++) {
            S.emitterEventListeners[e][t] === a && S.emitterEventListeners[e].splice(t, 1);
          }return S;
        }
      }, S.once = function (e, a) {
        e = g(e);var t = function t() {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), S.off(e, t);
        };return S.on(e, t), S;
      }, S.a11y = { makeFocusable: function makeFocusable(e) {
          return e.attr("tabIndex", "0"), e;
        }, addRole: function addRole(e, a) {
          return e.attr("role", a), e;
        }, addLabel: function addLabel(e, a) {
          return e.attr("aria-label", a), e;
        }, disable: function disable(e) {
          return e.attr("aria-disabled", !0), e;
        }, enable: function enable(e) {
          return e.attr("aria-disabled", !1), e;
        }, onEnterKey: function onEnterKey(e) {
          13 === e.keyCode && (a(e.target).is(S.params.nextButton) ? (S.onClickNext(e), S.isEnd ? S.a11y.notify(S.params.lastSlideMessage) : S.a11y.notify(S.params.nextSlideMessage)) : a(e.target).is(S.params.prevButton) && (S.onClickPrev(e), S.isBeginning ? S.a11y.notify(S.params.firstSlideMessage) : S.a11y.notify(S.params.prevSlideMessage)), a(e.target).is("." + S.params.bulletClass) && a(e.target)[0].click());
        }, liveRegion: a('<span class="' + S.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(e) {
          var a = S.a11y.liveRegion;0 !== a.length && (a.html(""), a.html(e));
        }, init: function init() {
          S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.a11y.makeFocusable(S.nextButton), S.a11y.addRole(S.nextButton, "button"), S.a11y.addLabel(S.nextButton, S.params.nextSlideMessage)), S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.a11y.makeFocusable(S.prevButton), S.a11y.addRole(S.prevButton, "button"), S.a11y.addLabel(S.prevButton, S.params.prevSlideMessage)), a(S.container).append(S.a11y.liveRegion);
        }, initPagination: function initPagination() {
          S.params.pagination && S.params.paginationClickable && S.bullets && S.bullets.length && S.bullets.each(function () {
            var e = a(this);S.a11y.makeFocusable(e), S.a11y.addRole(e, "button"), S.a11y.addLabel(e, S.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
          });
        }, destroy: function destroy() {
          S.a11y.liveRegion && S.a11y.liveRegion.length > 0 && S.a11y.liveRegion.remove();
        } }, S.init = function () {
        S.params.loop && S.createLoop(), S.updateContainerSize(), S.updateSlidesSize(), S.updatePagination(), S.params.scrollbar && S.scrollbar && (S.scrollbar.set(), S.params.scrollbarDraggable && S.scrollbar.enableDraggable()), "slide" !== S.params.effect && S.effects[S.params.effect] && (S.params.loop || S.updateProgress(), S.effects[S.params.effect].setTranslate()), S.params.loop ? S.slideTo(S.params.initialSlide + S.loopedSlides, 0, S.params.runCallbacksOnInit) : (S.slideTo(S.params.initialSlide, 0, S.params.runCallbacksOnInit), 0 === S.params.initialSlide && (S.parallax && S.params.parallax && S.parallax.setTranslate(), S.lazy && S.params.lazyLoading && (S.lazy.load(), S.lazy.initialImageLoaded = !0))), S.attachEvents(), S.params.observer && S.support.observer && S.initObservers(), S.params.preloadImages && !S.params.lazyLoading && S.preloadImages(), S.params.zoom && S.zoom && S.zoom.init(), S.params.autoplay && S.startAutoplay(), S.params.keyboardControl && S.enableKeyboardControl && S.enableKeyboardControl(), S.params.mousewheelControl && S.enableMousewheelControl && S.enableMousewheelControl(), S.params.hashnavReplaceState && (S.params.replaceState = S.params.hashnavReplaceState), S.params.history && S.history && S.history.init(), S.params.hashnav && S.hashnav && S.hashnav.init(), S.params.a11y && S.a11y && S.a11y.init(), S.emit("onInit", S);
      }, S.cleanupStyles = function () {
        S.container.removeClass(S.classNames.join(" ")).removeAttr("style"), S.wrapper.removeAttr("style"), S.slides && S.slides.length && S.slides.removeClass([S.params.slideVisibleClass, S.params.slideActiveClass, S.params.slideNextClass, S.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), S.paginationContainer && S.paginationContainer.length && S.paginationContainer.removeClass(S.params.paginationHiddenClass), S.bullets && S.bullets.length && S.bullets.removeClass(S.params.bulletActiveClass), S.params.prevButton && a(S.params.prevButton).removeClass(S.params.buttonDisabledClass), S.params.nextButton && a(S.params.nextButton).removeClass(S.params.buttonDisabledClass), S.params.scrollbar && S.scrollbar && (S.scrollbar.track && S.scrollbar.track.length && S.scrollbar.track.removeAttr("style"), S.scrollbar.drag && S.scrollbar.drag.length && S.scrollbar.drag.removeAttr("style"));
      }, S.destroy = function (e, a) {
        S.detachEvents(), S.stopAutoplay(), S.params.scrollbar && S.scrollbar && S.params.scrollbarDraggable && S.scrollbar.disableDraggable(), S.params.loop && S.destroyLoop(), a && S.cleanupStyles(), S.disconnectObservers(), S.params.zoom && S.zoom && S.zoom.destroy(), S.params.keyboardControl && S.disableKeyboardControl && S.disableKeyboardControl(), S.params.mousewheelControl && S.disableMousewheelControl && S.disableMousewheelControl(), S.params.a11y && S.a11y && S.a11y.destroy(), S.params.history && !S.params.replaceState && window.removeEventListener("popstate", S.history.setHistoryPopState), S.params.hashnav && S.hashnav && S.hashnav.destroy(), S.emit("onDestroy"), e !== !1 && (S = null);
      }, S.init(), S;
    }
  };t.prototype = { isSafari: function () {
      var e = navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function isArray(e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1, lteIE9: function () {
        var e = document.createElement("div");return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length;
      }() }, device: function () {
      var e = navigator.userAgent,
          a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          t = e.match(/(iPad).*OS\s([\d_]+)/),
          s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          i = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);return { ios: t || i || s, android: a };
    }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
        var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
      }(), flexbox: function () {
        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) {
          if (a[t] in e) return !0;
        }
      }(), observer: function () {
        return "MutationObserver" in window || "WebkitMutationObserver" in window;
      }(), passiveListener: function () {
        var e = !1;try {
          var a = Object.defineProperty({}, "passive", { get: function get() {
              e = !0;
            } });window.addEventListener("testPassiveListener", null, a);
        } catch (e) {}return e;
      }(), gestures: function () {
        return "ongesturestart" in window;
      }() }, plugins: {} };for (var s = function () {
    var e = function e(_e) {
      var a = this,
          t = 0;for (t = 0; t < _e.length; t++) {
        a[t] = _e[t];
      }return a.length = _e.length, this;
    },
        a = function a(_a, t) {
      var s = [],
          i = 0;if (_a && !t && _a instanceof e) return _a;if (_a) if ("string" == typeof _a) {
        var r,
            n,
            o = _a.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = _a, i = 0; i < n.childNodes.length; i++) {
            s.push(n.childNodes[i]);
          }
        } else for (r = t || "#" !== _a[0] || _a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(_a) : [document.getElementById(_a.split("#")[1])], i = 0; i < r.length; i++) {
          r[i] && s.push(r[i]);
        }
      } else if (_a.nodeType || _a === window || _a === document) s.push(_a);else if (_a.length > 0 && _a[0].nodeType) for (i = 0; i < _a.length; i++) {
        s.push(_a[i]);
      }return new e(s);
    };return e.prototype = { addClass: function addClass(e) {
        if ("undefined" == typeof e) return this;for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.add(a[t]);
          }
        }return this;
      }, removeClass: function removeClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.remove(a[t]);
          }
        }return this;
      }, hasClass: function hasClass(e) {
        return !!this[0] && this[0].classList.contains(e);
      }, toggleClass: function toggleClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.toggle(a[t]);
          }
        }return this;
      }, attr: function attr(e, a) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var t = 0; t < this.length; t++) {
          if (2 === arguments.length) this[t].setAttribute(e, a);else for (var s in e) {
            this[t][s] = e[s], this[t].setAttribute(s, e[s]);
          }
        }return this;
      }, removeAttr: function removeAttr(e) {
        for (var a = 0; a < this.length; a++) {
          this[a].removeAttribute(e);
        }return this;
      }, data: function data(e, a) {
        if ("undefined" != typeof a) {
          for (var t = 0; t < this.length; t++) {
            var s = this[t];s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = a;
          }return this;
        }if (this[0]) {
          var i = this[0].getAttribute("data-" + e);return i ? i : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0;
        }
      }, transform: function transform(e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
        }return this;
      }, transition: function transition(e) {
        "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
        }return this;
      }, on: function on(e, t, s, i) {
        function r(e) {
          var i = e.target;if (a(i).is(t)) s.call(i, e);else for (var r = a(i).parents(), n = 0; n < r.length; n++) {
            a(r[n]).is(t) && s.call(r[n], e);
          }
        }var n,
            o,
            l = e.split(" ");for (n = 0; n < this.length; n++) {
          if ("function" == typeof t || t === !1) for ("function" == typeof t && (s = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) {
            this[n].addEventListener(l[o], s, i);
          } else for (o = 0; o < l.length; o++) {
            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({ listener: s, liveListener: r }), this[n].addEventListener(l[o], r, i);
          }
        }return this;
      }, off: function off(e, a, t, s) {
        for (var i = e.split(" "), r = 0; r < i.length; r++) {
          for (var n = 0; n < this.length; n++) {
            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], s = arguments[2] || !1), this[n].removeEventListener(i[r], t, s);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) {
              this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
            }
          }
        }return this;
      }, once: function once(e, a, t, s) {
        function i(n) {
          t(n), r.off(e, a, i, s);
        }var r = this;"function" == typeof a && (a = !1, t = arguments[1], s = arguments[2]), r.on(e, a, i, s);
      }, trigger: function trigger(e, a) {
        for (var t = 0; t < this.length; t++) {
          var s;try {
            s = new window.CustomEvent(e, { detail: a, bubbles: !0, cancelable: !0 });
          } catch (t) {
            s = document.createEvent("Event"), s.initEvent(e, !0, !0), s.detail = a;
          }this[t].dispatchEvent(s);
        }return this;
      }, transitionEnd: function transitionEnd(e) {
        function a(r) {
          if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) {
            i.off(s[t], a);
          }
        }var t,
            s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            i = this;if (e) for (t = 0; t < s.length; t++) {
          i.on(s[t], a);
        }return this;
      }, width: function width() {
        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
      }, outerWidth: function outerWidth(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
      }, height: function height() {
        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
      }, outerHeight: function outerHeight(e) {
        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
      }, offset: function offset() {
        if (this.length > 0) {
          var e = this[0],
              a = e.getBoundingClientRect(),
              t = document.body,
              s = e.clientTop || t.clientTop || 0,
              i = e.clientLeft || t.clientLeft || 0,
              r = window.pageYOffset || e.scrollTop,
              n = window.pageXOffset || e.scrollLeft;return { top: a.top + r - s, left: a.left + n - i };
        }return null;
      }, css: function css(e, a) {
        var t;if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (t = 0; t < this.length; t++) {
              for (var s in e) {
                this[t].style[s] = e[s];
              }
            }return this;
          }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
        }if (2 === arguments.length && "string" == typeof e) {
          for (t = 0; t < this.length; t++) {
            this[t].style[e] = a;
          }return this;
        }return this;
      }, each: function each(e) {
        for (var a = 0; a < this.length; a++) {
          e.call(this[a], a, this[a]);
        }return this;
      }, html: function html(e) {
        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;for (var a = 0; a < this.length; a++) {
          this[a].innerHTML = e;
        }return this;
      }, text: function text(e) {
        if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;for (var a = 0; a < this.length; a++) {
          this[a].textContent = e;
        }return this;
      }, is: function is(t) {
        if (!this[0]) return !1;var s, i;if ("string" == typeof t) {
          var r = this[0];if (r === document) return t === document;if (r === window) return t === window;if (r.matches) return r.matches(t);if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);if (r.mozMatchesSelector) return r.mozMatchesSelector(t);if (r.msMatchesSelector) return r.msMatchesSelector(t);for (s = a(t), i = 0; i < s.length; i++) {
            if (s[i] === this[0]) return !0;
          }return !1;
        }if (t === document) return this[0] === document;if (t === window) return this[0] === window;if (t.nodeType || t instanceof e) {
          for (s = t.nodeType ? [t] : t, i = 0; i < s.length; i++) {
            if (s[i] === this[0]) return !0;
          }return !1;
        }return !1;
      }, index: function index() {
        if (this[0]) {
          for (var e = this[0], a = 0; null !== (e = e.previousSibling);) {
            1 === e.nodeType && a++;
          }return a;
        }
      }, eq: function eq(a) {
        if ("undefined" == typeof a) return this;var t,
            s = this.length;return a > s - 1 ? new e([]) : a < 0 ? (t = s + a, new e(t < 0 ? [] : [this[t]])) : new e([this[a]]);
      }, append: function append(a) {
        var t, s;for (t = 0; t < this.length; t++) {
          if ("string" == typeof a) {
            var i = document.createElement("div");for (i.innerHTML = a; i.firstChild;) {
              this[t].appendChild(i.firstChild);
            }
          } else if (a instanceof e) for (s = 0; s < a.length; s++) {
            this[t].appendChild(a[s]);
          } else this[t].appendChild(a);
        }return this;
      }, prepend: function prepend(a) {
        var t, s;for (t = 0; t < this.length; t++) {
          if ("string" == typeof a) {
            var i = document.createElement("div");for (i.innerHTML = a, s = i.childNodes.length - 1; s >= 0; s--) {
              this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
            }
          } else if (a instanceof e) for (s = 0; s < a.length; s++) {
            this[t].insertBefore(a[s], this[t].childNodes[0]);
          } else this[t].insertBefore(a, this[t].childNodes[0]);
        }return this;
      }, insertBefore: function insertBefore(e) {
        for (var t = a(e), s = 0; s < this.length; s++) {
          if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0]);else if (t.length > 1) for (var i = 0; i < t.length; i++) {
            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i]);
          }
        }
      }, insertAfter: function insertAfter(e) {
        for (var t = a(e), s = 0; s < this.length; s++) {
          if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0].nextSibling);else if (t.length > 1) for (var i = 0; i < t.length; i++) {
            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling);
          }
        }
      }, next: function next(t) {
        return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
      }, nextAll: function nextAll(t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.nextElementSibling;) {
          var r = i.nextElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, prev: function prev(t) {
        return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
      }, prevAll: function prevAll(t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.previousElementSibling;) {
          var r = i.previousElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, parent: function parent(e) {
        for (var t = [], s = 0; s < this.length; s++) {
          e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
        }return a(a.unique(t));
      }, parents: function parents(e) {
        for (var t = [], s = 0; s < this.length; s++) {
          for (var i = this[s].parentNode; i;) {
            e ? a(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
          }
        }return a(a.unique(t));
      }, find: function find(a) {
        for (var t = [], s = 0; s < this.length; s++) {
          for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++) {
            t.push(i[r]);
          }
        }return new e(t);
      }, children: function children(t) {
        for (var s = [], i = 0; i < this.length; i++) {
          for (var r = this[i].childNodes, n = 0; n < r.length; n++) {
            t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
          }
        }return new e(a.unique(s));
      }, remove: function remove() {
        for (var e = 0; e < this.length; e++) {
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        }return this;
      }, add: function add() {
        var e,
            t,
            s = this;for (e = 0; e < arguments.length; e++) {
          var i = a(arguments[e]);for (t = 0; t < i.length; t++) {
            s[s.length] = i[t], s.length++;
          }
        }return s;
      } }, a.fn = e.prototype, a.unique = function (e) {
      for (var a = [], t = 0; t < e.length; t++) {
        a.indexOf(e[t]) === -1 && a.push(e[t]);
      }return a;
    }, a;
  }(), i = ["jQuery", "Zepto", "Dom7"], r = 0; r < i.length; r++) {
    window[i[r]] && e(window[i[r]]);
  }var n;n = "undefined" == typeof s ? window.Dom7 || window.Zepto || window.jQuery : s, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (e) {
    function a(r) {
      if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) {
        i.off(s[t], a);
      }
    }var t,
        s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
        i = this;if (e) for (t = 0; t < s.length; t++) {
      i.on(s[t], a);
    }return this;
  }), "transform" in n.fn || (n.fn.transform = function (e) {
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
    }return this;
  }), "transition" in n.fn || (n.fn.transition = function (e) {
    "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
    }return this;
  }), "outerWidth" in n.fn || (n.fn.outerWidth = function (e) {
    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
  })), window.Swiper = t;
}(),  true ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
  "use strict";
  return window.Swiper;
});
//# sourceMappingURL=maps/swiper.min.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

__webpack_require__(3);
__webpack_require__(2);
__webpack_require__(4);
__webpack_require__(5);

__webpack_require__(1);
__webpack_require__(0);

/***/ })
/******/ ]);
//# sourceMappingURL=boudle.js.map