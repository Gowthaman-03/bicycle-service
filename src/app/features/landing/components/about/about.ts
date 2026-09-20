import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
