import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { GiveRateComponent } from '../give-rate/give-rate.component';
import { Accommondation } from '../../../model/accommondation';
import { UserService } from '../../../service/user/user.service';
import { User } from '../../../model/user';

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

  private userService = inject(UserService);
  private user : User | undefined;
  
  constructor(
    private reservationService: ReservationService,
    private toastr: ToastrService,
    public dialog: MatDialog,
  ) {
    this.userService.loggedUser$.subscribe(data=>{
      this.user = data;
    })
  }

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

  rateAccommodation(accommodation:Accommondation){
    const dialogRef = this.dialog.open(GiveRateComponent, {
      data: {
        reviewerId: this.user?.id,
        reviewerUsername: this.user?.name,
        reviewedId: accommodation.id,
        reviewedName: accommodation.name,
        grade: 0,
        date: new Date(),
      
        isForAccommodation: true
      },
    }).afterClosed().subscribe(()=>{
      
    });
  }
}
