import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommondationCardComponent } from './accommondation-card.component';

describe('AccommondationCardComponent', () => {
  let component: AccommondationCardComponent;
  let fixture: ComponentFixture<AccommondationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccommondationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccommondationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
