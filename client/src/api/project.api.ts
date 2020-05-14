import { http, getCancelTokenSource, isRequestCancellation } from "./http/http";
import { Project } from "../types/Project";
import { Observable } from "rxjs";

const apiUrl = (path: string = "") => `/projects${path}`;

export const getProjects$ = (): Observable<Project[]> => {
  return new Observable((subscriber) => {
    const source = getCancelTokenSource();
    const config = {
      cancelToken: source.token,
    };
    http
      .get(apiUrl(""), config)
      .then((response: any) => {
        subscriber.next(response);
        subscriber.complete();
      })
      .catch((error) => {
        console.log("project api error: ", error);
        if (!isRequestCancellation(error)) {
          subscriber.error(error);
        }
      });
    return () => {
      source.cancel();
    };
  });
};

export const getProjectTasks$ = (id: string): Observable<Project> => {
  return new Observable((subscriber) => {
    const source = getCancelTokenSource();
    const config = {
      cancelToken: source.token,
    };
    http
      .get(apiUrl(`/${id}/tasks`), config)
      .then((response: any) => {
        subscriber.next({ id, name: "", tasks: response });
        subscriber.complete();
      })
      .catch((error) => {
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
