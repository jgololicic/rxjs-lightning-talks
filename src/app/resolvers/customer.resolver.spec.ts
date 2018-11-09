import { TestBed, inject } from '@angular/core/testing';

import { CustomerResolver } from './customer-resolver.service';

describe('CustomerResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerResolver]
    });
  });

  it('should be created', inject([CustomerResolver], (service: CustomerResolver) => {
    expect(service).toBeTruthy();
  }));
});
