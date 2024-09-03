import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AccommondationService } from '../../../service/accommondation/accommondation.service';
import { UserService } from '../../../service/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../model/user';
import { Accommondation } from '../../../model/accommondation';

@Component({
  selector: 'app-new-accommodation',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './new-accommodation.component.html',
  styleUrl: './new-accommodation.component.scss',
})
export class NewAccommodationComponent {
  newAccommondationForm;

  user!: User;

  constructor(
    public dialogRef: MatDialogRef<NewAccommodationComponent>,
    private fb: FormBuilder,
    private accommodationService: AccommondationService,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
    this.userService.loggedUser$.subscribe((data) => {
      if (data != undefined) this.user = data;
    });

    this.newAccommondationForm = this.fb.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      minGuestNumber: new FormControl(1, [
        Validators.required,
        Validators.min(1),
      ]),
      maxGuestNumber: new FormControl(1, [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }

  onNoClick() {}
  createNewAccommondation() {
      let newAccommodation:Accommondation ={
        id: '',
        hostId: this.user.id,
        name: this.newAccommondationForm.get("name")!.value!,
        address: this.newAccommondationForm.get("address")!.value!,
        description: this.newAccommondationForm.get("description")!.value!,
        minGuestNumber: this.newAccommondationForm.get("minGuestNumber")!.value!,
        maxGuestNumber: this.newAccommondationForm.get("maxGuestNumber")!.value!,
        images: [],
        avgRate: 0,
        availabilities: [],
        rates: []
      }

      this.accommodationService.addNewAccomodation(newAccommodation).subscribe(
        data =>{
          this.toastrService.success("Uspešno si dodao novi apartman");
          this.dialogRef.close();
        }
      )
  }
}
