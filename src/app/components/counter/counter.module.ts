import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";

// components
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterCustomInputComponent } from "./counter-custom-input/counter-custom-input.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter.component";
import { counterReducer } from "./state/counter.reducer";
import { COUNTER_STATE } from "./state/counter.selectors";

const routes: Routes = [
   {
      path: '',
      component: CounterComponent
   },
]

@NgModule({
   declarations: [
      CounterComponent,
      CounterOutputComponent,
      CounterButtonComponent,
      CounterCustomInputComponent,
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      FormsModule,
      StoreModule.forFeature(COUNTER_STATE, counterReducer)
   ]
})
export class CounterModule { }