import { TestBed, inject } from '@angular/core/testing';

import { PhotopullerService } from './photopuller.service';

describe('PhotopullerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotopullerService]
    });
  });

  it('should be created', inject([PhotopullerService], (service: PhotopullerService) => {
    expect(service).toBeTruthy();
  }));
});
