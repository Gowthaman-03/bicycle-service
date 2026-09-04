import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking-cta',
  standalone: true,

  imports: [RouterLink],

  templateUrl: './booking-cta.html',
  styleUrl: './booking-cta.scss',
})
export class BookingCta {}
