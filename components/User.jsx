import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserAction, changeUserAction } from '../actions';
import { deleteUser, changeUser, showError } from '../sources';

const User = props => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState(props.user.firstName);
  const [secondName, setSecondName] = useState(props.user.secondName);
  const [email, setEmail] = useState(props.user.email);

  const openEditing = () => setEditing(true);

  const closeEditing = () => {
    setEditing(false);
    setFirstName(props.user.firstName);
    setSecondName(props.user.secondName);
    setEmail(props.user.email);
  };

  const submitPutUser = e => {
    e.preventDefault();

    setEditing(false);

    const user = { id: props.user.id };
    if (firstName !== props.user.firstName) user.firstName = firstName;
    if (secondName !== props.user.secondName) user.secondName = secondName;
    if (email !== props.user.email) user.email = email;
    if (Object.keys(user).length === 1) return;

    changeUser(user)
      .then(({ data }) => dispatch(changeUserAction(data)))
      .catch(showError);
  };

  const deleteHandler = () => {
    deleteUser(props.user.id)
      .then(() => dispatch(deleteUserAction(props.user.id)))
      .catch(showError);
  };

  return (
    <li className="users__user-container">
      <div className="user users__user-container__user">
        <div className="user__data-current">
          <p className="user__data-item">{`Имя: ${props.user.firstName}`}</p>
          <p className="user__data-item">{`Фамилия: ${props.user.secondName}`}</p>
          <p className="user__data-item">{`Email: ${props.user.email}`}</p>
          <button className="user__button" onClick={deleteHandler}>
            Удалить
          </button>
          <button className="user__button" onClick={openEditing}>
            Изменить
          </button>
        </div>

        {editing && (
          <form className="user__data-editing" onSubmit={submitPutUser}>
            <p className="user__data-item">
              <label>
                Имя:
                <input
                  className="user__data-input"
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </label>
            </p>

            <p className="user__data-item">
              <label>
                Фамилия:
                <input
                  className="user__data-input"
                  type="text"
                  value={secondName}
                  onChange={e => setSecondName(e.target.value)}
                />
              </label>
            </p>

            <p className="user__data-item">
              <label>
                Email:
                <input
                  className="user__data-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
            </p>

            <button className="user__button" type="submit">
              Сохранить
            </button>
            <button className="user__button" type="button" onClick={closeEditing}>
              Отмена
            </button>
          </form>
        )}
      </div>
    </li>
  );
};

export default User;
