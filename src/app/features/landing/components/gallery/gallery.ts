import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

interface GalleryItem {
  image: string;
  alt: string;
  tag: string;
  title: string;
  subtitle: string;
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
      image: 'assets/images/suspension-lab.jpg',
      alt: 'Master technician servicing Fox suspension damper in clean workshop laboratory',
      tag: 'Suspension Lab',
      title: 'Damper Vacuum Bleed & Rebuild',
      subtitle: '50h/200h Fox Factory & RockShox precision overhaul',
    },
    {
      image: 'assets/images/workshop-mechanic.jpg',
      alt: 'Torque calibration on downhill mountain bike clamped on Park Tool stand',
      tag: 'Race Workshop',
      title: 'Downhill Rig Precision Calibration',
      subtitle: 'Digital 0.1 Nm torque verification on frame pivots',
    },
    {
      image: 'assets/images/ultrasonic-drivetrain.jpg',
      alt: 'Ultrasonic solvent cleaning bath and gleaming 12-speed cassette',
      tag: 'Ultrasonic Lab',
      title: 'Ultrasonic Drivetrain Deep Clean',
      subtitle: 'Zero-grime solvent degreasing and micro-alignment',
    },
    {
      image: 'assets/images/hero-dh-bike-3d.jpg',
      alt: 'Professional carbon downhill race machine studio render',
      tag: 'Championship Rig',
      title: 'Pro Downhill Race Build',
      subtitle: 'V10 carbon frame with custom-tuned coil damper',
    },
    {
      image: 'assets/images/about-bike.jpeg',
      alt: 'Road and gravel bicycle cockpit setup on workshop stand',
      tag: 'Precision Assembly',
      title: 'Cockpit & Hydraulic Alignment',
      subtitle: 'Bubble-free mineral oil bleed & caliper centering',
    },
    {
      image: 'assets/images/hero-bike1.jpeg',
      alt: 'Competitive mountain bike testing on high-speed downhill trail',
      tag: 'Trail Proven',
      title: 'Dynamic High-Speed Shakedown',
      subtitle: 'Real-world validation at 80 km/h race speeds',
    },
  ];
}
