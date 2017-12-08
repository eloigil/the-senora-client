import { TestBed, async, inject } from '@angular/core/testing';

import { RequireAuthChildGuard } from './require-auth-child.guard';

describe('RequireAuthChildGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAuthChildGuard]
    });
  });

  it('should ...', inject([RequireAuthChildGuard], (guard: RequireAuthChildGuard) => {
    expect(guard).toBeTruthy();
  }));
});
