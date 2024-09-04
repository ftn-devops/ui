import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../service/reservation/reservation.service';
import { Reservation } from '../../../model/reservation';
import { UserService } from '../../../service/user/user.service';
import { ReservationCardComponent } from '../../shared/reservation-card/reservation-card.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [ReservationCardComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent {
  reservations: Reservation[] = [];

  userId: string = "";

  constructor(
    private reservationService: ReservationService,
    private userService: UserService
  ) {
    this.userService.loggedUser$.subscribe((data) => {
      if(data != undefined){
        this.userId = data!.id;
      }
      this.updateReservations(data?.id!);
    });
  }

  updateReservations(userId: string): void {
    this.reservationService.getReservations(userId).subscribe((data) => {
      this.reservations = data;
    });
  }
}
