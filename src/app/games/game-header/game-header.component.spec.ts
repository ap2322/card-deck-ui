import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { GameHeaderComponent } from './game-header.component'


describe("GameHeaderComponent", () => {
  let component: GameHeaderComponent;
  let fixture: ComponentFixture<GameHeaderComponent>;
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
      declarations: [GameHeaderComponent],
    })
    .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHeaderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  })

  it("should create GameHeader component", () => {
    expect(component).toBeTruthy();
  });

  it('should have Deal Again button', () => {
    const button = de.nativeElement.querySelector('button');
    expect(button.innerText).toBe('Deal Again');
  })
});
