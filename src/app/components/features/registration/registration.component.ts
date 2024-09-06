import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User, UserRole } from '../../../model/user';

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
    console.log(this.registrationForm.value);
    let user: User = {
      id: "0",
      name: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      username: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      email: this.registrationForm.value.email,
      role: UserRole.GUEST,
      avgRate: 0,
      reservations: [],
      accommondations: [],
      notifications: [],
      rates: []
    };

    this.userService.register(user).subscribe(data=>{
          console.log(data);
          this.router.navigateByUrl("/search");
      });
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