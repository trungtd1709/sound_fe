import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }

  navigateAbout() {
    this.router.navigate(['/about']);
  }

  navigateSoundDetail(id: string) {
    this.router.navigate([`/sound/${id}`]);
  }

  goBack() {
    window.history.back();
  }
}
