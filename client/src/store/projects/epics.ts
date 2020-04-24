import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, map, switchMap, takeUntil } from "rxjs/operators";
import Action from "../action";
import { RootState } from "../reducers";
import { isActionOf } from "typesafe-actions";
import * as actions from "./actions";
import * as api from "../../api/project.api";
import { filterAction } from "../types";

const getProjectsEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getProjects)),
    switchMap(() =>
      from(api.getProjects$()).pipe(
        takeUntil(filterAction(action$, actions.getProjectsCancel)),
        map((projects) => actions.getProjectsSuccess(projects)),
        catchError((error) => {
          console.error("Projects Epic Error: ", error);
          return of(actions.getProjectsError(error));
        })
      )
    )
  );

const getProjectTasksEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getProjectTasks)),
    map((action) => action.payload),
    switchMap((projectId) =>
      from(api.getProjectTasks$(projectId)).pipe(
        takeUntil(filterAction(action$, actions.getProjectTasksCancel)),
        map((project) => actions.getProjectTasksSuccess(project)),
        catchError((error) => {
          console.error("error: ", error);
          return of(actions.getProjectTasksError(error));
        })
      )
    )
  );

export default [getProjectsEpic, getProjectTasksEpic];
