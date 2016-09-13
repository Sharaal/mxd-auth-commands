module.exports = {
  commands: {
    'mxd-login': require('./commands/mxd-login.js'),
    'mxd-logout': require('./commands/mxd-logout.js')
  },
  modules: {
    'heimdall-loggedin': require('./modules/heimdall-loggedin.js')
  }
};
