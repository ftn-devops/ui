import { TestBed } from '@angular/core/testing';

import { AccommondationService } from './accommondation.service';
import { HttpClientModule } from '@angular/common/http';

describe('AccommondationService', () => {
  let service: AccommondationService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(AccommondationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
