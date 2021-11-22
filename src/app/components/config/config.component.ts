import { Component, OnInit } from '@angular/core';
import { GameDataService } from 'src/app/services/game-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(private gameDataService: GameDataService, private _router: Router) { }

  public numTurnos: Number = 0;

  ngOnInit(): void {

  }

  setNumTurnos(){
    this.gameDataService.setTurnos(this.numTurnos)
    console.log(this.gameDataService.getTurnos())
    this._router.navigate(['game'])
  }

  setDificultad(dificultad){
    this.gameDataService.setTurnos(dificultad)
    console.log(this.gameDataService.getTurnos())
    this._router.navigate(['game'])
  }


}
