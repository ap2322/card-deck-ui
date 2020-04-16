import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-show',
  templateUrl: './game-show.component.html',
  styleUrls: ['./game-show.component.css']
})

export class GameShowComponent {
  deck = "i'm a deck of cards"
}
