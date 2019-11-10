import { APP_ACTIONS } from './constants';

const initialState = {
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTIONS.SET_USERS:
      return { users: action.users };
    case APP_ACTIONS.DELETE_USER:
      return { users: [...state.users].filter(({ id }) => id !== action.id) };
    case APP_ACTIONS.CHANGE_USER:
      let users = [...state.users];
      users[action.index] = action.user;
      return { users };
    case APP_ACTIONS.NEW_USER:
      return { users: [...state.users, action.user] };
    default:
      return state;
  }
};

export default reducer;
