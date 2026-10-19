import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Services } from './services';

describe('Services', () => {
  let component: Services;
  let fixture: ComponentFixture<Services>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Services);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize 4 service cards with authentic pricing', () => {
    expect(component.serviceCards.length).toBe(4);
    expect(component.serviceCards[0].price).toContain('₹');
  });
});
