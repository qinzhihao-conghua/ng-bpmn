import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRuleTaskComponent } from './business-rule-task.component';

describe('BusinessRuleTaskComponent', () => {
  let component: BusinessRuleTaskComponent;
  let fixture: ComponentFixture<BusinessRuleTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessRuleTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRuleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
