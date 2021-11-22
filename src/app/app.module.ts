import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './components/config/config.component';
import { BattleshipGameComponent } from './components/battleship-game/battleship-game.component';
import { FinishedGamesComponent } from './components/finished-games/finished-games.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    BattleshipGameComponent,
    FinishedGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
