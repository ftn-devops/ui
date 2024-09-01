import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { User } from '../../../model/user';
import { ToastrService } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.userService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe(data => {
        console.log(data);
        // this.toastrService.success(data.username);
        this.userService.setLoggedUser(data);
        this.router.navigateByUrl('/search');
      });
  }
  openRegistrationPage() {
    this.router.navigateByUrl('/signup');
  }
}
