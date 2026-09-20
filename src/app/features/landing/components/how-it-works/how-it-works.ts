import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

interface Step {
  step: string;
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
  steps: Step[] = [
    {
      step: '01',
      title: 'Book Appointment',
      icon: 'pi pi-calendar',
      description: 'Choose date and time that works for you.',
    },
    {
      step: '02',
      title: 'Service & Repair',
      icon: 'pi pi-wrench',
      description: 'Our experts get to work on your bike.',
    },
    {
      step: '03',
      title: 'Ride Again',
      icon: 'pi pi-check',
      description: 'Pick up your bike and hit the road.',
    },
  ];
}
