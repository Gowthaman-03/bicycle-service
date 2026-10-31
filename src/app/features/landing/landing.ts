import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { About } from './components/about/about';
import { WhyUs } from './components/why-us/why-us';
import { Gallery } from './components/gallery/gallery';
import { BookingCta } from './components/booking-cta/booking-cta';
import { Inage } from './components/inage/inage';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    Hero,
    Services,
    HowItWorks,
    About,
    WhyUs,
    Gallery,
    BookingCta,
    Inage
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing { }
