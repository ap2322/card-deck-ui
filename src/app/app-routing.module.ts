import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GameStartComponent } from "./games/game-start/game-start.component";
import { GameShowComponent } from "./games/game-show/game-show.component";

const routes: Routes = [
  { path: '', component: GameStartComponent },
  { path: 'deal', component: GameShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
