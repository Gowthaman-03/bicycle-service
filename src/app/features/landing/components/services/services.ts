import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Service {
  icon: string;
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: Service[] = [
    {
      icon: 'pi pi-wrench',
      number: '01',
      title: 'Bike Repair',
      description: 'Professional repairs for brakes, gears, wheels and more.',
    },

    {
      icon: 'pi pi-cog',
      number: '02',
      title: 'Full Tune-Up',
      description: 'Complete inspection and adjustment to restore your bike.',
    },

    {
      icon: 'pi pi-sync',
      number: '03',
      title: 'Bike Service',
      description: 'Regular maintenance designed to keep your ride reliable.',
    },

    {
      icon: 'pi pi-bolt',
      number: '04',
      title: 'Performance',
      description: 'Fine tuning and performance setup for serious riders.',
    },
  ];
}
