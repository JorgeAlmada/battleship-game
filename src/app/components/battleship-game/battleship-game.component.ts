import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from 'src/app/services/game-data.service';

@Component({
  selector: 'app-battleship-game',
  templateUrl: './battleship-game.component.html',
  styleUrls: ['./battleship-game.component.scss']
})
export class BattleshipGameComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor(private gameDataService: GameDataService, private _router: Router) { }

  public turnos: Number = 0;
  public turnosIniciales: Number;
  public gameMap: any[] = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
  ]

  public clickMap: any[] = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ]

  public hitList: any[] = [];

  public mapDone: boolean = false;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngAfterContentInit(): void {
    this.turnos = this.gameDataService.getTurnos()
    this.turnosIniciales = this.gameDataService.getTurnos()
    if(this.turnos <= 0){
      this._router.navigate([''])
    }
    this.createGameMap()
  }

  createGameMap() {
    const lengths = [{ size: 4, name: 'A' }, { size: 3, name: 'A' }, { size: 3, name: 'B' }, { size: 2, name: 'A' }, { size: 2, name: 'B' }, { size: 2, name: 'C' }, { size: 1, name: 'A' }, { size: 1, name: 'B' }, { size: 1, name: 'C' }, { size: 1, name: 'D' }]
    while (lengths.length != 0) {
      let inserted = this.mapLenghts(lengths[0])
      console.log(inserted)
      if (inserted) {
        lengths.splice(0, 1)
      }
    }
    this.mapDone = true;
  }

  mapLenghts(length): boolean {
    let posX = Math.floor(Math.random() * 10);
    let posY = Math.floor(Math.random() * 10);
    console.log(posX)
    console.log(posY)
    let direction = Math.floor((Math.random() * 2));
    console.log(direction)
    if (posX + length.size > 9 || posY + length.size > 9) {
      return false
    } else if (direction === 0) {
      let clear = true;
      for (var x = posX; x < posX + length.size; x++) {
        if (this.gameMap[x][posY] != '') {
          clear = false;
        }
      }
      if (clear) {
        for (var x = posX; x < posX + length.size; x++) {
          this.gameMap[x][posY] = length.name + length.size
        }
        console.log(this.gameMap)
        return true
      } else {
        return false
      }
    } else {
      let clear = true;
      for (var y = posY; y < posY + length.size; y++) {
        if (y <= 9 && this.gameMap[posX][y] != '') {
          clear = false;
        }
      }
      if (clear) {
        for (var y = posY; y < posY + length.size; y++) {
          this.gameMap[posX][y] = length.name + length.size
        }
        console.log(this.gameMap)
        return true
      } else {
        return false
      }
    }
  }
  makeTrue(x, y) {
    if (!this.clickMap[x][y]) {
      this.clickMap[x][y] = true;
      if (this.gameMap[x][y] != '') {
        this.hitList.push(this.gameMap[x][y])
      }
      let turnos = Number(this.turnos)
      turnos--
      this.turnos = turnos
      this.checkGameState()
    }

  }

  everyoneHit(target) {
    const textArray = target.split("")
    let qty = Number(textArray[1])
    let hitNumber = 0
    this.hitList.forEach(element => {
      if (element === target) {
        hitNumber++
      }
    })
    if (qty === hitNumber) {
      return true
    } else {
      return false
    }
  }

  checkGameState(){
    console.log(this.turnos)
    if(this.turnos <= 0 && this.hitList.length < 20){
      if(confirm("Perdiste, vuelves a iniciar?")){
        this.restartGame()
      } else{
        this._router.navigate([''])
      }
    } else if(this.hitList.length === 20){
      this.gameDataService.addJuegoTerminado({
        turnosTomados: this.turnos,
        turnosIniciales: this.turnosIniciales
      })
      this._router.navigate(['scores'])
    }
  }

  restartGame(){
    this.turnos = this.turnosIniciales
    this.mapDone = false
    this.gameMap = [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
    ]
    this.createGameMap()
    this.clickMap = [[false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]]
    this.hitList = []
  }

}
