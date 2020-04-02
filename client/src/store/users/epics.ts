import { ActionsObservable, Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, map, switchMap, takeUntil } from "rxjs/operators";
import Action from "../action";
import { RootState } from "../reducers";
import { isActionOf } from "typesafe-actions";
import * as actions from "./actions";
import * as api from "../../api/user.api";
import { User } from "../../types";

const filterAction = (
  filterAction$: ActionsObservable<Action>,
  actionCreator: () => { type: string; payload?: User[] }
) => filterAction$.pipe(filter(isActionOf(actionCreator)));

const getUsersEpic: Epic<Action, Action, RootState> = action$ =>
  action$.pipe(
    filter(isActionOf(actions.getUsers)),
    map(action => action),
    // map(action => action.payload),
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
