import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, map, switchMap, takeUntil } from "rxjs/operators";
import Action from "../action";
import { RootState } from "../reducers";
import { isActionOf } from "typesafe-actions";
import * as actions from "./actions";
import * as api from "../../api/task.api";
import { filterAction } from "../types";

const getTasksEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getTasks)),
    switchMap(() =>
      from(api.getTasks$()).pipe(
        takeUntil(filterAction(action$, actions.getTasksCancel)),
        map((tasks) => actions.getTasksSuccess(tasks)),
        catchError((error) => {
          console.error("error: ", error);
          return of(actions.getTasksError(error));
        })
      )
    )
  );

const getTaskEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getTask)),
    map((action) => action.payload),
    switchMap((taskId) =>
      from(api.getTask$(taskId)).pipe(
        takeUntil(filterAction(action$, actions.getTaskCancel)),
        map((task) => actions.getTaskSuccess(task)),
        catchError((error) => {
          console.error("error: ", error);
          return of(actions.getTaskError(error));
        })
      )
    )
  );

// const putTaskEpic: Epic<Action, Action, RootState> = (action$) =>
// action$.pipe(
//   filter(isActionOf(actions.putTask)),
//   switchMap(() =>
//     from(api.putTask$()).pipe(
//       takeUntil(filterAction(action$, actions.putTaskCancel)),
//       map((task) => actions.putTaskSuccess(task)),
//       catchError((error) => {
//         console.error("error: ", error);
//         return of(actions.putTaskError(error));
//       })
//     )
//   )
// );

export default [
  getTasksEpic,
  getTaskEpic,
  //putTaskEpic
];
