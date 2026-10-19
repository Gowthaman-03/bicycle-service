import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../common/directives/scroll-reveal.directive';

@Component({
  selector: 'app-inage',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './inage.html',
  styleUrl: './inage.scss',
})
export class Inage {}