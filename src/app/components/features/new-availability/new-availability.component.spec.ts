import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAvailabilityComponent } from './new-availability.component';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('NewAvailabilityComponent', () => {
  let component: NewAvailabilityComponent;
  let fixture: ComponentFixture<NewAvailabilityComponent>;

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
      imports: [NewAvailabilityComponent, BrowserAnimationsModule, MatDialogModule],
      providers: [HttpClient, HttpHandler, { provide: ToastrService, useValue: toastrService }, {
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
