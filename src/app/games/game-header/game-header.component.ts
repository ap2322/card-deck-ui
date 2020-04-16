import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Game } from '../game.model'
import { Card } from '../../cards/card.model'
@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html'
  // styleUrls: ['./game-header.component.css']
})

export class GameHeaderComponent implements OnInit   {
  game: Game

  ngOnInit() {
    let card: Card = {cols: 1, rows: 1, suitValue: null, color: 'purple'};
    let tempgame = {percentCorrect: .55, cards: [card]}
    this.game = tempgame
  }
}
