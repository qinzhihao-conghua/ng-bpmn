import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataObjectReferenceComponent } from './data-object-reference.component';

describe('DataObjectReferenceComponent', () => {
  let component: DataObjectReferenceComponent;
  let fixture: ComponentFixture<DataObjectReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataObjectReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataObjectReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
