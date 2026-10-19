import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {
  steps: ProcessStep[] = [
    {
      step: '01',
      phase: 'INTAKE',
      title: 'Book & Specify',
      icon: 'pi pi-calendar-plus',
      description: 'Select your bike category, service needs, and preferred slot online or via direct WhatsApp.',
    },
    {
      step: '02',
      phase: 'DIAGNOSTICS',
      title: 'Inspection & Quote',
      icon: 'pi pi-search',
      description: '30-point condition audit, digital photo check, and itemized estimate before any wrench turns.',
    },
    {
      step: '03',
      phase: 'OVERHAUL',
      title: 'Precision Calibration',
      icon: 'pi pi-wrench',
      description: 'Ultrasonic cleaning, hydraulic bleeding, and bearing overhaul torqued strictly to manufacturer spec.',
    },
    {
      step: '04',
      phase: 'DELIVERY',
      title: 'Quality Check & Ride',
      icon: 'pi pi-check-circle',
      description: 'Dynamic load test ride, torque verification sign-off, and digital service health record.',
    },
  ];
}
