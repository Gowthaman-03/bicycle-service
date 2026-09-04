import { Component } from '@angular/core';

import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { WhyUs } from './components/why-us/why-us';
import { Gallery } from './components/gallery/gallery';
import { Testimonials } from './components/testimonials/testimonials';
import { BookingCta } from './components/booking-cta/booking-cta';
import { Inage } from './components/inage/inage';

@Component({
  selector: 'app-landing',
  standalone: true,

  imports: [Navbar, Hero, About, Services, WhyUs, Gallery, Testimonials, BookingCta, Footer, Inage],

  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {}
