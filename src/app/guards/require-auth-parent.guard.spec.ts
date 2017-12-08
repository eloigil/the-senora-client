import { TestBed, async, inject } from '@angular/core/testing';

import { RequireAuthParentGuard } from './require-auth-parent.guard';

describe('RequireAuthParentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAuthParentGuard]
    });
  });

  it('should ...', inject([RequireAuthParentGuard], (guard: RequireAuthParentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
