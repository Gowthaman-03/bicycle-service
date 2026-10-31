import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

interface TrustBenefit {
  number: string;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUs {
  benefits: TrustBenefit[] = [
    {
      number: '01',
      icon: 'pi pi-sliders-h',
      title: 'Professional Suspension Servicing',
      description:
        'Dedicated damper laboratory for 50h/200h service, vacuum oil bleeds, wiper seal renewals, and rider-weight sag calibration.',
    },
    {
      number: '02',
      icon: 'pi pi-compass',
      title: 'Precision Torque Calibration',
      description:
        'Digital 0.1 Nm torque verification on every bolt, pivot bearing, and carbon clamping surface to eliminate fatigue risk.',
    },
    {
      number: '03',
      icon: 'pi pi-bolt',
      title: 'Race-Grade Preparation',
      description:
        'Track-proven downhill and road tuning, electronic shifting diagnostics, and simulated dynamic load calibration.',
    },
    {
      number: '04',
      icon: 'pi pi-shield',
      title: 'Experienced Technical Team',
      description:
        'Led by National Downhill Champions and M.E. Manufacturing Engineers with multi-year competitive and industry mastery.',
    },
    {
      number: '05',
      icon: 'pi pi-check-circle',
      title: 'Quality-Focused Workmanship',
      description:
        'Zero-compromise authentic Shimano & SRAM spares, Park Tool equipment, itemized digital job cards, and transparent quotes.',
    },
  ];
}
