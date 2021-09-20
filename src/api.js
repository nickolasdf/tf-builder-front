import axios from 'axios';
import { encode as base64_encode} from 'base-64';

const API_URL = 'http://127.0.0.1:5000/api/v1';
const token = base64_encode('user:githubtoken')
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic: ${token}`
  }
  

export const Templates = {
    get: (params) => axios.get(`${API_URL}/templates`, params),
    getOne: (slag, params) => axios.get(`${API_URL}/templates/${slag}`, params),
    send: (body) => axios.post(`${API_URL}/git-modules`, body, {headers: headers})
}