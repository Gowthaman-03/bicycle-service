import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Step {
  step: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {
  steps: Step[] = [
    {
      step: '01',
      title: 'Book',
      subtitle: 'Schedule Online',
      icon: 'pi pi-calendar',
      description: 'Choose your bicycle type, select the required service package or describe the issue, and pick a convenient date.',
    },
    {
      step: '02',
      title: 'Drop Off',
      subtitle: 'Visit Our Center',
      icon: 'pi pi-map-marker',
      description: 'Bring your bicycle to our service center in Salem. Our mechanic will conduct an initial check-in inspection with you.',
    },
    {
      step: '03',
      title: 'Service',
      subtitle: 'Expert Technicians',
      icon: 'pi pi-cog',
      description: 'Our certified technicians complete all repairs with factory-grade tools, precision torque specs, and genuine components.',
    },
    {
      step: '04',
      title: 'Ride Again',
      subtitle: 'Collect & Enjoy',
      icon: 'pi pi-check-circle',
      description: 'Receive notification when your bike passes road testing. Pick it up fully tuned, cleaned, and ready for every mile.',
    },
  ];
}
