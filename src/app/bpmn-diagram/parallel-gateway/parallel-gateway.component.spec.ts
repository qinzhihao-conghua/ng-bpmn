import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelGatewayComponent } from './parallel-gateway.component';

describe('ParallelGatewayComponent', () => {
  let component: ParallelGatewayComponent;
  let fixture: ComponentFixture<ParallelGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
