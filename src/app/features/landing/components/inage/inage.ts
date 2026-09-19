import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-inage',
  imports: [],
  templateUrl: './inage.html',
  styleUrl: './inage.scss',
})
export class Inage {
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const bike = document.querySelector<HTMLElement>('.hero-image');

    if (!bike) {
      return;
    }

    const width = window.innerWidth;

    let speed: string;

    if (width <= 480) {
      // Mobile
      speed = `scaleX(1.5) scaleY(2.5) translateX(-30%) translateY(calc(10% + ${window.scrollY * 0.05}%))`;
    } else if (width <= 768) {
      // Tablet
      speed = `scaleX(1.5) scaleY(2.5) translateX(-30%) translateY(calc(10% + ${window.scrollY * 0.05}%))`;
    } else {
      // Desktop
      speed = `scaleX(1.5) scaleY(1.5) translateX(-30%) translateY(calc(10% + ${window.scrollY * 0.05}%))`;
    }

    const scrollY = window.scrollY;
    bike.style.transform = speed;
  }
}