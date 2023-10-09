import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTicketsComponent } from './done-tickets.component';

describe('DoneTicketsComponent', () => {
  let component: DoneTicketsComponent;
  let fixture: ComponentFixture<DoneTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoneTicketsComponent]
    });
    fixture = TestBed.createComponent(DoneTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
