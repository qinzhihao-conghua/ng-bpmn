import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStoreReferenceComponent } from './data-store-reference.component';

describe('DataStoreReferenceComponent', () => {
  let component: DataStoreReferenceComponent;
  let fixture: ComponentFixture<DataStoreReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStoreReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStoreReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
