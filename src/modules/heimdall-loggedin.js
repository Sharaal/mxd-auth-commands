module.exports = ({ heimdall, sessionStorage }) => ({ loggedin, reply }) => async () => {
  const account = await loggedin();
  const session = await sessionStorage.get(account.id);
  if (!session) {
    throw new Error('you are not logged in in maxdome');
  }
  try {
    await heimdall.post('/auth/keepalive', {
      headers: { 'mxd-session': session.sessionId }
    });
    return { account, session };
  } catch (e) {
    try {
      const data = await heimdall.post('autologin_portal', {
        body: { autoLoginPin: session.autoLoginPin }
      });
      const newSession = {
        account: account,
        autoLoginPin: data.autoLoginPin,
        customer: { customerId: data.customer.customerId },
        sessionId: data.sessionId
      };
      await sessionStorage.set(account.id, newSession);
      return { account, session: newSession };
    } catch (e) {
      await sessionStorage.delete(account.id);
      throw new Error('you are not logged in in maxdome');
    }
  }
};
