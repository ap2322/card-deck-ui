import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CardCreateComponent } from './cards/card-create/card-create.component';
import { CardShowComponent } from './cards/card-show/card-show.component';

const routes: Routes = [
  { path: '', component: CardCreateComponent },
  { path: 'deal', component: CardShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
