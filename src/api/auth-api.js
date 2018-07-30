const users = [
  {
    name: 'mango',
    login: 'mango@mail.com',
    password: 'qwerty',
    avatar: 'https://image.flaticon.com/icons/svg/145/145859.svg',
  },
  {
    name: 'poly',
    login: 'poly@mail.com',
    password: '12345',
    avatar: 'https://image.flaticon.com/icons/svg/145/145862.svg',
  },
];

export const signIn = ({ login, password }) =>
  new Promise((resolve, reject) => {
    const authUser = users.find(user => user.login === login);

    setTimeout(() => {
      if (!authUser) {
        reject('User does not exist!');
        return;
      }

      if (authUser.password !== password) {
        reject('Invalid password!');
        return;
      }

      resolve({
        name: authUser.name,
        login: authUser.login,
        avatar: authUser.avatar
      });
    }, 300);
  });

export const signOut = () => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
