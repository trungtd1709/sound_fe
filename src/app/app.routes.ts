import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SoundDetailComponent } from './pages/sound-detail/sound-detail.component';

export const routes: Routes = [
    // Default route - redirects to home
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
  
    // Public routes
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home - My App'
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About Us - My App'
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact - My App'
    },
    {
      path: 'sound/:id',
      component: SoundDetailComponent,
      title: 'Product Details - My App',
      resolve: {
      }
    },
  ];
