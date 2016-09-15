module.exports = ({ sessionStorage }) => ({ loggedin, reply }) => async () => {
  const account = await loggedin();
  if (sessionStorage.has(account.id)) {
    const session = sessionStorage.get(account.id);
    return { account, session };
  } else {
    reply.send('you are not logged in in maxdome');
    throw new Error('missing maxdome login');
  }
};
