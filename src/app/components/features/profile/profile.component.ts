import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { NotificationType, User } from '../../../model/user';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user!: User;
  registrationForm: FormGroup = new FormGroup({});
  allNotificationTypes = NotificationType;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

    this.registrationForm
      .get('confirmPassword')
      ?.setValidators(this.matchingPasswords.bind(this));

    this.userService.loggedUser$.subscribe((data) => {
      this.user = data!;
      this.registrationForm.get('email')?.setValue(data?.email);
      this.registrationForm.get('firstName')?.setValue(data?.name);
      this.registrationForm.get('lastName')?.setValue(data?.lastName);
    });


  }

  togleNotification(checked:boolean,notificationType:NotificationType ){
    if(checked && !this.user.notifications.includes(notificationType)){
      this.user.notifications.push(notificationType);
    }else if(!checked && this.user.notifications.includes(notificationType)) {
      this.user.notifications = this.user.notifications.filter(x => x != notificationType);
    }
  }
  
  onSubmit() {
    console.log(this.registrationForm.value);
  }

  matchingPasswords(control: any) {
    if (this.registrationForm) {
      const password = this.registrationForm.get('password')?.value;
      const confirmPassword = control.value;

      if (password !== confirmPassword) {
        return { matchingPasswords: true };
      }
    }
    return null;
  }

  openLoginPage() {
    this.router.navigateByUrl('');
  }
}
