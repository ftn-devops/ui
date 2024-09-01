import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationComponent } from './reservation.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  const toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
    error: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationComponent, BrowserAnimationsModule, MatDialogModule],
      providers: [HttpClient, HttpHandler, { provide: ToastrService, useValue: toastrService }, {
        provide: MatDialogRef,
        useValue: {}
      }, { provide: MAT_DIALOG_DATA, useValue: {
        availability: {
          accommondationId: '1',
          accommondation: {
            id: "1",
            hostId: 'test',
            name: 'test',
            address: 'test',
            maxGuestNumber: 1,
            minGuestNumber: 1,
            images: [],
            rates: [],
            avgRate: 1,
            availabilities: [],
            description: 'test'
          },
          startDate: new Date,
          endDate: new Date,
          price: 1,
          isPriceForPerson: true,
          autoConfirm: false
        },
        startDate: new Date(),
        endDate: new Date(),
        guestNumber: 1
      } },]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    component.totalPrice = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
