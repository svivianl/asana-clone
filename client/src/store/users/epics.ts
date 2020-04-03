import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, map, switchMap, takeUntil } from "rxjs/operators";
import Action from "../action";
import { RootState } from "../reducers";
import { isActionOf } from "typesafe-actions";
import * as actions from "./actions";
import * as api from "../../api/user.api";
import { filterAction } from "../types";

const getUsersEpic: Epic<Action, Action, RootState> = action$ =>
  action$.pipe(
    filter(isActionOf(actions.getUsers)),
    switchMap(() =>
      from(api.getUsers$()).pipe(
        takeUntil(filterAction(action$, actions.getUsersCancel)),
        map(users => actions.getUsersSuccess(users)),
        catchError(error => {
          console.error("error: ", error);
          return of(actions.getUsersError(error));
        })
      )
    )
  );

export default [getUsersEpic];
