module.exports = ({ heimdall, sessionStorage }) => async ({ heimdallLoggedin, reply }) => {
  const { account, session } = await heimdallLoggedin();
  await heimdall.request('auth/logout', {
    headers: { 'mxd-session': session.sessionId },
    method: 'post'
  });
  sessionStorage.del(account);
  reply.send('logout sucessful');
};
