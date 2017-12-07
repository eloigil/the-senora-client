import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdviceNewComponent } from './page-advice-new.component';

describe('PageAdviceNewComponent', () => {
  let component: PageAdviceNewComponent;
  let fixture: ComponentFixture<PageAdviceNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdviceNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdviceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
