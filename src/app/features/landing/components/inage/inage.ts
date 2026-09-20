import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

@Component({
  selector: 'app-inage',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './inage.html',
  styleUrl: './inage.scss',
})
export class Inage implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateParallax();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateParallax();
    }
  }

  private updateParallax(): void {
    const bike = document.querySelector<HTMLElement>('.hero-image');
    if (!bike) return;

    const scrollY = window.scrollY;
    const width = window.innerWidth;

    if (width <= 768) {
      bike.style.transform = `scaleX(1.4) scaleY(2.2) translateX(-25%) translateY(${10 + scrollY * 0.05}%)`;
    } else {
      bike.style.transform = `scaleX(1.5) scaleY(1.5) translateX(-30%) translateY(${10 + scrollY * 0.04}%)`;
    }
  }
}