import { http, getCancelTokenSource, isRequestCancellation } from "./http/http";
import { User } from "../types/User";

const apiUrl = (path: string = "") => {
  return `/users${path}`;
};

export const getApplicationNote = async (): Promise<User[]> => {
  const source = getCancelTokenSource();
  const config = {
    cancelToken: source.token
  };

  const response = await http.get(apiUrl(``), config);
  return response.data;
};
