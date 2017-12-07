import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListenComponent } from './page-listen.component';

describe('PageListenComponent', () => {
  let component: PageListenComponent;
  let fixture: ComponentFixture<PageListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
