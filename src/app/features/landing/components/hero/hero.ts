import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit {
  @ViewChild('heroImage')
  heroImage!: ElementRef<HTMLElement>;

  @ViewChild('heroFixedLayer')
  heroFixedLayer!: ElementRef<HTMLElement>;

  private ticking = false;

  ngAfterViewInit(): void {
    this.updateParallax();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.updateParallax();

        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  private updateParallax(): void {
    const scrollY = window.scrollY;

    /*
     * BACKGROUND
     *
     * Moves slowly while scrolling.
     */
    const backgroundY = scrollY * 0.18;

    /*
     * SECOND LAYER
     *
     * Almost fixed.
     */
    const fixedLayerY = scrollY * 0.04;

    this.heroImage.nativeElement.style.transform = `translate3d(0, ${backgroundY}px, 0)`;

    this.heroFixedLayer.nativeElement.style.transform = `translate3d(0, ${fixedLayerY}px, 0)`;
  }
}
