import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

export interface FeaturedServiceItem {
  id: string;
  tag: string;
  icon: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  serviceId: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  serviceCards: FeaturedServiceItem[] = [
    {
      id: 'maint',
      tag: '01 // PRECISION',
      icon: 'pi pi-wrench',
      title: 'General Precision Service',
      description: 'Complete 24-point safety audit, precision brake alignment, and micro-gap gear indexing.',
      duration: '2 - 3 Hours',
      price: 499,
      serviceId: 'srv-01',
    },
    {
      id: 'susp',
      tag: '02 // SUSPENSION',
      icon: 'pi pi-sliders-h',
      title: 'Suspension & Damper Lab',
      description: '50h/200h fork and rear shock service, damper bleed, wiper seal renewal, and custom sag tuning.',
      duration: '1 Day',
      price: 1499,
      serviceId: 'srv-07',
    },
    {
      id: 'drive',
      tag: '03 // DRIVETRAIN',
      icon: 'pi pi-sync',
      title: 'Ultrasonic Drivetrain Tune',
      description: 'Full teardown, ultrasonic solvent degreasing, chain wear check, and electronic shifting diagnostics.',
      duration: '1.5 Hours',
      price: 599,
      serviceId: 'srv-03',
    },
    {
      id: 'race',
      tag: '04 // RACE PREP',
      icon: 'pi pi-bolt',
      title: 'Performance & Race Service',
      description: 'Uncompromising race-day setup, wheel precision truing, bearing optimization, and torque validation.',
      duration: '4 Hours',
      price: 1799,
      serviceId: 'srv-06',
    },
  ];
}
