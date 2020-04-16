import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Card } from './card.model';
// import { environment } from "../../environments/environment";
//
// const BACKEND_URL = environment.apiUrl + "/api/v1/";

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cards: Card[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  addCards() {
    const card: Card = {cols: 1, rows: 1, suitValue: null, color: 'grey'};
    this.http.post<{message:string, data: any}>("http://localhost:3000/api/v1/deal", "")
      .subscribe((responseData) => {
        let cardMatrix = responseData.data.dealtCardMatrix;
        for(let r=0; r< cardMatrix.length; r++){
          let row = cardMatrix[r]
          for(let c=0; c<row.length; c++){
            card.suitValue = row[c]
            console.log("card", card)
            this.cards.push(card)
            card.suitValue = null
          }
        }

        console.log("cards", this.cards)
        // post.id = responseData.postId
        // this.posts.push(post); //optimistic updating
        // this.postsUpdated.next([...this.posts]);
        // this.router.navigate(["/deal"])
      })
  }
}
