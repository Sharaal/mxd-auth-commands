'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = _ref => {
  let sessionStorage = _ref.sessionStorage;
  return _ref2 => {
    let loggedin = _ref2.loggedin;
    let reply = _ref2.reply;
    return _asyncToGenerator(function* () {
      const account = yield loggedin();
      const session = yield sessionStorage.get(account.id);
      if (session) {
        return { account: account, session: session };
      } else {
        throw new Error('you are not logged in in maxdome');
      }
    });
  };
};