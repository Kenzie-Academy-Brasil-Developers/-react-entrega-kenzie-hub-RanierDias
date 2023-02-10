import axios from 'axios';

const kenzieHub = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com',
    timeout: 5000,
})

export default kenzieHub