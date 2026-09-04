import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      quote: 'The team completely transformed my bike. It rides smoother than it has in years.',
      name: 'Arun Kumar',
      role: 'Weekend Rider',
    },

    {
      quote: 'Fast service, great communication and genuinely knowledgeable mechanics.',
      name: 'Rahul S.',
      role: 'Daily Commuter',
    },

    {
      quote: 'I finally found a workshop I trust with my bike. Highly recommended.',
      name: 'Vikram R.',
      role: 'Cycling Enthusiast',
    },
  ];
}
