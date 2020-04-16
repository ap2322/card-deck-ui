import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Card } from '../card.model';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})

export class CardShowComponent implements OnInit  {
  cards: Card[] = [];
  private cardsSub: Subscription;

  constructor(public cardsService: CardsService) {}

  ngOnInit() {
    this.cardsService.addCards();
    this.cardsSub = this.cardsService.getCardListener()
      .subscribe((cards: Card[]) => {
        this.cards = cards;
      })
  }
}
