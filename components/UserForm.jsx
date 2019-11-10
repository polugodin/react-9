import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUserAction } from '../actions';
import { newUser, showError } from 'sources';

const UserForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    newUser({ firstName, secondName, email })
      .then(({ data }) => dispatch(newUserAction(data)))
      .catch(showError);
  };

  return (
    <div className="user-form-container">
      <form className="user-form user-form-container__user-form" onSubmit={onSubmit}>
        <div className="user-form__control-blocks">
          <p className="user-form__title">Добавление пользователя</p>
          <label className="user-form__labels-item">
            Имя:
            <input className="user-form__input" type="text" onChange={e => setFirstName(e.target.value)} />
          </label>
          <label className="user-form__labels-item">
            Фамилия:
            <input className="user-form__input" type="text" onChange={e => setSecondName(e.target.value)} />
          </label>
          <label className="user-form__labels-item">
            Email:
            <input className="user-form__input" type="email" onChange={e => setEmail(e.target.value)} />
          </label>
          <button className="user-form__button">Сохранить</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
