import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Card } from '../cards/card.model';
import { Game } from './game.model';
import { Subject } from 'rxjs';
import {Observable} from 'rxjs';
import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/api/v1/";

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  private game: Game;
  private cards: Card[] = [];
  private gameUpdated = new Subject<Game>();

  constructor(private http: HttpClient, private router: Router) {}

  getGameListener() {
    return this.gameUpdated.asObservable();
  }


  addGame() {
    this.http.post<{message:string, data: any}>(`${BACKEND_URL}deal`, "")
      .subscribe((responseData) => {
        let cardMatrix = responseData.data.dealtCardMatrix;
        let newGame = {
          percentCorrect: responseData.data.percentCorrect.toFixed(2),
          historicalAverage: responseData.data.statistics.averagePercentageCorrect.toFixed(2),
          cards: this.makeCards(cardMatrix)
        }
        this.game = newGame;
        this.gameUpdated.next(this.game)
        this.cards = []
      });
  }

  makeCards(cardMatrix: string[][]) {
    for(let r=0; r< cardMatrix.length; r++){
      let row = cardMatrix[r]
      for(let c=0; c<row.length; c++){
        let card: Card = {cols: 1, rows: 1, suitValue: row[c], color: this.getSuitColor(row[c])};
        this.cards.push(card)
      }
    }
    return this.cards
  }


  getSuitColor(suitValue: string) {
    let suit = suitValue[(suitValue.length - 1)]
    if (suit === 'S' || suit === 'C') {
      return 'grey'
    } else {
      return 'red'
    }
  }
}
