import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor() { }

  public numTurnos: Number = 0;
  public juegosTerminados: any[] = []

  setTurnos(nTurnos) {
    this.numTurnos = nTurnos
  }

  getTurnos(){
    return this.numTurnos
  }

  addJuegoTerminado(nuevo){
    this.juegosTerminados.push(nuevo)
  }

  getJuegosTerminados(){
    return this.juegosTerminados
  }

}
