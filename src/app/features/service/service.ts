import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES_PROVIDED, ServiceItem, ServiceCategory } from '../../../service-center-data';

export { ServicesComponent as Service };
export { ServicesComponent as ServiceComponent };

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service.html',
  styleUrl: './service.scss',
})
export class ServicesComponent {
  services: ServiceItem[] = SERVICES_PROVIDED;

  categories: string[] = [
    'All Services',
    'Maintenance',
    'Performance',
    'Repair',
    'Inspection',
    'Special Services',
  ];

  selectedCategory = 'All Services';

  get featuredServices(): ServiceItem[] {
    return this.services.filter((s) => s.featured);
  }

  get filteredServices(): ServiceItem[] {
    if (this.selectedCategory === 'All Services') {
      return this.services;
    }
    return this.services.filter((service) => service.category === this.selectedCategory);
  }

  getCategoryCount(category: string): number {
    if (category === 'All Services') {
      return this.services.length;
    }
    return this.services.filter((s) => s.category === category).length;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
