import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceFlowComponent } from './sequence-flow.component';

describe('SequenceFlowComponent', () => {
  let component: SequenceFlowComponent;
  let fixture: ComponentFixture<SequenceFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
