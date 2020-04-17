import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CardShowComponent } from './card-show.component'


describe("CardShowComponent", () => {
  let component: CardShowComponent;
  let fixture: ComponentFixture<CardShowComponent>;
  let de: DebugElement;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          MatGridListModule,
          MatButtonModule,
          MatCardModule
        ],
      declarations: [CardShowComponent],
    })
    .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShowComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  })

  it("should create CardShow component", () => {
    expect(component).toBeTruthy();
  });

  it('should have 4x13 cards in figures', () => {
    const cards = de.nativeElement.querySelector('mat-grid-list');
    expect(cards).toBeTruthy();
  })

});
