import { Component } from '@angular/core';

interface TrustBenefit {
  number: string;
  icon: string;
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
  benefits: TrustBenefit[] = [
    {
      number: '01',
      icon: 'pi pi-user',
      title: 'Professional Technicians',
      description:
        'Mechanics with hands-on expertise across modern disc brakes, electronic shifting, and complex suspension architectures.',
    },
    {
      number: '02',
      icon: 'pi pi-verified',
      title: 'Quality Service & Parts',
      description:
        'We strictly use original factory components, high-load synthetic greases, and industry-standard precision tools.',
    },
    {
      number: '03',
      icon: 'pi pi-eye',
      title: 'Transparent Process',
      description:
        'Upfront price estimates with itemized breakdowns. We only perform and charge for repairs you have approved.',
    },
    {
      number: '04',
      icon: 'pi pi-clock',
      title: 'Reliable Turnaround',
      description:
        'Fast scheduling and realistic completion deadlines so you can plan your rides and commute without delays.',
    },
  ];
}
