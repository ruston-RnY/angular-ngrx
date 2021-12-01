import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

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
      ReactiveFormsModule
   ]
})

export class AuthModule { }