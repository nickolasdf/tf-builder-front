import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/v1';

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
    auth: {
        username: process.env.REACT_APP_GIT_HUB_USER,
        password: process.env.REACT_APP_GIT_HUB_TOKEN
    }
}
  

export const Templates = {
    get: (params) => axios.get(`${API_URL}/templates`, params),
    getOne: (slag, params) => axios.get(`${API_URL}/templates/${slag}`, params),
    send: (body) => axios.post(`${API_URL}/git-modules`, body, config)
}