import { Card } from '../cards/card.model'

export interface Game {
 percentCorrect: number;
 historicalAverage: number;
 cards: Card[];
}
