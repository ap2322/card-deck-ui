import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Card } from '../card.model';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})

export class CardShowComponent {
  cards: Card[] = [
    {suitValue: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {suitValue: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  ];
}
