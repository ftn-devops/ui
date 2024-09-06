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
import { ReservationService } from '../../../service/reservation/reservation.service';
import { Reservation, ReservationStatus } from '../../../model/reservation';
import { UserService } from '../../../service/user/user.service';
import { User } from '../../../model/user';
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
  user: User | undefined;
  constructor(
    public dialogRef: MatDialogRef<ReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReservationDialogData,
    private toastrService:ToastrService,
    private reservationService: ReservationService,
    private userService: UserService
  ) {

    if(data.availability.isPriceForPerson)
      this.totalPrice = data.availability.price * data.guestNumber;
    else
      this.totalPrice = data.availability.price * ((data.endDate.getUTCDay() - data.startDate.getUTCDay())+1)

    this.userService.loggedUser$.subscribe((data)=>{
      this.user = data;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendReservationRequest(){
    //TODO: implement sending reservation request
    if(this.user != undefined){

      let reservation: Reservation = {
        userId: this.user!.id,
        user: this.user!,
        accommodationId: this.data.availability.accommodation.id,
        accommodation: this.data.availability.accommodation,
        startDate: this.data.startDate,
        endDate: this.data.endDate,
        price: this.totalPrice,
        numberOfPersons: this.data.guestNumber,
        reservationStatus: ReservationStatus.PENDING
      }
      this.reservationService.sendReservation(reservation).subscribe(
        data =>{
          if(data){
            this.dialogRef.close();
            this.toastrService.success("Uspešno ste poslali zahtev za rezervaciju, sada možete pratiti njen status na tabu za rezervacije.")
          }else{
            this.toastrService.warning("Došlo je do greške, pokušajte ponovo");
          }
          
        }
      );
    }
    else{
      this.toastrService.error("Moraš biti ulogovan da bi pravio rezervacije.")
    }
    
  }

}
