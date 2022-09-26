import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveTaskComponent } from './receive-task.component';

describe('ReceiveTaskComponent', () => {
  let component: ReceiveTaskComponent;
  let fixture: ComponentFixture<ReceiveTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
