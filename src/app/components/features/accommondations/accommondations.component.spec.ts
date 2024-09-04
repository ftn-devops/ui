import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommondationsComponent } from './accommondations.component';
import { UserService } from '../../../service/user/user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

describe('AccommondationsComponent', () => {
  let component: AccommondationsComponent;
  let fixture: ComponentFixture<AccommondationsComponent>;

  const toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: any
    ) => {},
    error: (
      message?: string,
      title?: string,
      override?: any
    ) => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccommondationsComponent, BrowserAnimationsModule],
      providers: [UserService, HttpClient, HttpHandler, { provide: ToastrService, useValue: toastrService }, {
        provide: MatDialogRef,
        useValue: {}
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccommondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
