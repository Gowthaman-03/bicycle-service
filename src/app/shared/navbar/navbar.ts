import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [RouterLink, DrawerModule, ButtonModule],

  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 600;
  }
  mobileMenuVisible = false;

  closeMenu() {
    this.mobileMenuVisible = false;
  }
}
