import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  isMenuOpen = false;

  menuItems = [
    { label: 'Home', route: '/home', icon: 'home' },
    { label: 'About', route: '/about', icon: 'info' },
    { label: 'Contact', route: '/contact', icon: 'contact_mail' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}