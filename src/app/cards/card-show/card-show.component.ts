import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Card } from '../card.model';
import { Game } from '../../games/game.model';
import { GamesService } from '../../games/games.service';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})

export class CardShowComponent implements OnInit  {
  cards: Card[] = [];
  game: Game;
  private gamesSub: Subscription;

  constructor(public gamesService: GamesService) {}

  ngOnInit() {
    // this.cardsService.addCards();
    this.gamesSub = this.gamesService.getGameListener()
      .subscribe((game: Game) => {
        this.cards = game.cards;
      })
  }
}
