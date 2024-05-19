import { Component } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { User } from '../../../model/user';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  user?: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.loggedUser$.subscribe((data) => {
      this.user = data;
    });
  }

  search() {
    this.router.navigateByUrl('search');
  }
  reservations(){
    this.router.navigateByUrl('reservations');
  }
  accommondations(){
    this.router.navigateByUrl('accommondations');   
  }
  ratings(){
    this.router.navigateByUrl('ratings');
  }
  logout() {
    this.userService.setLoggedUser(undefined);
    this.router.navigateByUrl('');
  }

  profile() {
    this.router.navigateByUrl('profile');
  }
}
