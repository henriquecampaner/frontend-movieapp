import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
});

export const imgUrl = 'https://image.tmdb.org/t/p';

export default api;
