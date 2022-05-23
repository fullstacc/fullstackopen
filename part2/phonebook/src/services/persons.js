import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

// method for retrieving persons
const getAll = () => {
  return axios.get(baseUrl);
};

// method for posting persons
const create = (newObject) => {
  // send POST to server
  const postData = axios.post(baseUrl, newObject);
  return postData;
};

const deleteUser = (personId) => {
  const deleteUrl = `${baseUrl}/${personId}`;
  console.log('deleteURL', deleteUrl);
  console.log(`deleting user ${personId}`);
  return axios.delete(deleteUrl);
  //   axios.delete(deleteUrl).then(getAll);
};

const update = (personId, updateObject) => {
  console.log(`person id is ${personId}`);
  const updateUrl = `${baseUrl}/${personId}`;
  console.log(`updating user ${personId}`);
  return axios.put(updateUrl, updateObject);
};

export default {
  getAll,
  create,
  deleteUser,
  update,
};
