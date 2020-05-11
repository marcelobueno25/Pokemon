import axios from 'axios';

const api = axios.get({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export default api;