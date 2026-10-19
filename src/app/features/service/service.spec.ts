import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { Service } from './service';

describe('Service', () => {
  let component: Service;
  let fixture: ComponentFixture<Service>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
