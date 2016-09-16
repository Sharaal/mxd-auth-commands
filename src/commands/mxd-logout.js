module.exports = ({ heimdall, sessionStorage }) => async ({ heimdallLoggedin, reply }) => {
  const { account, session } = await heimdallLoggedin();
  await heimdall.post('auth/logout', {
    headers: { 'mxd-session': session.sessionId }
  });
  sessionStorage.delete(account.id);
  reply.send('logout sucessful');
};
