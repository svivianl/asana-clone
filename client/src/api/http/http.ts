import axios, { CancelTokenSource } from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`
});

instance.interceptors.request.use(
  (config: any) => config,
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response.data,
  error => (error.response ? error.response.data : Promise.reject(error))
);

export const getCancelTokenSource = (): CancelTokenSource => {
  const cancelToken = axios.CancelToken;
  return cancelToken.source();
};

export const isRequestCancellation = (error: any) => axios.isCancel(error);

export const http = instance;
