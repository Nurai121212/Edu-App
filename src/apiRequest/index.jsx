import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1717'
});

const apiRequest = {
  addStudent: (subject, data) => {
    return instance.post(`/students/${subject}/add`, data)
  },
  getStudents: (subject) => {
    return instance.get(`/students/${subject}`)
  },
  getMe: (token) => {
    return instance.get('/me', {
        headers: {
          'X-Auth': token
      }})
  },
  logIn : (data) => {
    return instance.post('/login', data)
  }
};

export default apiRequest;