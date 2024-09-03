import { Component, Inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { Accommondation } from '../../../model/accommondation';
import { AccommondationCardComponent } from '../../shared/accommondation-card/accommondation-card.component';
import { Availability } from '../../../model/availability';
import { AccommondationService } from '../../../service/accommondation/accommondation.service';
import { ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-new-availability',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    AccommondationCardComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './new-availability.component.html',
  styleUrl: './new-availability.component.scss',
})
export class NewAvailabilityComponent {
  accommodation: Accommondation;

  newAvailabilityForm;
  startDate = new Date();
  endDate = new Date();
  constructor(
    public dialogRef: MatDialogRef<NewAvailabilityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Accommondation,
    private fb: FormBuilder,
    private accommondationService: AccommondationService,
    private toastrService: ToastrService,
  ) {

    console.log(this.data);
    this.accommodation= data;
    console.log(this.accommodation);
    this.newAvailabilityForm = this.fb.group({
      price: new FormControl(100, Validators.required),
      isPriceForPerson: new FormControl(false, Validators.required),
      autoConfirm: new FormControl(false, Validators.required),
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }
  createNewAvailability() {
    let newAvailability: Availability = {
      accommondationId: this.accommodation.id,
      accommondation: this.accommodation,
      startDate: this.startDate,
      endDate: this.endDate,
      price: this.newAvailabilityForm.get('price')!.value!,
      isPriceForPerson:
        this.newAvailabilityForm.get('isPriceForPerson')!.value!,
      autoConfirm: this.newAvailabilityForm.get('autoConfirm')!.value!,
    };

    this.accommondationService
      .addNewAvailability(newAvailability)
      .subscribe((data) => {
        this.toastrService.success('Uspešno dodata dostupnost');
        this.dialogRef.close();
      });
  }
}
