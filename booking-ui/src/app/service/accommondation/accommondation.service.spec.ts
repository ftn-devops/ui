import { TestBed } from '@angular/core/testing';

import { AccommondationService } from './accommondation.service';

describe('AccommondationService', () => {
  let service: AccommondationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccommondationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
