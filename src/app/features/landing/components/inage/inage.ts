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

    const scrollY = window.scrollY;
    bike.style.transform = `scaleX(1.5) scaleY(1.5) translateX(-30%) translateY(calc(10% + ${window.scrollY * 0.07}%))`;
  }
}
