import { TestBed } from '@angular/core/testing';

import { AuthorisationService } from './authorisation.service';

describe('AuditService', () => {
  let service: AuthorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
