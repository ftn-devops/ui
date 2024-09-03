import { Component, Input } from '@angular/core';
import { Reservation, ReservationStatus } from '../../../model/reservation';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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

  cancelReservation(){

  }

  confirmReservation(){
    
  }
}
