import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

interface GalleryItem {
  image: string;
  alt: string;
  tag: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  items: GalleryItem[] = [
    {
      image: 'assets/images/about-bike.jpeg',
      alt: 'Mechanic performing precision drivetrain service',
      tag: 'Workshop',
      title: 'Precision Drivetrain Tuning',
    },
    {
      image: 'assets/images/hero-bike1.jpeg',
      alt: 'Mountain bike suspension setup and testing',
      tag: 'Performance',
      title: 'Suspension & Damper Service',
    },
    {
      image: 'assets/images/Bikes.jpg',
      alt: 'Bicycle fleet safety inspection lineup',
      tag: 'Inspection',
      title: 'Complete Safety Inspection',
    },
    {
      image: 'assets/images/hero-bike-bg.jpeg',
      alt: 'Road bicycle race tune and calibration',
      tag: 'Road / Race',
      title: 'Race-Ready Road Setup',
    },
    {
      image: 'assets/images/about-bike.jpeg',
      alt: 'Custom component overhaul and wheel truing',
      tag: 'Assembly',
      title: 'Precision Component Assembly',
    },
    {
      image: 'assets/images/Bikes.jpg',
      alt: 'Bicycle road testing after complete overhaul',
      tag: 'Road Test',
      title: 'Dynamic Ride Testing',
    },
  ];
}
