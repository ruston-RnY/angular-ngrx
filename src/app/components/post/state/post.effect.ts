import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, mergeMap } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { getDataSuccess, getListData } from "./post.action";

@Injectable()
export class PostEffect {

   constructor(
      private actions$: Actions,
      private apiService: ApiService
   ) { }

   loadData$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(getListData),
         mergeMap((action) => {
            return this.apiService.getData().pipe(
               map(data => {
                  return getDataSuccess({ data })
               })
            )
         })
      );
   })
}