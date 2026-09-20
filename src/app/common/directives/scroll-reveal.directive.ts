import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animationType: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'stagger' | '' = 'fade-up';
  @Input() delay: number = 0;
  @Input() threshold: number = 0.05;
  @Input() rootMargin: string = '0px 0px -30px 0px';

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const nativeEl = this.el.nativeElement;
    this.renderer.addClass(nativeEl, 'reveal-init');
    
    if (this.animationType) {
      this.renderer.addClass(nativeEl, `reveal-${this.animationType}`);
    }

    if (this.delay > 0) {
      this.renderer.setStyle(nativeEl, 'transition-delay', `${this.delay}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(nativeEl, 'is-revealed');
            this.observer?.unobserve(nativeEl);
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin,
      }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
