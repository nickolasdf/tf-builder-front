import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/v1';

export const Templates = {
    get: (params) => axios.get(`${API_URL}/templates`, params),
    getOne: (slag, params) => axios.get(`${API_URL}/templates/${slag}`, params),
    send: (body) => axios.post(`${API_URL}/git-modules`, body)
}