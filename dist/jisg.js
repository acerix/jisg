function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

var runtime_1 = createCommonjsModule(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap;

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}

    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof_1(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator;

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        return info;
      }

      context.delegate = null;
      return ContinueSentinel;
    }

    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse();
      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      }

      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };
    return exports;
  }( module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var regenerator = runtime_1;

var _marked = regenerator.mark(A000001);

function A000001() {
  var _i, _arr, n;

  return regenerator.wrap(function A000001$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [0, 1, 1, 1, 2, 1, 2, 1, 5, 2, 2, 1, 5, 1, 2, 1, 14, 1, 5, 1, 5, 2, 2, 1, 15, 2, 2, 5, 4, 1, 4, 1, 51, 1, 2, 1, 14, 1, 2, 2, 14, 1, 6, 1, 4, 2, 2, 1, 52, 2, 5, 1, 5, 1, 15, 2, 13, 2, 2, 1, 13, 1, 2, 4, 267, 1, 4, 1, 5, 1, 4, 1, 50, 1, 2, 3, 4, 1, 6, 1, 52, 15, 2, 1, 15, 1, 2, 1, 12, 1, 10, 1, 4, 2];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var _marked$1 = regenerator.mark(A000002);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function A000002() {
  var _i, _arr, n, p, g, _iterator, _step, r, i;

  return regenerator.wrap(function A000002$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [1, 2, 2];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
          p = true;
          g = A000002();
          g.next();
          g.next();
          _iterator = _createForOfIteratorHelper(g);
          _context.prev = 13;

          _iterator.s();

        case 15:
          if ((_step = _iterator.n()).done) {
            _context.next = 27;
            break;
          }

          r = _step.value;
          p = !p;
          i = 0;

        case 19:
          if (!(i < r)) {
            _context.next = 25;
            break;
          }

          _context.next = 22;
          return p + 1;

        case 22:
          i++;
          _context.next = 19;
          break;

        case 25:
          _context.next = 15;
          break;

        case 27:
          _context.next = 32;
          break;

        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](13);

          _iterator.e(_context.t0);

        case 32:
          _context.prev = 32;

          _iterator.f();

          return _context.finish(32);

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$1, null, [[13, 29, 32, 35]]);
}

var _marked$2 = regenerator.mark(A000003);

function A000003() {
  var _i, _arr, n;

  return regenerator.wrap(function A000003$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 3, 2, 2, 4, 2, 2, 4, 2, 3, 4, 4, 2, 3, 4, 2, 6, 3, 2, 6, 4, 3, 4, 4, 4, 6, 4, 2, 6, 4, 4, 8, 4, 3, 6, 4, 4, 5, 4, 4, 6, 6, 4, 6, 6, 4, 8, 4, 2, 9, 4, 6, 8, 4, 4, 8, 8, 3, 8, 8, 4, 7, 4, 4, 10, 6, 6, 8, 4, 5, 8, 6, 4, 9, 8, 4, 10, 6, 4, 12, 8, 6, 6, 4, 8, 8, 8, 4, 8, 6, 4];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$2);
}

var _marked$3 = regenerator.mark(A000004);

function A000004() {
  return regenerator.wrap(function A000004$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          _context.next = 3;
          return 0;

        case 3:
          _context.next = 0;
          break;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$3);
}

var _marked$4 = regenerator.mark(A000005);

function A000005() {
  var n, c, i;
  return regenerator.wrap(function A000005$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          n = 2;

        case 3:

          c = 2;

          for (i = 2; i < n; i++) {
            if (n % i === 0) {
              c++;
            }
          }

          _context.next = 8;
          return c;

        case 8:
          n++;
          _context.next = 3;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$4);
}

var _isFinite = Number.isFinite || function (value) {
  return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
};

var numberIsInteger = Number.isInteger || function (x) {
  return _isFinite(x) && Math.floor(x) === x;
};

function isPrime(n) {
  if (n === 1) {
    return false;
  }

  if (n === 2 || n === 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  } else {
    var p = 5;
    var w = 2;

    while (p * p <= n) {
      if (n % p === 0) {
        return false;
      }

      p += w;
      w = 6 - w;
    }

    return true;
  }
}

var isPrime_1 = function isPrime_1(n) {
  if (typeof n !== 'number') {
    throw new TypeError('Expected a number');
  }

  if (n <= 0) {
    throw new Error('The number must be a positive integer');
  }

  if (!numberIsInteger(n)) {
    throw new Error('The number must be a integer');
  }

  return isPrime(n);
};

var _marked$5 = regenerator.mark(A000040);
function A000040() {
  var n;
  return regenerator.wrap(function A000040$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 2;

        case 1:

          if (!isPrime_1(n)) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return n;

        case 5:
          n++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$5);
}

var _marked$6 = regenerator.mark(A000006);

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function A000006() {
  var _iterator, _step, n;

  return regenerator.wrap(function A000006$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iterator = _createForOfIteratorHelper$1(A000040());
          _context.prev = 1;

          _iterator.s();

        case 3:
          if ((_step = _iterator.n()).done) {
            _context.next = 9;
            break;
          }

          n = _step.value;
          _context.next = 7;
          return Math.floor(Math.sqrt(n));

        case 7:
          _context.next = 3;
          break;

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);

          _iterator.e(_context.t0);

        case 14:
          _context.prev = 14;

          _iterator.f();

          return _context.finish(14);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$6, null, [[1, 11, 14, 17]]);
}

var _marked$7 = regenerator.mark(A000007);

function A000007() {
  return regenerator.wrap(function A000007$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:

          _context.next = 5;
          return 0;

        case 5:
          _context.next = 2;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$7);
}

var _marked$8 = regenerator.mark(A000008);

function A000008() {
  var _i, _arr, n;

  return regenerator.wrap(function A000008$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 11, 12, 15, 16, 19, 22, 25, 28, 31, 34, 40, 43, 49, 52, 58, 64, 70, 76, 82, 88, 98, 104, 114, 120, 130, 140, 150, 160, 170, 180, 195, 205, 220, 230, 245, 260, 275, 290, 305, 320, 341, 356, 377, 392, 413, 434, 455, 476, 497, 518, 546];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$8);
}

var _marked$9 = regenerator.mark(A000009);

function A000009() {
  var _i, _arr, n;

  return regenerator.wrap(function A000009$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 46, 54, 64, 76, 89, 104, 122, 142, 165, 192, 222, 256, 296, 340, 390, 448, 512, 585, 668, 760, 864, 982, 1113, 1260, 1426, 1610, 1816, 2048, 2304, 2590, 2910, 3264, 3658, 4097, 4582, 5120, 5718, 6378];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$9);
}

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function digit_sum(n) {
  return String(n).split('').map(Number).reduce(function (a, b) {
    return a + b;
  }, 0);
}
function digit_product(n) {
  return String(n).split('').map(Number).reduce(function (a, b) {
    return a * b;
  }, 1);
}
function prime_factorization(n) {
  var multiplicity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (n <= 1) {
    return [];
  }

  if (isPrime_1(n)) {
    return [n];
  }

  var result = [];

  var _iterator = _createForOfIteratorHelper$2(A000040()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      var appended = false;

      while (n % i === 0) {
        if (multiplicity || !appended) {
          result.push(i);
          appended = true;
        }

        n /= i;
      }

      if (n === 1) {
        return result;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function is_coprime(a, b) {
  var pfa = prime_factorization(a);
  var pfb = prime_factorization(b);

  var _iterator2 = _createForOfIteratorHelper$2(pfa),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var n = _step2.value;

      if (pfb.indexOf(n) !== -1) {
        return false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return true;
}

function euler_phi(n) {
  if (n < 2) {
    return n;
  }

  var x = 0;

  for (var i = 1; i < n; i++) {
    if (is_coprime(n, i)) {
      x++;
    }
  }

  return x;
}
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  for (var i = n - 1; i > 1; i--) {
    n *= i;
  }

  return n;
}
function decimal_to_binary_digits(n) {
  var r = [];

  while (n > 0) {
    r.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  return r.join('');
}

var _marked$a = regenerator.mark(A000010);
function A000010() {
  var n;
  return regenerator.wrap(function A000010$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 1;

        case 1:

          _context.next = 4;
          return euler_phi(n);

        case 4:
          n++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$a);
}

var _marked$b = regenerator.mark(A000011);

function A000011() {
  var _i, _arr, n;

  return regenerator.wrap(function A000011$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [1, 1, 2, 2, 4, 4, 8, 9, 18, 23, 44, 63, 122, 190, 362, 612, 1162, 2056, 3914, 7155, 13648, 25482, 48734, 92205, 176906, 337594, 649532, 1246863, 2405236, 4636390, 8964800, 17334801, 33588234, 65108062, 126390032, 245492244, 477353376, 928772650, 1808676326, 3524337980];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$b);
}

var _marked$c = regenerator.mark(A000012);

function A000012() {
  return regenerator.wrap(function A000012$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          _context.next = 3;
          return 1;

        case 3:
          _context.next = 0;
          break;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$c);
}

var _marked$d = regenerator.mark(A000013);

function A000013() {
  var _i, _arr, n;

  return regenerator.wrap(function A000013$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [1, 1, 2, 2, 4, 4, 8, 10, 20, 30, 56, 94, 180, 316, 596, 1096, 2068, 3856, 7316, 13798, 26272, 49940, 95420, 182362, 349716, 671092, 1290872, 2485534, 4794088, 9256396, 17896832, 34636834, 67110932, 130150588, 252648992, 490853416];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$d);
}

var _marked$e = regenerator.mark(A000027);

function A000027() {
  var n;
  return regenerator.wrap(function A000027$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 1;

        case 1:

          _context.next = 4;
          return n++;

        case 4:
          _context.next = 1;
          break;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$e);
}

var _marked$f = regenerator.mark(A000035);

function A000035() {
  return regenerator.wrap(function A000035$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          _context.next = 3;
          return 0;

        case 3:
          _context.next = 5;
          return 1;

        case 5:
          _context.next = 0;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$f);
}

var _marked$g = regenerator.mark(A000042);

function A000042() {
  var s;
  return regenerator.wrap(function A000042$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          s = '';

        case 1:

          s += '1';
          _context.next = 5;
          return Number(s);

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$g);
}

var _marked$h = regenerator.mark(A000043);
function A000043() {
  var n;
  return regenerator.wrap(function A000043$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 2;

        case 1:

          if (!(isPrime_1(n) && isPrime_1(Math.pow(2, n) - 1))) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return n;

        case 5:
          n++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$h);
}

var _marked$i = regenerator.mark(A000045);

function A000045() {
  var previous, current, sum;
  return regenerator.wrap(function A000045$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          previous = 0, current = 1;
          _context.next = 3;
          return previous;

        case 3:
          _context.next = 5;
          return current;

        case 5:

          sum = current + previous;
          previous = current;
          current = sum;
          _context.next = 11;
          return current;

        case 11:
          _context.next = 5;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$i);
}

var _marked$j = regenerator.mark(A000069);
function A000069() {
  var n;
  return regenerator.wrap(function A000069$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;

        case 1:

          if (!((decimal_to_binary_digits(n).match(/1/g) || []).length % 2 === 1)) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return n;

        case 5:
          n++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$j);
}

var _marked$k = regenerator.mark(A000079);

function A000079() {
  var n;
  return regenerator.wrap(function A000079$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;

        case 1:

          _context.next = 4;
          return Math.pow(2, n);

        case 4:
          n++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$k);
}

var _marked$l = regenerator.mark(A000108);
function A000108() {
  var n;
  return regenerator.wrap(function A000108$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;

        case 1:

          _context.next = 4;
          return factorial(2 * n) / factorial(n + 1) / factorial(n);

        case 4:
          n++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$l);
}

var _marked$m = regenerator.mark(A000142);

function A000142() {
  var n, r;
  return regenerator.wrap(function A000142$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 1, r = 1;

        case 1:

          _context.next = 4;
          return r;

        case 4:
          r *= n;
          n++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$m);
}

var _marked$n = regenerator.mark(A000217);

function A000217() {
  var n, sum;
  return regenerator.wrap(function A000217$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0, sum = 0;

        case 1:

          sum += n;
          _context.next = 5;
          return sum;

        case 5:
          n++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$n);
}

var _marked$o = regenerator.mark(A000290);

function A000290() {
  var n;
  return regenerator.wrap(function A000290$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;

        case 1:

          _context.next = 4;
          return Math.pow(n, 2);

        case 4:
          n++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$o);
}

var _marked$p = regenerator.mark(A000330);

function A000330() {
  var n, sum;
  return regenerator.wrap(function A000330$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0, sum = 0;

        case 1:

          sum += Math.pow(n, 2);
          _context.next = 5;
          return sum;

        case 5:
          n++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$p);
}

var _marked$q = regenerator.mark(A000400);

function A000400() {
  var n;
  return regenerator.wrap(function A000400$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 1;

        case 1:

          _context.next = 4;
          return n;

        case 4:
          n *= 6;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$q);
}

var _marked$r = regenerator.mark(A000420);

function A000420() {
  var n;
  return regenerator.wrap(function A000420$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 1;

        case 1:

          _context.next = 4;
          return n;

        case 4:
          n *= 7;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$r);
}

var _marked$s = regenerator.mark(A000666);

function A000666() {
  var _i, _arr, n;

  return regenerator.wrap(function A000666$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [1, 2, 6, 20, 90, 544, 5096, 79264, 2208612, 113743760, 10926227136, 1956363435360, 652335084592096, 405402273420996800, 470568642161119963904, 1023063423471189431054720, 4178849203082023236058229792, 32168008290073542372004082199424];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$s);
}

var _marked$t = regenerator.mark(A000668);
function A000668() {
  var n, x;
  return regenerator.wrap(function A000668$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 2;

        case 1:

          if (!isPrime_1(n)) {
            _context.next = 7;
            break;
          }

          x = Math.pow(2, n) - 1;

          if (!isPrime_1(x)) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return x;

        case 7:
          n++;
          _context.next = 1;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$t);
}

var _marked$u = regenerator.mark(A001223);

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function A001223() {
  var primes, p, _iterator, _step, n;

  return regenerator.wrap(function A001223$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          primes = A000040();
          p = primes.next().value;
          _iterator = _createForOfIteratorHelper$3(primes);
          _context.prev = 3;

          _iterator.s();

        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 12;
            break;
          }

          n = _step.value;
          _context.next = 9;
          return n - p;

        case 9:
          p = n;

        case 10:
          _context.next = 5;
          break;

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);

          _iterator.e(_context.t0);

        case 17:
          _context.prev = 17;

          _iterator.f();

          return _context.finish(17);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$u, null, [[3, 14, 17, 20]]);
}

var _marked$v = regenerator.mark(A001462);

function A001462() {
  var _i, _arr, _n, q, n, i;

  return regenerator.wrap(function A001462$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [1, 2, 2];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          _n = _arr[_i];
          _context.next = 5;
          return _n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
          q = [2];
          n = 3;

        case 10:

          i = 0;

        case 12:
          if (!(i < q[0])) {
            _context.next = 19;
            break;
          }

          _context.next = 15;
          return n;

        case 15:
          q.push(n);

        case 16:
          i++;
          _context.next = 12;
          break;

        case 19:
          n++;
          q.shift();
          _context.next = 10;
          break;

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$v);
}

var _marked$w = regenerator.mark(A002024);

function A002024() {
  var n, x;
  return regenerator.wrap(function A002024$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 1;

        case 1:

          x = 0;

        case 3:
          if (!(x < n)) {
            _context.next = 9;
            break;
          }

          _context.next = 6;
          return n;

        case 6:
          x++;
          _context.next = 3;
          break;

        case 9:
          n++;
          _context.next = 1;
          break;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$w);
}

var _marked$x = regenerator.mark(A005408);

function A005408() {
  var n;
  return regenerator.wrap(function A005408$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 1;

        case 1:

          _context.next = 4;
          return n;

        case 4:
          n += 2;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$x);
}

var _marked$y = regenerator.mark(A005843);

function A005843() {
  var n;
  return regenerator.wrap(function A005843$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;

        case 1:

          _context.next = 4;
          return n;

        case 4:
          n += 2;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$y);
}

var _marked$z = regenerator.mark(A006530);
function A006530() {
  var n, pf;
  return regenerator.wrap(function A006530$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          n = 2;

        case 3:

          pf = prime_factorization(n);

          if (!pf.length) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return pf.pop();

        case 8:
          n++;
          _context.next = 3;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$z);
}

var _marked$A = regenerator.mark(A006753);

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function A006753() {
  var n, dsum, fsum, _iterator, _step, i;

  return regenerator.wrap(function A006753$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 2;

        case 1:

          if (isPrime_1(n)) {
            _context.next = 10;
            break;
          }

          dsum = digit_sum(n);
          fsum = 0;
          _iterator = _createForOfIteratorHelper$4(prime_factorization(n, true));

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              i = _step.value;
              fsum += digit_sum(i);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (!(dsum === fsum)) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return n;

        case 10:
          n++;
          _context.next = 1;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$A);
}

var _marked$B = regenerator.mark(A007953);
function A007953() {
  var n;
  return regenerator.wrap(function A007953$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;

        case 1:

          _context.next = 4;
          return digit_sum(n);

        case 4:
          n++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$B);
}

var _marked$C = regenerator.mark(A007954);
function A007954() {
  var n;
  return regenerator.wrap(function A007954$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;

        case 1:

          _context.next = 4;
          return digit_product(n);

        case 4:
          n++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$C);
}

var _marked$D = regenerator.mark(A010051);
function A010051() {
  var n;
  return regenerator.wrap(function A010051$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 1;

        case 1:

          _context.next = 4;
          return +isPrime_1(n);

        case 4:
          n++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$D);
}

var _marked$E = regenerator.mark(A010054);

function A010054() {
  var n, i;
  return regenerator.wrap(function A010054$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;

        case 1:

          _context.next = 4;
          return 1;

        case 4:
          i = 0;

        case 5:
          if (!(i < n)) {
            _context.next = 11;
            break;
          }

          _context.next = 8;
          return 0;

        case 8:
          i++;
          _context.next = 5;
          break;

        case 11:
          n++;
          _context.next = 1;
          break;

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$E);
}

var _marked$F = regenerator.mark(A019506);

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function A019506() {
  var n, dsum, fsum, _iterator, _step, i;

  return regenerator.wrap(function A019506$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 2;

        case 1:

          if (isPrime_1(n)) {
            _context.next = 10;
            break;
          }

          dsum = digit_sum(n);
          fsum = 0;
          _iterator = _createForOfIteratorHelper$5(prime_factorization(n, false));

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              i = _step.value;
              fsum += digit_sum(i);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (!(dsum === fsum)) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return n;

        case 10:
          n++;
          _context.next = 1;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$F);
}

var _marked$G = regenerator.mark(A063737);
function A063737() {
  var n;
  return regenerator.wrap(function A063737$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 2;

        case 1:

          if (!(digit_sum(n) === prime_factorization(n, true).reduce(function (a, b) {
            return a + b;
          }, 0))) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return n;

        case 5:
          n++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$G);
}

var _marked$H = regenerator.mark(A123456);

function A123456() {
  var _i, _arr, n;

  return regenerator.wrap(function A123456$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _arr = [20, 56, 55, 56, 55, 56, 51, 54, 52, 49, 32, 37, 40, 44, 49, 51, 32, 36, 44, 48, 51, 52, 32, 37, 44, 56, 55, 56, 55, 56, 51, 54, 52, 49, 32, 37, 40, 44, 49, 51, 32, 36, 44, 52, 51, 49, 32, 37, -20, 56, 55, 56, 55, 56, 51, 54, 52, 49, 32, 37, 40, 44, 49, 51, 32, 36, 44, 48, 51, 52, 32, 37];

        case 1:
          if (!(_i < _arr.length)) {
            _context.next = 8;
            break;
          }

          n = _arr[_i];
          _context.next = 5;
          return n;

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$H);
}

var _marked$I = regenerator.mark(randint);

function randint(min, max) {
  return regenerator.wrap(function randint$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          min = Math.ceil(min || 0);
          max = Math.floor(max || Number.MAX_SAFE_INTEGER);

        case 2:

          _context.next = 5;
          return Math.floor(Math.random() * (max - min + 1)) + min;

        case 5:
          _context.next = 2;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$I);
}

var index = {
  A000001: A000001,
  A000002: A000002,
  A000003: A000003,
  A000004: A000004,
  A000005: A000005,
  A000006: A000006,
  A000007: A000007,
  A000008: A000008,
  A000009: A000009,
  A000010: A000010,
  A000011: A000011,
  A000012: A000012,
  A000013: A000013,
  A000027: A000027,
  A000035: A000035,
  A000040: A000040,
  A000042: A000042,
  A000043: A000043,
  A000045: A000045,
  A000069: A000069,
  A000079: A000079,
  A000108: A000108,
  A000142: A000142,
  A000217: A000217,
  A000290: A000290,
  A000330: A000330,
  A000400: A000400,
  A000420: A000420,
  A000666: A000666,
  A000668: A000668,
  A001223: A001223,
  A001462: A001462,
  A002024: A002024,
  A005408: A005408,
  A005843: A005843,
  A006530: A006530,
  A006753: A006753,
  A007953: A007953,
  A007954: A007954,
  A010051: A010051,
  A010054: A010054,
  A019506: A019506,
  A063737: A063737,
  A123456: A123456,
  randint: randint
};

export default index;
