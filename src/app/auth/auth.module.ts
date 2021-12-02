import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login/login.component";
import { AuthReducer } from "./state/auth.reducer";
import { AUTH_STATE } from "./state/auth.selector";

const routes: Routes = [
   {
      path: '',
      children: [
         { path: '', redirectTo: 'login' },
         { path: 'login', component: LoginComponent },
      ]
   }
]

@NgModule({
   declarations: [
      LoginComponent
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      StoreModule.forFeature(AUTH_STATE, AuthReducer)
   ]
})

export class AuthModule { }