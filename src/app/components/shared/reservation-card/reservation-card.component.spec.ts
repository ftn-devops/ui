import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCardComponent } from './reservation-card.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { UserRole } from '../../../model/user';
import { ReservationStatus } from '../../../model/reservation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReservationCardComponent', () => {
  let component: ReservationCardComponent;
  let fixture: ComponentFixture<ReservationCardComponent>;

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
      imports: [ReservationCardComponent, BrowserAnimationsModule],
      providers: [HttpClient, HttpHandler, { provide: ToastrService, useValue: toastrService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationCardComponent);
    component = fixture.componentInstance;
    component.reservation = {
      userId: "123",
      user: {
        id: "123",
        name: "John",
        lastName: "Doe",
        username: "johndoe",
        password: "password",
        email: "johndoe@mail.com",
        role: UserRole.GUEST,
        avgRate: 0,
        reservations: [],
        accommondations: [],
        notifications: [],
        rates: []
      },
      accommodationId: "123",
      accommodation: {
        id: '123',
        hostId: '456',
        name: 'Sample Accommodation',
        address: '123 Main Street',
        description: 'This is a sample accommodation',
        minGuestNumber: 1,
        maxGuestNumber: 5,
        images: ['image1.jpg', 'image2.jpg'],
        avgRate: 4.5,
        availabilities: [],
        rates: [],
        host: undefined
      },
      startDate: new Date(),
      endDate: new Date(),
      price: 100,
      numberOfPersons: 2,
      reservationStatus: ReservationStatus.PENDING,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
