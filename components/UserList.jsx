import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsersAction } from '../actions';
import { getUsers, showError } from '../sources';

import User from './User';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    getUsers()
      .then(({ data }) => dispatch(setUsersAction(data)))
      .catch(showError);
  }, []);

  return (
    <ul className="users">
      {users.length !== 0 ? users.map(user => <User key={user.id} user={user} />) : <h4>Нет данных</h4>}
    </ul>
  );
};

export default UsersList;
