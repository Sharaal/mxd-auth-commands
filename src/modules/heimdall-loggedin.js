module.exports = ({ sessionStorage }) => ({ loggedin, reply }) => async () => {
  const account = await loggedin();
  const session = sessionStorage.get(account.id);
  if (session) {
    return { account, session };
  } else {
    throw new Error('you are not logged in in maxdome');
  }
};
