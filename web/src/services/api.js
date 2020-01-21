import axios from 'axios'; 

const api = axios.create({
    baseURL: 'http://localhost:3333',
    proxy: {
        host: '192.168.0.254',
        port: '3127',
    }
    
});

export default api;