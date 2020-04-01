import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import Action from "../../../../../../../../../../../../../../../../store/action";
import { RootState } from "../../../../../../../../../../../../../../../../store/reducers";
import { isActionOf } from "typesafe-actions";
import * as actions from "./taskDetails.actions";
import * as api from "../../../../../../../../../../../../../../../../api/user.api";

const getUsersEpic: Epic<Action, Action, RootState> = action$ =>
  action$.pipe(
    filter(isActionOf(actions.getAssignees)),
    map(action => {
      console.log("epics");
      return action.payload;
    }),
    mergeMap(() =>
      from(api.getUsers()).pipe(
        map(assignees => actions.getAssigneesSuccess(assignees)),
        catchError(error => {
          console.error(error);
          return of(actions.getAssigneesError(error));
        })
      )
    )
  );

export default [getUsersEpic];
