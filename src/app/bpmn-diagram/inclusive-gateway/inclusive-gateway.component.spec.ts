import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusiveGatewayComponent } from './inclusive-gateway.component';

describe('InclusiveGatewayComponent', () => {
  let component: InclusiveGatewayComponent;
  let fixture: ComponentFixture<InclusiveGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusiveGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusiveGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
