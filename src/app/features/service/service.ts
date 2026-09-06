import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
  category: string;
  featured?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service.html',
  styleUrl: './service.scss',
})
export class ServicesComponent {
  categories = [
    'All Services',
    'Maintenance',
    'Performance',
    'Repair',
    'Inspection',
    'Special Services',
  ];

  selectedCategory = 'All Services';

  services: Service[] = [
    // =========================
    // MAINTENANCE
    // =========================

    {
      number: '01',
      icon: 'pi pi-wrench',
      title: 'General Bicycle Service',
      description:
        'Complete inspection, brake adjustment, gear indexing, drivetrain cleaning and safety check.',
      category: 'Maintenance',
      featured: true,
    },

    {
      number: '02',
      icon: 'pi pi-cog',
      title: 'Premium Complete Service',
      description:
        'Deep professional servicing with drivetrain cleaning, wheel truing, lubrication and digital service report.',
      category: 'Maintenance',
      featured: true,
    },

    {
      number: '03',
      icon: 'pi pi-sync',
      title: 'Drivetrain Service',
      description:
        'Chain, cassette, crankset, derailleur and electronic shifting maintenance and repair.',
      category: 'Maintenance',
    },

    {
      number: '04',
      icon: 'pi pi-circle',
      title: 'Brake Service',
      description:
        'Mechanical and hydraulic brake adjustment, pad replacement, bleeding and performance testing.',
      category: 'Maintenance',
    },

    {
      number: '05',
      icon: 'pi pi-refresh',
      title: 'Bicycle Cleaning & Detailing',
      description:
        'Professional washing, drivetrain degreasing, deep cleaning and premium bicycle detailing.',
      category: 'Maintenance',
    },

    // =========================
    // PERFORMANCE
    // =========================

    {
      number: '06',
      icon: 'pi pi-bolt',
      title: 'Performance & Race Service',
      description:
        'Professional race preparation, suspension setup, drivetrain optimisation and performance inspection.',
      category: 'Performance',
      featured: true,
    },

    {
      number: '07',
      icon: 'pi pi-sliders-h',
      title: 'Suspension Service',
      description:
        'Fork and rear shock inspection, cleaning, setup and professional suspension servicing.',
      category: 'Performance',
      featured: true,
    },

    {
      number: '08',
      icon: 'pi pi-chart-line',
      title: 'Professional 3D Bike Fitting',
      description:
        'Advanced rider assessment, motion analysis and professional bicycle position adjustment.',
      category: 'Performance',
    },

    {
      number: '09',
      icon: 'pi pi-compass',
      title: 'Cleat Fitting',
      description:
        'Professional cleat positioning and adjustment for improved comfort and pedalling efficiency.',
      category: 'Performance',
    },

    {
      number: '10',
      icon: 'pi pi-trophy',
      title: 'Race Preparation Service',
      description: 'Complete pre-race inspection, setup and race-ready safety verification.',
      category: 'Performance',
    },

    // =========================
    // REPAIR
    // =========================

    {
      number: '11',
      icon: 'pi pi-circle',
      title: 'Wheel & Hub Service',
      description:
        'Wheel truing, spoke replacement, hub servicing, bearing replacement and custom wheel work.',
      category: 'Repair',
    },

    {
      number: '12',
      icon: 'pi pi-circle-fill',
      title: 'Tyre & Tubeless Service',
      description:
        'Puncture repair, tyre replacement, tubeless setup, sealant replacement and pressure optimisation.',
      category: 'Repair',
    },

    {
      number: '13',
      icon: 'pi pi-cog',
      title: 'Bearing Service',
      description:
        'Headset, bottom bracket, hub, pedal and suspension bearing inspection and replacement.',
      category: 'Repair',
    },

    {
      number: '14',
      icon: 'pi pi-plus-circle',
      title: 'Component Installation',
      description:
        'Professional installation of drivetrains, brakes, wheels, suspension and bicycle components.',
      category: 'Repair',
    },

    {
      number: '15',
      icon: 'pi pi-bolt',
      title: 'E-Bike Service',
      description: 'Mechanical servicing and electrical diagnostics for supported e-bike systems.',
      category: 'Repair',
    },

    // =========================
    // INSPECTION
    // =========================

    {
      number: '16',
      icon: 'pi pi-clipboard',
      title: 'Bicycle Inspection & Health Report',
      description: 'Complete bicycle condition inspection with a detailed digital health report.',
      category: 'Inspection',
    },

    {
      number: '17',
      icon: 'pi pi-search',
      title: 'Pre-Owned Bicycle Inspection',
      description:
        'Professional inspection of used bicycles before purchase, including components and condition.',
      category: 'Inspection',
    },

    {
      number: '18',
      icon: 'pi pi-eye',
      title: 'Advanced Diagnostic Services',
      description:
        'Advanced inspection for bearings, wheels, brakes, suspension and electronic systems.',
      category: 'Inspection',
    },

    // =========================
    // SPECIAL SERVICES
    // =========================

    {
      number: '19',
      icon: 'pi pi-box',
      title: 'Bike Assembly & New Bike Setup',
      description:
        'Professional assembly, safety checks, torque verification and complete bicycle setup.',
      category: 'Special Services',
    },

    {
      number: '20',
      icon: 'pi pi-map-marker',
      title: 'Emergency & Breakdown Service',
      description:
        'Doorstep assistance and emergency repair for tyre, chain, gear, brake and wheel problems.',
      category: 'Special Services',
    },
  ];

  get filteredServices(): Service[] {
    if (this.selectedCategory === 'All Services') {
      return this.services;
    }

    return this.services.filter((service) => service.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
