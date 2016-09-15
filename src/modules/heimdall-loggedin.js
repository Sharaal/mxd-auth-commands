module.exports = ({ sessionStorage }) => ({ loggedin, reply }) => async () => {
  const account = await loggedin();
  if (sessionStorage.has(account.id)) {
    const session = sessionStorage.get(account.id);
    return { account, session };
  } else {
    throw new Error('you are not logged in in maxdome');
  }
};
