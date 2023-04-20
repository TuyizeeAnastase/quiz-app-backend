"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.bulkInsert("Questions", [{
              question: "Who is the father of C language?",
              options: ["Dennis Ritchie", "Steve Jobs", "James Gosling", "Rasmus Lerdorf"],
              answer: "Dennis Ritchie",
              quiz_id: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              question: "Which of the following is not a valid C variable name",
              options: ["int number", "float rate", "int $main", "int variable_count"],
              answer: "int $main",
              quiz_id: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              question: "Which is valid C expression?",
              options: ["int my_num = 100000", "int my_num = 100,000;", "int my num = 1000", "int $my_num = 10000"],
              answer: "int my_num = 100000",
              quiz_id: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            }]);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.bulkDelete("Questions", null, {});
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJtb2R1bGUiLCJ1cCIsInF1ZXJ5SW50ZXJmYWNlIiwiU2VxdWVsaXplIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJidWxrSW5zZXJ0IiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwicXVpel9pZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJkb3duIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJidWxrRGVsZXRlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGFiYXNlL3NlZWRlcnMvMjAyMzA0MjAxMjA5NTEtUXVlc3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhc3luYyB1cChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSB7XG4gICAgLyoqXG4gICAgICogQWRkIHNlZWQgY29tbWFuZHMgaGVyZS5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogYXdhaXQgcXVlcnlJbnRlcmZhY2UuYnVsa0luc2VydCgnUGVvcGxlJywgW3tcbiAgICAgKiAgIG5hbWU6ICdKb2huIERvZScsXG4gICAgICogICBpc0JldGFNZW1iZXI6IGZhbHNlXG4gICAgICogfV0sIHt9KTtcbiAgICAgKi9cbiAgICBhd2FpdCBxdWVyeUludGVyZmFjZS5idWxrSW5zZXJ0KFwiUXVlc3Rpb25zXCIsIFtcbiAgICAgIHtcbiAgICAgICAgcXVlc3Rpb246IFwiV2hvIGlzIHRoZSBmYXRoZXIgb2YgQyBsYW5ndWFnZT9cIixcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIFwiRGVubmlzIFJpdGNoaWVcIixcbiAgICAgICAgICBcIlN0ZXZlIEpvYnNcIixcbiAgICAgICAgICBcIkphbWVzIEdvc2xpbmdcIixcbiAgICAgICAgICBcIlJhc211cyBMZXJkb3JmXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGFuc3dlcjogXCJEZW5uaXMgUml0Y2hpZVwiLFxuICAgICAgICBxdWl6X2lkOiAxLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHF1ZXN0aW9uOiBcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgbm90IGEgdmFsaWQgQyB2YXJpYWJsZSBuYW1lXCIsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICBcImludCBudW1iZXJcIixcbiAgICAgICAgICBcImZsb2F0IHJhdGVcIixcbiAgICAgICAgICBcImludCAkbWFpblwiLFxuICAgICAgICAgIFwiaW50IHZhcmlhYmxlX2NvdW50XCIsXG4gICAgICAgIF0sXG4gICAgICAgIGFuc3dlcjogXCJpbnQgJG1haW5cIixcbiAgICAgICAgcXVpel9pZDogMSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBxdWVzdGlvbjogXCJXaGljaCBpcyB2YWxpZCBDIGV4cHJlc3Npb24/XCIsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICBcImludCBteV9udW0gPSAxMDAwMDBcIixcbiAgICAgICAgICBcImludCBteV9udW0gPSAxMDAsMDAwO1wiLFxuICAgICAgICAgIFwiaW50IG15IG51bSA9IDEwMDBcIixcbiAgICAgICAgICBcImludCAkbXlfbnVtID0gMTAwMDBcIixcbiAgICAgICAgXSxcbiAgICAgICAgYW5zd2VyOiBcImludCBteV9udW0gPSAxMDAwMDBcIixcbiAgICAgICAgcXVpel9pZDogMSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIF0pO1xuICB9LFxuXG4gIGFzeW5jIGRvd24ocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSkge1xuICAgIC8qKlxuICAgICAqIEFkZCBjb21tYW5kcyB0byByZXZlcnQgc2VlZCBoZXJlLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiBhd2FpdCBxdWVyeUludGVyZmFjZS5idWxrRGVsZXRlKCdQZW9wbGUnLCBudWxsLCB7fSk7XG4gICAgICovXG4gICAgYXdhaXQgcXVlcnlJbnRlcmZhY2UuYnVsa0RlbGV0ZShcIlF1ZXN0aW9uc1wiLCBudWxsLCB7fSk7XG4gIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUFDLFNBQUFBLFFBQUFDLEdBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixHQUFBLGtCQUFBQSxHQUFBLGdCQUFBQSxHQUFBLFdBQUFBLEdBQUEseUJBQUFDLE1BQUEsSUFBQUQsR0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsR0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLEdBQUEsS0FBQUQsT0FBQSxDQUFBQyxHQUFBO0FBQUEsU0FBQUssb0JBQUEsa0JBQ2IscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUosU0FBQSxFQUFBSyxNQUFBLEdBQUFGLEVBQUEsQ0FBQUcsY0FBQSxFQUFBQyxjQUFBLEdBQUFILE1BQUEsQ0FBQUcsY0FBQSxjQUFBWCxHQUFBLEVBQUFZLEdBQUEsRUFBQUMsSUFBQSxJQUFBYixHQUFBLENBQUFZLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFkLE1BQUEsR0FBQUEsTUFBQSxPQUFBZSxjQUFBLEdBQUFELE9BQUEsQ0FBQWIsUUFBQSxrQkFBQWUsbUJBQUEsR0FBQUYsT0FBQSxDQUFBRyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBSixPQUFBLENBQUFLLFdBQUEsOEJBQUFDLE9BQUFyQixHQUFBLEVBQUFZLEdBQUEsRUFBQUUsS0FBQSxXQUFBTixNQUFBLENBQUFHLGNBQUEsQ0FBQVgsR0FBQSxFQUFBWSxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBUSxVQUFBLE1BQUFDLFlBQUEsTUFB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