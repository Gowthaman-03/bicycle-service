import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

interface ServiceCardItem {
  id: string;
  icon: string;
  title: string;
  description: string;
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
      id: 'repair',
      icon: 'pi pi-wrench',
      title: 'BIKE REPAIR',
      description: 'Brakes, gears, wheels and more.',
      link: '/appointment',
    },
    {
      id: 'tune-up',
      icon: 'pi pi-cog',
      title: 'FULL TUNE-UP',
      description: 'Complete inspection and adjustment.',
      link: '/appointment',
    },
    {
      id: 'service',
      icon: 'pi pi-compass',
      title: 'BIKE SERVICE',
      description: 'Keep your bike in peak condition.',
      link: '/appointment',
    },
    {
      id: 'performance',
      icon: 'pi pi-bolt',
      title: 'PERFORMANCE',
      description: 'Upgrade for a better ride.',
      link: '/appointment',
    },
  ];
}
