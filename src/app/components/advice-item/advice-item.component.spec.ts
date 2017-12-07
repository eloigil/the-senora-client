import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceItemComponent } from './advice-item.component';

describe('AdviceItemComponent', () => {
  let component: AdviceItemComponent;
  let fixture: ComponentFixture<AdviceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
