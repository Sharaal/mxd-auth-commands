'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = _ref => {
  let heimdall = _ref.heimdall;
  let sessionStorage = _ref.sessionStorage;
  return (() => {
    var _ref2 = _asyncToGenerator(function* (_ref3) {
      let heimdallLoggedin = _ref3.heimdallLoggedin;
      let reply = _ref3.reply;

      var _ref4 = yield heimdallLoggedin();

      const account = _ref4.account;
      const session = _ref4.session;

      yield heimdall.post('auth/logout', {
        headers: { 'mxd-session': session.sessionId }
      });
      sessionStorage.delete(account.id);
      reply.send('logout sucessful');
    });

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  })();
};