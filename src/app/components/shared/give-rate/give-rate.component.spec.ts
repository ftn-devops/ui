import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveRateComponent } from './give-rate.component';

describe('GiveRateComponent', () => {
  let component: GiveRateComponent;
  let fixture: ComponentFixture<GiveRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiveRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
