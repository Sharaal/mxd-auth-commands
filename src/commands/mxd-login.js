module.exports = ({ heimdall, sessionStorage }) => async ({ args, loggedin, reply }) => {
  const account = await loggedin();
  const [userId, phrase] = args.split(' ');
  const data = await heimdall.request('auth/login', {
    body: { userId: userId, phrase: phrase, clientIp: '' },
    method: 'post'
  });
  const session = {
    customer: { customerId: data.customer.customerId },
    sessionId: data.sessionId
  };
  sessionStorage.set(account, session);
  reply.send('login sucessful');
};
