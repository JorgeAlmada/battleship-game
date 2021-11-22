import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleshipGameComponent } from './components/battleship-game/battleship-game.component';
import { ConfigComponent } from './components/config/config.component';
import { FinishedGamesComponent } from './components/finished-games/finished-games.component';


const routes: Routes = [
  {path: '', component: ConfigComponent},
  {path: 'game', component: BattleshipGameComponent},
  {path: 'scores', component: FinishedGamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
