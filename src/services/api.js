import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://phones--melhorcom.repl.co/phone'
});

apiClient.interceptors.request.use((config) => {
  config.headers.cpf= process.env.REACT_APP_CPF;

  return config;
})

export default apiClient;