import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexGatewayComponent } from './complex-gateway.component';

describe('ComplexGatewayComponent', () => {
  let component: ComplexGatewayComponent;
  let fixture: ComponentFixture<ComplexGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
