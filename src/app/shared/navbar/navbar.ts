import { Drawer } from 'primeng/drawer';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [RouterLink, Drawer, Button],

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

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }

  closeMenu() {
    this.mobileMenuVisible = false;
  }
}
