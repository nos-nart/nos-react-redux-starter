import axios from 'axios';
import appConfig from 'config';

const axiosApi = axios.create({
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: appConfig.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 10000, // default is `0` (no timeout)
});

axiosApi.interceptors.request.use(
  (config) => {
    // NOTE: get accessToken in redux store
    const accessToken = '';
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // handle error authenticate ~> redirect to login page
    }
  },
);

export default axiosApi;
