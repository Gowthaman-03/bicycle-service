import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  number: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: ServiceItem[] = [
    {
      number: '01',
      icon: 'pi pi-wrench',
      title: 'General Bicycle Service',
      description: 'Essential tune-up and safety inspection for regular commuters and leisure riders.',
      features: [
        'Complete 24-point safety inspection',
        'Brake adjustment & pad alignment',
        'Gear indexing & chain lubrication',
        'Tyre inspection & pressure top-up',
      ],
    },
    {
      number: '02',
      icon: 'pi pi-cog',
      title: 'Premium Complete Service',
      description: 'Comprehensive deep service including drivetrain ultrasonic cleaning and wheel truing.',
      popular: true,
      features: [
        'Everything in General Service',
        'Drivetrain deep ultrasonic degrease',
        'Front & rear wheel precision truing',
        'Headset & bottom bracket adjustment',
      ],
    },
    {
      number: '03',
      icon: 'pi pi-bolt',
      title: 'Performance & Race Service',
      description: 'High-precision setup and race-ready optimization for road, gravel, and competition MTB.',
      features: [
        'Electronic shifting firmware & tuning',
        'Hydraulic disc brake bleed & bedding',
        'Torque-spec precision check on all bolts',
        'Tubeless sealant inspection & refresh',
      ],
    },
    {
      number: '04',
      icon: 'pi pi-sync',
      title: 'Suspension & Overhaul',
      description: 'Factory-level suspension damper servicing, bearing overhauls, and custom rebuilds.',
      features: [
        'Fork & rear shock lower-leg service',
        'Seal, wiper & high-grade oil replacement',
        'Full pivot bearing inspection & replacement',
        'Sag & rebound personalized calibration',
      ],
    },
  ];
}
