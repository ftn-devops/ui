import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommondationCardComponent } from './accommondation-card.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

describe('AccommondationCardComponent', () => {
  let component: AccommondationCardComponent;
  let fixture: ComponentFixture<AccommondationCardComponent>;

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
      imports: [AccommondationCardComponent, BrowserAnimationsModule],
      providers: [HttpClient, HttpHandler, { provide: ToastrService, useValue: toastrService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccommondationCardComponent);
    component = fixture.componentInstance;
    component.accommondation = {
      id: '123',
      hostId: '456',
      name: 'Sample Accommodation',
      address: '123 Main Street',
      description: 'This is a sample accommodation',
      minGuestNumber: 1,
      maxGuestNumber: 5,
      images: [],
      avgRate: 0,
      availabilities: [],
      rates: [],
    };
    component.availability = {
      accommodationId: '123',
      accommodation: {
        id: '123',
        hostId: '456',
        name: 'Sample Accommodation',
        address: '123 Main Street',
        description: 'This is a sample accommodation',
        minGuestNumber: 1,
        maxGuestNumber: 5,
        images: [],
        avgRate: 0,
        availabilities: [],
        rates: [],
      },
      startDate: new Date(),
      endDate: new Date(),
      price: 100,
      isPriceForPerson: false,
      autoConfirm: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
