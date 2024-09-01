import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor } from './loader.interceptor';
import { ToastrService } from 'ngx-toastr';

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

describe('LoaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderInterceptor, { provide: ToastrService, useValue: toastrService }
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderInterceptor = TestBed.inject(LoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
