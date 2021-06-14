import { TestBed } from '@angular/core/testing';

import { VoiturecService } from './voiturec.service';

describe('VoiturecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoiturecService = TestBed.get(VoiturecService);
    expect(service).toBeTruthy();
  });
});
