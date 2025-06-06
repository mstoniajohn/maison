import axios from 'axios'


const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,

  });

  api.interceptors.request.use(
    (config:any) => {
      const token: any = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
  
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          try {
            const { data } = await api.post('/token/refresh/', { refresh: refreshToken });
  
            localStorage.setItem('accessToken', data.access);
            originalRequest.headers.Authorization = `Bearer ${data.access}`;
  
            return api(originalRequest); // Retry the original request with the new token
          } catch (err) {
            // Handle errors, e.g., refreshToken expired or any other error
            // You might want to redirect the user to the login page, for instance.
          }
        }
      }
  
      return Promise.reject(error);
    }
  );
  
  export default api;