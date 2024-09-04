import { Component, Injector } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AccommondationService } from '../../../service/accommondation/accommondation.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Accommondation } from '../../../model/accommondation';
import { CommonModule } from '@angular/common';
import { AccommondationCardComponent } from '../../shared/accommondation-card/accommondation-card.component';
import { Availability } from '../../../model/availability';
import { MatDialog } from '@angular/material/dialog';
import { ReservationComponent } from '../reservation-request/reservation.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    AccommondationCardComponent,
    ReservationComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  availabilities: Availability[] = [];
  startDate = new Date();
  endDate = new Date();

  searchForm = new FormGroup({
    startDate : new FormControl(new Date()),
    endDate : new FormControl(new Date()),
    address: new FormControl(''),
    guestNumber: new FormControl(2),
  });

  constructor(
    private accommondationService: AccommondationService,
    public dialog: MatDialog,
    private injector: Injector
  ) {}

  search() {
    if (this.searchForm.valid) {
      this.accommondationService
        .search(
          this.searchForm.get('address')?.value!,
          this.searchForm.get('startDate')?.value!,
          this.searchForm.get('endDate')?.value!,
          this.searchForm.get('guestNumber')?.value!
        )
        .subscribe((data) => {
          this.availabilities = data;
        });
    }
  }

  reserveOffer(availability: Availability) {
    console.log(availability);
    let guestNumber = this.searchForm.get<string>('guestNumber')?.value;
    const dialogRef = this.dialog.open(ReservationComponent, {
      data: {
        availability: availability,
        startDate: this.startDate,
        endDate: this.endDate,
        guestNumber: guestNumber,
      },
      injector:this.injector
    });
  }
}
