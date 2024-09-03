import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCardComponent } from './rate-card.component';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RateCardComponent', () => {
  let component: RateCardComponent;
  let fixture: ComponentFixture<RateCardComponent>;

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
      imports: [RateCardComponent, BrowserAnimationsModule],
      providers: [HttpClient, HttpHandler, { provide: ToastrService, useValue: toastrService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RateCardComponent);
    component = fixture.componentInstance;
    component.rate = {
      reviewerId: "123",
      reviewerUsername: "johndoe",
      reviewedId: "456",
      reviewedName: "Sample Accommodation",
      grade: 5,
      date: new Date()
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
