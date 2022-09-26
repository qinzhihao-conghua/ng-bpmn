import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBasedGatewayComponent } from './event-based-gateway.component';

describe('EventBasedGatewayComponent', () => {
  let component: EventBasedGatewayComponent;
  let fixture: ComponentFixture<EventBasedGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBasedGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBasedGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
