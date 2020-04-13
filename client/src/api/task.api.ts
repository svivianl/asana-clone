import { http, getCancelTokenSource, isRequestCancellation } from "./http/http";
import { Task, CreateTask } from "../types/Task";
import { Observable } from "rxjs";

const apiUrl = (path: string = "") => {
  return `/tasks${path}`;
};

export const getTasks$ = (): Observable<Task> => {
  return new Observable((subscriber) => {
    const source = getCancelTokenSource();
    const config = {
      cancelToken: source.token,
    };
    http
      .get(apiUrl(""), config)
      .then((response: any) => {
        subscriber.next(response[0]);
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

export const getTask$ = (id: string): Observable<Task> => {
  return new Observable((subscriber) => {
    const source = getCancelTokenSource();
    const config = {
      cancelToken: source.token,
    };
    http
      .get(apiUrl(`/${id}`), config)
      .then((response: any) => {
        subscriber.next(response);
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

export const postTask = async (taskBody: CreateTask) => {
  const response = await http.post(apiUrl(`/tasks`), {
    ...taskBody,
  });

  return response.data;
};

export const deleteTask = async (taskBody: Task) => {
  const { id } = taskBody;
  const response = await http.delete(apiUrl(`/tasks/${id}`));
  if (response.status === 200 && !response.data) {
    return { ...taskBody, deleted: new Date() };
  }
  return response.data;
};

export const putTask = async (taskBody: Task) => {
  const { id } = taskBody;
  const response = await http.put(apiUrl(`/tasks/${id}`), {
    ...taskBody,
  });

  return response.data;
};
