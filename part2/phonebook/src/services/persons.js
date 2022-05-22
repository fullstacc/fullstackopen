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

export default {
  getAll: getAll,
  create: create,
};
