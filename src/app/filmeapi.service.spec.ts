import { TestBed } from '@angular/core/testing';

import { FilmeapiService } from './filmeapi.service';

describe('FilmeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmeapiService = TestBed.get(FilmeapiService);
    expect(service).toBeTruthy();
  });
});
