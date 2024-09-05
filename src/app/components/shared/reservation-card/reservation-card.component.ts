import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reservation, ReservationStatus } from '../../../model/reservation';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../../../service/reservation/reservation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,CommonModule
  ],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.scss',
})
export class ReservationCardComponent {

  reservationsStatuses = ReservationStatus;
  @Input() reservation!: Reservation;
  @Output() actionTriger: EventEmitter<any> = new EventEmitter<any>(); 
  
  constructor(
    private reservationService: ReservationService,
    private toastr: ToastrService
  ) {}

  cancelReservation(){
    this.reservationService.cancelReservation(this.reservation).subscribe(
      data=>{
        if(data){

          this.toastr.success("Uspešno ste otkazali rezervaciju");
          this.actionTriger.emit();
        }
        else{
          this.toastr.warning("Došlo je do neke greške prilikom otkazivanja rezervacije, pokušajte ponovo.");  
        }
      }
    );
  }

  confirmReservation(){
    this.reservationService.confirmReservation(this.reservation).subscribe(
      data=>{
        if(data){

          this.toastr.success("Uspešno ste potvrdili rezervaciju");
          this.actionTriger.emit();
        }
        else{
          this.toastr.warning("Došlo je do neke greške prilikom potvrde rezervacije, pokušajte ponovo.");  
        }
      }
    );
  }

  rateHost(){

  }

  rateAccommodation(){

  }
}
