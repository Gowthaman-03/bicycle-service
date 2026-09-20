import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

@Component({
  selector: 'app-booking-cta',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './booking-cta.html',
  styleUrl: './booking-cta.scss',
})
export class BookingCta {}
