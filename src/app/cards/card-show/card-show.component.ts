import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';

import { Card } from '../card.model';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})

export class CardShowComponent {
  cards: Card[] = [];

  constructor(public cardsService: CardsService) {}

  ngOnInit() {
    console.log("onDeal")
    this.cardsService.addCards()
  }
  // onDeal() {
  //   console.log("onDeal")
  //   this.cardsService.addCards()
  // }
}
