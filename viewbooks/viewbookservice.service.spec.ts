import { TestBed } from '@angular/core/testing';

import { ViewbookserviceService } from './viewbookservice.service';

describe('ViewbookserviceService', () => {
  let service: ViewbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
