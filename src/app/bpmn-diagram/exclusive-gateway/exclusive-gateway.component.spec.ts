import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveGatewayComponent } from './exclusive-gateway.component';

describe('ExclusiveGatewayComponent', () => {
  let component: ExclusiveGatewayComponent;
  let fixture: ComponentFixture<ExclusiveGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusiveGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
