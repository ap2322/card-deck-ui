import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Game } from '../game.model';
import { Card } from '../../cards/card.model';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})

export class GameHeaderComponent implements OnInit   {
  game: Game;
  private gamesSub: Subscription;

  constructor(public gamesService: GamesService) {}

  ngOnInit() {
    this.gamesSub = this.gamesService.getGameListener()
      .subscribe((game: Game)=> {
        this.game = game;
      });
  }

  onDealAgain() {
    this.gamesService.addGame();
    this.gamesService.getGameListener();
  }
}
