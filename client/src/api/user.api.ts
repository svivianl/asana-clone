import { http, getCancelTokenSource, isRequestCancellation } from "./http/http";
import { User } from "../types/User";
import { Observable } from "rxjs";

const apiUrl = (path: string = "") => {
  return `/users${path}`;
};

export const getUsers$ = (): Observable<User[]> => {
  return new Observable(subscriber => {
    const source = getCancelTokenSource();
    const config = {
      cancelToken: source.token
    };
    http
      .get(apiUrl(""), config)
      .then((response: any) => {
        subscriber.next(response);
        subscriber.complete();
      })
      .catch(error => {
        console.log("api error: ", error);
        if (!isRequestCancellation(error)) {
          subscriber.error(error);
        }
      });
    return () => {
      source.cancel();
    };
  });
};
