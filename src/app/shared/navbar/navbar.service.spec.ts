import { TestBed, inject } from '@angular/core/testing';

import { NavBarService } from './navbar.service';

describe('NavBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavBarService]
    });
  });

  it('should be created', inject([NavBarService], (service: NavBarService) => {
    expect(service).toBeTruthy();
  }));
});
