import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReservationDialogData } from '../../../model/reservationDialog';
import { AccommondationCardComponent } from '../../shared/accommondation-card/accommondation-card.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    CommonModule,
    AccommondationCardComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent {

  totalPrice:number = 0;
  constructor(
    public dialogRef: MatDialogRef<ReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReservationDialogData,
    private toastrService:ToastrService
  ) {

    if(data.availability.isPriceForPerson)
      this.totalPrice = data.availability.price * data.guestNumber;
    else
      this.totalPrice = data.availability.price * (data.endDate.getUTCDay() - data.startDate.getUTCDay())
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendReservationRequest(){
    //TODO: implement sending reservation request
    this.toastrService.success("Uspešno ste poslali zahtev za rezervaciju, sada možete pratiti njen status na tabu za rezervacije.")
    
  }

}
