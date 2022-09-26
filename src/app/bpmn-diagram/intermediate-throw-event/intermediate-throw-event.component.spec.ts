import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateThrowEventComponent } from './intermediate-throw-event.component';

describe('IntermediateThrowEventComponent', () => {
  let component: IntermediateThrowEventComponent;
  let fixture: ComponentFixture<IntermediateThrowEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediateThrowEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateThrowEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
