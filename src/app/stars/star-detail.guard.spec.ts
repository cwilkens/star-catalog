import { TestBed, async, inject } from '@angular/core/testing';

import { StarDetailGuard } from './star-detail.guard';

describe('StarDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarDetailGuard]
    });
  });

  it('should ...', inject([StarDetailGuard], (guard: StarDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
