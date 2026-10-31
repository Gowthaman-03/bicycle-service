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
  image: string;
  checkpoints: string[];
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
      title: 'General Bicycle Service',
      description: 'Complete inspection, gear indexing, brake adjustment, chain lubrication, and 24-point safety audit.',
      duration: '2 - 3 Hours',
      price: 499,
      serviceId: 'srv-01',
      image: 'assets/images/about-bike.jpeg',
      checkpoints: ['24-point safety audit', 'Precision gear indexing', 'Brake pad alignment'],
    },
    {
      id: 'susp',
      tag: '02 // SUSPENSION',
      icon: 'pi pi-sliders-h',
      title: 'Suspension Fork & Shock Service',
      description: '50h/200h lower leg service, damper bleed, wiper seal renewal with premium oil and custom sag setup.',
      duration: '1 Day',
      price: 1499,
      serviceId: 'srv-07',
      image: 'assets/images/suspension-lab.jpg',
      checkpoints: ['Damper vacuum bleed', 'Wiper seal replacement', 'Rider sag & rebound tuning'],
    },
    {
      id: 'drive',
      tag: '03 // DRIVETRAIN',
      icon: 'pi pi-sync',
      title: 'Drivetrain Deep Clean & Tune',
      description: 'Ultrasonic solvent degreasing of chain, cassette, and derailleurs with micro-gap re-alignment.',
      duration: '1.5 Hours',
      price: 599,
      serviceId: 'srv-03',
      image: 'assets/images/ultrasonic-drivetrain.jpg',
      checkpoints: ['Ultrasonic solvent bath', 'Chain elongation test', 'Derailleur micro-tuning'],
    },
    {
      id: 'race',
      tag: '04 // RACE PREP',
      icon: 'pi pi-bolt',
      title: 'Performance & Race Service',
      description: 'Comprehensive race-day tuning, electronic shifting diagnostics, and weight-balanced precision setup.',
      duration: '4 Hours',
      price: 1799,
      serviceId: 'srv-06',
      image: 'assets/images/workshop-mechanic.jpg',
      checkpoints: ['Di2 / AXS diagnostics', 'Precision wheel truing', 'Torque spec verification'],
    },
  ];
}
