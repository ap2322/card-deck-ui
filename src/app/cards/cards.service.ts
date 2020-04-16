import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Card } from './card.model';
import { Subject } from 'rxjs';
// import { environment } from "../../environments/environment";
//
// const BACKEND_URL = environment.apiUrl + "/api/v1/";

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cards: Card[] = [];
  private cardsUpdated = new Subject<Card[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getCardListener() {
    return this.cardsUpdated.asObservable();
  }

  addCards() {
    this.http.post<{message:string, data: any}>("http://localhost:3000/api/v1/deal", "")
      .subscribe((responseData) => {
        let cardMatrix = responseData.data.dealtCardMatrix;
        for(let r=0; r< cardMatrix.length; r++){
          let row = cardMatrix[r]
          for(let c=0; c<row.length; c++){
            let card: Card = {cols: 1, rows: 1, suitValue: null, color: this.getSuitColor(row[c])};
            card.suitValue = row[c]
            this.cards.push(card)
          }
        }
        this.cardsUpdated.next([...this.cards]);
      })
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
