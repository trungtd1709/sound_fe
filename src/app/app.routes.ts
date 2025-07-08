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
    
    // // Protected user routes with nested routing
    // {
    //   path: 'user',
    //   component: UserLayoutComponent,
    //   canActivate: [AuthGuard],
    //   children: [
    //     {
    //       path: '',
    //       redirectTo: 'profile',
    //       pathMatch: 'full'
    //     },
    //     {
    //       path: 'profile',
    //       component: UserProfileComponent,
    //       title: 'My Profile - My App'
    //     },
    //     {
    //       path: 'settings',
    //       component: UserSettingsComponent,
    //       title: 'Settings - My App',
    //       canDeactivate: [ConfirmLeaveGuard]
    //     }
    //   ]
    // },
  
    // // Admin routes with lazy loading
    // {
    //   path: 'admin',
    //   loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    //   canActivate: [AuthGuard, RoleGuard],
    //   data: { roles: ['admin'] }
    // },
  
    // // Dashboard with lazy loaded standalone component
    // {
    //   path: 'dashboard',
    //   loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    //   canActivate: [AuthGuard],
    //   title: 'Dashboard - My App'
    // },
  
    // // Wildcard route - must be last
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    //   title: 'Page Not Found - My App'
    // }
  ];
