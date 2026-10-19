import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { Inage } from './inage';

describe('Inage', () => {
  let component: Inage;
  let fixture: ComponentFixture<Inage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inage],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
