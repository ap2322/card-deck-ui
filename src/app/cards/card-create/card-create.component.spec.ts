import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CardCreateComponent } from './card-create.component'


describe("CardCreateComponent", () => {
  let component: CardCreateComponent;
  let fixture: ComponentFixture<CardCreateComponent>;
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
      declarations: [CardCreateComponent],
    })
    .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreateComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  })

  it("should create CardCreate component", () => {
    expect(component).toBeTruthy();
  });

  it('should have an button element of Deal Cards', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('Deal Cards')
  })
});
