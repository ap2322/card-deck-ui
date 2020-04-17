import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from '../../games/games.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})

export class CardCreateComponent {

  constructor(public gamesService: GamesService) {}

  startGame() {
    this.gamesService.addGame();
  }
}
