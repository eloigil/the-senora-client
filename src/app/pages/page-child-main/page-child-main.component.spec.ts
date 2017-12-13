import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChildMainComponent } from './page-child-main.component';

describe('PageChildMainComponent', () => {
  let component: PageChildMainComponent;
  let fixture: ComponentFixture<PageChildMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChildMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChildMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
