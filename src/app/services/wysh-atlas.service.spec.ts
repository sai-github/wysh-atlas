import { TestBed } from '@angular/core/testing';

import { WyshAtlasService } from './wysh-atlas.service';

describe('WyshAtlasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WyshAtlasService = TestBed.get(WyshAtlasService);
    expect(service).toBeTruthy();
  });
});
