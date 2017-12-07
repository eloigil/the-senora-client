import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChildComponent } from './page-child.component';

describe('PageChildComponent', () => {
  let component: PageChildComponent;
  let fixture: ComponentFixture<PageChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
