import { TestBed } from '@angular/core/testing';

import { JavatechqserviceService } from './javatechqservice.service';

describe('JavatechqserviceService', () => {
  let service: JavatechqserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavatechqserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
