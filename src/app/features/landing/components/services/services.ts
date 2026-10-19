import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

interface ServiceCardItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  highlight: string;
  link: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  serviceCards: ServiceCardItem[] = [
    {
      id: 'general-service',
      icon: 'pi pi-wrench',
      title: 'General Service',
      description: 'Gear indexing, brake pad alignment, chain lubrication, torque check, and 24-point safety audit.',
      price: '₹499',
      duration: '2 - 3 Hours',
      highlight: '24-Point Audit',
      link: '/appointment',
    },
    {
      id: 'premium-service',
      icon: 'pi pi-cog',
      title: 'Premium Overhaul',
      description: 'Ultrasonic drivetrain bath, spoke tensioning & wheel truing, bottom bracket overhaul, and digital report.',
      price: '₹1,299',
      duration: '1 Day',
      highlight: 'Ultrasonic Degrease',
      link: '/appointment',
    },
    {
      id: 'race-prep',
      icon: 'pi pi-bolt',
      title: 'Race Day Performance',
      description: 'Shimano Di2 & SRAM AXS diagnostics, load-simulated gear calibration, and aerodynamic cockpit torque-lock.',
      price: '₹1,799',
      duration: '4 Hours',
      highlight: 'Electronic Di2 / AXS',
      link: '/appointment',
    },
    {
      id: 'suspension-damper',
      icon: 'pi pi-sliders-h',
      title: 'Suspension & Damper',
      description: '50h/200h lower leg service, damper bleed, wiper seal renewal, and custom rider-weight air spring tuning.',
      price: '₹1,499',
      duration: '1 Day',
      highlight: 'Damper Bleed & Seals',
      link: '/appointment',
    },
  ];
}
