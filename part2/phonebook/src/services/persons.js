import axios from 'axios';
// const baseUrl = 'http://localhost:3001/persons';
const baseUrl = '/api/persons';

//mongo schema
// const personSchema = new mongoose.Schema({})

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
  return axios.delete(deleteUrl);
};

// used when need to update an existing person entry
const update = (personId, updateObject) => {
  console.log(`person id is ${personId}`);
  console.log('this is from the phonebook updateobject', updateObject);
  // sends to url with unique id
  const updateUrl = `${baseUrl}/${personId}`;
  console.log('update url is', updateUrl);
  console.log(`updating user ${personId}`);
  console.log('sending update to', updateUrl);
  return axios.put(updateUrl, updateObject);
};

export default {
  getAll,
  create,
  deleteUser,
  update,
};
