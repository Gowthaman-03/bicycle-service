import { Component } from '@angular/core';

interface Feature {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUs {
  features: Feature[] = [
    {
      number: '01',
      title: 'Experienced Mechanics',
      description:
        'Our technicians understand bicycles inside and out and treat every bike with care.',
    },
    {
      number: '02',
      title: 'Quality Components',
      description: 'We use reliable parts and professional tools to make sure every repair lasts.',
    },
    {
      number: '03',
      title: 'Transparent Service',
      description:
        'Clear service information and straightforward pricing. No unnecessary surprises.',
    },
    {
      number: '04',
      title: 'Fast Turnaround',
      description: 'We work efficiently so you can get your bicycle back and get riding again.',
    },
  ];
}
