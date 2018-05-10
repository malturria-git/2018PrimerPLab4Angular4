import { TestBed, inject } from '@angular/core/testing';

import { ServicioDbService } from './servicio-db.service';

describe('ServicioDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioDbService]
    });
  });

  it('should be created', inject([ServicioDbService], (service: ServicioDbService) => {
    expect(service).toBeTruthy();
  }));
});
