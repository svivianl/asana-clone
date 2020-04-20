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

export default [getProjectsEpic];
