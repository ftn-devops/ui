import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingComponent } from './star-rating.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

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
      imports: [StarRatingComponent],
      providers: [HttpClient, HttpHandler, { provide: ToastrService, useValue: toastrService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
