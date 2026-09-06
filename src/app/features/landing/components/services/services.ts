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
      title: 'General Bicycle Service',
      description:
        'Complete inspection, brake adjustment, gear tuning and drivetrain maintenance for everyday riders.',
    },

    {
      icon: 'pi pi-cog',
      number: '02',
      title: 'Premium Complete Service',
      description:
        'A deep professional service including drivetrain cleaning, wheel truing, lubrication and a full inspection.',
    },

    {
      icon: 'pi pi-bolt',
      number: '03',
      title: 'Performance & Race Service',
      description: 'Race-focused setup and inspection for MTB, road and performance bicycles.',
    },

    {
      icon: 'pi pi-sync',
      number: '04',
      title: 'Suspension Service',
      description:
        'Professional suspension inspection, setup and maintenance for forks and rear shocks.',
    },
  ];
}
