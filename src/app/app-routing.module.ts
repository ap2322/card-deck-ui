import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameStartComponent } from "./games/game-start/game-start.component";

const routes: Routes = [
  { path: '', component: GameStartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
