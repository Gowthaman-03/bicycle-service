import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCta } from './booking-cta';

describe('BookingCta', () => {
  let component: BookingCta;
  let fixture: ComponentFixture<BookingCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
