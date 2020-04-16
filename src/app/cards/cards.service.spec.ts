import { TestBed } from '@angular/core/testing';

import { CardsService } from './cards.service';

describe('CardService', () => {
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
