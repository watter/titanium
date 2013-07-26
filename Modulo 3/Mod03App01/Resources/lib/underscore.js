(function() {
    function r(a, c, d) {
        if (a === c) return 0 !== a || 1 / a == 1 / c;
        if (null == a || null == c) return a === c;
        a._chain && (a = a._wrapped);
        c._chain && (c = c._wrapped);
        if (a.isEqual && b.isFunction(a.isEqual)) return a.isEqual(c);
        if (c.isEqual && b.isFunction(c.isEqual)) return c.isEqual(a);
        var e = l.call(a);
        if (e != l.call(c)) return !1;
        switch (e) {
          case "[object String]":
            return a == "" + c;
          case "[object Number]":
            return a != +a ? c != +c : 0 == a ? 1 / a == 1 / c : a == +c;
          case "[object Date]":
          case "[object Boolean]":
            return +a == +c;
          case "[object RegExp]":
            return a.source == c.source && a.global == c.global && a.multiline == c.multiline && a.ignoreCase == c.ignoreCase;
        }
        if ("object" != typeof a || "object" != typeof c) return !1;
        for (var f = d.length; f--; ) if (d[f] == a) return !0;
        d.push(a);
        var f = 0, g = !0;
        if ("[object Array]" == e) {
            if (f = a.length, g = f == c.length) for (; f-- && (g = f in a == f in c && r(a[f], c[f], d)); ) ;
        } else {
            if ("constructor" in a != "constructor" in c || a.constructor != c.constructor) return !1;
            for (var h in a) if (b.has(a, h) && (f++, !(g = b.has(c, h) && r(a[h], c[h], d)))) break;
            if (g) {
                for (h in c) if (b.has(c, h) && !(f--)) break;
                g = !f;
            }
        }
        d.pop();
        return g;
    }
    var s = this, I = s._, o = {}, k = Array.prototype, p = Object.prototype, i = k.slice, J = k.unshift, l = p.toString, K = p.hasOwnProperty, y = k.forEach, z = k.map, A = k.reduce, B = k.reduceRight, C = k.filter, D = k.every, E = k.some, q = k.indexOf, F = k.lastIndexOf, p = Array.isArray, L = Object.keys, t = Function.prototype.bind, b = function(a) {
        return new m(a);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = b), exports._ = b) : s._ = b;
    b.VERSION = "1.3.3";
    var j = b.each = b.forEach = function(a, c, d) {
        if (a != null) if (y && a.forEach === y) a.forEach(c, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; e < f; e++) if (e in a && c.call(d, a[e], e, a) === o) break;
        } else for (e in a) if (b.has(a, e) && c.call(d, a[e], e, a) === o) break;
    };
    b.map = b.collect = function(a, c, b) {
        var e = [];
        if (a == null) return e;
        if (z && a.map === z) return a.map(c, b);
        j(a, function(a, g, h) {
            e[e.length] = c.call(b, a, g, h);
        });
        a.length === +a.length && (e.length = a.length);
        return e;
    };
    b.reduce = b.foldl = b.inject = function(a, c, d, e) {
        var f = arguments.length > 2;
        a == null && (a = []);
        if (A && a.reduce === A) {
            e && (c = b.bind(c, e));
            return f ? a.reduce(c, d) : a.reduce(c);
        }
        j(a, function(a, b, i) {
            if (f) d = c.call(e, d, a, b, i); else {
                d = a;
                f = !0;
            }
        });
        if (!f) throw new TypeError("Reduce of empty array with no initial value");
        return d;
    };
    b.reduceRight = b.foldr = function(a, c, d, e) {
        var f = arguments.length > 2;
        a == null && (a = []);
        if (B && a.reduceRight === B) {
            e && (c = b.bind(c, e));
            return f ? a.reduceRight(c, d) : a.reduceRight(c);
        }
        var g = b.toArray(a).reverse();
        e && !f && (c = b.bind(c, e));
        return f ? b.reduce(g, c, d, e) : b.reduce(g, c);
    };
    b.find = b.detect = function(a, c, b) {
        var e;
        G(a, function(a, g, h) {
            if (c.call(b, a, g, h)) {
                e = a;
                return !0;
            }
        });
        return e;
    };
    b.filter = b.select = function(a, c, b) {
        var e = [];
        if (a == null) return e;
        if (C && a.filter === C) return a.filter(c, b);
        j(a, function(a, g, h) {
            c.call(b, a, g, h) && (e[e.length] = a);
        });
        return e;
    };
    // Convenience version of a common use case of `filter`: selecting only objects
  // with specific `key:value` pairs.
	b.where = function(obj, attrs) {
		if (_.isEmpty(attrs)) return [];
		return _.filter(obj, function(value) {
		  for (var key in attrs) {
		    if (attrs[key] !== value[key]) return false;
		  }
		  return true;
		});
	};
	b.pairs = function(obj) {
	    var pairs = [];
	    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
	    return pairs;
	};
    b.reject = function(a, c, b) {
        var e = [];
        if (a == null) return e;
        j(a, function(a, g, h) {
            c.call(b, a, g, h) || (e[e.length] = a);
        });
        return e;
    };
    b.every = b.all = function(a, c, b) {
        var e = !0;
        if (a == null) return e;
        if (D && a.every === D) return a.every(c, b);
        j(a, function(a, g, h) {
            if (!(e = e && c.call(b, a, g, h))) return o;
        });
        return !!e;
    };
    var G = b.some = b.any = function(a, c, d) {
        c || (c = b.identity);
        var e = !1;
        if (a == null) return e;
        if (E && a.some === E) return a.some(c, d);
        j(a, function(a, b, h) {
            if (e || (e = c.call(d, a, b, h))) return o;
        });
        return !!e;
    };
    b.include = b.contains = function(a, c) {
        var b = !1;
        return a == null ? b : q && a.indexOf === q ? a.indexOf(c) != -1 : b = G(a, function(a) {
            return a === c;
        });
    };
    b.invoke = function(a, c) {
        var d = i.call(arguments, 2);
        return b.map(a, function(a) {
            return (b.isFunction(c) ? c || a : a[c]).apply(a, d);
        });
    };
    b.pluck = function(a, c) {
        return b.map(a, function(a) {
            return a[c];
        });
    };
    b.max = function(a, c, d) {
        if (!c && b.isArray(a) && a[0] === +a[0]) return Math.max.apply(Math, a);
        if (!c && b.isEmpty(a)) return -Infinity;
        var e = {
            computed: -Infinity
        };
        j(a, function(a, b, h) {
            b = c ? c.call(d, a, b, h) : a;
            b >= e.computed && (e = {
                value: a,
                computed: b
            });
        });
        return e.value;
    };
    b.min = function(a, c, d) {
        if (!c && b.isArray(a) && a[0] === +a[0]) return Math.min.apply(Math, a);
        if (!c && b.isEmpty(a)) return Infinity;
        var e = {
            computed: Infinity
        };
        j(a, function(a, b, h) {
            b = c ? c.call(d, a, b, h) : a;
            b < e.computed && (e = {
                value: a,
                computed: b
            });
        });
        return e.value;
    };
    b.shuffle = function(a) {
        var b = [], d;
        j(a, function(a, f) {
            d = Math.floor(Math.random() * (f + 1));
            b[f] = b[d];
            b[d] = a;
        });
        return b;
    };
    b.sortBy = function(a, c, d) {
        var e = b.isFunction(c) ? c : function(a) {
            return a[c];
        };
        return b.pluck(b.map(a, function(a, b, c) {
            return {
                value: a,
                criteria: e.call(d, a, b, c)
            };
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            return c === void 0 ? 1 : d === void 0 ? -1 : c < d ? -1 : c > d ? 1 : 0;
        }), "value");
    };
    b.groupBy = function(a, c) {
        var d = {}, e = b.isFunction(c) ? c : function(a) {
            return a[c];
        };
        j(a, function(a, b) {
            var c = e(a, b);
            (d[c] || (d[c] = [])).push(a);
        });
        return d;
    };
    b.sortedIndex = function(a, c, d) {
        d || (d = b.identity);
        for (var e = 0, f = a.length; e < f; ) {
            var g = e + f >> 1;
            d(a[g]) < d(c) ? e = g + 1 : f = g;
        }
        return e;
    };
    b.toArray = function(a) {
        return a ? b.isArray(a) || b.isArguments(a) ? i.call(a) : a.toArray && b.isFunction(a.toArray) ? a.toArray() : b.values(a) : [];
    };
    b.size = function(a) {
        return b.isArray(a) ? a.length : b.keys(a).length;
    };
    b.first = b.head = b.take = function(a, b, d) {
        return b != null && !d ? i.call(a, 0, b) : a[0];
    };
    b.initial = function(a, b, d) {
        return i.call(a, 0, a.length - (b == null || d ? 1 : b));
    };
    b.last = function(a, b, d) {
        return b != null && !d ? i.call(a, Math.max(a.length - b, 0)) : a[a.length - 1];
    };
    b.rest = b.tail = function(a, b, d) {
        return i.call(a, b == null || d ? 1 : b);
    };
    b.compact = function(a) {
        return b.filter(a, function(a) {
            return !!a;
        });
    };
    b.flatten = function(a, c) {
        return b.reduce(a, function(a, e) {
            if (b.isArray(e)) return a.concat(c ? e : b.flatten(e));
            a[a.length] = e;
            return a;
        }, []);
    };
    b.without = function(a) {
        return b.difference(a, i.call(arguments, 1));
    };
    b.uniq = b.unique = function(a, c, d) {
        var d = d ? b.map(a, d) : a, e = [];
        a.length < 3 && (c = !0);
        b.reduce(d, function(d, g, h) {
            if (c ? b.last(d) !== g || !d.length : !b.include(d, g)) {
                d.push(g);
                e.push(a[h]);
            }
            return d;
        }, []);
        return e;
    };
    b.union = function() {
        return b.uniq(b.flatten(arguments, !0));
    };
    b.intersection = b.intersect = function(a) {
        var c = i.call(arguments, 1);
        return b.filter(b.uniq(a), function(a) {
            return b.every(c, function(c) {
                return b.indexOf(c, a) >= 0;
            });
        });
    };
    b.difference = function(a) {
        var c = b.flatten(i.call(arguments, 1), !0);
        return b.filter(a, function(a) {
            return !b.include(c, a);
        });
    };
    b.zip = function() {
        for (var a = i.call(arguments), c = b.max(b.pluck(a, "length")), d = Array(c), e = 0; e < c; e++) d[e] = b.pluck(a, "" + e);
        return d;
    };
    b.indexOf = function(a, c, d) {
        if (a == null) return -1;
        var e;
        if (d) {
            d = b.sortedIndex(a, c);
            return a[d] === c ? d : -1;
        }
        if (q && a.indexOf === q) return a.indexOf(c);
        d = 0;
        for (e = a.length; d < e; d++) if (d in a && a[d] === c) return d;
        return -1;
    };
    b.lastIndexOf = function(a, b) {
        if (a == null) return -1;
        if (F && a.lastIndexOf === F) return a.lastIndexOf(b);
        for (var d = a.length; d--; ) if (d in a && a[d] === b) return d;
        return -1;
    };
    b.range = function(a, b, d) {
        if (arguments.length <= 1) {
            b = a || 0;
            a = 0;
        }
        for (var d = arguments[2] || 1, e = Math.max(Math.ceil((b - a) / d), 0), f = 0, g = Array(e); f < e; ) {
            g[f++] = a;
            a += d;
        }
        return g;
    };
    var H = function() {};
    b.bind = function(a, c) {
        var d, e;
        if (a.bind === t && t) return t.apply(a, i.call(arguments, 1));
        if (!b.isFunction(a)) throw new TypeError;
        e = i.call(arguments, 2);
        return d = function() {
            if (this instanceof d) {
                H.prototype = a.prototype;
                var b = new H, g = a.apply(b, e.concat(i.call(arguments)));
                return Object(g) === g ? g : b;
            }
            return a.apply(c, e.concat(i.call(arguments)));
        };
    };
    b.bindAll = function(a) {
        var c = i.call(arguments, 1);
        c.length == 0 && (c = b.functions(a));
        j(c, function(c) {
            a[c] = b.bind(a[c], a);
        });
        return a;
    };
    b.memoize = function(a, c) {
        var d = {};
        c || (c = b.identity);
        return function() {
            var e = c.apply(this, arguments);
            return b.has(d, e) ? d[e] : d[e] = a.apply(this, arguments);
        };
    };
    b.delay = function(a, b) {
        var d = i.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, d);
        }, b);
    };
    b.defer = function(a) {
        return b.delay.apply(b, [ a, 1 ].concat(i.call(arguments, 1)));
    };
    b.throttle = function(a, c) {
        var d, e, f, g, h, i, j = b.debounce(function() {
            h = g = !1;
        }, c);
        return function() {
            d = this;
            e = arguments;
            f || (f = setTimeout(function() {
                f = null;
                h && a.apply(d, e);
                j();
            }, c));
            g ? h = !0 : i = a.apply(d, e);
            j();
            g = !0;
            return i;
        };
    };
    b.debounce = function(a, b, d) {
        var e;
        return function() {
            var f = this, g = arguments;
            d && !e && a.apply(f, g);
            clearTimeout(e);
            e = setTimeout(function() {
                e = null;
                d || a.apply(f, g);
            }, b);
        };
    };
    b.once = function(a) {
        var b = !1, d;
        return function() {
            if (b) return d;
            b = !0;
            return d = a.apply(this, arguments);
        };
    };
    b.wrap = function(a, b) {
        return function() {
            var d = [ a ].concat(i.call(arguments, 0));
            return b.apply(this, d);
        };
    };
    b.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, d = a.length - 1; d >= 0; d--) b = [ a[d].apply(this, b) ];
            return b[0];
        };
    };
    b.after = function(a, b) {
        return a <= 0 ? b() : function() {
            if (--a < 1) return b.apply(this, arguments);
        };
    };
    b.keys = L || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var c = [], d;
        for (d in a) b.has(a, d) && (c[c.length] = d);
        return c;
    };
    b.values = function(a) {
        return b.map(a, b.identity);
    };
    b.functions = b.methods = function(a) {
        var c = [], d;
        for (d in a) b.isFunction(a[d]) && c.push(d);
        return c.sort();
    };
    b.extend = function(a) {
        j(i.call(arguments, 1), function(b) {
            for (var d in b) a[d] = b[d];
        });
        return a;
    };
    b.pick = function(a) {
        var c = {};
        j(b.flatten(i.call(arguments, 1)), function(b) {
            b in a && (c[b] = a[b]);
        });
        return c;
    };
    b.defaults = function(a) {
        j(i.call(arguments, 1), function(b) {
            for (var d in b) a[d] == null && (a[d] = b[d]);
        });
        return a;
    };
    b.clone = function(a) {
        return b.isObject(a) ? b.isArray(a) ? a.slice() : b.extend({}, a) : a;
    };
    b.tap = function(a, b) {
        b(a);
        return a;
    };
    b.isEqual = function(a, b) {
        return r(a, b, []);
    };
    b.isEmpty = function(a) {
        if (a == null) return !0;
        if (b.isArray(a) || b.isString(a)) return a.length === 0;
        for (var c in a) if (b.has(a, c)) return !1;
        return !0;
    };
    b.isElement = function(a) {
        return !!a && a.nodeType == 1;
    };
    b.isArray = p || function(a) {
        return l.call(a) == "[object Array]";
    };
    b.isObject = function(a) {
        return a === Object(a);
    };
    b.isArguments = function(a) {
        return l.call(a) == "[object Arguments]";
    };
    b.isArguments(arguments) || (b.isArguments = function(a) {
        return !!a && !!b.has(a, "callee");
    });
    b.isFunction = function(a) {
        return l.call(a) == "[object Function]";
    };
    b.isString = function(a) {
        return l.call(a) == "[object String]";
    };
    b.isNumber = function(a) {
        return l.call(a) == "[object Number]";
    };
    b.isFinite = function(a) {
        return b.isNumber(a) && isFinite(a);
    };
    b.isNaN = function(a) {
        return a !== a;
    };
    b.isBoolean = function(a) {
        return a === !0 || a === !1 || l.call(a) == "[object Boolean]";
    };
    b.isDate = function(a) {
        return l.call(a) == "[object Date]";
    };
    b.isRegExp = function(a) {
        return l.call(a) == "[object RegExp]";
    };
    b.isNull = function(a) {
        return a === null;
    };
    b.isUndefined = function(a) {
        return a === void 0;
    };
    b.has = function(a, b) {
        return K.call(a, b);
    };
    b.noConflict = function() {
        s._ = I;
        return this;
    };
    b.identity = function(a) {
        return a;
    };
    b.times = function(a, b, d) {
        for (var e = 0; e < a; e++) b.call(d, e);
    };
    b.escape = function(a) {
        return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
    };
    b.result = function(a, c) {
        if (a == null) return null;
        var d = a[c];
        return b.isFunction(d) ? d.call(a) : d;
    };
    //Lib Mixin - Extends the _ library
    b.lmixin = function(a) {
        j(b.functions(a), function(c) {
            M(c, b[c] = a[c]);
        });
    };
    b.mixin = function(target) {
		var force = b.isBoolean(arguments[arguments.length - 1]) ? arguments[arguments.length - 1] : false;
		var length = b.isBoolean(arguments[arguments.length - 1]) ? arguments.length - 1 : arguments.length;
		for (var i = 0; i < length; i++) {
			_mixin(target, arguments[i], force);
		}
		return target;
	};
	var _mixin = function(target, object, force) {
		for(var name in object) {
			var s = object[name];
			if(force || !(name in target)) {
				target[name] = s;
			}
		}
		return target;
	};
	b.capitalize = function(a, c) {
		if(c) return a.replace(/(?:^|\s)\S/g, function(z) { return z.toUpperCase(); });
		if(a.match(/[a-zA-Z]/)) {
			return a.charAt(0).toUpperCase() + a.slice(1);
		} else {
			return a;
		}
	};
	b.del = function(a, c) {
		if(a[c]) {
			var z = a[c];
			delete a[c];
			return z;
		}
	};
	b.getDatabaseTime = function() {
		var date = new Date();
		var retDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getMilliseconds(); 
		return retDate;
	};
    b.isValidEmail = function(a) {
    	var re = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    	return re.test(a);
    };
    b.isValidDigits = function(a) {
    	var re = /^\d+$/;
    	return re.test(a);
    };
    b.isValidNumber = function(a) {
    	var re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
    	return re.test(a);
    };
    b.isValidUrl = function(a) {
    	var re = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    	return re.test(a);
    };
    b.isOldDate = function(a) {
    	var currentDate = new Date(),
        	cDay = currentDate.getDate(),
        	cMonth = currentDate.getMonth()+1,
        	cYear = currentDate.getFullYear(),
        	cHour = currentDate.getHours(),
        	cMin = currentDate.getMinutes(),
        	day = a.day, 
        	month = a.month,
        	year = a.year,
        	hour = a.hour,
        	minutes = a.minutes,
    		validDate = true, 
    		validTime = true;

    	if((day < cDay && month == cMonth && year == cYear) || (month < cMonth && year <= cYear) || (year < cYear)) {
    		validDate = false;
    	}
    	
    	/*info('[underscore - isOldDate] Checking ' 
    	+ 'day:\n' + day + ' | cDay: ' + cDay 
    	+ '\nmonth: ' + month + ' | cMonth: ' + cMonth
    	+ ' \nyear: ' + year + ' | cYear: ' + cYear 
    	+ '\nhour: ' + hour  + ' | cHour: ' + cHour 
    	+ '\nminutes: ' + minutes + ' | cMin: ' + cMin);*/
    	
		if(((day == cDay) && (month == cMonth) && (year == cYear)) && ((parseInt(hour) < parseInt(cHour)) || ((parseInt(hour) == parseInt(cHour)) && (minutes < cMin)))) {
			
			/*info('[underscore - isOldDate] Invalid time. \n'
			+ '\nhour: ' + hour  + ' | cHour: ' + cHour 
			+ '\nminutes: ' + minutes + ' | cMin: ' + cMin);*/
			
			validTime = false;
		}
		return {
			isValid: (validDate && validTime ? true : false),
			isValidDate: validDate,
			isValidTime: validTime
		};
    }
    var N = 0;
    b.uniqueId = function(a) {
        var b = N++;
        return a ? a + b : b;
    };
    b.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var u = /.^/, n = {
        "\\": "\\",
        "'": "'",
        r: "\r",
        n: "\n",
        t: "	",
        u2028: "\u2028",
        u2029: "\u2029"
    }, v;
    for (v in n) n[n[v]] = v;
    var O = /\\|'|\r|\n|\t|\u2028|\u2029/g, P = /\\(\\|'|r|n|t|u2028|u2029)/g, w = function(a) {
        return a.replace(P, function(a, b) {
            return n[b];
        });
    };
    b.template = function(a, c, d) {
        d = b.defaults(d || {}, b.templateSettings);
        a = "__p+='" + a.replace(O, function(a) {
            return "\\" + n[a];
        }).replace(d.escape || u, function(a, b) {
            return "'+\n_.escape(" + w(b) + ")+\n'";
        }).replace(d.interpolate || u, function(a, b) {
            return "'+\n(" + w(b) + ")+\n'";
        }).replace(d.evaluate || u, function(a, b) {
            return "';\n" + w(b) + "\n;__p+='";
        }) + "';\n";
        d.variable || (a = "with(obj||{}){\n" + a + "}\n");
        var a = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + a + "return __p;\n", e = new Function(d.variable || "obj", "_", a);
        if (c) return e(c, b);
        c = function(a) {
            return e.call(this, a, b);
        };
        c.source = "function(" + (d.variable || "obj") + "){\n" + a + "}";
        return c;
    };
    b.chain = function(a) {
        return b(a).chain();
    };
    var m = function(a) {
        this._wrapped = a;
    };
    b.prototype = m.prototype;
    var x = function(a, c) {
        return c ? b(a).chain() : a;
    }, M = function(a, c) {
        m.prototype[a] = function() {
            var a = i.call(arguments);
            J.call(a, this._wrapped);
            return x(c.apply(b, a), this._chain);
        };
    };
    b.mixin(b);
    j("pop,push,reverse,shift,sort,splice,unshift".split(","), function(a) {
        var b = k[a];
        m.prototype[a] = function() {
            var d = this._wrapped;
            b.apply(d, arguments);
            var e = d.length;
            (a == "shift" || a == "splice") && e === 0 && delete d[0];
            return x(d, this._chain);
        };
    });
    j([ "concat", "join", "slice" ], function(a) {
        var b = k[a];
        m.prototype[a] = function() {
            return x(b.apply(this._wrapped, arguments), this._chain);
        };
    });
    m.prototype.chain = function() {
        this._chain = !0;
        return this;
    };
    m.prototype.value = function() {
        return this._wrapped;
    };
}).call(this);
