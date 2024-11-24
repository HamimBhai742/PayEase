import axios from "axios";
const axiosSucre = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  axiosSucre.interceptors.request.use(
    function (config) {
          const token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSucre.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error?.response?.status;
      if (status === 401 || status === 403) {
      }
      return Promise.reject(error);
    }
  );
  return axiosSucre;
};

export default useAxiosSecure;
