import axios from 'axios';
const KEY = 'AIzaSyBos8hJtOz1mD4IWu2D6zdzV6Wj79dX_xA'; // mention your youtube API key here

export const createAPI = () => {
  const youtubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 50,
      key: KEY
    }
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  youtubeApi.interceptors.response.use(onSuccess, onFail);

  return youtubeApi;
};