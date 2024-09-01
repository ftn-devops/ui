import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './service/user/user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [UserService, HttpClient, HttpHandler]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'booking-ui' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('booking-ui');
  });
});
