import Axios from 'axios';

const getUsers = () => Axios.get('/users');
const newUser = user => Axios.post('/newuser', user);
const deleteUser = id => Axios.delete('/deleteuser', { params: { id } });
const changeUser = user => Axios.put('/changeuser', user);
const showError = err => console.error(err);

export { getUsers, newUser, deleteUser, changeUser, showError };
