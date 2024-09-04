import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {


  registrationForm: FormGroup = new FormGroup({});
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
  }

  onSubmit(){
      console.log(this.registrationForm.value)
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

  openLoginPage(){
      this.router.navigateByUrl("");
  }
}