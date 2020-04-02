import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import Action from "../action";
import { RootState } from "../reducers";
import { isActionOf } from "typesafe-actions";
import * as actions from "./actions";
import * as api from "../../api/user.api";

const getUsersEpic: Epic<Action, Action, RootState> = action$ =>
  action$.pipe(
    filter(isActionOf(actions.getUsers)),
    map(action => {
      console.log("--------epics");
      return action.payload;
    }),
    mergeMap(() =>
      from(api.getUsers()).pipe(
        map(assignees => actions.getUsersSuccess(assignees)),
        catchError(error => {
          console.error(error);
          return of(actions.getUsersError(error));
        })
      )
    )
  );

export default [getUsersEpic];
