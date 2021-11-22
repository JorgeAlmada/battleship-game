import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from 'src/app/services/game-data.service';

@Component({
  selector: 'app-finished-games',
  templateUrl: './finished-games.component.html',
  styleUrls: ['./finished-games.component.scss']
})
export class FinishedGamesComponent implements OnInit, AfterContentInit {

  constructor(private gameDataService: GameDataService, private _router: Router) { }

  public juegosTerminados: any[];

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.juegosTerminados = this.gameDataService.getJuegosTerminados()
  }

  regresarInicio(){
    this._router.navigate([''])
  }

}
