'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = _ref => {
  let heimdall = _ref.heimdall;
  let sessionStorage = _ref.sessionStorage;
  return (() => {
    var _ref2 = _asyncToGenerator(function* (_ref3) {
      let args = _ref3.args;
      let loggedin = _ref3.loggedin;
      let reply = _ref3.reply;

      const account = yield loggedin();

      var _args$split = args.split(' ');

      var _args$split2 = _slicedToArray(_args$split, 2);

      const userId = _args$split2[0];
      const phrase = _args$split2[1];

      const data = yield heimdall.request('auth/login', {
        body: { userId: userId, phrase: phrase, clientIp: '' },
        method: 'post'
      });
      const session = {
        customer: { customerId: data.customer.customerId },
        sessionId: data.sessionId
      };
      sessionStorage.set(account, session);
      reply.send('login sucessful');
    });

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  })();
};