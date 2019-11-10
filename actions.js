import { APP_ACTIONS } from './constants';

const setUsersAction = users => ({
  type: APP_ACTIONS.SET_USERS,
  users
});

const deleteUserAction = id => ({
  type: APP_ACTIONS.DELETE_USER,
  id
});

const changeUserAction = userData => ({
  type: APP_ACTIONS.CHANGE_USER,
  index: userData.index,
  user: userData.user
});

const newUserAction = user => ({
  type: APP_ACTIONS.NEW_USER,
  user
});

export { setUsersAction, deleteUserAction, changeUserAction, newUserAction };
