import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccommodationComponent } from './new-accommodation.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

describe('NewAccommodationComponent', () => {
  let component: NewAccommodationComponent;
  let fixture: ComponentFixture<NewAccommodationComponent>;

  const toastrService = {
    success: (
      message?: string,
      title?: string,
    ) => {},
    error: (
      message?: string,
      title?: string,
    ) => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAccommodationComponent, BrowserAnimationsModule, MatDialogModule],
      providers: [HttpClient, HttpHandler, { provide: ToastrService, useValue: toastrService }, {
        provide: MatDialogRef,
        useValue: {}
      },]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
