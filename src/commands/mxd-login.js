module.exports = ({ heimdall, sessionStorage }) => async ({ args, loggedin, reply }) => {
  const account = await loggedin();
  const [userId, phrase] = args.split(' ');
  const data = await heimdall.post('auth/login', {
    body: { userId: userId, phrase: phrase, autoLogin: true }
  });
  const session = {
    account: account,
    autoLoginPin: data.autoLoginPin,
    customer: { customerId: data.customer.customerId },
    sessionId: data.sessionId
  };
  await sessionStorage.set(account.id, session);
  reply.send('login sucessful');
};
