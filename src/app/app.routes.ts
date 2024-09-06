import { Routes } from '@angular/router';
import { LoginComponent } from './components/features/login/login.component';
import { RegistrationComponent } from './components/features/registration/registration.component';
import { SearchComponent } from './components/features/search/search.component';
import { ProfileComponent } from './components/features/profile/profile.component';
import { ReservationsComponent } from './components/features/reservations/reservations.component';
import { AccommondationsComponent } from './components/features/accommondations/accommondations.component';
import { RatingsComponent } from './components/features/ratings/ratings.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'accommondations', component: AccommondationsComponent },
  { path: 'ratings', component: RatingsComponent },
];
